//En esta primer entrega intentare realizar una simulacion de compra con una validacion para inicio de sesion

//------------------------------------Constructor de usuario----------------------------------------------

class CuentaDeUsuario {
  constructor(nombre, contrasenia) {
    this.nombre = nombre;
    this.constrasenia = contrasenia;
  }
}
//------------------------------------Funciones de agregar o quitar ventanas de inicio o registro de usuario----------------------------------------------
  //Muestra o elimina ventanas segun la necesidad del usuario (registrarse o iniciar sesion)


  //variables botones y contenedores
  let botonIniciar = document.getElementById("btn__inicio")
  let botonRegistrar = document.getElementById("btn__registro")
  let contenedorRegistro = document.getElementById("contenedorRegistro");
  let contenedorInicio = document.getElementById("contenedorInicio");


  //eventos de click en botones inicio o registro
  botonIniciar.addEventListener("click",mostrarInicio);
  botonRegistrar.addEventListener("click",mostrarRegistro)


  //Funciones de mostrar o quitar ventanas
  function mostrarInicio() {
    contenedorInicio.classList.remove("active");
    contenedorRegistro.classList.add("active");
  }

  function mostrarRegistro(){
    contenedorRegistro.classList.remove("active");
    contenedorInicio.classList.add("active")
  }



//------------------------------------Registro de sesion----------------------------------------------
//Variable del boton
let botonRegistro = document.getElementById("btnRegistro");
//Evento al presionar Registrarse
botonRegistro.addEventListener("click",crearUsuario);
//Funcion para crear usuario
function crearUsuario (){

  //Variables que obtienen los valores de los input
  let nombreRegistro = document.querySelector("#nombre").value;
  let contraseniaRegistro = document.querySelector("#contrasenia").value;
  //Crea la cuenta de usuario a partir de un objeto constructor
  cuentaCreada = new CuentaDeUsuario(nombreRegistro,contraseniaRegistro);
  //Almacena los datos de la cuenta en un session storage
  sessionStorage.setItem(
    "registroDeUsuario",
    JSON.stringify(cuentaCreada)
  );
  //Agrega la clase al contenedor para desaparecer la ventana de registro
  contenedorRegistro.classList.add("active")
  //llama a la funcion que muestra el mensaje de cuenta creada
  swal("Bien Hecho!", "Tu cuenta ha sido registrada exitosamente!!", "success");
}

//------------------------------------Respuestas registro/inicio----------------------------------------------

//Funcion que muestra un mensaje al registrarse el usuario
/*function mostrarRespuesta(){
  let respuesta = document.getElementById("respuestaEvento");
  respuesta.innerHTML = `<p>Su cuenta ha sido creada de manera exitosa!!! </p>`;
}
//Funcion que borra el mensaje de cuenta creada al seleccionar iniciar sesion
function borrarRespuesta(){
  let respuesta = document.getElementById("respuestaEvento");
  respuesta.classList.add("active")
}

function respuestaInicioMal(){
  let datosIncorrectos = document.getElementById("respuestaEvento");
  datosIncorrectos.innerHTML = `<p>Los datos ingresados son incorrectos,Digitelos correctamente</p>`;
}

function respuestaInicioBien(){
  let datosCorrectos = document.getElementById("respuestaEvento");
  datosCorrectos.innerHTML = `<p>Sesion iniciada correctamente</p>`;
}*/

//------------------------------------Inicio de Sesion----------------------------------------------

let botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", iniciarSesion);

function iniciarSesion(){
  //variables de inputs
  let nombreInicioSesion = document.getElementById("nombreInicio").value;
  let contraseniaInicioSesion = document.getElementById("contraseniaInicio").value;

  //creacion de nuevo objeto para comparar
  inicioCreado = new CuentaDeUsuario(
    nombreInicioSesion,
    contraseniaInicioSesion
  );
  //almacenamiento en sessionStorage
  sessionStorage.setItem(
     "inicioDeUsuario", 
     JSON.stringify(inicioCreado)
   );

    validarDatos()
}

//------------------------------------Validacion de datos----------------------------------------------
   
function validarDatos (){
  //variable con los datos almacenados de registro de sesion:
  let usuarioRegistrado = sessionStorage.getItem("registroDeUsuario");
  //variable con los datos almacenados de inicio de sesion:
  let inicioDeSesion = sessionStorage.getItem("inicioDeUsuario");
     
    if (usuarioRegistrado !== inicioDeSesion){
      swal("Error!!", "Los datos ingresados son incorrectos", "error");
    }else{
      swal("Ingreso realizado", "se ha iniciado sesion correctamente", "success");
    }
}




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
