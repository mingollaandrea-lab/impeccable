---
name: Andrea Mingolla / Finanziamenti Puglia
description: The site as an engineer's drawing sheet, ruled in black with a red revision pen.
colors:
  red: "#b1040e"
  red-deep: "#8c030b"
  red-wash: "rgba(177, 4, 14, 0.07)"
  ink: "#141413"
  ink-2: "#474744"
  ink-3: "#6b6b67"
  paper: "#fafaf8"
  paper-2: "#f1f1ee"
  white: "#ffffff"
  hair: "rgba(20, 20, 19, 0.16)"
  grid: "rgba(20, 20, 19, 0.045)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.3rem, 1.5rem + 3vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.9vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 105"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"tnum\" 1"
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.82rem, 0.8rem + 0.1vw, 0.88rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.07em"
  value:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1rem + 0.6vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 108"
rounded:
  none: "0px"
spacing:
  frame: "clamp(8px, 1.2vw, 18px)"
  gutter: "clamp(16px, 3.2vw, 48px)"
  section: "clamp(48px, 7vw, 112px)"
  sheet-max: "1400px"
  grid-cell: "24px"
  gap-sm: "12px"
  gap-md: "18px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.white}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "48px"
  index-row-hover:
    backgroundColor: "{colors.red-wash}"
    textColor: "{colors.ink}"
  cartiglio-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.value}"
    padding: "12px 16px 14px"
  service-pick-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    padding: "16px 18px"
---

# Design System: Andrea Mingolla / Finanziamenti Puglia

## Overview

**Creative North Star: "La tavola di progetto"**

Every page is one drawing sheet signed by an engineer. The sheet is a warm white panel (paper) framed by a 2px black border with a 1px outline offset 5px outside it, set on a slightly darker desk (paper-2) and ruled inside by a faint 24px millimetre grid. Content lives in cells divided by black rules, the way a technical drawing divides its title block, its views and its notes. Services are numbered sheets ("Tav. A", "Tav. B", "Tav. C"), the header and footer are rows of the frame, and each page closes with a cartiglio (title block) holding designer, sheet, revision and contacts.

Red #b1040e is the revision pen and nothing else: it circles the key word of a heading, underlines a correction, draws dimension lines, numbers steps, marks the current revision and carries the one primary action. Everything structural is black ink on paper. Density is that of a working document: tight cells, generous section padding, figures set tabular so numbers line up like a bill of quantities.

Motion is drawing, not fading. The red ring around a heading word is stroked in on load, the ring around a service sheet is traced on hover, and dimension lines extend when they scroll into view. The coaching register keeps the same sheet but softens its headings (normal width, weight 600) and swaps the geometric ring for a hand-drawn red stroke under the heading.

**Key Characteristics:**
- Double-ruled sheet frame on a desk tone, millimetre grid inside the sheet only.
- Two line weights: 2px black for structure, 1px black for cells, a 16% ink hairline for subdivisions.
- Square corners everywhere; the only circles are pen marks.
- Red used as an annotation layer over a black and white drawing.
- Archivo variable, widened (wdth 105 to 115) for headings, normal width for text, tabular figures throughout.
- Signature motion: SVG strokes drawn in with a long, decelerating ease.

## Colors

A black-ink technical drawing on warm white, annotated by a single red pen.

### Primary
- **Revision Red** (`red`): the pen. Primary buttons, the ring and underline on heading keywords, dimension lines and their arrowheads, step numbers, the current nav item and its 2px underline, the "Rev." cell of the cartiglio, focus outlines, text selection, field errors, the open FAQ chevron, link hover. Brand colour fixed by the client.
- **Revision Red Deep** (`red-deep`): hover and press state of the red button only.
- **Red Wash** (`red-wash`, red at 7%): the tint a service sheet takes on hover and focus, under its traced red ring.

