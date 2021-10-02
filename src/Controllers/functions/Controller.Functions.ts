import { commandSet } from "../../types/commands";
import { databaseAdd } from "../../Model/Database.Functions";
import { executionStatus } from "../../types/commands";

export function executeUserCommand(commandSet: commandSet): executionStatus {
  switch (commandSet.action.toUpperCase()) {
    case "ADD":
      console.log("Command was to ADD");
      if (commandSet.input1 && commandSet.input2) {
        return databaseAdd(commandSet.input1, commandSet.input2);
      } else
        return {
          success: false,
          continue: true,
          message: "Not enough input parameters.",
        };
      break;
    case "MEMBERS":
      console.log("Command was to MEMBERS");
      break;
    case "REMOVE":
      console.log("Command was to REMOVE");
      break;
    case "REMOVEALL":
      console.log("Command was to REMOVEALL");
      break;
    case "CLEAR":
      console.log("Command was to CLEAR");
      break;
    case "KEYEXISTS":
      console.log("Command was to KEYEXISTS");
      break;
    case "MEMBEREXISTS":
      console.log("Command was to MEMBEREXISTS");
      break;
    case "ALLMEMBERS":
      console.log("Command was to ALLMEMBERS");
      break;
    case "ITEMS":
      console.log("Command was to ITEMS");
      break;
    case "EXIT":
      return { success: true, continue: false };
    default:
      console.log("Command not found");
  }
  return { success: true, continue: true };
}

export function parseUserCommand(inputLine: string): commandSet {
  let commands = inputLine.split(" ");
  //  console.log("commands", commands);
  return {
    action: commands[0],
    input1: commands[1] ? commands[1] : "",
    input2: commands[2] ? commands[2] : "",
  };
}
