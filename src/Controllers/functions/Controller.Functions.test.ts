import { executeUserCommand } from "./Controller.Functions";

describe("Controller Functions - executeUserCommand", () => {
  // check valid input
  it("ADD foo bar", () => {
    expect(
      executeUserCommand({ action: "ADD", input1: "foo", input2: "bar" })
    ).toMatchObject({ continue: true, success: true });
  });
  // check invalid input
  it("ADD bar", () => {
    expect(executeUserCommand({ action: "ADD", input1: "bar" })).toMatchObject({
      continue: true,
      success: false,
    });
  });
});
