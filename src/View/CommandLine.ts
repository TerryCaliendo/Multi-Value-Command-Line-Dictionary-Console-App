import { parseUserCommand } from "../Controllers/functions/Controller.Functions";
import { getUserInputAsync as getUserInputAsync } from "./functions/View.Functions";
import { executeUserCommand } from "../Controllers/functions/Controller.Functions";
import { executionCommands } from "../types/controller.types";
import { formatArrayForNumberedOutput } from "./functions/View.Functions";

// Creates a command line UI
export async function commandUI() {
  let gameOn = true;
  while (gameOn == true) {
    let userString: string = await getUserInputAsync();
    let userCommand = parseUserCommand(userString);
    let status = executeUserCommand(userCommand);

    // if a successful response
    //  AND  its a keys or members command
    if (
      status.success == true &&
      (status.command == executionCommands.keys ||
        status.command == executionCommands.members)
    ) {
      // TODO: #KNE839 need to affix this to keys command
      // @ts-ignore
      console.log(formatArrayForNumberedOutput(status.payload));
      // delete status.payload;
    }

    // Show the status to the user
    if (status.message) {
      console.log(status.message);
    }
    gameOn = status.continue;
  }
}
