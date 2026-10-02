let x = 1;

function f1(x) {
    x = x + 1;

    function f2(x) {
        x = x + 1;
        console.log(x);
    }

    f2(x);
    console.log(x);
}

f1(x);
console.log(x);
