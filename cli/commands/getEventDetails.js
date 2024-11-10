import axios from "axios";
import { URL } from "../config.js";

// Fetches and displays details of a specific event by ID
async function fetchEventDetails(eventId) {
    try {
        const response = await axios.get(`${URL}/events/${eventId}`);
        const event = response.data;
        console.log(`Event Details for "${event.name}":`);
        console.log(`Location: ${event.location}`);
        console.log(`Date: ${event.date}`);
        console.log(`Description: ${event.description}`);
        console.log(`Price: ${event.price || "Free"}`);
        console.log(`Max Participants: ${event.max || "Unlimited"}`);
        console.log(`Private Event: ${event.eventPrivate ? "Yes" : "No"}`);
    } catch (error) {
        if (error.response) {
            console.error("Error fetching event details:", error.response.data.message || error.response.data);
        } else {
            console.error("Network error or server not reachable:", error.message);
        }
    }
}

// Registers a command for fetching event details
export function getEventDetails(program) {
    program
        .command("show <eventId>")
        .description("Show details of a specific event")
        .action(fetchEventDetails);
}