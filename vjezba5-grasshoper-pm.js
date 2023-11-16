function greet(name, owner) {
  var person;
  if (name === owner) {
    var person = "boss";
  } else {
    var person = "guest";
  }

  return `Hello ${person}`;
}
