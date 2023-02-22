// function calc(year) {
//     return 2023 - year
// }

// const age = calc(2004)
// console.log(age)

// function aboutPerson(name,year){
//     const age = calc(year)

//     console.log('Имя: ' + name + ' Возраст: ' + age);
// }
// aboutPerson('Константин',2004)

const arr = [11,5,4]
let min = arr[0];
let max = arr[0];


for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]        
    }
    if (min > arr[i]) {
        min = arr[i]
    }    
}
console.log(max, min);