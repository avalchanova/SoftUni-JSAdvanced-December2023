let mixedArr = ['BMW', 'Audi', 'Opel', 1];

mixedArr[4] = () => console.log('I am the fourth element');


mixedArr[4](); // cool thing here
// evoking the function in the fourth element