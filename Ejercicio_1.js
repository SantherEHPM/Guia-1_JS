'use strict';

import {operSuma} from "./Operaciones.js";

let num1;
let num2;
let suma;

suma=0;

num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese un numero"));

suma=operSuma(num1,num2);

alert(suma);

