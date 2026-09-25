import React from "react";
import { GlobeHemisphereEast } from "@phosphor-icons/react";

export default function HeadSection(props) {
    return (
        <header className="masthead">
            <div className="page-width">
                <p className="wordmark">
                    <GlobeHemisphereEast weight="fill" aria-hidden="true" />
                    my travel journal.
                </p>
                <h1 className="intro-title">
                    {props.tripCount} trips, sent home as postcards.
                </h1>
                <p className="intro-text">
                    Japan, Australia and two stops closer to home in Nigeria.
                    Turn a card over to read the back.
                </p>
            </div>
        </header>
    );
}
