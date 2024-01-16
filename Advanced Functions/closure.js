function counterBuilder() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    };
}


let counter = counterBuilder();
// it all seems very logical but the strange part is that when the counterBuilder is executed,
// the garber collector removes all of her variables therefore the counter variable must be cleared as well
// However, this is not the case here because the counter variable is positioned in closure
counter();
counter();
counter();
counter();
counter();





function a() {
    let name = "asdasd";
    function b() {
        let name2 = "asdasd2";
        function c() {
            let name3 = "asdasd3";
            function d() {
                let name4 = "asdasd4";
                console.log(this);
            }
            d(); // global because we are running the function like that d()
        }
        c();
    }
    b();
}
a();