### Neutral
- **Drawing Ink** (`ink`): all text, every structural rule (it is also the `--line` token), the ink button, the selected service tab, the header WhatsApp action, rail hover fill.
- **Graphite** (`ink-2`): ledes, secondary paragraphs, item descriptions in lists and FAQ answers.
- **Pencil Grey** (`ink-3`): cartiglio and rail field labels, dates, sheet codes, breadcrumbs, legal line, the brand subtitle.
- **Drawing Paper** (`paper`): the sheet itself, header, forms, cells that must sit opaque over the grid.
- **Desk** (`paper-2`): the page background outside the sheet and the photo placeholder fill.
- **Field White** (`white`): input backgrounds and text on ink or red. Pure white is reserved for these two jobs so fields read as blank boxes on the sheet.
- **Hairline** (`hair`, ink at 16%): rules inside a cell (nav dividers, spec list rows, step dividers, TOC rows, the X of a photo placeholder).
- **Grid** (`grid`, ink at 4.5%): the 24px millimetre grid on the sheet. Never a rule, never text.

### Named Rules
**The Revision Pen Rule.** Red marks what changed, what matters or what to do next; it never fills a surface larger than a button and never sets running text. If removing the red leaves the drawing complete, the red was placed correctly.

**The Ink Is The Line Rule.** Rules are drawn in full ink, not grey. Lighter division inside a cell uses the hairline token, never a mid grey hex.

## Typography

**Display Font:** Archivo variable, self-hosted (`assets/fonts/archivo.woff2`, weight 100 to 900, width 62% to 125%), with Helvetica Neue, Arial fallback.
**Body Font:** the same Archivo at normal width.

**Character:** one technical grotesk doing two jobs. Widened and heavy, it reads like lettering on a drawing; at normal width and 400 it is a calm, legible text face. Tabular figures are set on the body, so every number on the site behaves like a measurement.

### Hierarchy
- **Display** (700, wdth 112, fluid 2.3rem to 4.1rem, line-height 1.04, -0.035em): the one h1 per page, max about 17ch in the hero, balanced wrapping.
- **Headline** (700, wdth 112, fluid 2rem to 3.2rem, line-height 1.04, -0.03em): section h2s.
- **Title** (700, wdth 105, fluid 1.2rem to 1.45rem, line-height 1.2): h3, FAQ questions (at 650, wdth 106), service sheet titles (fluid 1.2rem to 1.6rem).
- **Lede** (400, fluid 1.2rem to 1.45rem, line-height 1.45, graphite, max 58ch): the paragraph that follows a heading.
- **Body** (400, fluid 1rem to 1.1rem, line-height 1.55, max 68ch, pretty wrapping): running text.
- **Value** (700, wdth 108, fluid 1.15rem to 1.6rem, -0.02em): the filled-in value of a cartiglio or rail cell. Inside the page title blocks it steps down to 1rem to 1.2rem, and to 0.98rem at 600 for long values (addresses, emails).
- **Label** (600, 0.72rem to 0.78rem, 0.06em to 0.07em, uppercase, pencil grey): the field name printed in a title-block cell, a rail cell, a footer column or the page index. Labels name a field whose value sits beside or below them in the same cell.
- **Small** (fluid 0.82rem to 0.88rem, pencil grey): notes, legal line, captions.

### Named Rules
**The Width Axis Rule.** Hierarchy is carried by width as much as weight: headings at wdth 105 to 115, emphasis inside lists at wdth 106 to 108, text at 100. Do not substitute a second family for display.

**The Tabular Figures Rule.** Figures are tabular everywhere (`font-variant-numeric: tabular-nums` on the body). Amounts, dates, percentages and phone numbers line up.

## Layout

The page is one centred sheet, max 1400px wide, set in from the viewport by the frame margin (8px to 18px, plus 6px under 1440px so the offset outline stays visible). Inside, the sheet is a vertical stack of bands, each closed by a 2px rule. A band holds a 12-column grid with a fluid gutter (16px to 48px) used as both column gap and side padding; standard section padding is 48px to 112px vertically. Typical splits are 5/7, 6/6, 4/8 and 8 for FAQ.

