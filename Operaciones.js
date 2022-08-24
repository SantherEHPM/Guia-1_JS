'use strict';

const operSuma = (...numsEnter) => {
    let suma;
    console.log(numsEnter);;
    suma=0;
    for(let i=0;i < numsEnter.length;i++){
        suma=numsEnter[i]+suma;
    }
    return suma;
} 

export {operSuma};

