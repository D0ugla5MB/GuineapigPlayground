const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();

function testA(val = undefined) {
    if (val === undefined) {
        val = function t(val = 5) {
            return ++val;
        };
    }
    return val();
}

function testB(val = function () {
    let val = 5; // Default value for val
    return function () {
        return ++val; // Increment val and return it
    };
}) {
    const fn = val(); // Invoke the function to get the closure
    return fn(); // Execute the returned function to get the incremented value
}

console.log(testB());

function run(f) {

    for (let i = 0; i < f.length; i++) {
        let func = f[i];
        console.log(func());
    }
}



function a() {
    let i = 4;
    let a = 0;
    while (i-- != 0) {
        a = testB();
    }
    return a;
}

function b() {
    let i = 10;
    let a = 0;
    while (i-- != 0) {
        a = testB();
    }
    return a;
}
run([a, b, add]);