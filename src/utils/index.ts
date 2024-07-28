import { Topic } from "src/types.ts";

export const sortArrByKey = (arr: Topic[], propertyKey: string | undefined) => {
  if (!arr.length) return [];
  if (!propertyKey) {
    // set a default propertyKey using the first key of the first object in the array
    const firstKey = Object.values(arr)[0];
    propertyKey = Object.keys(firstKey)[0];
  }

  return arr.sort((a: Topic, b: Topic) => {
    const aString = a[propertyKey as keyof Topic].toUpperCase();
    const bString = b[propertyKey as keyof Topic].toUpperCase();

    // returns 1 by default when aString > bString
    if (aString < bString) return -1;
    return 0;
  });
};
