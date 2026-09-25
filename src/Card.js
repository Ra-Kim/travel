import React from "react";
import {
    ArrowsClockwise,
    MapPin,
    MaskHappy,
    Mountains,
    SwimmingPool,
    Tree,
} from "@phosphor-icons/react";
import Postmark from "./Postmark";
import { formatDateRange, mapsUrl } from "./utils";

const STAMP_ICONS = {
    mountains: Mountains,
    theatre: MaskHappy,
    pool: SwimmingPool,
    park: Tree,
};

// Sizes the big front letters by the longest word, so long names like
// "Port Harcourt" wrap onto two lines instead of shrinking to nothing.
function greetingSize(text) {
    const longest = Math.max(...text.split(" ").map(word => word.length));
    return `${Math.min(17, 70 / longest)}cqi`;
}

export default function Card(props) {
    const [flipped, setFlipped] = React.useState(false);
    const [photoFailed, setPhotoFailed] = React.useState(false);

    const StampIcon = STAMP_ICONS[props.stamp.icon] || Mountains;
    const dates = formatDateRange(props.start, props.end);
    const usePhoto = props.photo && !photoFailed;

    function toggle() {
        setFlipped(current => !current);
    }

    return (
        <article className="trip" aria-labelledby={`trip-${props.id}-title`}>
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
                                style={{ fontSize: greetingSize(props.greeting) }}
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
                            <div className="stamp" style={{ "--stamp": props.stamp.color }}>
                                <StampIcon className="stamp-icon" weight="bold" aria-hidden="true" />
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
