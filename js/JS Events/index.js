//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

button$$ = document.getElementById('btnToClick').addEventListener("click", console.log('click'))

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

input$$ = document.querySelector('input').addEventListener('focus', console.log('input') )