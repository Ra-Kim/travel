---
name: my travel journal.
description: Trips sent home as airmail postcards, laid out on a deep airmail-blue table.
colors:
  airmail-red: "#d6392f"
  airmail-red-night: "#ef5b4f"
  airmail-blue: "#2346a0"
  marigold: "#f2a541"
  vermilion: "#e2522f"
  postal-blue: "#2b54b8"
  jade: "#1a7a68"
  table: "#24479f"
  table-deep: "#1a3786"
  table-night: "#111f40"
  table-night-deep: "#0c1731"
  table-ink: "#f3f5fb"
  table-ink-soft: "#d3dcf2"
  table-ink-night: "#eef1f8"
  table-ink-soft-night: "#c3cde4"
  card-stock: "#f4f5f0"
  card-ink: "#1b2233"
  card-ink-soft: "#4a5268"
  card-rule: "#c9cedb"
  accent-ink: "#ffffff"
typography:
  display:
    fontFamily: "Bungee, Arial Black, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 3.6vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  greeting:
    fontFamily: "Bungee, Arial Black, sans-serif"
    fontSize: "min(25cqi, 84cqi / (longest word length * 0.8))"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Bungee, Arial Black, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "max(0.6875rem, 1.9cqi)"
    fontWeight: 700
    letterSpacing: "0.35em"
  button:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
  hand:
    fontFamily: "Reenie Beanie, Segoe Print, cursive"
    fontSize: "max(1.375rem, 4.1cqi)"
    fontWeight: 400
    lineHeight: 1.08
  hand-script:
    fontFamily: "Reenie Beanie, Segoe Print, cursive"
    fontSize: "max(1.5rem, 7cqi)"
    fontWeight: 400
    lineHeight: 1
rounded:
  art: "2px"
  card: "6px"
  pill: "999px"
spacing:
  gutter-phone: "16px"
  gutter: "40px"
  card-mat: "10px"
  caption-gap: "24px"
  caption-top: "28px"
  caption-offset: "44px"
  trip-gap: "64px"
  trip-gap-tablet: "88px"
  stack-overlap: "88px"
components:
  button-flip:
    backgroundColor: "{colors.airmail-red}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  button-flip-night:
    backgroundColor: "{colors.airmail-red-night}"
    textColor: "{colors.table-night}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  postcard-front:
    backgroundColor: "{colors.card-stock}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-mat}"
  postcard-back:
    backgroundColor: "{colors.card-stock}"
    textColor: "{colors.card-ink}"
    typography: "{typography.hand}"
    rounded: "{rounded.card}"
    padding: "4.5cqi 5cqi 4cqi"
  postcard-back-label:
    textColor: "{colors.card-ink-soft}"
    typography: "{typography.label}"
  maps-link:
    textColor: "{colors.airmail-blue}"
    typography: "{typography.button}"
  stamp:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.accent-ink}"
    width: "15cqi"
    padding: "1.6cqi"
---

# Design System: my travel journal.

## Overview

**Creative North Star: "Postcards on the Airmail Table"**

Every trip is a physical postcard sent home, dropped onto a deep airmail-blue table. The page is the table; the only objects on it are card-stock postcards, their captions and one red control per card. Fronts are large-letter "Greetings from" cards over flat lithograph-style scenes in saturated inks; backs are real postcard backs with an airmail chevron edge, a perforated stamp, a cancelling postmark, a handwritten note and a ruled address block.

Density is low and object-led. Cards are big (full width on phones, 64% of the page on wide screens), tilted a degree or two as if dropped, and on wide screens they overlap into a loose stack with each caption lying on the table beside its card. Texture comes from the material: paper grain (feTurbulence noise, multiplied) over both faces; the table itself carries only a quiet vertical gradient, never glass, glow or pattern.

The table stays blue in both colour schemes. Light and dark only change the depth of the blue, the table ink and the accent tuning; the card stock and its inks never change.

**Key Characteristics:**
- Deep airmail-blue table in both schemes (`color-scheme: dark` throughout).
- Card-stock postcards with grain, 6px corners and a soft cast shadow.
- Three voices: Bungee for printed display, Bricolage Grotesque for the UI, Reenie Beanie for anything written by hand.
- Airmail red is the one control colour; airmail red and blue together only as the chevron edge.
- A 3D rotateY flip on a real `aria-pressed` button; a crossfade under reduced motion.

## Colors

A two-surface palette: saturated airmail blue for the table, warm off-white card stock for the objects, with airmail red as the single accent and flat lithograph inks inside the art.

