import { executeUserCommand } from "./Controller.Functions";
import { executionCommands } from "../../types/controller.types";
import { controllerErrorMessages } from "../../types/controller.types";
import { databaseErrorMessages } from "../../types/database.types";

//////////////////////////////
// Controller Functions
//////////////////////////////

// ADD - executeUserCommand()
describe("Controller Functions - executeUserCommand() - ADD", () => {
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
      message: controllerErrorMessages.add_MissingParameters,
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

  // check valid input after adding a key
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

// MEMBERS - executeUserCommand()
describe("Controller Functions - executeUserCommand() - MEMBERS", () => {
  // check valid input
  it("MEMBERS", () => {
    expect(
      executeUserCommand({ action: executionCommands.members, input1: "fax" })
    ).toMatchObject({
      continue: true,
      success: false,
      message: databaseErrorMessages.members_CollectionNotFound,
    });
  });

  // check valid input after adding a key
  it("MEMBERS", () => {
    executeUserCommand({
      action: executionCommands.add,
      input1: "foo",
      input2: "schoo",
    });
    expect(
      executeUserCommand({ action: executionCommands.members, input1: "foo" })
    ).toMatchObject({
      continue: true,
      success: true,
      message: ["bar", "schoo"],
    });
  });
});
