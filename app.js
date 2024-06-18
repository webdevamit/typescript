// 1. Numbers
var age = 25;
// 2. String
var userName = "amit";
// userName = "chauhan";
// 3. Functions
var user = "Amit";
function sayHello(user) {
  console.log("Hello, ".concat(user, "!"));
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
var element = document.getElementById("root");
element.addEventListener("click", function () {
  element.classList.toggle("selected");
});
// 6. Arrays
// TypeScript
// The collection
var theList = new Array();
// Function to add items
function addToCollection(item) {
  theList.push(item);
}
// Use the typed function
addToCollection("one");
addToCollection("two");
addToCollection(3); // TypeScript Error
// 7. Classes
// TypeScript
var Animal = /** @class */ (function () {
  function Animal() {
    this.name = "";
    this.age = 0;
    this.fed = false;
  }
  Animal.prototype.feed = function (food) {
    this.fed = true;
  };
  return Animal;
})();