### Primary
- **Airmail Red** (`airmail-red`): the one accent. Fills the Flip button, the stripe of the chevron edge, the map pin, the wordmark globe and text selection. On the night table it lifts to **Night Airmail Red** (`airmail-red-night`) with dark navy text so the button keeps contrast (4.85:1).

### Secondary
- **Airmail Blue** (`airmail-blue`): the blue stripe of the chevron edge and the Maps link on the card back. It is a printed-ink blue on card stock, not a table colour.

### Tertiary
- **Marigold** (`marigold`): the focus ring on every control and the fallback fill for the greeting letters; also the sun in the scenes.
- **Scene inks** (`vermilion`, `postal-blue`, `jade`, plus marigold): the flat lithograph inks shared by the illustrations and the stamps. Each stamp takes one ink as its field, with white lettering (dark `card-ink` on marigold).

### Neutral
- **Airmail Table** (`table` to `table-deep`): the day table, a vertical gradient on the body. Also the light `theme-color`.
- **Night Table** (`table-night` to `table-night-deep`): the dark-scheme table and dark `theme-color`.
- **Table Ink** (`table-ink`, `table-ink-soft`; night: `table-ink-night`, `table-ink-soft-night`): headings and captions on the table, and the softer ink for the intro line, trip dates and footer note. The footer rule is table ink at 18% mixed into transparent.
- **Card Stock** (`card-stock`): both faces of every postcard and the 10px mat around the front art.
- **Card Ink** (`card-ink`, `card-ink-soft`): handwriting, postmark and the letter extrusion; the soft ink for the printed "POST CARD" label.
- **Card Rule** (`card-rule`): the address rules and the back's vertical divider.

### Named Rules
**The Blue Table Rule.** The table is airmail blue in both schemes. Dark mode deepens the blue; it never turns the page white or grey.

**The One Red Control Rule.** Airmail red fills controls and marks (button, pin, globe). Paired with airmail blue it appears only as the chevron edge of a card back.

## Typography

**Display Font:** Bungee (with Arial Black)
**Body Font:** Bricolage Grotesque Variable (with Segoe UI, system-ui)
**Handwriting Font:** Reenie Beanie (with Segoe Print, cursive)

All three are self-hosted through @fontsource; nothing loads from a font CDN.

**Character:** Bungee is the printed souvenir lettering of the postcard trade; Bricolage is the calm, slightly quirky voice of the site itself; Reenie Beanie is the sender's pen.

### Hierarchy
- **Display** (Bungee 400, fluid 1.875 to 4.25rem, 1.02): the one intro line on the table, max 16ch, balanced.
- **Greeting** (Bungee 400, sized per word up to 25cqi, 0.92, uppercase): the big front letters. Each letter face is clipped to the card's own scene, outlined in white (0.028em stroke) and extruded down-right in card ink. Long names wrap rather than shrink.
- **Headline** (Bungee 400, fluid 1.5 to 2.25rem, 1.1): the footer sign-off.
- **Title** (Bricolage 700, fluid 1.375 to 1.75rem, 2rem from 1024px, 1.15, -0.02em): the place name in each caption.
- **Body** (Bricolage 400, 1.0625rem, 1.55): intro text (52ch max), trip meta with tabular numerals, footer note.
- **Label** (Bricolage 700, max(0.6875rem, 1.9cqi), 0.35em tracking, uppercase): only the printed "POST CARD" heading on a card back.
- **Hand** (Reenie Beanie, max(1.375rem, 4.1cqi), 1.08, rotated -1deg): the message; address lines at max(1.25rem, 3.4cqi); "Greetings from" script at max(1.5rem, 7cqi), rotated -4deg.

### Named Rules
**The Pen Belongs to the Card Rule.** Reenie Beanie appears only as writing on a postcard (greeting script, message, address). Nothing on the table is handwritten.

**The Container Type Rule.** Everything on a card is sized in `cqi` against the card's width, with a rem floor, so a card reads the same at any size.

## Layout

A single column inside a 1180px page width with 16px gutters (40px from 768px). The masthead wordmark sits top left; the display line and intro run left-aligned beneath it.

- **Phones (up to 600px):** cards go portrait at 5:6, the front art crops with a per-trip focal point, and the back restacks into one column (label, stamp, message, address) with the divider hidden. The caption sits 14px under the card with title and button on one row.
- **Tablet (768px):** cards at 3:2, max 760px wide, alternating left and right, 88px apart; captions sit under the card, title left and button right.
- **Wide (1024px up):** cards are 64% wide and overlap by 88px into a stack. Odd cards tilt left and caption on their right; even cards tilt right and caption on their left, each caption 44px off the card edge. The hovered or open card rises above the stack.

