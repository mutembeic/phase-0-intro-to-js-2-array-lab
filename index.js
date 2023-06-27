// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats.push("Ralph");

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Garfield) {
  cats.pop(Garfield);
}

function destructivelyRemoveFirstCat(Milo) {
  cats.shift(Milo);
}

function destructivelyAppendCat(Broom) {
  cats.push(Broom);
}
function appendCat(Broom) {
  return [...cats, Broom];
}

function prependCat(Arnold) {
  return [Arnold, ...cats];
}

function removeLastCat(cats) {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat(cats) {
  return cats.slice(1);
}

 //Perform operations on the cats array
destructivelyPrependCat("Tom");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
// Add a cat to the end of the array

// Display the final state of the cats array
console.log(cats);
