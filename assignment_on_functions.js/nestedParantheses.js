// function para(n){
//     if (n < 1){
//         return " " ;
//     }
//     return "(" + para(n-1) + ")"  ;

// }
//     console.log( para(0) ) ;

function para(n) {
  return n < 1 ? "" : `(${para(n - 1)})`;
}

console.log(para(4));
