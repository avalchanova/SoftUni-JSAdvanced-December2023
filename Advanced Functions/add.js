function solution(number) {
    function add(a, b) {
        return a + b;
    }

    return add.bind(null, number);
}

let add5 = solution(5);
console.log(add5(2));