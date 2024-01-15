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


// Apply

introduce.apply(person, ["Gosho", "Peshanov"]);
// parameters for apply() are used in []
// Apply uses Array - this way i can remember


// реално тези методи се използват, за да ни позволяват да си извикаме функцията, като ни позволява
// да имаме контрол и върху контекста, в който ще бъде извикана, и върху входните данни, които ще ѝ подоваме


// Bind

let superHuman = {
    name: 'Superman'
};

let superIntroduction = introduce.bind(superHuman, 'Louis', 'Lane');
superIntroduction();

// the specific thing about bind() is that it creates new function with a given context and parameters
// bind is like the call method but we would use it later on, whereas call is used right away