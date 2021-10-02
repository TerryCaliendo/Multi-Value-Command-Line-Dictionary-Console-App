import { parseUserCommand } from "../Controllers/functions/Controller.Functions";
import { getUserInputAsync as getUserInputAsync } from "./functions/View.Functions";
import { executeUserCommand } from "../Controllers/functions/Controller.Functions";

// Creates a command line UI
export async function commandUI() {
  let gameOn = true;
  while (gameOn == true) {
    let userString: string = await getUserInputAsync();
    let userCommand = parseUserCommand(userString);
    let status = executeUserCommand(userCommand);

    // Show the status to the user
    // TODO: console.log should be abstracted to a UI function
    status.message ? console.log(status.message) : null;
    gameOn = status.continue;
  }
}
