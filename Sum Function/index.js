function sum(a , b ,c){
    if(c)
        return a+b+c;
    else if(b)
        return function (c){
            return a+b+c;
        }
    else 
        return function(b,c){
            if(c)
                return a+b+c;
            else
                return function(c){
                    return a+b+c;
                }
        }
}
console.log(sum(20,5,3));
console.log(sum(20,5)(3));
console.log(sum(20)(5,3));
console.log(sum(20)(5)(3));