// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

//-------------------------------------------------

// Exercise 4
// ------------
// 1. Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age.

function olderPeople(peopleArr, age) {
  let older = peopleArr.filter(function (person) {
    if (person.age > age) {
      return person.name;
    }
  });
  return older;
}
// 2. Do a console.log to verify your function.
// console.log(olderPeople(people, 30))
// 3. Run the test to validate: yarn test exercise-4

module.exports = { olderPeople, people };
