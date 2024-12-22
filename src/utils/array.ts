export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array));
};

type ID = string | number;

export const findObjectById = <T extends { id: ID }>(
  idOfItemToFind: ID,
  array: T[],
): T | undefined => {
  return array.find((item) => item.id === idOfItemToFind);
};

export const findIndex = <T extends { id: ID }>(
  idWithUnknowwIndex: ID,
  array: T[],
): number => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknowwIndex,
  );
};

export const removeObjectById = <T extends { id: ID }>(
  idOfItemToRemove: ID,
  array: T[],
): T[] => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isArrayEmpty = <T>(array: T[]): boolean => {
  return array.length === 0;
};
