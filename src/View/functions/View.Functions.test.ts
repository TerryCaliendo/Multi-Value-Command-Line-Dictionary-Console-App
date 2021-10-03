import { formatArrayForNumberedOutput } from "./View.Functions";
/////////////////
// Formmatting Arrays for numbered output
/////////////////
// - formatArrayForNumberedOutput()
describe("View Functions - formatArrayForNumberedOutput()", () => {
  // check for multiple keys
  it("Array Format to Numbered lines", () => {
    // databaseAdd("foo", "bar");
    // databaseAdd("fiz", "buzz");
    // databaseAdd("boo", "bam");
    expect(formatArrayForNumberedOutput(["one", "two", "three"])).toMatch(
      "1) one\n2) two\n3) three"
    );
  });
});
