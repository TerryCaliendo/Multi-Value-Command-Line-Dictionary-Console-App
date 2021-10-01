export let database = [1, 2, 3, 4];

export function databaseAdd(key: string, value: string): string {
  console.log("adding to database", key, value);
  return "complete";
}
