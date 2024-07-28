import { sortArrByKey } from "src/utils";
import { Topic } from "src/types.ts";

const arr: Topic[] = [
  {
    section: "charlie",
    name: "charlie name",
    displayName: "charlie display",
    heading: "charlie heading",
    contents: "Lorem ipsum",
  },
  {
    section: "hotel",
    name: "hotel name",
    displayName: "hotel display",
    heading: "hotel heading",
    contents: "Lorem ipsum",
  },
  {
    section: "beta",
    name: "beta name",
    displayName: "beta display",
    heading: "beta heading",
    contents: "Lorem ipsum",
  },
  {
    section: "alpha",
    name: "alpha name",
    displayName: "alpha display",
    heading: "alpha heading",
    contents: "Lorem ipsum",
  },
];

const expected = ["alpha", "beta", "charlie", "hotel"];

describe("sortArrByKey", () => {
  it("returns an empty array if no array is passed", () => {
    const sorted = sortArrByKey([], undefined);
    expect(sorted).toEqual([]);
  });

  it("returns an empty array if no array, but key is passed", () => {
    const sorted = sortArrByKey([], "name");
    expect(sorted).toEqual([]);
  });

  it("sorts arr by default key", () => {
    const sorted = sortArrByKey(arr, undefined);
    const flatten = sorted.map((item) => item.section);
    expect(flatten).toEqual(expected);
  });

  it("sorts arr by name", () => {
    const sorted = sortArrByKey(arr, "name");
    const flatten = sorted.map((item) => item.section);
    expect(flatten).toEqual(expected);
  });

  it("sorts arr by displayName", () => {
    const sorted = sortArrByKey(arr, "displayName");
    const flatten = sorted.map((item) => item.section);
    expect(flatten).toEqual(expected);
  });
});
