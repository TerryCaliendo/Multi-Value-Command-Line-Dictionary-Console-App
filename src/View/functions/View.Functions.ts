import * as readline from "readline";

// read a line from the user input
export function getUserInputAsync(): Promise<string> {
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

// format the output of the keys.
export function formatArrayForNumberedOutput(keys: Array<string>): string {
  return keys
    .map((key, index) => {
      return `${index + 1}) ${key}`;
    })
    .join("\n");
}
