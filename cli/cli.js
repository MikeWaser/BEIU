import { Command } from "commander";
import { getAllEvents } from "./commands/getAllEvents.js";
import { getEventDetails } from "./commands/getEventDetails.js";
import { addUser } from "./commands/addUser.js";
import { removeUser } from "./commands/removerUser.js";

const program = new Command();

getAllEvents(program);
getEventDetails(program);
addUser(program);
removeUser(program);

program.parse(process.argv);