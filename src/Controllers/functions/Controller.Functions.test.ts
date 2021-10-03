import { executeUserCommand } from "./Controller.Functions";
import { executionCommands } from "../../types/controller.types";

//////////////////////////////
// Controller Functions
//////////////////////////////

// ADD - executeUserCommand()
describe("Controller Functions - executeUserCommand()", () => {
  // check valid input
  it("ADD foo bar", () => {
    expect(
      executeUserCommand({
        action: executionCommands.add,
        input1: "foo",
        input2: "bar",
      })
    ).toMatchObject({ continue: true, success: true });
  });
  // check invalid input (missing parameter)
  it("ADD bar", () => {
    expect(
      executeUserCommand({ action: executionCommands.add, input1: "bar" })
    ).toMatchObject({
      continue: true,
      success: false,
    });
  });
});

// KEYS - executeUserCommand()
describe("Controller Functions - executeUserCommand() - KEYS", () => {
  // check valid input
  it("KEYS", () => {
    expect(
      executeUserCommand({ action: executionCommands.keys })
    ).toMatchObject({ continue: true, success: true });
  });

  // check invalid input after adding a key
  it("KEYS", () => {
    executeUserCommand({
      action: executionCommands.add,
      input1: "foo",
      input2: "bar",
    });
    expect(
      executeUserCommand({ action: executionCommands.keys })
    ).toMatchObject({ continue: true, success: true });
  });
});
