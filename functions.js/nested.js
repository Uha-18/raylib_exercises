function double(number){
    return number * 2;
}
function addOne(number){
    return number + 1;
}
console.log(addOne(double(10)))
console.log(double(addOne(10)))