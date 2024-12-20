import axios from "axios";
import { URL } from "../config.js";

//Funktion för att ta bort användare från event
async function removeUserFromEvent(eventId, username) {
    try {
        const response = await axios.put(`${URL}/events/unjoin/${eventId}`, { attendent: username, paid: true });
        console.log(`User ${username} removed from event "${response.data.name}" successfully.`);
    } catch (error) {
        if (error.response) {
            console.error("Error removing user from event:", error.response.data.message || error.response.data);
        } else {
            console.error("Network error or server not reachable:", error.message);
        }
    }
}

// Lägger till kommandot för att ta bort användare i event
export function removeUser(program) {
    program
        .command("unregister <eventId> <username>")
        .description("Unregister a user from an event")
        .action(removeUserFromEvent);
}

/* import axios from "axios";
import { URL } from "../config.js"; // URL för API:et

// Avregistrerar en användare från ett event
async function removeUserFromEvent(eventId, userId) {
    try {
        const { data: event } = await axios.post(`${URL}/events/${eventId}/unregister`, { userId }); // Skicka POST-förfrågan
        console.log(`Användaren ${userId} har tagits bort från "${event.name}".`); // Bekräftelsemeddelande
    } catch (err) {
        // Felmeddelande vid misslyckad avregistrering
        console.error("Fel vid avregistrering:", err.response?.data || err.message);
    }
}

// Registrerar "unregister" kommandot i CLI
export function removeUser(program) {
    program
        .command("unregister <eventId> <userId>")
        .description("Avregistrera en användare från ett event")
        .action(removeUserFromEvent);
} */