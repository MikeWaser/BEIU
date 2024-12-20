import { Command } from "commander";
import { getAllEvents } from "./commands/getAllEvents.js";
import { getEventDetails } from "./commands/getEventDetails.js";
import { addUser } from "./commands/addUser.js";
import { removeUser } from "./commands/removerUser.js";

const program = new Command();

addUser(program);
getAllEvents(program);
getEventDetails(program);
removeUser(program);

program.parse(process.argv);