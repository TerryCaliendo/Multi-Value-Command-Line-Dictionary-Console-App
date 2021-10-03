import { databaseAdd, databaseKeys } from "./Database.Functions";
import { executionCommands } from "../types/controller.types";
import { databaseSuccessMessages } from "../types/database.types";
import { databaseMembers } from "./Database.Functions";

//////////////////////////////
// Database Functions
//////////////////////////////

/////////////////
// ADD
/////////////////
// - databaseAdd()
describe("Database Functions - databaseAdd()", () => {
  // check valid initial member addition
  it("ADD foo bar - for the first time", () => {
    expect(databaseAdd("foo", "bar")).toMatchObject({
      success: true,
      continue: true,
      command: executionCommands.add,
      message: databaseSuccessMessages.add,
    });
  });
  // check repeated member
  it("ADD foo bar - for the first time", () => {
    expect(databaseAdd("foo", "bar")).toMatchObject({
      success: false,
      continue: true,
      command: executionCommands.add,
    });
  });
});

/////////////////
// KEYS
/////////////////
// - databaseAdd()
describe("Database Functions - databaseKeys()", () => {
  // check for multiple keys
  it("KEYS", () => {
    databaseAdd("foo", "bar");
    databaseAdd("fiz", "buzz");
    databaseAdd("boo", "bam");
    expect(databaseKeys()).toMatchObject({
      success: true,
      continue: true,
      message: ["foo", "fiz", "boo"],
      command: executionCommands.keys,
    });
  });
});

/////////////////
// MEMBERS
/////////////////
// - databaseAdd()
describe("Database Functions - databaseMembers()", () => {
  // check for members of a collection
  it("MEMBERS", () => {
    databaseAdd("foo", "bar");
    databaseAdd("foo", "buzz");
    databaseAdd("foo", "bam");
    expect(databaseMembers("foo")).toMatchObject({
      success: true,
      continue: true,
      message: ["bar", "buzz", "bam"],
      command: executionCommands.members,
    });
  });
});
