import { exec } from "child_process";
import { executionCommands, executionStatus } from "../types/controller.types";
import { databaseMapType } from "../types/database.types";
import { databaseErrorMessages } from "../types/database.types";
import { databaseSuccessMessages } from "../types/database.types";

let database: databaseMapType = new Map();

/////////////////////
// ADD
/////////////////////
// Adds a Member to the collection for a given key
// Displays an error if the member already exixts for the key
export function databaseAdd(
  collectionName: string,
  memberName: string
): executionStatus {
  let collection = database.get(collectionName);
  // If the member already exists, return an error
  if (
    collection?.find((member) => {
      return member === memberName;
    }) != undefined
  )
    return {
      success: false,
      continue: true,
      message: databaseErrorMessages.add_MemberExists,
      command: executionCommands.add,
    };
  // Collection name is found, Add the new member
  if (collection) collection.push(memberName);
  // Collection name is not found, add the new collection with the new member in a new array
  else database.set(collectionName, [memberName]);
  // console.log("database:", database.entries());
  return {
    success: true,
    continue: true,
    message: databaseSuccessMessages.add,
    command: executionCommands.add,
  };
}

/////////////////////
// KEYS
////////////////////
export function databaseKeys(): executionStatus {
  return {
    success: true,
    continue: true,
    message: formatDatabaseKeys(database),
    command: executionCommands.keys,
  };
}
// format the output of the keys.
// NOTE: string formatting shouldn't be in the database layer!  Should pass in a formatter!
function formatDatabaseKeys(collectionMap: databaseMapType): string {
  return Array.from(collectionMap.keys())
    .map((key, index) => {
      return `${index}) ${key}`;
    })
    .join("\n");
}
