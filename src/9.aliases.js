// @flow

type NumAlias = number;
const a: NumAlias = 4;

type DogType = {
  run(minutes: number): void,
  age: number,
  name: string
};

type PrimeAlias = 2|3|5|7;
const randPrime:PrimeAlias = 5;

