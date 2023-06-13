/* Operadores aritmeticos
    = operador de asignación, Se usa para asignar valores a un avariable
    + operador de suma, Se usa para sumar dos valores
    - operador de resta
    * operador de multiplicación
    / Division
    % modulo
    ++ aumento
    -- disminución
*/

const resultado = 10 + 10;
const resultado2 = 10 - 10;
//el modulo es el resultado del sobrante de una division
const resultado3 = 10 % 3;
console.log(resultado3);
let numero =1;
numero++;
// numero--;
console.log(numero);

/*Operadores de asignacion
    += suma un numero al valor de una variable.
    -= resta un numero al valor de una variable
    *= multiplica un numero al valor de una variable
    /= divide un numero al valor de una variable
    %= obtiene el sobrante de una division y la asigna a la variable
*/

let numero1 = 10;
// numero1 = numero1 + 5;
// numero1 += 5;
// numero1 -= 5;
numero1 *= 5;
// numero1 /= 5;
// numero1 %= 5;
console.log (numero1);

/* Operadores de comparacion Nos permite comparar valores 
    == igual que
    === igual en valor y en tipo
    != diferente
    !== diferente en valor y diferente en tipo
    > Mayor que
    < menor que
    >= mayor o igual que
    <= menor o igual que
    ? operador ternario por lo tanto
*/

// const resultado4 = 5>1;//true
// const resultado4 = 20>20;//true
const resultado4 = 10===10;//false
console.log (resultado4);

const resultadoOperador = 7>1 ? 'El primer valor es mayor que el segundo': 'el segundo valor es mayor que el primero';
console.log (resultadoOperador);