import React from "react";
import Card from "./Card";
import data from "./data";

export default function MainSection(){
    const cards = data.map(card => {
        return <Card 
        key = {card.id}
        image = {card.imgLink}
        country = {card.country}
        title = {card.destination}
        startDate = {card.period.start}
        endDate = {card.period.end}
        description = {card.description}
        />
    })
    return (
        <main>
        {cards}
        </main>
    )
}