// HOF - functions which take other functions as an argument OR return a function as a result

function sayHello() {
    return function Hello() {
        console.log('Hello there!');
    };
}

// sayHello is a HOF because it returns a function
// addEventListener is also HOF