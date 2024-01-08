let cat = {
    name: "Navcho",
    age: 7,
    isShortHaired: false,
};


// Stack vs Heap

/*
The stack is where the primitive values will be saved.
The stack is this special memory saved for our JS program
The heap is the memory where reference types will be saved: eg objects

so now cat is saved in the stack only with a reference or with an address,
which address leads us to the heap and the is saved the content of the object:
{
    name: "Navcho",
    age: 7,
    isShortHaired: false,
}
*/

// Copying by reference
let otherCat = cat;
otherCat.name = "Garfield";
// now what happens is otherCat copies cat's reference and both otherCat and cat will point at the same place
// so when changes are made in whichever object they will appear in both places
console.log(cat.name);

// Cloning an object
// First way:
let { ...newCat } = cat;
// thanks to the spread operator the new object will not be a reference to the old one
// so new changes will apply to the cat object and the other way around
newCat.name = "Onesie";
console.log(cat.name + ' again');

// Comparing objects

console.log(cat == otherCat); // same reference
console.log(newCat == cat); // same objects but diference reference (different addresses in the heap)

// Associative Arrays
// are just objects with with associative key-value pairs

let phoneBook = {
    "Ivan Georgiev": "11222333",
    "Ivaylo Zapryanov": "223311",
    "Vale Adelinova": "112211"
};

// accessing and assigning
phoneBook['Vale Adelinova'] = "998877";
console.log(phoneBook["Vale Adelinova"]);

// Iteration
for (key in phoneBook) {
    console.log(key); // the key
    console.log(phoneBook[key]); // the value
}