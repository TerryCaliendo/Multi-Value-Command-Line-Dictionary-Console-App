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

## Project Architecture

- The project implements a basic Model-View-Controller (MVC) framework. MVC is chosen to help improve extension and scalability.
  - For Instance
  - The View is currently a console app, but it could be upgraded to a Native App or Web app.
  - The controller could be wrapped with a web server and turned into an API server.
  - The model could be replaced with an actual database

## Project Assumptions:

- User input for collections and member names can contain any character (including special characters !@#$%^ etc)
- User input for collections and members will be an acceptable typical size (not checking length of names)
- Collections and members names ARE case sensitive (ADD foo bar is different from ADD FOO BAR)
- Commands ARE NOT case-sensitive (i.e. Add foo bar works)
- Ignore any extra inputs after final input needed in a command (i.e. ADD foo bar extra stuff)
- International language support is not needed - hard coding single language via typescript enum

## Backlog

- implement View output (currenty using console.log)
- condense imports using same file
- inputs are pretty much hard coded to 2 after command? controller seems expandable though
- issue with types when formatting keys response - search for "TODO: #KNE839"
- need to make an executionStatus creator?
- need to reset testing
- add missing "command" properties to testing
