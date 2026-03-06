import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Holiday } from "../interfaces/holiday";

function getHolidayEmoji(holiday: Holiday): string {
    switch (holiday) {
        case "Halloween":
            return "🎃";
        case "Christmas":
            return "🎄";
        case "Thanksgiving":
            return "🦃";
        case "Easter":
            return "🐰";
        case "New Year":
            return "🎆";
    }
}
//Retrieves the next holiday in alphabetical order
function getNextHolidayByAlph(holiday: Holiday): Holiday {
    const holidays: Holiday[] = [
        "Christmas",
        "Easter",
        "Halloween",
        "New Year",
        "Thanksgiving",
    ];
    const currentIndex = holidays.indexOf(holiday);
    const nextIndex = (currentIndex + 1) % holidays.length;
    return holidays[nextIndex];
}
//Retrieves the next holiday in the order they occur in the year
function getNextHolidayByYear(holiday: Holiday): Holiday {
    const holidays: Holiday[] = [
        "New Year",
        "Easter",
        "Halloween",
        "Thanksgiving",
        "Christmas",
    ];
    const currentIndex = holidays.indexOf(holiday);
    const nextIndex = (currentIndex + 1) % holidays.length;
    return holidays[nextIndex];
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Halloween");
    return (
        <div>
            <div>Holiday: {getHolidayEmoji(holiday)}</div>
            <Button
                onClick={() => {
                    setHoliday(getNextHolidayByAlph(holiday));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(getNextHolidayByYear(holiday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
