// Andrea Mingolla: comportamento comune delle pagine
(function () {
  document.documentElement.classList.add("js");

  // Link prenotazione call di coaching. Sostituire con il link reale (Calendly, Google Calendar...).
  var BOOKING_URL = "https://calendly.com/INSERIRE-LINK";
  // Finché il link non c'è, i pulsanti "Prenota" portano al modulo coaching.
  if (BOOKING_URL.indexOf("INSERIRE") === -1) {
    document.querySelectorAll("[data-booking]").forEach(function (a) { a.href = BOOKING_URL; });
  } else {
    document.querySelectorAll("[data-booking]").forEach(function (a) { a.href = "contatti.html?servizio=coaching#richiesta"; });
  }

  // Quote: la linea di quota si traccia quando entra in vista
  var traces = document.querySelectorAll(".trace");
  if ("IntersectionObserver" in window) {
    var tio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("on"); tio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    traces.forEach(function (t) { tio.observe(t); });
  } else { traces.forEach(function (t) { t.classList.add("on"); }); }

  // Menu mobile
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Comparsa sezioni: visibili di default, animate solo quando il browser lo supporta
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove("pending"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pending"); io.observe(el); }
    });
  }

  // Modulo di richiesta con domande diverse per servizio
  document.querySelectorAll("form.form").forEach(function (form) {
    var radios = form.querySelectorAll('input[name="servizio"]');
    var groups = form.querySelectorAll("[data-service]");
    var submit = form.querySelector('button[type="submit"]');
    var labels = { agevolata: "Richiedi la consulenza", direzionale: "Richiedi l'analisi direzionale", coaching: "Richiedi la call gratuita" };

    function current() {
      var c = form.querySelector('input[name="servizio"]:checked');
      return c ? c.value : "agevolata";
    }
    function sync() {
      var s = current();
      groups.forEach(function (g) {
        var on = g.getAttribute("data-service") === s;
        g.hidden = !on;
        g.querySelectorAll("input, select, textarea").forEach(function (i) { i.disabled = !on; });
      });
      if (submit) submit.querySelector("span").textContent = labels[s];
    }
    var q = new URLSearchParams(location.search).get("servizio");
    if (q) { var r = form.querySelector('input[name="servizio"][value="' + q + '"]'); if (r) r.checked = true; }
    radios.forEach(function (r) { r.addEventListener("change", sync); });
    sync();

    function check(field) {
      var input = field.querySelector("input, select, textarea");
      if (!input || input.disabled) return true;
      var ok = input.type === "checkbox" ? input.checked : input.checkValidity();
      field.classList.toggle("invalid", !ok);
      input.setAttribute("aria-invalid", ok ? "false" : "true");
      return ok;
    }
    form.querySelectorAll(".field, .check-field").forEach(function (f) {
      var i = f.querySelector("input, select, textarea");
      if (i) i.addEventListener("blur", function () { if (f.classList.contains("invalid")) check(f); });
      if (i) i.addEventListener("change", function () { if (f.classList.contains("invalid")) check(f); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var first = null;
      form.querySelectorAll(".field, .check-field").forEach(function (f) {
        if (!check(f) && !first) first = f;
      });
      if (first) { first.querySelector("input, select, textarea").focus(); return; }
      // In WordPress: inviare al plugin moduli (es. Contact Form 7 / WPForms) e tracciare la conversione.
      submit.setAttribute("aria-busy", "true");
      setTimeout(function () {
        form.classList.add("sent");
        var done = form.querySelector(".done");
        done.querySelector("[data-done-service]").textContent = { agevolata: "la tua richiesta di consulenza sulla finanza agevolata", direzionale: "la tua richiesta di analisi direzionale", coaching: "la tua richiesta di call conoscitiva" }[current()];
        done.setAttribute("tabindex", "-1");
        done.focus();
        if (window.dataLayer) window.dataLayer.push({ event: "lead", servizio: current() });
      }, 500);
    });
  });
})();
