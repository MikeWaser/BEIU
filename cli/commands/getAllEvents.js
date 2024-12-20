import axios from "axios";
import { URL } from "../config.js";

async function listEvents() {
    try {
        const response = await axios.get(`${URL}/events/public`);
        const events = response.data;

        if (!events.length) {
            console.log("Inga publika event hittades.");
            return;
        }

        events.forEach((event, index) => {
            console.log(`${index + 1}. ${event.name} (${event.date || "Ej specificerat"})`);
        });
    } catch (error) {
        console.error("Kunde inte hämta event:", error.message);
    }
}

export function getAllEvents(program) {
    program
        .command("list")
        .description("Lista alla publika event")
        .action(listEvents);
}