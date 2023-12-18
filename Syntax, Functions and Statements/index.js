// Function Declaration
function walk() {
    console.log("walking");
}

// Function Expression
const walk1 = function () {
    console.log("walking");
};

// Arrow Function
const walk2 = () => {
    console.log("walking");
};


// console.log(5 % 2); // 1

function logTruthiness(val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}


// logTruthiness(3.14);      //Truthy!
// logTruthiness({});        //Truthy!
// logTruthiness(NaN);       //Falsy.
// logTruthiness("NaN");     //Truthy!
// logTruthiness([]);        //Truthy!
// logTruthiness(null);      //Falsy.
// logTruthiness("");        //Falsy.
// logTruthiness(undefined); //Falsy.
// logTruthiness(0);         //Falsy.


function biggestNum(a, b, c) {
    const arr = [a, b, c];
    let resultNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > resultNum) {
            resultNum = arr[i];
        }
    }
    console.log(resultNum);
}
biggestNum(4, 11, 1);

console.log(0.1 + 0.2);