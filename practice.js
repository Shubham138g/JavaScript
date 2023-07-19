//closure back function

const sum = function (a) {
    console.log(a)
    return function (b, c) {
        return a + b + c;

    }
}

const store = sum(1);
console.log(store(1, 3))
