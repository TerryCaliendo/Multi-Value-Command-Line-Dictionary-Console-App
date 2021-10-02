import { databaseAdd } from "./Database.Functions";
//////////////////////////////
// Database Functions
//////////////////////////////

// - databaseAdd()
describe("Database Functions - databaseAdd()", () => {
  // check valid initial member addition
  it("ADD foo bar - for the first time", () => {
    expect(databaseAdd("foo", "bar")).toMatchObject({
      success: true,
      continue: true,
      message: "Added",
    });
  });
  // check repeated member
  it("ADD foo bar - for the first time", () => {
    expect(databaseAdd("foo", "bar")).toMatchObject({
      success: false,
      continue: true,
    });
  });
});
