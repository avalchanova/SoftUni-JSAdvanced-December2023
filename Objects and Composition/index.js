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

let otherCat = cat;

// now what happens is otherCat copies cat's reference and both otherCat and cat will point at the same place
// so when changes are made in whichever object they will appear in both places
