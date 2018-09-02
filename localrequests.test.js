const handleReqAll = require("./localrequests").handleReqAll;

beforeEach(() => {});

test("handles a standard /all request", () => {
  const result = handleReqAll("http://localhost/all");
  expect(result.superheroes).toEqual(expect.any(Array));
});

test("check all with a certain number of elements", () => {
  const result = handleReqAll("http://localhost/all?max=12").superheroes;
  expect(result).toHaveLength(12);
});

test("check start and end params", () => {
  const result = handleReqAll("http://localhost/all?start=10&end=15")
    .superheroes;
  expect(result).toHaveLength(5);

  const items = result.map(i => {
    return { id: i.id };
  });
  expect(items).toContainEqual(expect.objectContaining({ id: "14" }));
  expect(items).toEqual([
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" }
  ]);
});
