const formulario = document.getElementById('formulario')

const dbUser = 'juan'
const dbPassword = '1234abc'

function validar(u,p){
    if(u === '' || p === ''){
        console.log('Por favor ingresa un dato');
    }
    else{
        if(u === dbUser && p === dbPassword){
            console.log('Bienvenido a tu cuenta');
        }
        else if(u != dbUser){
            let errorUser = document.getElementById('errorUsuario')
            errorUser.classList.remove('hide')
            errorUser.classList.remove('error')
        }
        else if(p != dbPassword){
            let errorUser = document.getElementById('errorPassword')
            errorUser.classList.remove('hide')
            errorUser.classList.remove('error')
        }
    }
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    validar(usuario, password)
})

