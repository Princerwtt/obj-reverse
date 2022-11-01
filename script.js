let person1 = {
  name: 'vicky',
  age: 'nine',
  address: 'bangalore',
};

let newPerson = {};
Object.entries(person1).forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  newPerson[value] = key;
});
console.log(newPerson);
