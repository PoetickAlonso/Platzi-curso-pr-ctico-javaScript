//código del cuadrado

console.group( "cuadrados" );
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();
//código del triangulo
console.group( "triangulos" );

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;

console.log(
    "Los lados del triangulo miden: " 
+ ladoTriangulo1 +"cm, "
+ ladoTriangulo2 +"cm y "
+ baseTriangulo3 +" cm"

);

const alturaTriangulo = 5.5;
console.log("la altura del triangulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + baseTriangulo3;
console.log("el perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log("el área del triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();



//código del circulo
console.group( "circulos" );
//radio
const radioCirculo = 4;
console.log("el radio del círculo es: " + radioCirculo + " cm");

//diámetro
const diametroCirculo = radioCirculo * 2;
console.log("el diámetro del círculo es: " + diametroCirculo + " cm");

//Pi
const pi = Math.PI;
console.log("el pi del círculo es: " + pi + " cm");

//Circunsferencia
const perimetro = diametroCirculo * pi;
console.log("la circunsferencia del círculo es: " + perimetro + " cm");


//area 
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El area del círculo es: " + areaCirculo + " cm");

console.groupEnd();






