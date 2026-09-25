import React from "react";
import HeadSection from "./HeadSection";
import MainSection from "./MainSection";
import Footer from "./Footer";
import data from "./data";

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

export default function App() {
    // Oldest trip first, like a stack of postcards collected over time.
    const trips = [...data].sort((a, b) => a.start.localeCompare(b.start));
    const tripCount = numberWords[trips.length] || trips.length;

    return (
        <div className="container">
            <HeadSection tripCount={tripCount} />
            <MainSection trips={trips} />
            <Footer />
        </div>
    );
}
