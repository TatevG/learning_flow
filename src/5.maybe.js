// @flow

// REFINING A MAYBE TYPE
const test = (n:?number) => {
  if (n)
    return n*2;
};