The header is a sticky ruled row (min 72px): brand cell, nav cells separated by hairlines, and a full-height ink WhatsApp cell. Hero and inner page heads are two-column sheets (1.25fr / 1fr on home, 1.4fr / 1fr inside) with the right column carrying the service index or notes and ending in the cartiglio pushed to the bottom.

Responsive behaviour: nav collapses to a Menu button at 1080px; hero and page heads stack at 1000px and the page index (TOC) hides; the 12-column grid goes single column at 900px; the contact rail stacks and the floating WhatsApp button appears at 760px; the service picker and form fields go single column at 640px; the cartiglio drops to two columns and brand subtitle hides at 560px. When cells stack, their dividing rules move from right edges to top edges so the drawing stays ruled.

Cells sit flush against their rules; spacing lives inside the cell as padding, not as gaps between floating boxes.

## Elevation & Depth

The sheet is flat. Depth is expressed by line weight and by framing: the double frame (2px border, 1px outline offset 5px) lifts the sheet off the desk tone, 2px rules close bands, 1px rules divide cells, hairlines subdivide. Hover states change fill (red wash, ink) or draw a red stroke; they never raise anything.

### Shadow Vocabulary
- **Floating action** (`box-shadow: 0 6px 18px rgba(20,20,19,.25)`): only the fixed WhatsApp button on screens under 760px, which floats over content and needs separation. No other element carries a shadow.

### Named Rules
**The Flat Sheet Rule.** Nothing on the sheet casts a shadow. Separation comes from rules and fills; the one shadow belongs to the one element that is not on the sheet.

## Shapes

Square corners throughout (`rounded.none`): buttons, fields, cells, tags, callouts, forms, photo frames. Borders are the form language: 2px ink for frames, forms and band ends; 1px ink for cells, fields, tags and photo frames; 2px red for a callout. The only round shapes are pen marks: the hand-drawn red ellipse around a heading keyword, the red ring bullet of the spec list (14px, 2px red stroke) and the ellipse in diagrams. Arrows are thin stroked SVG chevrons and dimension arrowheads; chevrons for the FAQ and page index are drawn from two borders rotated 45 degrees.

A photo placeholder is the architectural convention for a missing view: a 4:5 box, 1px ink frame, desk fill, a hairline X corner to corner and a small ruled label.

## Components

### Buttons
Rectangular, heavy, with a stroked arrow that nudges 3px right on hover.
- **Shape:** square corners, 2px border, min height 52px, padding 0 24px, weight 650, 1rem.
- **Primary (red):** red fill and border, white text; hover deepens to red-deep. One per view, for the page's own action.
- **Ink:** ink fill, white text; hover turns red. For a secondary committed action (booking, submit on coaching).
- **Outline:** transparent with 2px ink border and ink text; hover fills ink with white text.
- **Focus:** 2px red outline offset 3px (global). Busy state drops to 70% opacity with a progress cursor.
- Rows of buttons wrap with a 12px gap, 2rem above.

### Service index (Tav. A / B / C)
The signature component. A stack of ruled rows, each a 56px code column ("Tav. A") divided by a hairline from a body with the sheet title, a one-line description in graphite and a red action phrase with an arrow. On hover or keyboard focus the row takes the red wash and a red 2px rectangle is traced around it (stroke-dashoffset over 0.9s). Code column narrows to 40px under 560px.

### Cartiglio (title block)
A definition list laid out as a 4-column ruled grid, opening with a 2px rule. Each cell holds an uppercase pencil-grey label and a widened bold value. Cells can span two columns or the full row; the revision cell ("Rev.") is the only red one. Values that are links lose their underline and turn red with underline on hover. Drops to two columns under 560px.

