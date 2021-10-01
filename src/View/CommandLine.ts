import { parseUserCommand } from "../Controllers/functions/Controller.Functions";
import { getUserInputAsync as getUserInputAsync } from "./functions/View.Functions";
import { executeUserCommand } from "../Controllers/functions/Controller.Functions";

export async function commandUI() {
  let gameOn = true;
  while (gameOn == true) {
    let userString: string = await getUserInputAsync();
    let userCommand = parseUserCommand(userString);
    let status = executeUserCommand(userCommand);

    status.message ? console.log(status.message) : null;
    gameOn = status.continue;
  }
}
