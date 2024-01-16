function solution(number) {
    function add(a, b) {
        return a + b;
    }

    return add.bind(null, number); // same as add.bind(this, number)
    //uses the bind method to bind the func with a 'null' contextor 'this'  context which will force it to use
    // the same context as the current context and then also another number as an arg

    // return (n) => add(number, n); --- this is the same as the bind solution
}

let add5 = solution(5);
console.log(add5(2));