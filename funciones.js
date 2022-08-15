function VerificarUsuario(){
    if (document.getElementById('Usuario').value=="Jefe1234"){
        document.getElementById('mensaje').innerHTML="Usuario Correcto";
    }

}

function VerificarContrasena(){
    if (document.getElementById('contraseña').value=="GIRS123"){
        document.getElementById('mensaje').innerHTML="contraseña Correcta";
    }
}

function VerificarUsuarioCliente(){
    if (document.getElementById('UsuarioCliente').value=="Cliente2425"){
        document.getElementById('mensaje').innerHTML="Usuario Correcto";
    }

}

function VerificarContrasenaCliente(){
    if (document.getElementById('contraseñacliente').value=="Cliente123"){
        document.getElementById('mensaje').innerHTML="contraseña Correcta";
    }
}
