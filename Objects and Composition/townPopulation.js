//Exercise

function solve(input) {
    let towns = {};

    for (const line of input) {
        let infoArr = line.split(' <-> ');
        let town = infoArr[0];
        let population = Number(infoArr[1]);

        if (!towns[town]) {
            towns[town] = 0;
        }

        towns[town] += population;
    }
    for (const town in towns) {
        console.log(`${town}: ${towns[town]}`);
    }
}
solve([
    'Sofia <-> 12000000',
    'Montana <-> 20000',
    'New York <-> 10000000'
]);