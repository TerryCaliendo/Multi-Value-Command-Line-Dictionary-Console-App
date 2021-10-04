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
): executionStatus<executionCommands.add> {
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
      payload: null,
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
    payload: null,
  };
}

/////////////////////
// KEYS
////////////////////
export function databaseKeys(): executionStatus<executionCommands.keys> {
  return {
    success: true,
    continue: true,
    payload: Array.from(database.keys()),
    command: executionCommands.keys,
    message: "",
  };
}

/////////////////////
// MEMBERS
////////////////////
export function databaseMembers(
  collectionName: string
): executionStatus<executionCommands.members> {
  let collection = database.get(collectionName);
  if (collection) {
    return {
      success: true,
      continue: true,
      payload: collection,
      command: executionCommands.members,
      message: "Found",
    };
  } else {
    return {
      success: false,
      continue: true,
      message: databaseErrorMessages.members_CollectionNotFound,
      payload: [],
      command: executionCommands.members,
    };
  }
}
