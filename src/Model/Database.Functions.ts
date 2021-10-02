import { executionStatus } from "../types/commands";

let database = new Map<string, [string]>();

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
      console.log("finding member", member, memberName);
      return member === memberName;
    }) != undefined
  )
    return {
      success: false,
      continue: true,
      message: "ERROR, member already exists for key.",
    };
  // Collection name is found, Add the new member
  if (collection) collection.push(memberName);
  // Collection name is not found, add the new collection with the new member in a new array
  else database.set(collectionName, [memberName]);
  // console.log("database:", database.entries());
  return { success: true, continue: true, message: "Added" };
}
