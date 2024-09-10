
let num1=1

let num2=2.0

let cadena = "hola"

console.log(num1)
console.log(num2)
console.log(cadena)
console.log("HOLA")

const txt1= new String("Hola A Mama")

console.log(txt1)

console.log('1.2.3.4.5'.split('.'))

console.log(txt1.split(' '))

console.log(txt1.length)
console.log(txt1.charAt(1))

// Arreglos

var animales = ['tigre', 'ballena', 'lobo', 'aguila']
console.log(animales.length)
console.log(animales.pop())
console.log(animales)

console.log(animales.push("perro"))
console.log(animales)

let numeros = [11,10,5,4,12,]
console.log(numeros.reverse())

var juntar = numeros.join()
console.log(juntar)

let anio = [1995,1999,2024,2020]

function encontrar(item){
    return item>=2000
}

console.log(anio.some(encontrar))
console.log(anio.find(encontrar))

var vestimenta = ['camisa', 'gorra','pantalon']
    function mifuncion(item,index){
        console.log(index+":"+item)
    }

vestimenta.forEach(mifuncion)


let array = Array.from("1A2B3C4D")

console.log(array)

// Every

let numbers = [32,33,15,40]
mifuncion1()
function validarArray(item){
    return item >= 14
}

function mifuncion1(){
    console.log(numbers.every(validarArray))
}

// De un determinado arreglo con nombre y edad vamos a buscar aquellas
// Personas que tengan mas de 5 años
// El arreglo de 5 elementos

let personas = [
    {nombre: "Alan",edad:5},
    {nombre: "Mario",edad:0},
    {nombre: "Adrian",edad:100},
    {nombre: "Luigi",edad:44},
    {nombre: "Polanco",edad:4},
    {nombre: "Cesar",edad:13},
]

let busqueda = personas.filter(persona=>persona.edad>5)

console.log(busqueda)


// Busqueda de 10 trabajadores donde sean developers
let trabajadores =[
    {nombre: "Estefani", posicion:"Cocina"},
    {nombre:"Juveison", posicion:"Esclavo"},
    {nombre:"Yeison", posicion:"Developer"},
    {nombre:"Kanye West", posicion:"Rapero"},
    {nombre:"Cbum", posicion:"Senior"},
    {nombre:"Adrian", posicion:"Junior"},
    {nombre:"Irving", posicion:"Perra"},
    {nombre:"Miguel", posicion:"Jefe"},
    {nombre:"Esquivel", posicion:"Developer"},
    {nombre:"Tu Mama", posicion:"Developer"}
]
 let busqueda1 =trabajadores.filter(trabajador=>trabajador.posicion=="Developer")
 console.log(busqueda1)
 