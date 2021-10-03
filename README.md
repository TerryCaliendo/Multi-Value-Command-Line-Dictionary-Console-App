## System Requirements

- Node ^v14.17.3 / NPM ^6.14.13

## Environment Setup

- Use Prettier w/ default settings
- Linting is not used

## Development

- npm install
- npm run dev

## Testing

- npm run test

## Project Assumptions:

- user input for collections and members can contain any character
- user input for collections and members is not limited in size
- commands are case-insensitive
- ignore any extra inputs after final input needed in a command (i.e. ADD foo bar extra stuff)
- don't need international languages - hard coding message responses
- collections and members are case sensitive

## Backlog

- implement View output (currenty using console.log)
- make type for generic: let database = new Map<string, [string]>();
- string formatting shouldn't be in the database layer! Should pass in a formatter! - - formatDatabaseKeys
- condense imports using same file
- inputs are pretty much hard coded to 2 after command
- issue with types when formatting keys response - see TODO: #KNE839
