// para ejecutar debo compilar el archivo con:
// tsc helloworld.ts
// y luego ejecutar el archivo compilado con:
// node helloworld.js

console.log('Hello TypeScript!');

// Variable
var nombre = 'Juan';
console.log(nombre);
var apellido:string = 'Pérez';
console.log(apellido);
console.log(typeof nombre);

var edad = 30;
console.log(edad);
let altura:number = 1.75;
console.log(altura);

// Constante
const PI = 3.14159;
console.log(PI);

// Tipos de datos
let isActive: boolean = true;   
console.log(isActive);
let fecha: Date = new Date();       
console.log(fecha);
let mensaje: string = 'Hola, TypeScript!';
console.log(mensaje);

// Arreglos
let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros);
numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
// Tuplas
let tupla: [string, number] = ['Juan', 30]; 
console.log(tupla);
tupla[0] = 'Pedro'; // Cambiar el nombre
console.log(tupla);

// controles de flujo
let numero: number = 10;
if (numero > 5) {
    console.log('El número es mayor que 5');
}
else if (numero === 5) {
    console.log('El número es igual a 5');
} else {
    console.log('El número es menor que 5');
}

// listas
let lista: string[] = ['Manzana', 'Banana', 'Naranja'];
console.log(lista);
lista.push('Pera');
console.log(lista);
// sets
let conjunto: Set<string> = new Set(['Rojo', 'Verde', 'Azul']);
conjunto.add('Amarillo');
console.log(conjunto);
conjunto.delete('Verde');
console.log(conjunto);
// mapas
let mapa: Map<string, number> = new Map( );        
mapa.set('Uno', 1);
mapa.set('Dos', 2);
console.log(mapa);
mapa.set('Tres', 3);
console.log(mapa);
mapa.delete('Dos'); 
console.log(mapa);

// estruturas de datos
// Objetos
let persona: { nombre: string, edad: number } = {
    nombre: 'Juan',
    edad: 30
};
console.log(persona);

// Enumeraciones
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}   
let colorFavorito: Color = Color.Verde;
console.log(colorFavorito);

// loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
}
// While loop
let contador: number = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// Funciones
// Función simple
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}   
console.log(saludar('Juan'));

// Función con retorno de tipo específico
function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(5, 10));

// Funciones con parámetros opcionales
function saludarConEdad(nombre: string, edad?: number): string {
    if (edad) {
        return `Hola, ${nombre}! Tienes ${edad} años.`;
    } else {
        return `Hola, ${nombre}!`;
    }
}
console.log(saludarConEdad('Juan', 30));
console.log(saludarConEdad('Pedro'));

//clases
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}
let juan = new Persona('Juan', 30);
console.log(juan.saludar());
// Herencia
class Estudiante extends Persona {
    carrera: string;

    constructor(nombre: string, edad: number, carrera: string) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    estudiar(): string {
        return `${this.nombre} está estudiando ${this.carrera}.`;
    }
}
let maria = new Estudiante('María', 22, 'Ingeniería');
console.log(maria.saludar());
console.log(maria.estudiar());
