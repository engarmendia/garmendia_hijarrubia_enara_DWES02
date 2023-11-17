'use strict'

//Definicion de clase Socio
class Socio {
  // Propiedades
  id;
  nombre;
  apellido;
 //contructor
  constructor(id, nombre, ap) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = ap;
  }
}

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1 (No lo he usado)
// const formulario = document.querySelector('#formNombre')
// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById ('contenedorPintarSocios')
// variable global para almacenar los datos de los socios del JSON
var datos;
// array vacio donde añadimos los objetos socio
var arraySocios = [];
// TODO: array para añadir los socios
cargarSociosJSON()

// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = '../../model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data);
      datos = data;
      aniadirSociosInicialesArray();
    })
  })
}

/* 
TODO:  metodo para añadir socios al array cuando arranca la pagina web
*/
function aniadirSociosInicialesArray () {
/*TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
Mediante un bucle "forEach" recorremos los datos obtenidos del Json y llamamos a la función 
funcionCrearObjetoSubirAlArray() para crear objetos e ir subiendo los objetos al arraySocios
*************************** ALTERNATIVA *********************************
  Si en vez de un forEach usaramos un bucle for/of sería de esta manera:
  for(var socioJSON of datos) {
  var socio = new Socio(socioJSON.id, socioJSON.nombre, socioJSON.apellido);
  arraySocios.push(socio);
  }
  */
  datos.forEach(funcionCrearObjetoSubirAlArray)  
}

//Por cada dato recogido por el forEach, lo almacenamos como objetos tipo socio, usando la clase Socio. 
//Finalmente vamos añadiendo los objetos al arraySocios
function funcionCrearObjetoSubirAlArray(value){
  var socioJSON = value
  var socio = new Socio(socioJSON.id, socioJSON.nombre, socioJSON.apellido);
  arraySocios.push(socio);
}

/*
    TODO: Método para capturar los datos del socio introducidor en el formulario
*/
function capturarDatosSocio () {
  // TODO: recoger los el nombre y apellido del HTML
  // TODO: usamos lo que nos devuelve la función "crearSocio" y lo añadimos al array
  let nombre = document.getElementById('fnombre').value;
  let apellido = document.getElementById('fapellido').value;
  arraySocios.push(crearSocio(nombre, apellido));
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // TODO: crear objeto socio  
  return new Socio(crearID(), nombre, apellido);
}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  return arraySocios.length + 1;
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
  contenedorEscribirSocios.innerHTML = "";
  //TODO: Usamos un bucle for/of para recorrer los objetos del arraySocios e ir concatenando (+=) pintando 
  //cada socio dentro de un <div>, que al ser un elemento de bloque (ocupan todo el ancho disponible) 
  //fuerzan un salto de línea 
  for(var socio of arraySocios) {
    contenedorEscribirSocios.innerHTML += "<div>Socio numero " + socio.id + ": " + 
            socio.nombre + " " + socio.apellido + "</div>";
  }
}

// ------------------- MAIN ------------------------

console.log('Acaba el programa')
