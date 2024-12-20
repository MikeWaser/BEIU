/* import axios from "axios";
import { URL } from "../config.js";

// Hämtar och listar alla offentliga events
async function listPublicEvents() {
    try {
        // Skicka en förfrågan till api:et för att hämta offentliga events
        const response = await axios.get(`${URL}/events/public`);
        console.log("Public Events:");
        response.data.forEach((event, index) => {
            console.log(`${index + 1}. ${event.name} - ${event.location} on ${event.date}`);
        });
    } catch (error) {
       // Kollar om det finns något fel i svaret från api:et och skickar tillbaka felmeddelanden isf
        if (error.response) {
            console.error("Error fetching public events:", error.response.data.message || error.response.data);
        } else {
            console.error("Network error or server not reachable:", error.message);
        }
    }
}

// Funktion för att registrera kommandot "list" med programmet för att lista alla offentliga events
export function getAllEvents (program){
program
        .command("list")
        .description("List all public events")
        .action(listPublicEvents);
    } */

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