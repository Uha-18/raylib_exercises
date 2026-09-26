function sumto(number){
    if (number === 0 ){
        return 0 ;
    }
    return number +sumto (number- 1);
}
console.log(sumto(5))
