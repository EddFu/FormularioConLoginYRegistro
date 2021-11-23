document.getElementById('botonLogin').addEventListener("click", login);
document.getElementById('botonRegister').addEventListener("click", register);

//vars

const contenedorLogRe = document.querySelector(".containerLoginRegister");
const formLogin = document.querySelector(".formLogin");
const formRegister = document.querySelector(".formRegister");
const backCaseLog = document.querySelector(".backCaseLogin");
const backCaseReg = document.querySelector(".backCaseRegister");

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
        // contenedorLogRe.style.top= "-50px";
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





