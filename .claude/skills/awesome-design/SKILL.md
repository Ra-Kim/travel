---
name: awesome-design
description: Library of 70+ DESIGN.md files describing the visual language of well-known sites (Apple, Airbnb, Stripe, Linear, Notion, Spotify, Vercel and more) — colors, type, spacing, components. Use when the user wants a page to look like a named brand or site, asks for design inspiration or a reference style, or wants a DESIGN.md for this project.
---

# Awesome DESIGN.md

Each file in `designs/` is a design-language analysis of one site: a YAML
front-matter block of tokens (colors, typography, radii, spacing) followed by
prose on layout, components and do/don't rules.

Source: https://github.com/VoltAgent/awesome-design-md (MIT, see LICENSE).

## How to use

1. Pick the design that matches the user's request. If they name a brand, use
   that file. If they only describe a mood, read the `description` line of a
   few candidates (`head -5 designs/*.md`) and suggest two or three.
2. Read the whole chosen file before writing any UI code.
3. Apply its tokens as CSS custom properties and follow its layout and
   component rules. Adapt it to this project's content; don't copy logos,
   trademarks or brand names into the UI.
4. If the user wants it to stick, copy the file to `DESIGN.md` at the repo
   root so other skills (e.g. impeccable) pick it up.

## Available designs

airbnb, airtable, apple, binance, bmw-m, bmw, bugatti, cal, claude, clay, clickhouse, cohere, coinbase, composio, cursor, dell-1996, elevenlabs, expo, ferrari, figma, framer, hashicorp, hp, ibm, intercom, kraken, lamborghini, linear.app, lovable, mastercard, meta, minimax, mintlify, miro, mistral.ai, mongodb, nike, nintendo-2001, notion, nvidia, ollama, opencode.ai, pinterest, playstation, posthog, raycast, renault, replicate, resend, revolut, runwayml, sanity, sentry, shopify, slack, spacex, spotify, starbucks, stripe, supabase, superhuman, tesla, theverge, together.ai, uber, vercel, vodafone, voltagent, warp, webflow, wired, wise, x.ai, zapier
