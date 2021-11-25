document.getElementById('botonLogin').addEventListener("click", login);
document.getElementById('botonRegister').addEventListener("click", register);
// document.getElementById('ingreso1').addEventListener("click", validar);
window.addEventListener('resize', widthPag);


//vars

const contenedorLogRe = document.querySelector(".containerLoginRegister");
const formLogin = document.querySelector(".formLogin");
const formRegister = document.querySelector(".formRegister");
const backCaseLog = document.querySelector(".backCaseLogin");
const backCaseReg = document.querySelector(".backCaseRegister");

function widthPag(){
    if(window.innerWidth > 850){
        backCaseLog.style.display = "block";
        backCaseReg.style.display = "block";
    }else{
        backCaseReg.style.display = "block";
        backCaseLog.style.opacity = "1";
        backCaseLog.style.display = "none";
        formLogin.style.display = "block";
        formRegister.style.display = "none";
        contenedorLogRe.style.left = "0px";
    }
}

widthPag();

function login(){
    if(window.innerWidth > 850){
        formRegister.style.display = "none";
        contenedorLogRe.style.left= "10px";
        formLogin.style.display = "block";
        backCaseReg.style.opacity = "1";
        backCaseLog.style.opacity = "0";
    }else {
        formRegister.style.display = "none";
        contenedorLogRe.style.left= "0px";
        formLogin.style.display = "block";
        backCaseReg.style.display = "block";
        backCaseLog.style.display = "none";
    }


};

function register(){
    if(window.innerWidth > 850){
        formRegister.style.display = "block";
        contenedorLogRe.style.left= "460px";
        formLogin.style.display = "none";
        backCaseReg.style.opacity = "0";
        backCaseLog.style.opacity = "1";
    }else {
        formRegister.style.display = "block";
        contenedorLogRe.style.left= "0px";
        formLogin.style.display = "none";
        backCaseReg.style.display = "none";
        backCaseLog.style.display = "block";
    }

};



function validar(){
    
    const u = "eduardo";
    const c = "246810";
    const us = document.getElementById("usuario1").value;
    const con = document.getElementById("contrasena1").value;

    if(us == u && con == c) {
        alert("Bienvenido");
        window.location = ("another.html");
    } else{
        alert("Datos incorrectos");
    }
}