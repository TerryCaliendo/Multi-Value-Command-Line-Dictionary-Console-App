export type databaseMapType = Map<string, [string]>;

// List of all Error Messages from the database
export enum databaseErrorMessages {
  add_MemberExists = "ERROR, member already exists for key.",
  members_CollectionNotFound = "Collection not found.",
}

// List of all the Success Messages from the Database
export enum databaseSuccessMessages {
  add = "Added",
}
