// @flow

class MyClass {
  n: number;
  exp: number;
  str: string ;

  constructor() {
    this.exp = 6;
    this.str = 'a';
  }
  
  mathod(arg: boolean) :string {
    return arg ? 'true' : 'false';
  }
};

const obj :MyClass = new MyClass;

// GENERICS
class Gens<A,B,C> {
  a: A;
  b: B;
  c: C;

  constructor(a: A, b: B, c: C){
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getAll() :[A, B, C] {
    return [this.a, this.b, this.c];
  }
}