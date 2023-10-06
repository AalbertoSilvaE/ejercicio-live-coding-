
//Probamos la pagina
console.log("La pagina esta bien conectada");
//Declaramos una variable y la definimos con array de strings
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
//definimos una variable con un prompt para ingresar la palabra
let palabra = prompt("Ingresa una palabra:");
//Creamos una funcion con un for each
function depuradorStrings(palabra, myArray) {

    
    
    console.log(palabra.length);

    myArray.forEach(element => {
        if (palabra.length < element.length ) {
            console.log(element);
        }

        
    });
  
}

depuradorStrings(palabra, myArray);


// 2do ejercicio

  // Función para imprimir un array de strings en una lista
  function printArray(array) {
    const lista = document.getElementById('miLista');

    // Recorremos el array y creamos un elemento <li> para cada string
    for (let i = 0; i < array.length; i++) {
      const listaDom = document.createElement('li');
      listaDom.textContent = array[i]; // Establecemos el texto del <li> como el elemento del array
      lista.appendChild(listaDom); // Agregamos el <li> a la lista
    }
  }

  const autosFav = ['jetta', 'f150', 'ranger', 'mustang', 'vocho'];
  printArray(autosFav);





  
