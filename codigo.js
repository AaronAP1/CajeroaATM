
function ingresar(){
    let password = "12345678";
    var p = document.getElementById("usuario").value;



    if(p == password){
        window.location.href = "medio.html";


}
}

function retiro() {
	window.location.href = "retiro.html";
}

function deposito(){
	window.location.href = "deposito.html";
}

function consulta() {
	window.location.href = "consulta.html";
}