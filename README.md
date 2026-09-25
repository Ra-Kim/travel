# my travel journal.

A small React site where each trip is a vintage postcard. The front has a large "Greetings from" illustration. Turn a card over to read the handwritten note, the stamp, the postmark with the dates, and a link to the place on Google Maps.

This was my second React project. It's where I learned props, reusable components and rendering a list from data.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or 20.

```bash
npm install
npm start
```

Then open http://localhost:3000. Run `npm run build` to make a production build in `build/`.

## Add or edit a trip

All trips live in [`src/data.js`](src/data.js). Each one looks like this:

```js
{
    id: 5,
    place: "Olumo Rock",
    greeting: "Abeokuta",        // the big letters on the front
    country: "Nigeria",
    start: "2024-03-02",         // YYYY-MM-DD
    end: "2024-03-03",
    mapQuery: "Olumo Rock, Abeokuta, Nigeria",
    art: someArt,                // an illustration from src/assets/art
    photo: null,                 // or your own photo (see below)
    stamp: { icon: "mountains", color: "#e2522f" },
    message: "What you'd write on the back of the card.",
}
```

The cards are sorted oldest first, and the headline counts them for you.

### Use your own photos

1. Put the image in `src/assets/photos/`, for example `fuji.jpg`.
2. At the top of `src/data.js`, add `import fujiPhoto from "./assets/photos/fuji.jpg";`
3. On that trip, set `photo: fujiPhoto`.

If a photo ever fails to load, the card falls back to its illustration, so nothing shows up broken.

## How it's built

- `App.js` sorts the trips and lays out the page.
- `HeadSection.js` is the wordmark and intro.
- `MainSection.js` renders one `Card` per trip.
- `Card.js` is the postcard. It holds `useState` for the flip, and falls back from photo to illustration.
- `Postmark.js` is the round postmark SVG.
- `utils.js` formats dates and builds Google Maps links.
- `styles.css` holds all the styling. It uses CSS variables for light and dark mode, container query units so the postcard scales, a 3D flip, and a crossfade for people who prefer reduced motion.

Fonts are installed from npm, so the site works offline: Bungee, Reenie Beanie and Bricolage Grotesque. Icons come from Phosphor.

The design was made with the [impeccable](https://github.com/pbakaus/impeccable) and [taste](https://github.com/Leonxlnx/taste-skill) Claude Code skills, which live in `.claude/skills/`.
