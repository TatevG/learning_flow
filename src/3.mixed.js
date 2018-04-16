// @flow

// GROUP OF TYPES
const stringify = (value: number | string) :string => {
  return ''+value;
}

// GENERIC TYPE

function getItself<T>(value: T) :T {
  return value;
}

// const getItself = <T>(value: T) :T => {
//   return value;
// };

// MIXED TYPE

const mixedFunc = (value: mixed) => {
  if (typeof value === 'number')
    return value*5;
}
