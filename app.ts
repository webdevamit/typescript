// 1. Numbers

let age: number = 25;

// 2. String
const userName = "amit";
// userName = "chauhan";

// 3. Functions
const user = "Amit";
function sayHello(user: string) {
  console.log(`Hello, ${user}!`);
}
sayHello(user);

// 4. Function with ts integration
function writeName(name) {
  // Could be empty, null, or undefined
  if (name) {
    console.log(name);
  }
}
writeName("Bob");
writeName();

// 5. strict checking
const element = document.getElementById("root");
element.addEventListener("click", function () {
  element.classList.toggle("selected");
});

// 6. Arrays
// TypeScript
// The collection
const theList = new Array<string>();
// Function to add items
function addToCollection(item: string) {
  theList.push(item);
}
// Use the typed function
addToCollection("one");
addToCollection("two");
addToCollection(3); // TypeScript Error

// 7. Classes

// TypeScript
class Animal {
  name = "";
  age = 0;
  fed = false;
  feed(food: string) {
    this.fed = true;
  }
}

// 8. Functions
function formatName(firstName: string, lastName: string): string | null {
  if (!firstName || !lastName) return null;
  return `${lastName}, ${firstName}`;
}
let fullName = formatName("Shawn", "Wildermuth");

// 9. Objects

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

let people: Person[];
let otherPeople: Person[] = [];
let otherOtherPeople = new Array<Person>();
// Fails as this shape isn't the same as Person
otherPeople.push({
  fullName: "Shawn Wildermuth",
  age: 53,
});

// This Works
otherPeople.push({
  firstName: "Shawn",
  lastName: "Wildermuth",
  age: 53,
});

// 10. Classes

class ClassPerson {
  firstName: string;
  lastName: string;
  age: number;

  write() {
    console.log(this.firstName + " " + this.lastName);
  }
}

let person = new ClassPerson();
person.firstName = "Shawn";
person.lastName = "Wildermuth";
person.write();

// 11. Inheritance

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

type IWriteable = {
  write(): void;
};

class Manager implements IPerson, IWriteable {
  firstName: string;
  lastName: string;
  age: number;
  write(): void {}
  reports: Person[];
}

12; // Initialization
// tsc --init
