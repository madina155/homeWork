//1
// function type(a) {
//     return a + ' typeof ' + typeof a
// }
// console.log(type(true))

// const type = (a) => {
//     return a + ' typeof ' + typeof a
// }
// console.log(type(1))


//2
// function square(b) {
//     return b * b
// }
// console.log(square(3))

// const square = (b) => {
//     return b * b
// }
// console.log(square(5))


//3 didn't finish
//  const task3= (c) => {
//     for (let i = 0; i < task3.length; i++) {
//         for (let d = 0; d < task3[i].length; d++) {
//             console.log(task3[i][d])
//         }
//     }
//      return c
//  }
// console.log(task3(['this', 'test','lock']))


//4
// function surName (e) {
//     return e[0][0] + '.' + e[1][0]
// }
// console.log(surName(['Сергей', 'Семёнов']))
//
// const surName2 = (f) => {
//     return f[0][0] + '.' + f[1][0]
// }
// console.log(surName2(['Анастасия', 'Черданцева']))


//5
// function personData (j) {
//     return `Привет, ${j[0]} ! Добро пожаловать в ${j[1]} ${j[2]}`
// }
//
// console.log(personData(['Дмитрий Серебров'],  ['Ишим'], ['Тюменская обл']))


//6
// function number (h) {
//     if (h > 0) {
//         return 'Positive'
//     } else if (h < 0) {
//         return 'Negative'
//     } else {
//         return 'Zero'
//     }
// }
// console.log(number(0))

// const number = (g) => {
//     if (g > 0) {
//         return 'Positive'
//     } else if (g < 0) {
//         return 'Negative'
//     } else {
//         return 'Zero'
//     }
// }
// console.log(number(0))


//7
// function Task7 (str) {
//     str = str.split('')
//     for(let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             str[i] = str[i].toLowerCase()
//         } else {
//              str[i] = str[i].toUpperCase()
//         }
//     }
//     return str.join('')
// }
//
// console.log(Task7('HELLO WORLD'))
// console.log(Task7('hello world'))
// console.log(Task7('hELLO wOrld'))
// console.log(Task7('HELLO world'))


//9
// function word(m) {
//     if (m.length % 2){
//         return 1
//     } else {
//         return 0
//     }
// }

// console.log(word('adad'))

//10
// function number (l) {
//     if (l[0] > l[1]) {
//         return 1
//     } else if (l[0] < l[1]) {
//         return -1
//     } else {
//         return 0
//     }
// }
// console.log(number([2, 2]))



//11
// const MasterYoda = (a) => {
//     if ( a % 3 === 0 && a % 5 === 0) {
//         return 'MasterYoda'
//     } else if (a % 3 === 0) {
//         return 'Master'
//     } else  if  (a % 5 === 0){
//         return 'Yoda'
//     }
//     return a
// }
// console.log(MasterYoda(9))
