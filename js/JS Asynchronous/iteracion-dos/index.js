//1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
//fetch() para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.



//const baseUrl = 'https://api.nationalize.io/?name=alvaro';


//fetch('https://api.nationalize.io/?name=' + name).then(function(resultado){
 //   return resultado.json();
//}).then(function (resultadoFinal){console.log(resultadoFinal)});
//name = "Marta";



let iButton= document.querySelector('input');
let button = document.querySelector("button");




const realizarPeticion = () => {
    

    let nombre = iButton.value;

    fetch('https://api.nationalize.io/?name=' + nombre).then((resultado)=> resultado.json()).then((respuesta) => crear(respuesta));


}
button.addEventListener('click', realizarPeticion)

//1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
//a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
//EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
//de MZ.
const resultadoApi = {
    country: [ 
        {country_id: 'PL', probability: 0.248},
        
        {country_id: 'ES', probability: 0.115},
        
        {country_id: 'PT', probability: 0.096},
        
        {country_id: 'AR', probability: 0.047},
        
        {country_id: 'SK', probability: 0.046}

    ],
    name: "marta"
};



// Creamos una función para poder llamarla luego y eliminar los elementos
const eliminar = (eliminar1, eliminar2) => {
    eliminar1.remove();
    eliminar2.remove();
}



const crear = (respuesta) => {
    const p$$ = document.createElement('p');

    const eliminar$$ = document.createElement('button')

   

    

    p$$.textContent = `El nombre ${respuesta.name} tiene un ${respuesta.country[0].probability} porciento de ser de ${respuesta.country[0].country_id}y un 6 porciento de ser de${respuesta.country[1].country_id}`; 

    eliminar$$.textContent = "X";

    eliminar$$.addEventListener('click', () => eliminar(p$$, eliminar$$) );


    document.body.appendChild(p$$);
    document.body.appendChild(eliminar$$)
}




