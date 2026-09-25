import React from "react";
import { ArrowsClockwise, MapPin } from "@phosphor-icons/react";
import Postmark from "./Postmark";
import StampArt from "./StampArt";
import { formatDateRange, mapsUrl } from "./utils";

// Sizes the big front letters so the longest word spans most of the card.
// Long names like "Port Harcourt" wrap onto two lines instead of shrinking.
function greetingSize(text) {
    const longest = Math.max(...text.split(" ").map(word => word.length));
    return `${Math.min(25, 84 / (longest * 0.8))}cqi`;
}

export default function Card(props) {
    const [flipped, setFlipped] = React.useState(false);
    const [photoFailed, setPhotoFailed] = React.useState(false);

    const dates = formatDateRange(props.start, props.end);
    const usePhoto = props.photo && !photoFailed;

    function toggle() {
        setFlipped(current => !current);
    }

    return (
        <article
            className={`trip${flipped ? " is-open" : ""}`}
            aria-labelledby={`trip-${props.id}-title`}
            style={{ "--focus": props.focus || "50%" }}
        >
            <div className={`postcard${flipped ? " is-flipped" : ""}`} onClick={toggle}>
                <div className="postcard-inner">
                    <div className="postcard-face postcard-front" inert={flipped ? "" : undefined}>
                        <img
                            className="postcard-art"
                            src={usePhoto ? props.photo : props.art}
                            alt={usePhoto ? `${props.place}, ${props.country}` : ""}
                            onError={() => setPhotoFailed(true)}
                        />
                        <p className="greeting" aria-hidden="true">
                            <span className="greeting-script">Greetings from</span>
                            <span
                                className="greeting-letters"
                                data-text={props.greeting}
                                style={{
                                    fontSize: greetingSize(props.greeting),
                                    "--letter-fill": `url(${usePhoto ? props.photo : props.art})`,
                                }}
                            >
                                {props.greeting}
                            </span>
                        </p>
                    </div>

                    <div className="postcard-face postcard-back" inert={flipped ? undefined : ""}>
                        <p className="back-label">Post card</p>
                        <p className="back-message">{props.message}</p>
                        <div className="back-divider" aria-hidden="true" />
                        <div className="back-stamp-area">
                            <div
                                className="stamp"
                                style={{ "--stamp": props.stamp.color, "--stamp-ink": props.stamp.ink }}
                            >
                                <StampArt name={props.stamp.art} />
                                <span className="stamp-country">{props.country}</span>
                            </div>
                            <Postmark country={props.country} date={props.start} />
                        </div>
                        <div className="back-address">
                            <p className="address-line">To everyone back home</p>
                            <p className="address-line">{props.place}, {props.country}</p>
                            <a
                                className="address-line maps-link"
                                href={mapsUrl(props.mapQuery)}
                                target="_blank"
                                rel="noreferrer"
                                onClick={event => event.stopPropagation()}
                            >
                                <MapPin weight="fill" aria-hidden="true" />
                                Find it on Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trip-caption">
                <div>
                    <h2 className="trip-title" id={`trip-${props.id}-title`}>{props.place}</h2>
                    <p className="trip-meta">
                        {props.country}, <time dateTime={props.start}>{dates}</time>
                    </p>
                </div>
                <button
                    type="button"
                    className="flip-button"
                    aria-pressed={flipped}
                    onClick={toggle}
                >
                    <ArrowsClockwise weight="bold" aria-hidden="true" />
                    {flipped ? "Turn back over" : "Read the back"}
                </button>
            </div>
        </article>
    );
}
