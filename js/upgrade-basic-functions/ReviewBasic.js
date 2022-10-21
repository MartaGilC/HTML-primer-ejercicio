//#1  Mix for e includes
//for of para recorrer las peliculas
//crear nuevo array para las categorias y console.log
//las categorias no deben repetirse
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categorias = []
for (const movie of movies){ //podemos acceder a categorias con movie.categories
    for (let ctg of movie)
    console.log(ctg)
    }
    console.log(categorias)
