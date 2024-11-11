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