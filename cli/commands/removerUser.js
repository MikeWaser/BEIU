import axios from "axios";
import { URL } from "../config.js";

// Funktion för att ta bort en användare från ett event
async function removeUserFromEvent(eventId, username) {
  try {
    // Skickar en PUT-förfrågan till API:et
    const response = await axios.put(`${URL}/events/unjoin/${eventId}`, {
      attendent: username,
      paid: true,
    });

    // Bekräftelse i konsolen
    console.log(
      `Användaren "${username}" togs bort från eventet "${response.data.name}".`
    );
  } catch (error) {
    // Loggar fel om något går snett
    console.error(
      "Ett fel uppstod:",
      error.response?.data?.message || error.message
    );
  }
}

// Registrerar CLI-kommandot "unregister"
export function removeUser(program) {
  program
    .command("unregister <eventId> <username>")
    .description("Ta bort en användare från ett event")
    .action(removeUserFromEvent);
}
