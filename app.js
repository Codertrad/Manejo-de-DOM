//En esta primer entrega intentare realizar una simulacion de compra con una validacion para inicio de sesion

//------------------------------------Constructor de usuario----------------------------------------------

class CuentaDeUsuario {
  constructor(nombre, contrasenia) {
    this.nombre = nombre;
    this.constrasenia = contrasenia;
  }
}

//------------------------------------Registro de sesion----------------------------------------------

let botonRegistro = btn.addEventListener("click", () => {
  let nombreDeUsuario = document.getElementById("nombre").value;
  let contraseniaDeUsuario = document.getElementById("contrasenia").value;
  cuentaCreada = new CuentaDeUsuario(nombreDeUsuario, contraseniaDeUsuario);
  //Se almacenan los datos de registro en un sessionStorage
  window.sessionStorage.setItem(
    "registroDeUsuario",
    JSON.stringify(cuentaCreada)
  );

  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = `<p>Su Registro ha realizado de manera exitosa!!! Su usuario es: ${cuentaCreada.nombre} y su contraseña es: ${cuentaCreada.constrasenia}</p>`;
});

//------------------------------------Inicio de Sesion----------------------------------------------

let botonInicio = btnInicio.addEventListener("click", () => {

  //variables de inputs
  let nombreInicioSesion = document.getElementById("nombreInicio").value;
  let contraseniaInicioSesion = document.getElementById("contraseniaInicio").value;

  //creacion de nuevo objeto para comparar
  inicioSesion = new CuentaDeUsuario(
    nombreInicioSesion,
    contraseniaInicioSesion
  );
  //almacenamiento en sessionStorage
  sessionStorage.setItem(
     "inicioDeUsuario", 
     JSON.stringify(inicioSesion)
   );

      //variable con los datos almacenados de registro de sesion:
      let usuarioRegistrado = sessionStorage.getItem("registroDeUsuario");
      //variable con los datos almacenados de inicio de sesion:
      let inicioDeSesion = sessionStorage.getItem("inicioDeUsuario");
   
        if (usuarioRegistrado !== inicioDeSesion){
          alert("EL NOMBRE DE USUARIO ES INCORRECTO!!!");
       }else{
         alert("USTED A INGRESADO CORRECTAMENTE")
       }

});
//------------------------------------Validacion de datos----------------------------------------------
   





//Planes de cero estres

class Plan {
  constructor(nombrePlan, duracionPlan, precioPlan) {
    this.nombrePlan = nombrePlan;
    this.duracionPlan = duracionPlan;
    this.precioPlan = precioPlan;
  }
}

const adrenalinaExtrema = new Plan(
  "Adrenalina Extrema",
  "2 dias y 1 noche",
  160000
);
const planFestivo = new Plan("Plan festivo", "2 dias y 1 noche", 120000);
const pasadiaExtremo = new Plan("Pasadia extremo", "1 dia", 100000);

// Funcion elegir planes creados

function elegirPlanes() {
  alert(
    "Los planes que tenemos disponibles para usted son: \n\n Plan numero 1 \n  Nombre: " +
      adrenalinaExtrema.nombrePlan +
      "\n  Duracion: " +
      adrenalinaExtrema.duracionPlan +
      "\n  Precio " +
      adrenalinaExtrema.precioPlan +
      " Valor x pesona" +
      "\n\n Plan numero 2 \n  Nombre: " +
      planFestivo.nombrePlan +
      "\n  Duracion: " +
      planFestivo.duracionPlan +
      "\n  Precio " +
      planFestivo.precioPlan +
      " Valor x persona" +
      "\n\n Plan numero 3 \n  Nombre: " +
      pasadiaExtremo.nombrePlan +
      "\n  Duracion: " +
      pasadiaExtremo.duracionPlan +
      "\n  Precio " +
      pasadiaExtremo.precioPlan +
      " Valor por persona"
  );

  let planElegido = Number(
    prompt(
      "Ingrese el numero del plan que desea adquirir: \n\n 1 : Adrenallina extrema. \n 2 : Plan Festivo \n 3 : Pasadia extremo"
    )
  );

  //Creando a partir de nombres digitados un valor total, un array para mostrar nombres de viajeros y con .lenght canculamos el valor total para x cantidad de viajeros

  let separador = ",";
  let nombresViajeros = prompt(
    "Ingrese los nombres completos de todos los viajeros para realizar la reserva (cada viajero debe estar separado por una coma)"
  );
  let nombresEnArray = nombresViajeros.split(separador);
  let cantidadViajeros = nombresEnArray.length;

  if (planElegido === 1) {
    let totalPrecio = adrenalinaExtrema.precioPlan * cantidadViajeros;
    alert(
      "Usted ha elegido el plan: \n " +
        adrenalinaExtrema.nombrePlan +
        " para " +
        cantidadViajeros +
        " personas, con un valor total de " +
        totalPrecio +
        " COP."
    );
  } else if (planElegido === 2) {
    let totalPrecio = planFestivo.precioPlan * cantidadViajeros;
    alert(
      "Usted ha elegido el plan: \n " +
        planFestivo.nombrePlan +
        " para " +
        cantidadViajeros +
        " personas, con un valor total de " +
        totalPrecio +
        " COP."
    );
  } else if (planElegido === 3) {
    let totalPrecio = pasadiaExtremo.precioPlan * cantidadViajeros;
    alert(
      "Usted ha elegido el plan: \n " +
        pasadiaExtremo.nombrePlan +
        " para " +
        cantidadViajeros +
        " personas, con un valor total de " +
        totalPrecio +
        " COP."
    );
  } else {
    alert("El dato ingresado es incorrecto!");
    elegirPlanes();
  }

  let opciones = prompt(
    "Seleccione una opcion: \n\n 1 : COMPRAR AHORA \n 2 : ELEGIR PLANES NUEVAMENTE \n 3 : TERMINAR PROCESO"
  );

  while (opciones !== "3") {
    if (opciones === "1") {
      alert("La reserva para:");
      nombresEnArray.forEach((viajeros) => alert(viajeros));
      alert(
        "Ha sido exitosa!!, Recuerda llegar al lugar puntualmente. \n\n Gracias por tu compra!!"
      );
      opciones = "3";
    } else if (opciones === "2") {
      elegirPlanes();
    } else {
      alert("El dato ingresado es incorrecto el proceso ha terminado!!");
      opciones = "3";
    }
  }
}

//elegirPlanes();
