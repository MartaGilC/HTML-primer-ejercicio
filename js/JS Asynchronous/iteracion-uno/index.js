fetch('https://api.agify.io?name=michael').then((data)=> data.json()).then((data)=> console.log(data))


// Hecho con la función que conozco
fetch("https://api.agify.io?name=michael").then(function(resultado){
    return resultado.json();

}).then(function (resultadoFinal){console.log(resultadoFinal)})