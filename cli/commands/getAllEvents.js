import axios from "axios";
import { URL } from "../config.js";

// Fetchar och listar alla offentliga events
async function listPublicEvents() {
    try {
        // Skicka en GET-förfrågan till API:et för att hämta offentliga events
        const response = await axios.get(`${URL}/events/public`);
        console.log("Public Events:");
        response.data.forEach((event, index) => {
            console.log(`${index + 1}. ${event.name} - ${event.location} on ${event.date}`);
        });
    } catch (error) {
       // Kollar om det finns något fel i svaret från API:et
        if (error.response) {
            console.error("Error fetching public events:", error.response.data.message || error.response.data);
        } else {
            console.error("Network error or server not reachable:", error.message);
        }
    }
}

// Exporterar en funktion för att registrera kommandot "list" med programmet för att lista alla offentliga events
export function getAllEvents (program){
program
        .command("list")
        .description("List all public events")
        .action(listPublicEvents);
    }