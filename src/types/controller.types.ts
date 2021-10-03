export interface commandSet {
  action: string;
  input1?: string;
  input2?: string;
}

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

export interface executionStatus {
  command: executionCommands;
  continue: boolean;
  success: boolean;
  message?: string;
}

export enum controllerErrorMessages {
  add_MissingParameters = "Not enough input parameters.",
  noop_commandNotFound = "Command not found.",
}
