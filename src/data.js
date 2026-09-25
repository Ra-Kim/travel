import fujiArt from "./assets/art/fuji.svg";
import sydneyArt from "./assets/art/sydney.svg";
import pleasureParkArt from "./assets/art/pleasure-park.svg";
import equinoxArt from "./assets/art/equinox.svg";

// Each trip is one postcard.
//   greeting  - the big letters on the front ("Greetings from ___")
//   start/end - ISO dates (YYYY-MM-DD). They are formatted for display in utils.js.
//   mapQuery  - what to search for on Google Maps
//   art       - the illustrated front, used whenever there is no photo
//   photo     - optional. To use your own picture, put it in src/assets/photos,
//               import it at the top of this file and set photo: myPhoto.
//               If the photo ever fails to load, the card falls back to the art.
//   stamp     - which icon and colour the stamp on the back uses
const data = [
    {
        id: 1,
        place: "Mount Fuji",
        greeting: "Fuji",
        country: "Japan",
        start: "2021-01-12",
        end: "2021-01-24",
        mapQuery: "Mount Fuji, Japan",
        art: fujiArt,
        photo: null,
        stamp: { icon: "mountains", color: "#e2522f" },
        message:
            "Mount Fuji stands 3,776 metres tall, the highest peak in Japan and the country's favourite sight for locals and visitors alike. In January the snow reaches a long way down the slopes. Wish you were here!",
    },
    {
        id: 2,
        place: "Sydney Opera House",
        greeting: "Sydney",
        country: "Australia",
        start: "2021-05-27",
        end: "2021-06-08",
        mapQuery: "Sydney Opera House, Sydney, Australia",
        art: sydneyArt,
        photo: null,
        stamp: { icon: "theatre", color: "#2b54b8" },
        message:
            "The Opera House sits right on the edge of Sydney Harbour: a performing arts centre with several venues under those famous sails. It is one of the best-known buildings of the 20th century. See you soon!",
    },
    {
        id: 3,
        place: "Equinox Hotels",
        greeting: "Equinox",
        country: "Nigeria",
        start: "2022-05-15",
        end: "2022-05-16",
        mapQuery: "Equinox Hotels, Nigeria",
        art: equinoxArt,
        photo: null,
        stamp: { icon: "pool", color: "#1f8f7a" },
        message:
            "I promised myself a swim, and I kept that promise. Two quiet days of pool, sunshine and sleep, because sometimes the whole point of a trip is finally getting some rest.",
    },
    {
        id: 4,
        place: "Pleasure Park",
        greeting: "Port Harcourt",
        country: "Nigeria",
        start: "2023-01-27",
        end: "2023-01-28",
        mapQuery: "Pleasure Park, Port Harcourt, Nigeria",
        art: pleasureParkArt,
        photo: null,
        stamp: { icon: "park", color: "#f2a541" },
        message:
            "One of the standout spots in the Garden City. The grounds are beautiful and well kept, and the prices are fair, so you get a proper day out without a big bill at the end.",
    },
];

export default data;
