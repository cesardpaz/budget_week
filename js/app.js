//variables y selectores
const formulario   = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


//clases 
class Presupuesto {

    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante    = Number(presupuesto);
        this.gastos      = [];
    }

}

//No require constructor
class UI {

}

const ui = new UI();

let presupuesto;


//funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    
    //if user put blank text or click on cancel or user add letter or negative number
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

}