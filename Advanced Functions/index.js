const person = {
    name: "Pesho",
    lastName: "Georgiev",
    introduce() {
        // let that = this; this is BLACK MAGIC as Ivaylo Papazov said, it is not supposed to be used
        // but it look funny: to work we have to change the key word "this" below with the key word "that"
        const getFullName = function () {
            return this.name + ' ' + this.lastName;
        };

        console.log(`Hello, my name is ${getFullName()}`);
    }
};

person.introduce();

// this will return Hello, my name is undefined undefined
// because the context of getFullName() is global therefore this points to the undefined

// However, if we switch the function declaration and we make it function expression, the problem will  be solved:

const person2 = {
    name: "Pesho",
    lastName: "Georgiev",
    introduce() {
        const getFullName = () => {
            return this.name + ' ' + this.lastName;
        };

        console.log(`Hello, my name is ${getFullName()}`);
        // console.log(getFullName);
    }
};

person2.introduce();