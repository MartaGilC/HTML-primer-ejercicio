
//#1 Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

function camisetas (array3){
    for (var i = 0; i < array3.length; i++){
        if (array3[i].includes("Camiseta")){
            console.log(array3[i])
        }
    }
}
camisetas(products)



// #2 Condicionales avanzados

const alumns = [
    {name: 'Pepe Viruela', T1: true, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++){
    if
    (alumns[i]["T1"] && alumns[i]["T2"] ||
     alumns[i]["T1"] && alumns[i]["T3"] ||
     alumns[i]["T2"] && alumns[i]["T3"]) 
     {alumns[i]["isApproved"] = true
     } else {alumns[i]["isApproved"] = false}
}
console.log(alumns)


//#3 for of

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (let travel of placesToTravel){
    console.log(travel)}

//#4 for in
    const cat = {
        nombre : "Gastón",
        pais : "Alemania",
        peso : "7 kg",
        personalidad : "Introvertido"}


        for (let key in cat){
            console.log("Este gato tiene " + key + " con valor " + cat[key])
        }
  

//#5 Probando For

        const toTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

    for (var i = 0; i < toTravel.length; i++){
        for (const ids of toTravel){
            if (ids.id !== 5 && ids.id !== 11){
                console.log(ids.id)
            }
            
        }
    
    }

console.log( "------------#6 Mixed For and Includes()----------")

const toys = [
    {id: 5, nombre: 'Buzz MyYear'}, 
    {id: 40, nombre: 'El gato con Guantes'},
    {id: 11, nombre: 'Action Woman'}, 
    {id: 23, nombre: 'Barbie Man'}, 
    {id: 40, nombre: 'El gato felix'}
    ]

        for (var i = 0; i < toys.length; i++){
           if (toys[i]["nombre"].includes("gato")){
             toys.splice([i],1)
            
           }
            
        }
        console.log(toys) 


        console.log("-------------#7 For of avanzado-----------------")

        const popularToys = [];
const juguetes = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 40, name: 'El gato felix', sellCount: 35},
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	
]
for (const juguete of juguetes){
    if(juguete.sellCount > 15){ 
        popularToys.push(juguete)
    }
    
}
console.log(popularToys)