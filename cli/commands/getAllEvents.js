import axios from "axios";
import { URL } from "../config.js";

// Hämtar och listar alla publika event
async function listEvents() {
    try {
        const { data: events } = await axios.get(`${URL}/events/public`); // Skicka GET-förfrågan till API:et
        
        if (events.length === 0) { // Kontrollera om det finns några event
            console.log("Det finns inga publika event just nu.");
            return;
        }

        console.log("Publika event:");
        // Loopar igenom och skriver ut event
        events.map((event, i) =>
            console.log(`[${i + 1}] ${event.name} - Datum: ${event.date || "Ej angivet"}`)
        );
    } catch (err) {
        // Felmeddelande vid misslyckad hämtning
        console.log("Ett fel uppstod vid hämtning av event:", err.response?.data || err.message);
    }
}

// Registrerar "list" kommandot i CLI
export function getAllEvents(program) {
    program
        .command("list")
        .description("Lista publika event")
        .action(listEvents);
}