### Revision mark and dimension line
- **Mark:** an inline SVG ellipse path, 3px red round-capped stroke, wrapped around one keyword of a heading and drawn in over 1.2s after a 0.35s delay. One per heading at most.
- **Underline:** red text-decoration at 0.07em, offset 0.12em, no skip-ink, for a corrected phrase in a heading.
- **Dimension line (quota):** a red 1.5px line with arrowheads and end ticks, max 600px wide, with the measured figures centred beneath in graphite and bold ink. It extends over 1.1s when it enters the viewport. The same traced line annotates gaps in diagrams.

### Lists and tables
- **Bandi list:** ruled rows (2px top, 1px between) in three columns: date in pencil grey, title (wdth 108) with description, red arrow that nudges on hover.
- **Spec list:** hairline-ruled rows with a red ring bullet, bold title and graphite description.
- **Steps:** a 4-column numbered row under a 2px rule, numbers in red ("1."), hairline dividers; 2 columns at 900px, 1 at 520px.
- **Sedi:** an auto-fill grid of ruled cells (min 150px), bold town name with a pencil-grey note.
- **Tags:** 1px ink boxes, 6px 12px, 0.9rem at 550.

### Inputs / Fields
- **Style:** white box, 1px ink border, square, padding 12px 14px, min height 48px, red caret; label above at 0.86rem, 650.
- **Focus:** 2px red outline at -1px offset, sitting on the border.
- **Error:** red border, #fff6f6 fill, red 0.85rem message at 600 below. Checkboxes use red accent colour.
- **Form frame:** a 2px ink box. Its first row is a 3-up service picker of ruled cells; the selected cell fills ink with white text and the field set below changes to that service's qualifying questions. Actions sit in a bottom row behind a 1px rule.

### Navigation
Header nav links are ruled cells (hairline left edge), 0.92rem at 500. The current page is red with a 2px red bar inset 14px from the cell's bottom and sides. Under 1080px a Menu button opens a full-width ruled list (1.05rem, hairline between items). Breadcrumbs are small pencil-grey text with red hover. Inner service pages carry a page index in the head column: label, hairline-ruled links with a chevron, red on hover.

### Contact rail and footer
The rail is a 3-column ruled row of large links (label plus value), filling ink on hover. The footer is a title-block grid (1.3fr and three 1fr columns) with uppercase pencil-grey column labels, the full logo, and a ruled legal line beneath.

### FAQ
Native details elements under a 2px rule, 1px between. Question in title size at 650, a two-border chevron that turns and goes red when open; answer in graphite, max 72ch.

## Do's and Don'ts

### Do:
- **Do** put every new surface on the sheet: inside the double frame, in bands closed by 2px rules, with cells divided by 1px ink rules and hairlines inside cells.
- **Do** keep the millimetre grid (24px, ink at 4.5%) on the sheet, and give cells that carry text an opaque paper fill when they need to read clean.
- **Do** reserve red for the revision layer: one primary red button per view, one ring or underline per heading at most, dimension lines, step numbers, current state, focus and errors.
- **Do** animate by drawing strokes (dashoffset) with `cubic-bezier(0.16, 1, 0.3, 1)`, and show them fully drawn under reduced motion.
- **Do** set figures tabular and give real measurements (years, clients, euros, sedi) the dimension-line treatment rather than big-number tiles.
- **Do** close each page head with a cartiglio whose fields are real (designer, sheet, revision, sedi, contacts).
- **Do** keep the coaching pages on the same sheet, softening only heading width and weight and using the hand-drawn red stroke.

### Don't:
- **Don't** round corners or add card shadows; the one shadow is the floating mobile WhatsApp button.
- **Don't** use red for running text, large fills or decoration that marks nothing.
- **Don't** draw rules in mid grey; use full ink or the hairline token.
- **Don't** add a second typeface for display; widen Archivo instead.
- **Don't** set a label line above a section heading; labels belong inside title-block, rail and footer cells, next to the value they name.
- **Don't** replace a missing photo with stock imagery; use the X-box placeholder until the real photo arrives.
