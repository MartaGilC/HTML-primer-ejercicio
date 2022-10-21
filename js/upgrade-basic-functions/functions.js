
//#1 Saca el número más alto 

function getBiggestNumber(numberOne, numberTwo) 
{if (numberOne > numberTwo) 
{console.log("El mayor número es", numberOne)}
else if (numberOne < numberTwo)
{console.log("El mayor número es", numberTwo)}
}
getBiggestNumber (9, 3)

//#2 Saca la palabra más larga

let catNames = ["Gastón", "Mo", "Schnappi", "Atila"];

function findLongestWord(array){

let longestWord = array; 

for (let i = 1; i < array.length; i++) {
    const element = array[i]; 
if (longestWord.length <element.length)
    {longestWord = element;}
}
return longestWord;

}
console.log(findLongestWord(catNames))


//#3 Saca la suma de todos los números

const numbers = [13, 22, 394, 102];
    let total = 0
function sumAll(param)
    {for (var i = 0; i < param.length; i++)
{total +=param[i]}}
    sumAll(numbers)
console.log(total)


//#4 Saca el promedio

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
    let total2 = 0
function average(promedio) {
    for (let i = 0; i < promedio.length; i++)
    {total2 += promedio[i]}}
    average(numbers2)
{var media = total2/numbers2.length}
    console.log(total2)
    console.log(media)



    //#5 Calcula el promedio de strings
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
  
     
    function averageWords(param){
        let sum = 0;
    for (let i = 0; i < param.length; i++){
        if (typeof param[i] === "string" ) {
            sum += param[i].length
        }
        else {sum += param[i]}
    }
return(sum)
}
console.log(averageWords(mixedElements))


   //#6 Saca los valores únicos

  let duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

   function removeDuplicates(array2){
  
  for (var i = 0; i < array2.length; i++){
    for (var j = i+1; j < array2.length; j++){
        if (array2[i] === array2[j]){
            array2.splice(j, 1);
            j--
        }
    }
  }
  return array2
}
   console.log(removeDuplicates(duplicates))

// #7 Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
function finderName (array4, valor){
    for (let i = 0; i < array4.length; i++){
        if (array4[i] === valor){
            return i + " " + array4[i]
        }
       
    }
    return false;
}
console.log(finderName(nameFinder, "Peggy"));
console.log(finderName(nameFinder, "Marta"));
console.log(finderName(nameFinder, "Xabier"))



//#8 Contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function duplicateElements (counterWords){
  let counter = 0;
for (var i = 0; i < counterWords.length; i++){
    for (var m = 0; m < counterWords.length; m++){
        if (i !== m){
        if (counterWords[i] === counterWords[m]){
            console.log("Olee!");
            counter++

        }
    }
  
}   return counter;
}
  }
  console.log(duplicateElements(counterWords))
    
