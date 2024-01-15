// Call

function introduce(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}

introduce('Gosho', 'Pesho'); // Global Invocation ---> Hello, my name is undefined

let person = {
    name: 'Pesho'
};

introduce.call(person, "Gosho", "Pesho"); // invoke using call()
// call is a method for the function
// so call uses the context of person to envoke the introduce function
// we will use parameters by spreading them like that when it is call() method

introduce.apply(person, ["Gosho", "Pesho"]);
// parameters for apply() are used in []