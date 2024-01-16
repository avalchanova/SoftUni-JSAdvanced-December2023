// Functions which was passed as an argument to another function
// an example is addEventListener('givenEvent', handlerFunctionWhichIsActuallyFirstClassFunc)
// each function in JS is a first class function - this is law!
// this is because every functio can be passed as an argument, can be returned as a result and can be used as a variable

function sayHello() {
    return function Hello() {
        console.log('Hello there!');
    };
}
sayHello()();

//or

let asd = sayHello();

asd();