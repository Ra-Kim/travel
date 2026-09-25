const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(iso) {
    const [year, month, day] = iso.split("-").map(Number);
    return { year, month: MONTHS[month - 1], day };
}

// "12 - 24 Jan 2021", "27 May - 8 Jun 2021", "30 Dec 2021 - 2 Jan 2022"
export function formatDateRange(startIso, endIso) {
    const start = parse(startIso);
    const end = parse(endIso);
    const endText = `${end.day} ${end.month} ${end.year}`;

    if (start.year !== end.year) {
        return `${start.day} ${start.month} ${start.year} - ${endText}`;
    }
    if (start.month !== end.month) {
        return `${start.day} ${start.month} - ${endText}`;
    }
    return `${start.day} - ${endText}`;
}

// "12 JAN 2021", for the postmark
export function formatPostmark(iso) {
    const { year, month, day } = parse(iso);
    return `${day} ${month.toUpperCase()} ${year}`;
}

export function mapsUrl(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
