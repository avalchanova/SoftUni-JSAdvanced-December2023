// Functions which was passed as an argument to another function
// an example is addEventListener('givenEvent', handlerFunctionWhichIsActuallyFirstClassFunc)

function sayHello() {
    return function Hello() {
        console.log('Hello there!');
    };
}
sayHello()();

//or

let asd = sayHello();

asd();