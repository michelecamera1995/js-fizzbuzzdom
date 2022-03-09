
console.log("JS-OK");

let x

const divSquares = document.querySelector("#square");

console.log('da 1 a 100');
for (x = 1; x <= 100; x++) {

    console.log(x);
    const element = `<div id="square-${x}" class="square">${x}</div>`;
    divSquares.innerHTML += element;

    if (x % 3 && x % 5) {
        console.log("FIZZBUZZ");
        const fizzbuzz = ("FIZZBUZZ")
        divSquares.innerHTML += fizzbuzz;
    } else {
        if (x % 3 == 0) {
            console.log("FIZZ");
            const fizz = ("FIZZ")
            divSquares.innerHTML += fizz;
        }
        if (x % 5 == 0) {
            console.log("BUZZ");
            const buzz = ("BUZZ")
            divSquares.innerHTML += buzz;
        }
    }
}