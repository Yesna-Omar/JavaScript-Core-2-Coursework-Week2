/* 
  Challenge 1: Famous Writers
  In this exercise you will practice how to access Objects stored in an Array and their properties. You already know 
  different ways of looping through Arrays, it won't be different in this case. The only extra step is that you have to 
  use values inside Objects.
*/

// We've created an array of objects for you here:
let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 63,
    alive: true,
  },
  {
    firstName: "Yukiko",
    lastName: "Motoya",
    occupation: "writer",
    age: 49,
    alive: true,
  },
];

/*
Exercise 1:
  Loop through the Array, and for each object, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:
  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/
function logAllWriters() {
  // write your code to log all writers here
  for (let element of writers) {
    console.log(
      `Hi, my name is ${element.firstName} ${element.lastName}. I am ${element.age} years old, and work as a ${element.occupation}.`
    );
  }
}

/*
Exercise 2:
  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not alive anymore. Use the below sentence format:
  "Writer {firstName} {lastName} died at {age} years old."
*/

function logDeadWritersInTheirForties() {
  // write your code here
  let deadWritersInTheirForties = writers.filter((element) => {
    if (element.age >= 40 && element.age < 50 && element.alive === false) {
      return element;
    }
  });
  for (let person of deadWritersInTheirForties) {
    console.log(
      `Writer ${person.firstName} ${person.lastName} died at ${person.age} years old.`
    );
  }
}

/*
Exercise 3:
  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):
  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/

function logAliveWritersInTheirForties() {
  // write your code here
  let aliveWritersInTheirForties = writers.filter((element) => {
    if (element.age >= 40 && element.age < 50 && element.alive === true) {
      return element;
    }
  });
  for (let person of aliveWritersInTheirForties) {
    console.log(
      `Hi, my name is ${person.firstName} ${person.lastName}. I am ${person.age} years old.`
    );
  }
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern writers.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("exercise 1", () =>
  expectFunctionToLog(logAllWriters, [
    "Hi, my name is Virginia Woolf. I am 59 years old, and work as a writer.",
    "Hi, my name is Zadie Smith. I am 40 years old, and work as a writer.",
    "Hi, my name is Jane Austen. I am 41 years old, and work as a writer.",
    "Hi, my name is Bell Hooks. I am 63 years old, and work as a writer.",
    "Hi, my name is Yukiko Motoya. I am 49 years old, and work as a writer.",
  ]));

test("exercise 2", () =>
  expectFunctionToLog(logDeadWritersInTheirForties, [
    "Writer Jane Austen died at 41 years old.",
  ]));

test("exercise 3", () =>
  expectFunctionToLog(logAliveWritersInTheirForties, [
    "Hi, my name is Zadie Smith. I am 40 years old.",
    "Hi, my name is Yukiko Motoya. I am 49 years old.",
  ]));

function expectFunctionToLog(f, values) {
  const consoleLogSpy = jest.spyOn(console, "log");
  f();
  expect(consoleLogSpy).toBeCalledTimes(values.length);
  values.forEach((value, i) => {
    expect(consoleLogSpy).nthCalledWith(i + 1, value);
  });
  consoleLogSpy.mockRestore();
}
