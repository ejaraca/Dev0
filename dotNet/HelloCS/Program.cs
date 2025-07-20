/*
HelloCS Program
This program demonstrates basic C# syntax including:
    1. Variables,
    2. Data Structures,
    3. Loops,
    4. Conditionals,
    5. Functions

La plantilla de aplicación de consola de C# fue creada con el comando 
dotnet new console -n HelloCS
y se ejecuta con el comando
dotnet run
*/

using System;
// Print a message to the console
Console.WriteLine("Hello, CS!");

// 1. variables
Console.WriteLine("\n1. Variables");

string name = "Alice";
Console.WriteLine($"Hello, {name}!");

int number = 42;
Console.WriteLine($"The answer to life, the universe, and everything is {number}.");

float pi = 3.14f;
Console.WriteLine($"The value of pi is approximately {pi}.");

// Estructuras
Console.WriteLine("\n2. Data Structures");

var array = new int[] { 1, 2, 3, 4, 5 };
Console.WriteLine("Array elements:");

var set = new System.Collections.Generic.HashSet<int> { 1, 2, 3, 4, 5 };
foreach (var item in set)
{
    Console.WriteLine(item);
}

//3. Loops
Console.WriteLine("\n3. Loops");

for (int i = 0; i < array.Length; i++)
{
    Console.WriteLine($"Array[{i}] = {array[i]}");
}
foreach (var item in array)
{
    Console.WriteLine($"Item: {item}");
}

// 4. Conditionals
Console.WriteLine("\n4. Conditionals");
if (number > 0)
{
    Console.WriteLine("The number is positive.");
}
else if (number < 0)
{
    Console.WriteLine("The number is negative.");
}
else
{
    Console.WriteLine("The number is zero.");
}

// 5. Functions
Console.WriteLine("\n5. Functions");

int result = Add(5, 10);
Console.WriteLine($"The result of adding 5 and 10 is {result}.");

static int Add(int a, int b)
{
    return a + b;
}
