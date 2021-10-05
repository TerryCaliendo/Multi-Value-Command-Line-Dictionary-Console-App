import { commandSet } from "../../types/controller.types";
import { databaseAdd } from "../../Model/Database.Functions";
import { executionStatus } from "../../types/controller.types";
import { databaseKeys } from "../../Model/Database.Functions";
import { databaseMembers } from "../../Model/Database.Functions";
import { executionCommands } from "../../types/controller.types";
import { controllerErrorMessages } from "../../types/controller.types";

// Controller functionality
export function executeUserCommand(commandSet: commandSet): executionStatus {
  switch (commandSet.action.toUpperCase()) {
    case executionCommands.add:
      // if the collection name and member names are present
      if (commandSet.input1 && commandSet.input2) {
        return databaseAdd(commandSet.input1, commandSet.input2);
      }
      // collection name and member weren't present
      else
        return {
          success: false,
          continue: true,
          message: controllerErrorMessages.add_MissingParameters,
          command: executionCommands.add,
        };
      break;
    case executionCommands.keys:
      return databaseKeys();
      break;
    case executionCommands.members:
      // If the collection name is present
      if (commandSet.input1) return databaseMembers(commandSet.input1);
      // If the collection name isn't present
      else
        return {
          success: false,
          continue: true,
          message: controllerErrorMessages.members_MissingParameter,
          command: executionCommands.add,
        };
      break;
    case executionCommands.remove:
      console.log("Command was to REMOVE");
      break;
    case executionCommands.removeall:
      console.log("Command was to REMOVEALL");
      break;
    case executionCommands.clear:
      console.log("Command was to CLEAR");
      break;
    case executionCommands.keyexists:
      console.log("Command was to KEYEXISTS");
      break;
    case executionCommands.memberexists:
      console.log("Command was to MEMBEREXISTS");
      break;
    case executionCommands.allmembers:
      console.log("Command was to ALLMEMBERS");
      break;
    case executionCommands.items:
      console.log("Command was to ITEMS");
      break;
    case executionCommands.exit:
      return {
        success: true,
        continue: false,
        command: executionCommands.exit,
      };
    default:
      return {
        success: false,
        continue: true,
        command: executionCommands.noop,
        message: controllerErrorMessages.noop_commandNotFound,
      };
  }
  return { success: true, continue: true, command: executionCommands.noop };
}

// Parses an input line into a commandSet to be sent to the controller
export function parseUserCommand(inputLine: string): commandSet {
  let commands = inputLine.split(" ");
  //  console.log("commands", commands);
  return {
    action: commands[0],
    input1: commands[1] ? commands[1] : "",
    input2: commands[2] ? commands[2] : "",
  };
}
