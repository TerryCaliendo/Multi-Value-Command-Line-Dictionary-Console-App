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
    message: Array.from(database.keys()),
    command: executionCommands.keys,
  };
}

/////////////////////
// MEMBERS
////////////////////
export function databaseMembers(collectionName: string): executionStatus {
  let collection = database.get(collectionName);
  if (collection) {
    return {
      success: true,
      continue: true,
      message: collection,
      command: executionCommands.members,
    };
  } else {
    return {
      success: false,
      continue: true,
      message: databaseErrorMessages.members_CollectionNotFound,
      command: executionCommands.members,
    };
  }
}
