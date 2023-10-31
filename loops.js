/**
 * Loops 
 * 1. for loop
 * 2. for each
 * 3. map
 * 
 */

//  1. for loop

const studentsArray = [
{id:7,name:'John', field: 'Doctor'}, 
{id:1 ,name:'Jane', field:'Software Engineer'},
{id:2,name:'Joe', field: 'Doctor'},
{id:3,name:'Jasminer', field: 'Software Engineer'},
{id:4,name:'Joel', field: 'Doctor'},
{id:5,name:'Jordan', field: 'Software Engineer'},
{id:6,name:'Json', field: 'Software Enginner'}
]

// 1. for loop
// for(let i =0; i< studentsArray.length; i = i+ 1){   // first one is counter yani i esit counter// ucuncu part arrtiriyor.
   // console.log(studentsArray[i])

// } 

// 2. for each
//studentsArray.forEach((item, index) => {
  //  console.log(index, '->', item)
    
// })

// 3.map

// const arrayMap = studentsArray.map((item, index) => {
//     console.log(index, '->', item)
//     item.age = index + 10    // I am adding age field each item on this line
//     return `<h2>item ${item.field}</h2>` 
// })

// console.log('after my map', arrayMap)

// 3.1 map one liner

//studentsArray.map((item,index) => `<h2>item ${item.field}</h2>`)

//  loop on an array and if id is a milti-le of 3 console fizz 
// if id is multiple of 5 console buzz

function fizzBuzz(){
   const result = studentsArray.map((item,index) => {
        if (item.id %3 ===0 && item.id % 5 === 0 ) {
            return 'fizzBuzz'
        } else if (item.id %5 === 0){
            return 'buzz'
        }else if (item.id %3 === 0 ) {
            return 'fizz'
        } else {
            return 'not divisible by 3 or 5'
        }
    })
    return result
}
console.log (fizzBuzz())