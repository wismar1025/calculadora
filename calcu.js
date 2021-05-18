var a;
var b;
function tal(){
    a= parseInt(document.getElementById('Primer').value);
    b= parseInt(document.getElementById('segundo').value);
}
function limpiar() {
    document.getElementById('cal').reset();
}
function sumar() {
    tal();
  alert('El Resultado es:'+' ' +(a+b));
}
function restar(){ 
    tal();
    alert('El Resultado es:' +' ' +(a-b));
}
function multi(){
    tal();
    alert('El Resultado es:' +' '+(a*b));
}
function divi(){
    tal();
    alert('El Resultado es:' +' '+(a/b));
}