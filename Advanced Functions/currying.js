// Currying is a technique for function decomposition
// supplying arguments one at a time instead of at once
// because they may be coming from different sources
// execution can be delayed until it's needed

function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

console.log(sum3(5)(6)(8));


const arrowSum = a => b => c => a + b + c;
console.log(arrowSum(5)(6)(8));