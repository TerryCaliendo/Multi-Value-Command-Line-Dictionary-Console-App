// Type requred for requesting the controller to perform an action
export interface commandSet {
  action: string;
  input1?: string;
  input2?: string;
}

// Available commands for the controller to process
export enum executionCommands {
  add = "ADD",
  keys = "KEYS",
  members = "MEMBERS",
  remove = "REMOVE",
  removeall = "REMOVEALL",
  clear = "CLEAR",
  keyexists = "KEYEXISTS",
  memberexists = "MEMBEREXISTS",
  allmembers = "ALLMEMBERS",
  items = "ITEMS",
  exit = "EXIT",
  noop = "NOOP",
}

// The response of any database or controller action
export interface executionStatus {
  command: executionCommands;
  continue: boolean;
  success: boolean;
  message?: string | Array<string>;
}

// List of error messages to be reported by the controller
export enum controllerErrorMessages {
  add_MissingParameters = "Not enough input parameters.",
  members_MissingParameter = "Key name not found.",
  noop_commandNotFound = "Command not found.",
}
