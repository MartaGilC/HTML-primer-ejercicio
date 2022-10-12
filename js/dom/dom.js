//Usa querySelector para mostrar por consola el botón con la clase .showme
let button$ = document.querySelector('.showme');
console.log(button$)

//Usa querySelector para mostrar por consola el h1 con el id #pillado
let id$ = document.querySelector('#pillado');
console.log(id$)

//Usa querySelector para mostrar por consola todos los p
let allP$ = document.querySelectorAll('p');
console.log(allP$)

//Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let classPokemon$ = document.querySelectorAll('.pokemon');
console.log(classPokemon$)

//Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
let data$$ = document.querySelector('[data-function = "testMe"]');
console.log(data$$)

//Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"
let threeData$$ = document.querySelector('[data-function = "testMe"]')
console.log(threeData$$[2])