// function isodd(number){
//     if(number % 2 !== 0 ){
//         return "true";
//     }else{
//         return "false";
//     }
// }

function isEven(number){
    return number % 2 === 0;
}
function isOdd(number) {
    return !isEven(number);
}
console.log(isOdd(3));
