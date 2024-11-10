import axios from "axios";
import { URL } from "../config.js";

async function addUserToEvent(eventId, username) {
    try {
        const response = await axios.put(`${URL}/events/join/${eventId}`, { attendent: username, paid: true });
        console.log(`User ${username} added to event "${response.data.name}" successfully.`);
    } catch (error) {
        if (error.response) {
            console.error("Error adding user to event:", error.response.data.message || error.response.data);
        } else {
            console.error("Network error or server not reachable:", error.message);
        }
    }
}

export function addUser(program) {
    program
        .command("register <eventId> <username>")
        .description("Register a user to an event")
        .action(addUserToEvent);
}