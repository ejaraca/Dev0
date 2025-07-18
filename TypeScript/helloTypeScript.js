// para ejecutar debo compilar el archivo con:
// tsc helloworld.ts
// y luego ejecutar el archivo compilado con:
// node helloworld.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello TypeScript!');
// Variable
var nombre = 'Juan';
console.log(nombre);
var apellido = 'Pérez';
console.log(apellido);
console.log(typeof nombre);
var edad = 30;
console.log(edad);
var altura = 1.75;
console.log(altura);
// Constante
var PI = 3.14159;
console.log(PI);
// Tipos de datos
var isActive = true;
console.log(isActive);
var fecha = new Date();
console.log(fecha);
var mensaje = 'Hola, TypeScript!';
console.log(mensaje);
// Arreglos
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
// Tuplas
var tupla = ['Juan', 30];
console.log(tupla);
tupla[0] = 'Pedro'; // Cambiar el nombre
console.log(tupla);
// controles de flujo
var numero = 10;
if (numero > 5) {
    console.log('El número es mayor que 5');
}
else if (numero === 5) {
    console.log('El número es igual a 5');
}
else {
    console.log('El número es menor que 5');
}
// listas
var lista = ['Manzana', 'Banana', 'Naranja'];
console.log(lista);
lista.push('Pera');
console.log(lista);
// sets
var conjunto = new Set(['Rojo', 'Verde', 'Azul']);
conjunto.add('Amarillo');
console.log(conjunto);
conjunto.delete('Verde');
console.log(conjunto);
// mapas
var mapa = new Map();
mapa.set('Uno', 1);
mapa.set('Dos', 2);
console.log(mapa);
mapa.set('Tres', 3);
console.log(mapa);
mapa.delete('Dos');
console.log(mapa);
// estruturas de datos
// Objetos
var persona = {
    nombre: 'Juan',
    edad: 30
};
console.log(persona);
// Enumeraciones
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
console.log(colorFavorito);
// loops
// For loop
for (var i = 0; i < 5; i++) {
    console.log("N\u00FAmero: ".concat(i));
}
// While loop
var contador = 0;
while (contador < 5) {
    console.log("Contador: ".concat(contador));
    contador++;
}
// Funciones
// Función simple
function saludar(nombre) {
    return "Hola, ".concat(nombre, "!");
}
console.log(saludar('Juan'));
// Función con retorno de tipo específico
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 10));
// Funciones con parámetros opcionales
function saludarConEdad(nombre, edad) {
    if (edad) {
        return "Hola, ".concat(nombre, "! Tienes ").concat(edad, " a\u00F1os.");
    }
    else {
        return "Hola, ".concat(nombre, "!");
    }
}
console.log(saludarConEdad('Juan', 30));
console.log(saludarConEdad('Pedro'));
//clases
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        return "Hola, me llamo ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
var juan = new Persona('Juan', 30);
console.log(juan.saludar());
// Herencia
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, carrera) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.carrera = carrera;
        return _this;
    }
    Estudiante.prototype.estudiar = function () {
        return "".concat(this.nombre, " est\u00E1 estudiando ").concat(this.carrera, ".");
    };
    return Estudiante;
}(Persona));
var maria = new Estudiante('María', 22, 'Ingeniería');
console.log(maria.saludar());
console.log(maria.estudiar());
