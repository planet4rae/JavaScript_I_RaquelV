//Variables de ingresos y de egresos
var ingresos = {
    salario: 20000,
    ventaAuto: 50000
};


var egresos ={
    renta: 4000,
    ropa: 800
};


// Función flecha para dar formato de moneda a presupuesto
const formatoMoneda = (presupuesto) => {
    return presupuesto.toLocaleString('mx', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
    });
};

//Función flecha para dar formato de porcentaje
const formatoPorcentaje = (porcentajeEgreso) => {
    return porcentajeEgreso.toLocaleString('mx', {
        style: 'percent',
        maximumFractionDigits: 2,
    });
};


const totalIngresos = () =>{
    var totalIngreso = 0;
    var ingresosElement = document.getElementById("lista-ingresos");
    var totalElementovalor = ingresosElement.getElementsByClassName("elemento_valor");
    for (var ingreso = 0; ingreso < totalElementovalor.length; ingreso++) {
      totalIngreso =
        totalIngreso + parseFloat(totalElementovalor[ingreso].innerHTML);
    }
    return totalIngreso;
  };
  
  const totalEgresos = () => {
    var totalEgreso = 0;
    var egresosElement = document.getElementById("lista-egresos");
    var totalElementovalor = egresosElement.getElementsByClassName("elemento_valor");
    for (var egreso = 0; egreso < totalElementovalor.length; egreso++) {
      totalEgreso =
        totalEgreso + parseFloat(totalElementovalor[egreso].innerHTML);
    }
    return totalEgreso;
  };
  
  const cargarIngresos = () => {
    const ingresosElement = document.getElementById("presupuesto_ingreso--valor");
    ingresosElement.innerHTML = totalIngresos();
  };
  
  const cargarEgresos = () => {
    const egresosElement = document.getElementById("presupuesto_egreso--valor");
    egresosElement.innerHTML = totalEgresos();
  };
  
  const cargarCabecero = () => {
    cargarIngresos();
    cargarEgresos();
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    //mandar llamar variable con formato
    var presupuestoFormatoMoneda = formatoMoneda(presupuesto);
    var egresoPorcentuado = formatoPorcentaje(porcentajeEgreso);
  
    console.log("presupuesto:", presupuestoFormatoMoneda);
    console.log("porcentaje de Egreso:", egresoPorcentuado);
    console.log("total de ingresos:", totalIngresos());
    console.log("total de egresos:", totalEgresos());
  };
  
  cargarCabecero();
  