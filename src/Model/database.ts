import { executionStatus } from "../types/commands";

let database = new Map<string, [string]>();

export function databaseAdd(key: string, value: string): executionStatus {
  console.log("adding to database", key, value);
  let foundKey = database.get(key);
  if (foundKey) foundKey.push(value);
  else database.set(key, [value]);
  console.log("database:", database.entries());
  return { success: true, continue: true };
}
