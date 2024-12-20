import axios from "axios";
import { URL } from "../config.js";

// Hämtar och visar detaljer för ett specifikt event
async function showDetails(eventId) {
  try {
    const { data: event } = await axios.get(`${URL}/events/${eventId}`); // Skicka GET-förfrågan med eventId
    console.log(`
        Detaljer för event:
        Namn: ${event.name} 
        Datum: ${event.date || "Ej angivet"}
        Plats: ${event.location || "Ingen plats"} 
        Beskrivning: ${event.description || "Ingen beskrivning tillgänglig"}
        Max detagare: ${event.max || "Obegränsat"}
        Pris: ${event.price || "Gratis"}
        Privat: ${event.eventPrivate ? "Ja" : "Nej"}
        `);
  } catch (err) {
    // Felmeddelande vid misslyckad hämtning
    console.error(
      "Kunde inte hämta detaljer:",
      err.response?.data || err.message
    );
  }
}

// Registrerar "show" kommandot i CLI
export function getEventDetails(program) {
  program
    .command("show <eventId>")
    .description("Visa detaljer för ett event")
    .action(showDetails);
}
