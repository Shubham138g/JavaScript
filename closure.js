var sum = function (a) {
    console.log("live viewers", +a)
    var c = 5;
    return function (b) {
        return a + b + c;
    }
}

var store = sum(2);
console.log(store(3))