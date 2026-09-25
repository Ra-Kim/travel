# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two audiences, confirmed by the owner:
- The owner, plus friends and family, who use the site to remember and share their trips.
- Recruiters and other developers who look at it as a portfolio piece, to judge the owner's React and front-end craft.

## Product Purpose
A personal travel journal: one entry per trip, each with the place, the country, the dates, a photo and a short write-up. Success means friends enjoy browsing it, and a reviewer sees a finished, deliberate site rather than a tutorial exercise.

## Positioning
It is one person's own record of places they have been, in their own voice, with Nigeria sitting alongside the international landmarks. It is not a travel-booking or destination-guide site.

## Operating Context
Mostly viewed on phones, shared by link, and opened from a portfolio or CV. It is a single page that is read, not operated.

## Capabilities and Constraints
- Create React App (react-scripts 5) with React 18. It is deployed as a static site (the owner believes on Netlify) and must run locally with `npm install && npm start`.
- Trip data lives in `src/data.js`. There is no backend, and the site takes no user input yet. Adding trips through the UI is a possible later step and is not part of this work.
- Images must not depend on links that expire. Local assets are preferred.

## Brand Commitments
- The name is "my travel journal." (lowercase, with the full stop).
- The owner asked for the copy to be tidied into the polished voice of a real site.

## Evidence on Hand
- Four trips: Mount Fuji (Japan, Jan 2021), Sydney Opera House (Australia, May–Jun 2021), Pleasure Park, Port Harcourt (Nigeria, Jan 2023) and Equinox Hotels (Nigeria, May 2022).
- No real photos are in the repo. The owner's Facebook photo link has expired, and the owner approved placeholders for now. Any image standing in for the owner's own photo must not be presented as theirs.

## Product Principles
- Every entry should read like a real memory, not stock content.
- It must work offline and locally, with nothing that silently breaks.
- It should be simple enough to show off good React fundamentals: props, reusable components, and data-driven rendering.
