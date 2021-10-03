import * as readline from "readline";

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
// NOTE: string formatting shouldn't be in the database layer!  Should pass in a formatter!
export function formatArrayForNumberedOutput(keys: Array<string>): string {
  return keys
    .map((key, index) => {
      return `${index}) ${key}`;
    })
    .join("\n");
}
