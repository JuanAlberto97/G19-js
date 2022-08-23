const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let usuario = document.getElementById('usuario')
    let password = document.getElementById('password')
    console.log(usuario)
    console.log(password);
})