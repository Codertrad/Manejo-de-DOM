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
  let contenedorLoginRegistro = document.getElementById("header__container");
  let contenedorAccesoPlanes = document.getElementById("contenedor__ver-planes")


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

   //Agrega la clase al contenedor para desaparecer la ventana de Inicio
   contenedorInicio.classList.add("active")
   

   validarDatos()
  }
  
  //------------------------------------Validacion de datos----------------------------------------------
  
  function validarDatos (){
    //variable con los datos almacenados de registro de sesion:
    let usuarioRegistrado = sessionStorage.getItem("registroDeUsuario");
    //variable con los datos almacenados de inicio de sesion:
    let inicioDeSesion = sessionStorage.getItem("inicioDeUsuario");
    
    if (usuarioRegistrado === inicioDeSesion){
      swal("Ingreso realizado", "se ha iniciado sesion correctamente", "success");
      contenedorLoginRegistro.classList.add("active");
      contenedorAccesoPlanes.classList.remove("active");
    }else{
      swal("Error!!", "Los datos ingresados son incorrectos", "error");
    }
  }

  //------------------------------------Fetch y planes turisticos----------------------------------------------

  async function obtenerPlanes(){
    const planes = await fetch("./planes.json")
      .then((response) => response.json())
      .then((data) => data);
    return planes;
  }

  function mostrarPlanes(planes){
      const listado = document.getElementById("listadoCards");
      listado.innerHTML = "";
      planes.forEach((plan) => {
        const {nombre, precio, img } = plan;
        const planHTML = `
        <div class="cards__item">
             <div class="cards__item-img">
                 <img src="${img}" alt="">
             </div>
             <h2 class="cards__item-title">${nombre}</h2>
             <div class="cards__item-content">
                 <div class="cards__item-content__columns">
                     <h3 class="cards__item-content__columns-h3"> Actividades</h3>
                      <ul class="cards__item-content__columns-ul">
                          <li actividad__1> actividad 1</li>
                          <li actividad__1> actividad 2</li>
                          <li actividad__1> actividad 3</li>
                          <li actividad__1> actividad 4</li>
                      </ul>
                </div>
                <div class="cards__item-content__columns">
                    <h3 class="cards__item-content__columns-h3">Duración</h3>
                    <p class="cards__item-content__columns-p">1 DIA</p>
                </div>
             </div>
             <div class="cards__item-price">
                 <p>${precio}</p>
                 <b class="cards__item-price_b">*por persona</b>
             </div>
             <div class="cards__item-buttons">
                 <a href="#" class="cards__item-buttons_detalles">Agregar al carrito</a>
             </div>
         </div>`;
         listado.innerHTML += planHTML;
      });
  }

  function botonMostrarPlanes (){
    document.getElementById("btnMostrarPlanes").addEventListener("click", async () => {
      const planes = await obtenerPlanes();
      mostrarPlanes(planes)
    })
  }
  
  botonMostrarPlanes();




