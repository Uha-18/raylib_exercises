function iszero(number){
    if (number===0){
        return "false"
    }
}
    function isNonZero(number){
        return !iszero(number)
    }
    console.log(isNonZero(3))
    // console.log(isNonZero(0))
