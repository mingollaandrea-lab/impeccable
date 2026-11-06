# Nuovo sito: struttura, testi SEO, SEM e GEO

Guida per trasferire il prototipo in WordPress. I testi completi delle pagine sono nei file HTML di questa cartella: questa guida riassume quello che va inserito nei campi di WordPress e nel plugin SEO (Yoast o Rank Math).

## 1. Nuova struttura del sito

| Pagina | URL definitivo | File del prototipo | Azione principale |
|---|---|---|---|
| Home | `/` | `index.html` | Richiedi una consulenza gratuita / Prenota una call |
| Finanza agevolata | `/finanza-agevolata-puglia/` | `finanza-agevolata.html` | Verifica gratis il tuo investimento |
| Consulenza direzionale | `/consulenza-direzionale-imprese-edili/` | `consulenza-direzionale.html` | Richiedi l'analisi direzionale |
| Life coaching | `/life-coaching/` | `life-coaching.html` | Prenota la call gratuita |
| Chi sono | `/chi-sono/` | `chi-sono.html` | Scrivimi |
| Contatti | `/contatti/` | `contatti.html` | Modulo con domande per servizio |
| Bandi attivi | `/bandi-attivi/` (invariato) | non rifatto | resta il blog attuale |

Menu: Finanza agevolata · Consulenza direzionale · Life coaching · Bandi attivi · Chi sono · Contatti · pulsante WhatsApp.

Escono dal menu: Finanza straordinaria, Innovazione e controllo di gestione, Ristrutturazioni aziendali, I nostri partner (se vuoi tenerla, collegala da Chi sono).

## 2. Redirect 301 (obbligatori)

Senza questi redirect si perde il posizionamento delle vecchie pagine. Si impostano con il plugin Redirection o con Rank Math.

| Vecchio URL | Nuovo URL |
|---|---|
| `/finanza-straordinaria-2/` | `/finanza-agevolata-puglia/` |
| `/servizi-finanza-straordinaria/` | `/finanza-agevolata-puglia/` |
| `/servizi-finanza-agevolata/` (oggi dà errore 404) | `/finanza-agevolata-puglia/` |
| `/incentivi-puglia/` | `/finanza-agevolata-puglia/` |
| `/incentivi-in-puglia/` | `/bandi-attivi/` |
| `/consulenza-innovazione-e-controllo/` | `/consulenza-direzionale-imprese-edili/` |
| `/servizi-ristrutturazioni-aziendali/` | `/consulenza-direzionale-imprese-edili/` |
| `/chi-siamo/` | `/chi-sono/` |

Prima di attivarli, controlla in Google Search Console quale delle vecchie pagine porta più traffico: se `/incentivi-puglia/` è la pagina più forte, si può usare quell'URL per la nuova pagina Finanza agevolata invece di crearne uno nuovo.

## 3. Title e meta description

| Pagina | Title (max 60-65 caratteri) | Meta description |
|---|---|---|
| Home | Finanza agevolata in Puglia e consulenza PMI \| Andrea Mingolla | Ing. Andrea Mingolla: finanza agevolata in Puglia con Finanziamenti Puglia, consulenza direzionale per imprese edili, impiantistiche e movimento terra, life coaching. Prima valutazione gratuita. |
| Finanza agevolata | Finanza agevolata in Puglia: bandi e contributi per imprese | Consulenza di finanza agevolata in Puglia: bandi regionali, nazionali ed europei, contributi a fondo perduto e prestiti a tasso zero. Valutazione gratuita del tuo investimento. |
| Consulenza direzionale | Consulenza direzionale e controllo di gestione imprese edili | Controllo di gestione per commessa e organizzazione per PMI edili, impiantistiche e di movimento terra in Puglia. Margini per cantiere, budget, cassa. Analisi iniziale gratuita. |
| Life coaching | Life coaching in Puglia e online: call conoscitiva gratuita | Percorsi individuali di life coaching in Puglia e online per lavoro, carriera, decisioni ed equilibrio personale. Prenota la call conoscitiva gratuita con Andrea Mingolla. |
| Chi sono | Ing. Andrea Mingolla, fondatore di Finanziamenti Puglia | Andrea Mingolla, ingegnere, fondatore di Finanziamenti Puglia: 15 anni di finanza agevolata, oltre 1.500 clienti, 5 sedi in Puglia. Consulenza direzionale e life coaching. |
| Contatti | Contatti: consulenza e call di coaching \| Andrea Mingolla | Richiedi una consulenza di finanza agevolata o di consulenza direzionale, o prenota una call di life coaching. Sedi a San Severo, Ruvo di Puglia, Bari, Taranto e Maglie. |

Nel prototipo alcuni title sono più lunghi: in WordPress usa le versioni di questa tabella.

## 4. Parole chiave per pagina (SEO)

Una pagina, un gruppo di ricerche. Non far competere due pagine sulla stessa parola.

- **Finanza agevolata**: finanza agevolata Puglia, bandi Regione Puglia imprese, contributi a fondo perduto Puglia, consulente bandi Puglia, finanziamenti agevolati imprese Puglia. Varianti locali: finanza agevolata Bari, Taranto, Lecce, Foggia.
- **Consulenza direzionale**: consulenza direzionale imprese edili, controllo di gestione impresa edile, controllo di gestione per commessa, consulente aziendale imprese di costruzioni, organizzazione impresa edile, margine di cantiere.
- **Life coaching**: life coach Puglia, life coaching online, life coach Bari, percorso di coaching, call conoscitiva coaching gratuita.
- **Bandi attivi** (blog): un articolo per ogni bando, con il nome esatto del bando nel title e nell'H1 (come già fai: "Tecnonidi Puglia 2026", "JTF Taranto"). Ogni articolo deve linkare la pagina Finanza agevolata e avere in fondo il pulsante "Verifica gratis se la tua impresa può partecipare".

