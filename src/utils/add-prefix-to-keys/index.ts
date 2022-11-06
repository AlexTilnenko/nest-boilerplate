export const addPrefixToKeys = (object: unknown, prefix = '_'): object | unknown => {
  if (typeof object !== 'object') {
    return object;
  }
  const result: object = {};

  for (const key in object) {
    result[`${prefix}${key}`] = object[key];
  }

  return result;
};