// @flow

// PRIMITIVE
const num:number = 5;
const str:string = 'Hey';
const bool:boolean = true;
const nl:null = null;
const und:void = undefined;

// MAYBE TYPES
let mayBeNum :?number = 5;

// FUNCTION RETURN TYPES
const exp = (num:number, exp:number) :number => {
  return num**exp;
}

// OPTIONAL OBJECT PROPERTIES
const optObjPrFunc = (obj: {foo?:number}) :number => {
  if (obj.foo)
    return obj.foo ** 2;
  return 0;
};

// OPTIONAL FUNCTION PARAMETERS
const greet = (name:string, age?:number) : void => {
  if (age){
    console.log(`hello ${name}, you are ${age}`);
    return;
  }
  console.log(`hello ${name}.`);
}

// FUNCTION PARAMETERS WITH DEFAULTS
const another_greet = (name:string, age:number = 8) : void => {
  console.log(`hello ${name}, you are ${age}`);
}