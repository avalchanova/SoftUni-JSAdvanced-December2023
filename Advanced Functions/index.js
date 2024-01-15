const person = {
    name: "Pesho",
    lastName: "Georgiev",
    introduce() {
        const getFullName = function () {
            return this.name + ' ' + this.lastName;
        };

        console.log(`Hello, my name is ${getFullName()}`);
    }
};

person.introduce();

// this will return Hello, my name is undefined undefined
// because the context of getFullName() is global therefore this points to the undefined
