import * as readline from "readline";

export function getUserInput(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(">", (answer: string) => {
      rl.close();
      resolve(answer);
    });
  });
}
