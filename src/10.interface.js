// @flow

interface Foo {
  a: number;
  b?: string;
  c: boolean;
}

interface Bar {
  d: [number, string]
}

const t: Foo = {a: 5, c: true};

interface MyMathInterface {
  random(a?: number):number;
}

class MyMath implements MyMathInterface {
  random(a = 1){
    return Math.random() * a;
  }
}