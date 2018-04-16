// @flow

// ANY

const any = (n: number) :any => {
  return 's' + n;
}

const getNestetProp = (obj) => {
  return obj.foo.bar.zoo.baz;
}
