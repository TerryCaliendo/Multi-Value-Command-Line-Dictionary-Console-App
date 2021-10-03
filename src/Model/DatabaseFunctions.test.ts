import { databaseAdd, databaseKeys } from "./Database.Functions";
import { executionCommands } from "../types/commands";

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
      message: "Added",
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
      message: "0) foo\n1) fiz\n2) boo",
      command: executionCommands.keys,
    });
  });
});
