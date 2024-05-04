import { add } from "./add";

test("Test functions that import server-only", () => {
  expect(add(10, 2)).toBe(5);
});
