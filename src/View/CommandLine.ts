import { parseUserCommand } from "../Controllers/parsers";
import { getUserInput } from "../Controllers/parsers";
import { executeUserCommand } from "../Controllers/parsers";
//const readline = require("readline");

export async function commandUI() {
  let gameOn = true;
  while (gameOn == true) {
    let userString: string = await getUserInput();
    let userCommand = parseUserCommand(userString);
    let status = executeUserCommand(userCommand);

    status.message ? console.log(status.message) : null;
    gameOn = status.continue;
  }
}
