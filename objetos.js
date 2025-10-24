// 🧱 Bloque 1: Ejercicios con Objetos Simples

// 1. Contar caracteres del nombre de un empleado
// Descripción:
// Dado un objeto empleado con las propiedades nombre y edad, contar cuántos caracteres tiene su nombre.
// Entrada:
// empleado = {"nombre": "Ana", "edad": 25}
// Proceso:
// Acceder a empleado["nombre"].
// Usar len() para obtener la longitud del nombre.
// Salida:
// El nombre 'Ana' tiene 3 caracteres.

const empleado = {nombre: "Ana", edad: 25}

function CantCaracteres(nombre) {
    cantidad = 0
    for (let letra of nombre) {
        cantidad++
    }
    return cantidad
}

const nombre_empleado = empleado.nombre
const caracteres_nombre = CantCaracteres(nombre_empleado)

console.log(`El nombre "${nombre_empleado}" tiene ${caracteres_nombre} caracteres`)

// 2. Contar apariciones de una vocal en el nombre de un producto
// Descripción:
// Dado un objeto producto con propiedad nombre, contar cuántas veces aparece una vocal específica.
// Entrada:
// producto = {"nombre": "Programador", "precio": 100}
// vocal = "o"
// Proceso:
// Recorrer el string producto["nombre"].
// Contar las veces que coincide con la vocal.
// Salida:
// La vocal 'o' aparece 3 veces en 'Programador'.

const producto = {nombre: "Programador", precio: 100}

function LetraRepetida(texto, letra) {
    contador = 0
    for (let letra_texto of texto) {
        if (letra_texto === letra) {
            contador++
        }
    }
    return contador
}

const nombre_producto = producto.nombre
const letra = "o"
const veces_letra = LetraRepetida(nombre_producto, letra)


console.log(`La vocal "${letra}" aparece ${veces_letra} veces en "${nombre_producto}"`)

// 3. Invertir el nombre de una persona
// Descripción:
// Dado un objeto persona, invertir los caracteres de su nombre.
// Entrada:
// persona = {"nombre": "Carlos", "edad": 30}
// Proceso:
// Usar slicing: persona["nombre"][::-1].
// Salida:
// Nombre invertido: solraC

const persona = {nombre: "Carlos", edad: 30}

function InvertirTexto(texto) {
    texto_invertido = ""
    for (let i = texto.length - 1; i >= 0; i--) {
        texto_invertido+= texto[i]
    }
    return texto_invertido
}

const nombre_persona = persona.nombre
const nombre_invertido = InvertirTexto(nombre_persona)

console.log(`Nombre invertido: ${nombre_invertido}`)

// 4. Comparar longitudes de nombres entre dos empleados
// Descripción:
// Dado dos objetos empleados, determinar cuál tiene el nombre más largo.
// Entrada:
// empleado1 = {"nombre": "María", "edad": 28}
// empleado2 = {"nombre": "Guillermo", "edad": 35}
// Proceso:
// Comparar len(empleado1["nombre"]) y len(empleado2["nombre"]).
// Salida:
// El empleado con el nombre más largo es 'Guillermo' (9 letras).

const empleado1 = {"nombre": "María", "edad": 28}
const empleado2 = {"nombre": "Guillermo", "edad": 35}

function CompararCantCaracteres(texto1, texto2) {
    if (CantCaracteres(texto1) > CantCaracteres(texto2)) {
        return true
    } else {
        return false
    }
}

const nombre_empleado1 = empleado1.nombre
const nombre_empleado2 = empleado2.nombre

if (CompararCantCaracteres(nombre_empleado1, nombre_empleado2)) {
    console.log(`El empleado con el nombre más largo es "${nombre_empleado1}" (${CantCaracteres(nombre_empleado1)} letras)`)
} else {
    console.log(`El empleado con el nombre más largo es "${nombre_empleado2}" (${CantCaracteres(nombre_empleado2)} letras)`)
}

// 5. Obtener iniciales del cargo de un empleado
// Descripción:
// Dado un objeto con el cargo de un empleado, obtener sus iniciales.
// Entrada:
// empleado = {"cargo": "Director General Académico"}
// Proceso:
// Dividir el texto en palabras (split()).
// Tomar la primera letra de cada palabra y concatenar con puntos.
// Salida:
// D.G.A.

const c_empleado = {"cargo": "Director General Académico"}

function InicialesFrase(texto) {
    segmentos = texto.split(" ")
    iniciales = []
    for (let i = 0; i < segmentos.length; i++) {
        iniciales.push(segmentos[i][0])
    }
    return iniciales
}

const frase = c_empleado.cargo

console.log(`${InicialesFrase(frase)}`)

// 🧱 Bloque 2: Objetos en Listas (versión con arreglos de objetos)

