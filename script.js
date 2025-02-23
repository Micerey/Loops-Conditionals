function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

for (let i = 1; i <= 10; i++) {
    checkEvenOdd(i);
}
