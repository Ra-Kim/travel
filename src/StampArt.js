import React from "react";

// Small engraved-style vignettes for the stamps, each drawn from its
// postcard's scene. Drawn in currentColor so the stamp sets the ink.
const VIGNETTES = {
    mountain: (
        <>
            <path d="M4 34 L19 12 L23 10 L27 12 L44 34 Z" fill="currentColor" />
            <path d="M19 12 L23 10 L27 12 L31 17 L28 16 L26 19 L23 16 L20 19 L18 16 L15 17 Z" fill="var(--stamp)" />
            <circle cx="38" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M6 39 H18" /><path d="M24 39 H42" /><path d="M12 43 H34" />
            </g>
        </>
    ),
    sails: (
        <>
            <path d="M18 32 Q20 16 32 10 L34 32 Z" fill="currentColor" />
            <path d="M9 32 Q11 20 21 15 L24 32 Z" fill="currentColor" />
            <path d="M33 32 Q35 23 42 20 L43 32 Z" fill="currentColor" />
            <path d="M5 32 H46 L44 36 H7 Z" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M6 40 H20" /><path d="M26 40 H44" /><path d="M14 44 H36" />
            </g>
        </>
    ),
    pool: (
        <>
            <circle cx="25" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="5" />
            <path d="M25 12 V17 M25 27 V32 M15 22 H20 M30 22 H35" stroke="var(--stamp)" strokeWidth="3" />
            <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 38 q5 -4 10 0 t10 0 t10 0 t10 0" />
                <path d="M4 44 q5 -4 10 0 t10 0 t10 0 t10 0" />
            </g>
        </>
    ),
    fountain: (
        <>
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M25 30 V8" />
                <path d="M25 11 Q15 13 12 29" />
                <path d="M25 11 Q35 13 38 29" />
                <path d="M25 18 Q19 22 18 30" />
                <path d="M25 18 Q31 22 32 30" />
            </g>
            <ellipse cx="25" cy="32" rx="16" ry="4" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M6 41 H20" /><path d="M28 41 H44" />
            </g>
        </>
    ),
};

export default function StampArt(props) {
    return (
        <svg className="stamp-art" viewBox="0 0 50 48" aria-hidden="true">
            {VIGNETTES[props.name] || VIGNETTES.mountain}
        </svg>
    );
}
