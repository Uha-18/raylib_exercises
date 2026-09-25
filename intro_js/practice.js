// function double(number){
//     return number * 2;
// }
// function addOne(number){
//     return number + 1;
// }
// function add(a,b){
//     return a + b
// }

// console.log(double(addOne(5)));
// console.log(addOne(double(5)));
// console.log(add(double(5),addOne(5)))
// console.log(addOne(double(addOne(3))));



// function f(number){
//     return g(number + 1)
// }
// function g(number){
//     return h(number * 2);
// }
// function h(number){
//     return number - 3;
// }
// console.log(f(5));


function f(number){
    if(number === 0){
        console.log("zero")
        return 0 ;
    }
    console.log("before", number);
    const result = f(number - 1);
    console.log("after", number);
    return result + number;
}
console.log(f(3));