Tilts come from a per-card `--tilt` (-1.6deg, 1.3deg, then -2.4deg and 2deg on the wide stack).

## Elevation & Depth

Depth is physical: postcards lie on the table and cast one soft, cool shadow. The table itself is flat apart from its vertical gradient. There is no layered UI elevation, no cards within cards, no glass.

### Shadow Vocabulary
- **Card drop** (`box-shadow: 0 22px 44px -18px rgba(8, 18, 48, 0.7), 0 4px 12px -4px rgba(8, 18, 48, 0.45)`; night: `0 22px 46px -18px rgba(0,0,0,0.75), 0 4px 12px -4px rgba(0,0,0,0.5)`): on every postcard face, and nowhere else.
- **Letter extrusion** (five stacked 0-blur `text-shadow` steps from 0.015em to 0.075em in card ink): only on the greeting letters, where it is the native 3D side of large-letter postcard lettering.

### Named Rules
**The One Shadow Rule.** Only postcards cast shadows. Buttons, captions and the masthead sit flat on the table.

## Shapes

Card stock has gently rounded corners (6px); the art inside the front mat is nearly square (2px). The Flip button is a full pill. The stamp is the one non-rectangular silhouette: a 4:5 field with a perforated edge cut by a radial mask, an inner frame rule at 7px, rotated 3deg. The postmark is a double ring with wavy cancellation lines, rotated -12deg and drawn at 72% opacity in card ink.

## Components

### Buttons
Tactile and single-purpose: one Flip button per card.
- **Shape:** full pill (999px), min 44px tall.
- **Primary:** airmail red with white text (night: lifted red with navy text), Bricolage 700 at 1rem, 10px 18px padding (10px 14px on phones), a leading Phosphor arrows icon.
- **Hover / Focus / Active:** brightness 1.08 on hover; a 3px marigold outline at 3px offset on focus; presses down 1px and scales to 0.98. When `aria-pressed="true"` the icon turns 180deg and the label reads "Turn back over".

### Cards / Containers
The postcard is the only container.
- **Corner Style:** 6px.
- **Background:** card stock, with paper grain multiplied over both faces at 0.55 opacity.
- **Shadow Strategy:** card drop (see Elevation & Depth).
- **Border:** the front has a 10px card-stock mat around the art; the back has the airmail chevron edge (repeating -45deg red, stock, blue, stock stripes, masked to a 1.4cqi frame).
- **Internal Padding:** back at 4.5cqi 5cqi 4cqi (phones 6cqi 7cqi 5cqi); a 1.15fr / 1px / 1fr grid with message left and stamp plus address right.
- **Behaviour:** the whole card toggles the flip; the card straightens and lifts 4px on hover-capable devices.

### Navigation
There is none beyond the wordmark (Bricolage 700, 1.125rem, with a filled globe icon in the accent) and the footer link. Links inherit colour with a 0.2em underline offset.

### Signature: The Flip
A 3D `rotateY(180deg)` on the card, perspective 1800px, 800ms on `cubic-bezier(0.16, 1, 0.3, 1)`, both faces with hidden backfaces. The hidden face is `inert`. Under `prefers-reduced-motion` the tilt holds still and the faces crossfade over 200ms linear instead.

### Signature: Stamp and Postmark
Each stamp is one scene ink with a line vignette drawn in `currentColor` and the country in Bungee. The postmark prints the country round the ring and the trip's start date across the middle, cancelling over the stamp's edge.

## Do's and Don'ts

### Do:
- **Do** keep the table airmail blue in both schemes and let only the blue deepen for dark mode.
- **Do** put every new object on the table as card stock with the card drop shadow and grain, at 6px corners.
- **Do** size anything printed or written on a card in `cqi` with a rem floor.
- **Do** keep airmail red for controls and marks, with marigold as the focus ring.
- **Do** ship a reduced-motion alternative for any card motion (crossfade, no rotation).
- **Do** keep art as authored flat SVG in the scene inks, with its provenance in the file.

### Don't:
- **Don't** handwrite anything on the table; Reenie Beanie is for writing on cards.
- **Don't** add shadows to buttons, captions or the table; the stacked letter extrusion belongs to the greeting letters only.
- **Don't** set small letterspaced caps above headings on the table; tracked caps are printed postal matter (the "POST CARD" label, the postmark ring).
- **Don't** use the red and blue airmail stripes anywhere but a card back's edge.
- **Don't** load fonts or images from external hosts.
