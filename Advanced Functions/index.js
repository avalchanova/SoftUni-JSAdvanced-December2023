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
