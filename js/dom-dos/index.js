//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let div$$ = document.createElement('div')
console.log(div$$)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let divDos$$ = document.createElement('div');
let p$$ = document.createElement('p');
divDos$$.appendChild(p$$);
console.log(divDos$$)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let divTres$$ = document.createElement('div');
document.body.appendChild(divTres$$);

for (var i = 0; i < 6; i++) {
let pDos$$ = document.createElement('p');
divTres$$.appendChild(pDos$$) 
}

console.log(divTres$$)

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let pTres$$ = document.createElement('p');
pTres$$.innerText = "Soy dinámico!"

console.log(pTres$$)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2$$ = document.querySelector('.fn-insert-here ');
h2$$.textContent = "Wubba Lubba dub dub"

console.log(h2$$)
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');

for (let app of apps){
    const li$$ = document.createElement('li');
    li$$.textContent = app;
    ul$$.appendChild(li$$)
}

console.log(ul$$)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//let padre = document.querySelectorAll('body');
let hijos = document.querySelectorAll('.fn-remove-me');
for (var hijo of hijos ){
    hijo.remove()
}

//console.log(padre)
console.log(hijos)
console.log(hijo)


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 

let div1$$ = document.querySelector('div');
let textt$$ = document.createElement('p');
textt$$.textContent = 'Voy en medio!';
div1$$.appendChild(textt$$)

console.log(div1$$)


//	Recuerda que no solo puedes insertar elementos con .appendChild.



//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

var divCuatro$$ = document.querySelectorAll('div.fn-insert-here');
for (var i = 0; i < divCuatro$$.length; i++){
   var nuevo = document.createElement('p');
   //divCuatro$$.textContent = 'Voy dentro!';
   divCuatro$$.appendChild(nuevo)
}

console.log(divCuatro$$)