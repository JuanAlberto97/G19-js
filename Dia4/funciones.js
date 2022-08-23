// function sumar(n1, n2){
//     let total = n1 + n2
//     console.log(total)
// }

// sumar(5,3)

// function imprimirTabla(numero){
//     for(let index = 1; index <=10; index++){
//         let resultado = numero * index
//         console.log(numero, 'x', index, '=', resultado)
//     }
// }


// imprimirTabla(2)
// imprimirTabla(3)
// imprimirTabla(4)


const nombre = prompt('Ingresa tu nombre')
const edad = Number(prompt('Ingresa tu edad'))
const examen = prompt('Aprobaste el examen de manejo?').toLocaleLowerCase()
const vista = Number(prompt('De 1 a 10, que tan bien miras?'))

console.log(nombre, edad, examen, vista)

function validar(nombreUsuario, edadUsuario, examenUsuario, vistaUsuario){
    if(edadUsuario >= 18){
        if(examenUsuario === 'Si' && vistaUsuario === 10){
            console.log('Felicidades', nombreUsuario, 'obtuviste tu licencia para conducir!')
            return true
        }
        else{
            console.log('No pasaste los filltros')
            return false
        }
    }
    else if(edadUsuario < 18){
        console.log('Lo sentimos, no puedes obtener tu licencia')
        return false
    }
}

const resultado = validar(nombre, edad, examen, vista)

console.log(resultado)

function comprar(booLean){
    if (booLean === true){
    console.log('Puedes comprar un vehiculo')
    }
    else{
    console.log('Lo sentimos pero, no puedes comprar ningun vehiculo')
    }
}

comprar(resultado)


// Crear una aplicacion que le solicite al usuario 2 datos,
// el nombre y su color favorito(azul, rojo, verde, amarillo, morado)
// si el color es diferente de alguno de los que mencionamos notificarle al usuario y que recargue la pagina 
// para ingresar un color correcto
// crear una funcion que reciba por parametros el nombre del usuario y el color
// validar segun el color que recibamos por parametro algo que se relaciona con el color
// ejemplo si el color es azul, podriamos poner un console log que nombre de usuario, elegiste el azul, como el cielo.

const nombre = prompt('Ingresa tu nombre')
const color = prompt('Ingresa tu color favorito: azul, rojo, verde, amarillo, morado')

console.log(nombre, color)