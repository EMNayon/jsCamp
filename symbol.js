const mySymbol = Symbol();  // return false

if(Symbol() === mySymbol){
    console.log('false!');
}else{
    console.log('true!');
}

console.log(Symbol('Some Text'));