let names = ['raheel','jamal','ikram'];

//array of objects used in json
let persons=[
    {name:'raheel',age:22,city:'peshawar'},
    {name:'jamal',age:24,city:'peshawar'},
    {name:'ali',age:25,city:'karachi'}
]

//object have property of type array
const stock ={
    fruits:['apple','oranges','banana']
}

//callback function. It is used as argument when invoking manipulate function
let upperCase=(word)=>{  
    return word[0].toUpperCase()+word.slice(1);
}

//higher order function. It takes function name as parameter
let manipulate = (call_function,array) => {

    let hello=()=> 'hello world'
    let result =  array.map((value)=>{
        return call_function(value)
    })
   return result;
}


let mapNames = names.map((value,key,names)=>{
    return `${names[key]}s`
})
console.log(mapNames)
console.log(manipulate(upperCase,names))
// console.log(stock.fruits[0])
// console.log(persons[0].name)