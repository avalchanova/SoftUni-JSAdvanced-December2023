let mixedArr = ['BMW', 'Audi', 'Opel', 1];

mixedArr[4] = () => console.log('I am the fourth element');


mixedArr[4](); // cool thing here
// evoking the function in the fourth element



// Arrays Indexation

// Setting values via non-integers using bracket notation (or dot notation) creates
// object properties instead of array elements(will be discussed in later lesson);

let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);
console.log(arr.hasOwnProperty(3.4));
arr["1"] = 'Grapes';
console.log(arr.length); // 2
console.log(arr); //  […, 'Grapes', …, 'Oranges', 'Apples', …]
// this was mind fucking
console.log(arr.pop());