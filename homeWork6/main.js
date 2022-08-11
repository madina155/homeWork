//1
// let name = 'Анастасия'
// console.log(name)


//2
// let desire = 'Я хочу быть большим и сильным'
// console.log(desire.length)


//3
// let a = '15'
// let b = 15
// let c = 10
//console.log(a + b + c) // Когда мы сладываем строку и любым обектом будь это Boolean || number будет конкантинация.
// Здесь первая стоит строка она плюсуется с вторым числом и он становится строкой а потом плюсуется третее число и он тоже слипается и вот результат. '151510'

//console.log(b + c + a)  // Здесь первыми стоют числа, первая и вторая плюсуютс и получаем 25,
// потом плюсуясь со строкой идет конкантинация и вот так мы получаем в терминале ответ "2515"

//4

// let desire = 'Я хочу быть большим и сильным'
// console.log(desire.length)


//5
// let arr = [[1, 2, 3], [4, 5, 6], [7,8,9] ]
// console.log(arr [1][0])


//6
// let obj = {
//      name: 'Ivan',
//      age:35 ,
//      gender: 'male',
//      job:'web-developer '
// }
// for(let keys in obj) {
//     console.log('Значением свойства ' + keys + ' явлюется ' + obj[keys])
// }


//7
// let surname = 'Серебров'
//
// console.log(surname.slice(0, 7))

//8
// let like = 'я люблю торт'
// console.log(like.includes('торт'))


//9
// let numbers = [1,0,2,2,3,0,4]
// numbers.reverse()
// console.log(numbers.join(''))


//10
// let age = 16
// console.log('Мне ' + age + ' лет' )

//11
// let arr =  "  asdasdsadsadsadsadc"
// console.log(arr.split(''))


//12
// let arr =  [2, 1, 3, 4, 5]
// arr.sort()
// arr.splice(3, 0 ,'a', 'b', 'c')
// console.log(arr)


//13
// let citi = 'Мой город самый лучший город в России!'
// console.log(citi.indexOf('город'))


//14
// let removeChar = 'eloquent'
// let removeChar2 = 'country'
// let removeChar3 = 'person'
// let removeChar4 = 'place'
//
// console.log(removeChar.slice(1, -1))
// console.log(removeChar2.slice(1, -1))
// console.log(removeChar3.slice(1, -1))
// console.log(removeChar4.slice(1, -1))


//15
// let a = 8
// let b = 9
// if(a > b) {
//     console.log(a + b)
// } else if (a < b) {
//     console.log(a - b)
// } else {
//     console.log('они одинаковые')
// }


//16
// let arr = [12, '12', true, undefined, 'Ivan', 35]
//
// for(let keys of arr) {
//     arr = 'Массив содержит в себе  элемент ' + keys
//     console.log(arr)
// }