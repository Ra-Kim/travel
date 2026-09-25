import React from "react";
import Card from "./Card";

export default function MainSection(props) {
    const cards = props.trips.map(trip => {
        return <Card key={trip.id} {...trip} />;
    });

    return (
        <main className="page-width trips">
            {cards}
        </main>
    );
}