// 1. Contar caracteres en nombres de varios empleados
// Entrada:
// empleados = [
//     {"nombre": "Ana", "edad": 22},
//     {"nombre": "Santiago", "edad": 30},
//     {"nombre": "Rosa", "edad": 27}
// ]
// Proceso:
// Recorrer la lista.
// Mostrar len(e["nombre"]) para cada empleado.
// Salida:
// Ana → 3 caracteres  
// Santiago → 8 caracteres  
// Rosa → 4 caracteres

// 2. Contar vocales en nombres de empleados
// Entrada:
// empleados = [
//     {"nombre": "Andrea"},
//     {"nombre": "Marcos"},
//     {"nombre": "Lucía"}
// ]
// vocal = "a"
// Proceso:
// Recorrer los objetos.
// Contar la vocal en cada nombre.
// Salida:
// Andrea → 2 veces 'a'  
// Marcos → 1 vez 'a'  
// Lucía → 0 veces 'a'

// 3. Invertir los nombres de empleados
// Entrada:
// empleados = [
//     {"nombre": "Luis"},
//     {"nombre": "Carmen"},
//     {"nombre": "Pedro"}
// ]
// Proceso:
// Para cada empleado, invertir el texto del nombre.
// Salida:
// Luis → siuL  
// Carmen → nemraC  
// Pedro → ordeP

// 4. Comparar longitudes de ciudades de residencia
// Entrada:
// empleados = [
//     {"nombre": "Carlos", "ciudad": "Milagro"},
//     {"nombre": "Andrea", "ciudad": "Guayaquil"},
//     {"nombre": "José", "ciudad": "Quito"}
// ]
// Proceso:
// Analizar la propiedad ciudad.
// Determinar cuál tiene más caracteres.
// Salida:
// La ciudad con más letras es 'Guayaquil' (9 letras).

// 5. Obtener iniciales de cargos de varios empleados
// Entrada:
// empleados = [
//     {"cargo": "Director General Académico"},
//     {"cargo": "Jefe de Laboratorio"},
//     {"cargo": "Asistente Administrativo"}
// ]
// Proceso:
// Dividir cargo en palabras.
// Tomar la inicial de cada palabra.
// Salida:
// Director General Académico → D.G.A.  
// Jefe de Laboratorio → J.D.L.  
// Asistente Administrativo → A.A.

// ⚙️ Bloque 3: Ejercicios numéricos aplicados a objetos

// 1. Promedio de calificaciones mayores a 70 (en empleados)
// Descripción:
// Dado un conjunto de objetos empleados con notas, calcular el promedio de quienes tienen nota ≥ 70.
// Entrada:
// empleados = [
//     {"nombre": "Ana", "nota": 65},
//     {"nombre": "Luis", "nota": 80},
//     {"nombre": "Carla", "nota": 90},
//     {"nombre": "José", "nota": 50},
//     {"nombre": "Marta", "nota": 75}
// ]
// Proceso:
// Recorrer empleados.
// Sumar notas ≥ 70 y contarlas.
// Calcular el promedio.
// Salida:
// Promedio de notas ≥ 70: 81.67

// 2. Contar empleados con edad negativa o inválida
// Descripción:
// Detectar si hay edades erróneas (negativas o nulas) en una lista de empleados.
// Entrada:
// empleados = [
//     {"nombre": "Ana", "edad": 22},
//     {"nombre": "Luis", "edad": -5},
//     {"nombre": "Carla", "edad": 0}
// ]
// Proceso:
// Contar edades ≤ 0.
// Salida:
// Cantidad de edades inválidas: 2

// 3. Promedio de edad: mayores vs menores de edad
// Entrada:
// empleados = [
//     {"nombre": "Ana", "edad": 17},
//     {"nombre": "Luis", "edad": 20},
//     {"nombre": "Carla", "edad": 35},
//     {"nombre": "José", "edad": 15},
//     {"nombre": "Marta", "edad": 18}
// ]
// Proceso:
// Separar mayores (≥ 18) y menores (< 18).
// Calcular promedios respectivos.
// Salida:
// Promedio de mayores: 24.33  
// Promedio de menores: 16.00

// 4. Mostrar la tabla de multiplicar del salario
// Descripción:
// Mostrar la tabla de multiplicar (1 al 10) del salario de un empleado.
// Entrada:
// empleado = {"nombre": "Luis", "salario": 300}
// Proceso:
// Ciclo de 1 a 10.
// Mostrar salario × i.
// Salida:
// Tabla del salario (300):
// 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000

// 5. Promedio de salarios pares e impares
// Entrada:
// empleados = [
//     {"nombre": "Ana", "salario": 450},
//     {"nombre": "Luis", "salario": 500},
//     {"nombre": "Carla", "salario": 625},
//     {"nombre": "José", "salario": 800},
//     {"nombre": "Marta", "salario": 705}
// ]
// Proceso:
// Clasificar salarios pares (salario % 2 == 0) e impares.
// Calcular el promedio de cada grupo.
// Salida:
// Promedio de salarios pares: 650.0  
// Promedio de salarios impares: 593.33
