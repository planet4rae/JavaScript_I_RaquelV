var ing = 0;
document.getElementById("agregarbtn").addEventListener("click", (e) => {
    var tipo = document.getElementById("tipo");
    var tipo_resultado = tipo.value;
    if (tipo_resultado == "egreso") {
        ing = ing + 1;
        var nameid = "elemento" + ing; //hay un error al salir con egreso y salen cuadros vacios en igreso, por eso está como nameid y no nameId
        var div1 = document.createElement("div");
        div1.className = "elemento limpiarEstilos";
        div1.id = nameId;
        document.getElementById("lista-ingresos").appendChild(div1);

        //crear descripcion para que salga en HTMl
        var descricion = document.getElementById("descripcion").value;
        var div2 = document.createElement("div");
        div2.className = "elemento_descripcion";
        div2.innerHTML = descricion;
        div2.id = nameId;
        document.getElementById(nameId).appendChild(div2);

        var nameId2 = "cantidad" + ing;
        var div3 = document.createElement("div");
        div3.className = "derecha limpiarEstilos";
        div3.id = nameId2;
        document.getElementById(nameId).appendChild(div2);

        //creacion de elemento valor
        var valor = document.getElementById("valor").value;
        var valorName = "elemento_valor" + ing;
        var div4 = document.createElement("div");
        div4.className = "elemento_valor";
        div4.innerHTML = valor;
        div4.id = valorName;
        document.getElementById(nameId2).appendChild(div4);

        //creacion del elemento porcentaje  %
        var div5 = document.createElement("div");
        div5.className = "elemento_porcentaje";
        div5.id = nameId2;
        document.getElementById(nameId2).appendChild(div5);

        //elemento eliminar
        var nameId3 = "eliminar" + ing;
        var div6 = document.createElement("div");
        div6.className = "elemento_eliminar";
        div6.id = nameId3;
        document.getElementById(nameId2).appendChild(div6);

        //boton eliminar
        var nameId4 = "btneliminar" + ing;
        var btnEliminarIngreso = document.createElement("button");
        btnEliminarIngreso.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
        btnEliminarIngreso.id = nameId4;
        btnEliminarIngreso.classList.add("elemento_eliminar--btn"); //Para botones, usar classList en vez de getElementById

        // Agregar evento de clic para eliminar
        btnEliminarIngreso.addEventListener("click", () => {
            console.log(1);
            eliminarElemento(nameid); // Pasar el ID del elemento a eliminar
        });

              
    }
});

// Función para eliminar el elemento

function eliminarElemento(elementId) {
    console.log(elementId);
    var elementoAEliminar = document.getElementById(elementId);
    if (elementoAEliminar) {
        elementoAEliminar.remove(); // Elimina el elemento del DOM
        cargarEgresos();
        cargarIngresos();
        limpiarValores();
    }
}

