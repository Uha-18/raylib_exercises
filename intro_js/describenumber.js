function describenumber(number){
    if(number < 0 ){
        return "negative"
    }else if( number > 0 ){
        return "positive"
    }else {
        return "zero"
    }
}
console.log(describenumber(10));
// console.log(describenumber(-10));
// console.log(describenumber(0));

