// @flow

// LITERAL
const a = (value: 2) :string => {
  return 'I accept only number 2';
}

// UNION TYPES
const getColor = (state: 'success' | 'warning' | 'error') :string => {
  switch (state) {
    case 'success':
      return 'green';
    case 'warning':
      return 'orange';
    case 'error':
      return 'red';
    default:
      return 'white';
  }
}