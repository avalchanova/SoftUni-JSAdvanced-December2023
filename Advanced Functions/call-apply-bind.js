// Call

function introduce(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}

introduce('Gosho', 'Pesho'); // Global Invocation ---> Hello, my name is undefined

let person = {
    name: 'Pesho'
};

