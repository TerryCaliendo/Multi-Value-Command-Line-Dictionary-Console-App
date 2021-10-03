import { parseUserCommand } from "../Controllers/functions/Controller.Functions";
import { getUserInputAsync as getUserInputAsync } from "./functions/View.Functions";
import { executeUserCommand } from "../Controllers/functions/Controller.Functions";
import { executionCommands } from "../types/controller.types";
import { formatKeys } from "./functions/View.Functions";

// Creates a command line UI
export async function commandUI() {
  let gameOn = true;
  while (gameOn == true) {
    let userString: string = await getUserInputAsync();
    let userCommand = parseUserCommand(userString);
    let status = executeUserCommand(userCommand);

    // if add then format the ouput
    if (status.command == executionCommands.keys) {
      // TODO: #KNE839 need to affix this to keys command
      // @ts-ignore
      console.log(formatKeys(status.message));
      delete status.message;
    }

    // Show the status to the user
    status.message ? console.log(status.message) : null;
    gameOn = status.continue;
  }
}
