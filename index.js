/*
Creador de codigo
Garcia Samperio Janice
*/

/*
Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.

*/
console.log("- Sum of Resistors in Series");
const sumResistance = [14, 3, 5, 6];
let total = 0; //si le pongo const no funciona

for (let i=0; i < sumResistance.length; i++){
    total += sumResistance[i];  
};
console.log("la suma de los numeros " + sumResistance + " es: " + total);

console.log("-----------------------------");

/*
Number divided into halves
 
Given a number, return the number divided into its halves in an array.

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

*/
console.log("- Number divided into halves");
let arrays = [];
const nomber = 45;
let div = nomber / 2;
//console.log(div); //es un num, lo tengo que convertir a string
let res = div.toString();
//console.log(res);

//funcional. pero no es lo mejor
arrays.push(res);
arrays.push(res);
console.log("la division de " + nomber +" es : [" + arrays + "]");


console.log("-----------------------------");

/*
Secret Society
 
Find the name of a secret society based on the first letter of each member's name.

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

*/
let sociedad = ["Esperanza", "Franco", "Nia"];
console.log("El nombre de la sociedad secreta por los nombres [" + sociedad + "] es: ")
sociedad.forEach((nombre) => {
    let codigo = nombre.split("");
  
    console.log(codigo [0]);
});

console.log("-----------------------------");

/*
Online status

Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
*/

console.log("- Online status");
let usuariosOnline = ["Rubius", "Town", "Fedelobo", "Mikecrack", "Mangel", "Bers"];

let n = usuariosOnline.length;
let usuariosPrin = usuariosOnline.slice(0, 2);
let usuariosResto = usuariosOnline.slice(3, n); //me da los nombres
let numResto = usuariosResto.length;

console.log(`Los usuarios en linea son: ${usuariosPrin} y ${numResto} en linea` );

console.log("-----------------------------");

/*
Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/
console.log("- Array of Multiples");

function arrayMultiplos(number, parameter){
    let arrayNum = [];
    let arrayFinal= [];
    //arrayNum.length = parameter //tamaño de lista es = parametro
    console.log("El tamaño de lista es: "+ parameter);
    console.log("el numero a multiplicar es: " +number);

    //for cara asignar valores a la lista
    for(i = 1; i<=parameter; i++){ //parameter es el top de num que va a tener
        arrayNum.push(i);
    }
    //console.log(arrayNum);

    //se multiplica number por cada numero en el array
    arrayNum.forEach((numi) => {
        numi = number * numi;
        //console.log(res);
        console.log(`Multiplo de ${number} = ${numi}` );
        arrayFinal.push(numi);     

    });
    
   console.log(`Array final: [${arrayFinal}]`);
}
arrayMultiplos(23, 3);

console.log("-----------------------------");

/*
Positive dominance in Array

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/
console.log("Positive dominance in Array");
 
let numeros = [2, 4, 7, -1, -45, 65, -34, -4, -21, 23, 21, -1, -2] //deberia sar falso
console.log(`Array de numeros [${numeros}]`);
let numPos = [];
let numNeg = [];
numeros.forEach((nume) => {
    if( nume > 0){
        numPos.push(nume);
    }else{
        numNeg.push(nume);
    }
});
console.log(numNeg);
console.log(numPos);

if(numNeg.length > numPos.length){
    console.log("Hay mas numeros negativos en la lista");
    console.log(false);
}else {
    console.log("Hay mas numeros positivos en la lista");
    console.log(true);
}

console.log("-----------------------------");
/*
Antipodal Average
 
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
console.log("- Antipodal Average");
let arrarDivision = [2, 5, 7, 1, 12, 4, 54, 1];
console.log(`Array de inicio: [${arrarDivision}]`);

let division1 = arrarDivision.length; //num de tamaño
console.log("Tamaño de array: "+division1);
//console.log(Number.isInteger(0));

let mitad = division1 / 2;
//console.log(mitad);
;
//condicion para saber si tiene division igual
if(Number.isInteger(mitad) == false){ //Si nos da un decimal
    console.log("El array de divide de manera no equitativa")
    let mitad2 = mitad - 0.5;
    //console.log(mitad2);
    let array1 = arrarDivision.slice(0, mitad2);
    let array2 = arrarDivision.slice(mitad2 +1, division1);

    console.log(`Array 1: [${array1}]`);
    console.log(`Array 2: [${array2}]`);

    //array invertido
    let arrayInv = []
    for (let i = array2.length -1; i >= 0; i--){
        //console.log(array2[i]);
        arrayInv.push(array2[i]);        
    };
    console.log(`Array 2 invertido: [${arrayInv}]`);
    
    //Sumar los arrays *
    let sumaDeArrays = array1.map((nun, index) => nun + arrayInv[index]);
    console.log(`Esta es la suma del array 1 y array invertido: [${sumaDeArrays}]`);
    //Basicamente creamos un nuevo array donde nun es el numero del array1 y se suma con el elemento con n (index) elementos
    
    //Se crea el array final donde se dividen los valores en 2. 
    let arrayFinal = [];
    for(i = 0; i<=sumaDeArrays.length -1; i++){
        arrayFinal.push(sumaDeArrays[i] / 2);
       
    };
     console.log(`Array con valores divididos entre 2 [${arrayFinal}]`);
    
     

}else{
    console.log("Este Array se divide de manera equitativa");

    let array1 = arrarDivision.slice(0, mitad);
    let array2 = arrarDivision.slice(mitad, division1);

    console.log(`Array 1: [${array1}]`);
    console.log(`Array 2: [${array2}]`);

    //array invertido
    let arrayInv = []
    for (let i = array2.length -1; i >= 0; i--){
        //console.log(array2[i]);
        arrayInv.push(array2[i]);        
    };
    console.log(`Array 2 invertido: [${arrayInv}]`);
    
    //Sumar los arrays *
    let sumaDeArrays = array1.map((nun, index) => nun + arrayInv[index]);
    console.log(`Esta es la suma del array 1 y array invertido: [${sumaDeArrays}]`);
    //Basicamente creamos un nuevo array donde nun es el numero del array1 y se suma con el elemento con n (index) elementos
    
    //Se crea el array final donde se dividen los valores en 2. 
    let arrayFinal = [];
    for(i = 0; i<=sumaDeArrays.length -1; i++){
        arrayFinal.push(sumaDeArrays[i] / 2);
       
    };
     console.log(`Array con valores divididos entre 2 [${arrayFinal}]`);
    

}

/*
function sumaNum(arreglo){
    let sumaHecha= 0;
    for (let i=0; i < arreglo.length; i++){
        sumaHecha += arreglo[i];  
        console.log(sumaHecha);
    };

};
*/





