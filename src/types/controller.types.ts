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

export interface messageTypeMap {
  ADD: null;
  KEYS: string[];
  MEMBERS: string[];
  REMOVE: null;
  REMOVEALL: null;
  CLEAR: null;
  KEYEXISTS: null;
  MEMBEREXISTS: null;
  ALLMEMBERS: string[];
  ITEMS: number;
  EXIT: string;
  NOOP: null;
}

export interface executionStatus<T extends executionCommands> {
  command: T;
  continue: boolean;
  success: boolean;
  payload: messageTypeMap[T];
  message: string;
}

export interface commandSet {
  action: string;
  input1?: string;
  input2?: string;
}

export enum controllerErrorMessages {
  add_MissingParameters = "Not enough input parameters.",
  members_MissingParameter = "Key name not found.",
  noop_commandNotFound = "Command not found.",
}
