//1
import axios from "axios";
import { URL } from "../config.js";

// Funktion för att lägger till avändare i event
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

// Lägger till kommandot för att lägga till användare i event
export function addUser(program) {
    program
        .command("register <eventId> <username>")
        .description("Register a user to an event")
        .action(addUserToEvent);
}

/* 
import axios from "axios"; // För HTTP-förfrågningar
import { URL } from "../config.js"; // Backend-URL från konfigurationen

// Lägg till en användare till ett event
async function addUserToEvent(eventId, username) {
    try {
        // Skicka en PUT-förfrågan till backend för att registrera användaren
        const response = await axios.put(`${URL}/events/${eventId}/register`, { username });

        // Bekräftelsemeddelande
        console.log(`Användaren ${username} registrerades till eventet "${response.data.name}".`);
    } catch (err) {
        // Felhantering: Om backend returnerar ett fel eller nätverket misslyckas
        if (err.response) {
            console.error("Fel vid registrering:", err.response.data.message || err.response.data);
        } else {
            console.error("Ett nätverksfel inträffade:", err.message);
        }
    }
}

// Registrerar kommandot "register" för CLI
export function addUser(program) {
    program
        .command("register <eventId> <username>")
        .description("Registrera en användare till ett event")
        .action(addUserToEvent);
} */