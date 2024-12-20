import axios from "axios";
import { URL } from "../config.js";

// Funktion för att lägga till en användare i ett event
async function addUserToEvent(eventId, username) {
  try {
    // Skickar PUT-förfrågan till backend
    const { data } = await axios.put(`${URL}/events/join/${eventId}`, {
      attendent: username,
      paid: true, // Bekräftar att användaren har betalat
    });

    // Bekräftelsemeddelande
    console.log(
      `✅ Användaren "${username}" har lagts till i eventet "${data.name}".`
    );
  } catch (err) {
    // Hantering av API- och nätverksfel
    const errorMessage = err.response?.data?.message || err.message;
    console.error("❌ Ett fel uppstod vid registrering:", errorMessage);
  }
}

// Registrerar CLI-kommandot "register"
export function addUser(program) {
  program
    .command("register <eventId> <username>")
    .description("Lägg till en användare i ett event")
    .action((eventId, username) => {
      addUserToEvent(eventId, username);
    });
}