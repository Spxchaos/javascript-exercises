const fibonacci = function(Arnumber) {
    
let number 
if (typeof Arnumber !== 'number'){
   number = parseInt[Arnumber];
}
else{
    number= Arnumber;
}
   let x = 0;
    let y = 1;

    if (number < 0) return 'FU';
    if (number === 0) return 0;
    if (number === 1) return 1;

    
    for(let i = 2; i <= number; i++){
        let z = x + y;
        x = y 
        y = z
        

        
    }
    return y;

};

console.log(fibonacci(2));

// Do not edit below this line
module.exports = fibonacci;