Regole per ogni pagina:

1. Un solo H1, con la parola chiave principale.
2. Prima frase della pagina che risponde a "cosa offri, a chi, dove".
3. URL brevi, in minuscolo, con trattini.
4. Immagini con nome file descrittivo e testo alternativo (es. `andrea-mingolla-consulente-finanza-agevolata.jpg`, alt "Andrea Mingolla, consulente di finanza agevolata a Bari").
5. Link interni: home verso i tre servizi, ogni articolo bando verso Finanza agevolata, Chi sono verso i tre servizi.

## 5. GEO: farsi citare dai motori di ricerca con intelligenza artificiale

Google AI Overviews, ChatGPT, Perplexity e simili citano pagine che danno risposte chiare, brevi e verificabili. Nel prototipo questo è già impostato così:

- **Risposte in apertura**: ogni FAQ inizia con una frase che risponde da sola alla domanda ("La finanza agevolata è...", "Il controllo di gestione per commessa è...").
- **Fatti verificabili e coerenti**: 15 anni, oltre 1.500 clienti, 115 milioni di euro di pratiche, 5 sedi con i nomi delle città. Usa sempre gli stessi numeri su sito, Google Business Profile, LinkedIn e Instagram.
- **Entità chiare**: "Andrea Mingolla" (persona, ingegnere) e "Finanziamenti Puglia" (marchio) sono sempre nominati insieme nello stesso modo.
- **Dati strutturati** (JSON-LD) già scritti in ogni pagina: `Person`, `ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`, `ContactPage`. In WordPress si copiano nel blocco "Codice personalizzato" di Rank Math, oppure nell'header della pagina con un plugin come WPCode.
- **Articoli sui bandi** con una tabella riassuntiva in alto: chi può partecipare, quanto si ottiene, scadenza, spese ammesse. È il formato che i motori generativi riportano più spesso.

Da fare fuori dal sito, ma conta per SEO locale e GEO:

- Google Business Profile per ogni sede reale (stesso nome, stesso telefono, categoria "Consulente aziendale"), con link alla pagina giusta.
- Chiedere recensioni Google ai clienti soddisfatti. Quando ci sono, possono entrare nel sito come testimonianze vere.
- Profilo LinkedIn di Andrea con le stesse tre attività e il link al sito.

## 6. SEM: campagne Google Ads

Ogni campagna deve portare alla pagina del suo servizio, mai alla home. I testi delle pagine sono già scritti per riprendere le parole degli annunci.

| Campagna | Parole chiave (corrispondenza a frase) | Pagina di destinazione | Conversione |
|---|---|---|---|
| Finanza agevolata | "finanza agevolata puglia", "bandi regione puglia", "contributi fondo perduto puglia", "consulente bandi" | `/finanza-agevolata-puglia/` | invio modulo agevolata |
| Bandi specifici | nome del bando del momento ("tecnonidi puglia", "jtf taranto") | articolo del bando | clic su "Verifica gratis" + invio modulo |
| Consulenza direzionale | "controllo di gestione impresa edile", "consulente impresa edile", "consulenza aziendale edilizia" | `/consulenza-direzionale-imprese-edili/` | invio modulo direzionale |
| Life coaching | "life coach bari", "life coaching online", "life coach puglia" | `/life-coaching/` | prenotazione sul calendario |

Parole chiave negative da aggiungere: lavoro, offerte di lavoro, corso, gratis pdf, tesi, finanza straordinaria, mutuo casa, prestito personale.

Esempi di titoli annuncio (max 30 caratteri): "Finanza Agevolata in Puglia" · "Bandi Aperti per la Tua PMI" · "Valutazione Gratuita" · "Controllo di Gestione Edile" · "Margini per Cantiere" · "Life Coach a Bari e Online" · "Prima Call Gratuita".

## 7. Moduli, calendario e tracciamento

- **Modulo**: un solo modulo con la scelta del servizio e domande diverse per ciascuno (vedi `contatti.html`). In WordPress si rifà con WPForms, Gravity Forms o Fluent Forms usando la "logica condizionale". Ogni invio deve contenere il campo `servizio` (agevolata, direzionale, coaching).
- **Link diretti al modulo**: `/contatti/?servizio=agevolata`, `?servizio=direzionale`, `?servizio=coaching` aprono il modulo già sul servizio giusto.
- **Calendario**: serve il link di prenotazione (Calendly, Google Calendar o TidyCal). Nel prototipo va in `assets/site.js`, variabile `BOOKING_URL`; tutti i pulsanti "Prenota" lo usano.
- **WhatsApp**: `https://wa.me/393409701477` con messaggio precompilato.
- **Tracciamento**: con Google Tag Manager registra tre conversioni separate (modulo agevolata, modulo direzionale, prenotazione coaching), più clic su WhatsApp e su telefono. Il prototipo invia già l'evento `lead` con il servizio a `dataLayer`. Il pixel Meta che c'è oggi sul sito va mantenuto.

## 8. Cose che servono da te

1. Foto professionali di Andrea (almeno: un ritratto verticale, una foto al lavoro con un cliente o in cantiere, una più informale per il coaching).
2. Link del calendario per le call di coaching e durata della call conoscitiva.
3. Conferma che la prima valutazione di finanza agevolata e di consulenza direzionale è gratuita (il vecchio sito diceva "consulenza gratuita").
4. Indirizzi delle sedi, se vuoi mostrarli (servono anche per Google Business Profile).
5. Eventuali titoli o formazione da coach, solo se reali.
6. Testimonianze o recensioni vere di clienti, con il loro permesso.
