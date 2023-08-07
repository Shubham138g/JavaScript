const n = 10; //user enter this

if (n == 0) {
    return 1;
}
else {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(` the factorial of ${n} is ${fact}`);
}



