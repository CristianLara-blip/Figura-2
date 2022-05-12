var cont = 1;
var fila = "";
var est = 0;
var vis = "null";
function agregar() {
   /*crear columna*/
    var nombres= document.getElementById("nombres").value;
    let sexo = "a";
    if (document.getElementById('femenino').checked) {
        sexo = "Femenino";

    } else if(document.getElementById('masculino').checked){
        sexo = "Masculino";

    }else{
        vis();
    }
       
    var ciclo = document.getElementById("ciclo").value;
    var escuela = document.getElementById("escuela").value;
    var tbody = document.getElementById("datos");
    var tr = document.createElement("tr");
    
    /*let td1 = document.createTextNode(f);*/
    /*crear celda*/
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var accion = document.createElement("td");
    accion.classList.add("accion");
    accion.innerHTML= "<a href='#' class='icono2' onclick='editar(this)'>editar</a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'>eliminar</a>"

    var text1 = document.createTextNode(cont);
    var text2 = document.createTextNode(nombres);
    var text3 = document.createTextNode(sexo);
    var text4 = document.createTextNode(ciclo);
    var text5 = document.createTextNode(escuela);
    var text6 = document.createTextNode(accion);
   
    td0.appendChild(text1);
    td1.appendChild(text2);
    td2.appendChild(text3);
    td3.appendChild(text4);
    td4.appendChild(text5);
    accion.appendChild(text6);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(accion);
    tbody.appendChild(tr);
    /*document.getElementById("fruta").value="";
     document.getElementById("fruta").focus();*/
    cont++;
}


function limpiar(){
    nombre.value = "";
    nombre.focus();
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[1].innerHTML;

    document.getElementById('guardar').style.display = 'none';

}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}

