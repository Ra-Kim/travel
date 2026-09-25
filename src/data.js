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
//   focus     - which part of the art to keep when the card is cropped tall on phones
//   stamp     - the stamp on the back: its picture, colour and lettering colour
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
        focus: "12%",
        stamp: { art: "mountain", color: "#c23a22", ink: "#ffffff" },
        message:
            "Mount Fuji stands 3,776 metres tall, the highest mountain in Japan and the single most popular sight in the country, for Japanese and foreign visitors alike. Wish you were here!",
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
        focus: "35%",
        stamp: { art: "sails", color: "#2b54b8", ink: "#ffffff" },
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
        focus: "30%",
        stamp: { art: "pool", color: "#1a7a68", ink: "#ffffff" },
        message:
            "I made myself a promise: get in that pool. I was tired, I needed rest, and I was not going to run myself into the ground. Thanks for understanding.",
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
        focus: "40%",
        stamp: { art: "fountain", color: "#f2a541", ink: "#1b2233" },
        message:
            "One of the standout spots in Port Harcourt, the Garden City. It is famous for its glamorous grounds and a reputation for being easy on the pocket, so it feels like a great day out for less.",
    },
];

export default data;
