---
version: 1
slug: "src-app-js"
primary_target: "src/App.js"
related_targets: ["src/Card.js"]
---

## Scope
The single page `src/App.js` and its components. Visitor mode: Experience. The artifacts, the trips, lead from the first viewport.

## Audience and job
Friends browse the owner's trips. Portfolio reviewers judge the craft. Nobody operates anything: they look, flip, and open Maps.

## Constraints
CRA/React 18. It must run offline locally. There are no external image hosts: art is authored SVG in `src/assets`, with an optional `photo` per trip that falls back to the art on error. Fonts are self-hosted via @fontsource.

## Direction contract
THESIS: Every trip is a physical postcard sent home, not a blog card in a grid. The page refuses the category default of photo tiles with a date and an excerpt.
OWN-WORLD: A deep airmail-blue table surface. Card-stock postcards with an airmail red/blue chevron edge. Large-letter "Greetings from" fronts over flat lithograph-style scenes in saturated inks (vermilion, marigold, jade, postal blue). Backs carry a handwritten message, a perforated country stamp, a circular postmark with the dates, and a ruled address block.
STORY: The visitor sees a stack of postcards, flips each one to read the note, learns where and when the trip was, and can open the place in Maps.
FIRST VIEWPORT: Masthead wordmark "my travel journal." at the top left. A large display line saying these are postcards from four trips, left-aligned. The first postcard at full width, tilted about 2°, with its Flip control visible.
FORM: Postcards, grounded list position 4, seed key 0e43f31c (degraded roll, no challengers).
SIGNATURE INTERACTION: A 3D card flip on a real button (aria-pressed). Reduced motion swaps it for a crossfade.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
