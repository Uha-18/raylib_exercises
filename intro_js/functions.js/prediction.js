function f(number){
    if (number === 0){
        console.log("done");
        return 0 ; 
    }
    console.log("enter", number);
    const result = f(number - 1);
    console.log("leave",number);
    return result + number;
}console.log(f(5));
