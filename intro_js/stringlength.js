function length(word)
{
    return word.length;
}
function islong(word){
    if(length(word) >= 5 ){
        return true;
    }else {
        return false;
    }
}
console.log(islong("ant"));
console.log(islong(" "));


