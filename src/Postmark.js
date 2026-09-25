import React from "react";
import { formatPostmark } from "./utils";

// A round postmark cancelled over the stamp: country around the top,
// the trip's start date across the middle, and wavy cancellation lines.
export default function Postmark(props) {
    const pathId = React.useId();

    return (
        <svg className="postmark" viewBox="0 0 160 100" aria-hidden="true">
            <defs>
                <path id={pathId} d="M17 50 A33 33 0 0 1 83 50" />
            </defs>
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <text className="postmark-ring">
                <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
                    {props.country.toUpperCase()}
                </textPath>
            </text>
            <text className="postmark-date" x="50" y="60" textAnchor="middle">
                {formatPostmark(props.date)}
            </text>
            <path d="M92 34 q8 -6 16 0 t16 0 t16 0 t16 0" />
            <path d="M92 50 q8 -6 16 0 t16 0 t16 0 t16 0" />
            <path d="M92 66 q8 -6 16 0 t16 0 t16 0 t16 0" />
        </svg>
    );
}
