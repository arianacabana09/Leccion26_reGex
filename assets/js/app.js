var enviar = document.getElementById("enviar");
var psw = document.getElementById("psw");
var psw2 = document.getElementById("pswVerificado");
var msg = document.getElementById("msj");

var crtCantidad = /^\s+|\s+$/;

enviar.addEventListener("click",function(event){
  if (psw.value.length < 6 || crtCantidad.test(psw.value)){
    msg.innerText = "Ingrese una contraseña: mínimo 6 carácteres";
    psw.onfocus();
  } else if(psw.value == "123456"){
    msg.innerText = "La contraseña debe ser diferente de 123456";
  } else if(psw.value == "098754"){
    msg.innerText = "La contraseña debe ser diferente de 098754";
  } else if(psw.value == "password" || psw.value == "PASSWORD"){
    msg.innerText = "La contraseña debe ser diferente de password";
  } else{
    msg.innerText = "";
    msg.style.display = "none";
  }
});
