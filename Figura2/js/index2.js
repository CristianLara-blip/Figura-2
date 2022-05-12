var cont = 1;
function agregar() {
   /*crear columna*/
    var nombres= document.getElementById("nombres").value;
    var sexo = document.getElementById("sexo").value;
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


    var text1 = document.createTextNode(cont);
    var text2 = document.createTextNode(nombres);
    var text3 = document.createTextNode(sexo);
    var text4 = document.createTextNode(ciclo);
    var text5 = document.createTextNode(escuela);
   
    td0.appendChild(text1);
    td1.appendChild(text2);
    td2.appendChild(text3);
    td3.appendChild(text4);
    td4.appendChild(text5);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
    /*document.getElementById("fruta").value="";
     document.getElementById("fruta").focus();*/
    cont++;
}


function registrar(){
    if(est == 0){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");

    //crear fila
    var fil = document.createElement("tr");

    //crear celda
    var celda_nombre = document.createElement("td");
    celda_nombre.innerHTML=nombre.value;
    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'>editar</a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'>eliminar</a>"
    fil.appendChild(celda_nombre);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();
    }else{
        fila.cells[0].innerHTML = nombre.value;
        fila = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    nombre.value = "";
    nombre.focus();
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[0].innerHTML;
    est = 1;
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}