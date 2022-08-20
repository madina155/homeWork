//Колпек функции


//1
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         return item * 2
//     })
// }
// // console.log(mapFunc([1,2,3]))
// // console.log(mapFunc([4,1,1,1,4]))
// console.log(mapFunc([2,2,2,2,2,2]))


//2
// const filterFunc = (arr) => {
//     return arr.filter((item , idx) => {
//         return idx % 2 === 0
//     })
// }
// console.log(filterFunc(['Привет', 'Пока', 'Снова привет']))


//3
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         for(let i = 0; i < item.length; i++) {
//         if (item[i] === false) {
//             item[i] = true
//         } else {
//              item[i] = false
//         }
//     }
//             return item
//     })
// }
// console.log(mapFunc([-1,2,3,4,5]))


//4
// const task4 = (arr) => {
//     return arr.filter ((item, idx) => {
//         return idx < 3
//     })
// }
// console.log(task4([0,1,2,3,5,8,13]))


//5
// const filterFunc = (arr) => {
//     return arr.filter((item , idx) => {
//         return item % idx === 0
//     })
// }
// console.log(filterFunc([22, -6, 32, 82, 9, 25]))
// console.log(filterFunc([68, -1, 1, -7, 10, 10]))
// console.log(filterFunc([11, -11]))


//6
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         if (typeof item === 'string') {
//             return null
//         }
//         return item
//     })
// }
// console.log(mapFunc([4, 6, 'Ivan', 5, 'Denis ']))


//7
// const filterFunc = (arr) => {
//     return arr.filter((item) => {
//         return item.length <= 5
//     })
// }
// console.log(filterFunc(['Евдоким','Ivan', 'Игнат', 'Denis'] ))


//8
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         if (item % 3 === 0 && item % 5 === 0) {
//             return 0
//         }
//         return item **3
//     })
// }
// console.log(mapFunc( [7, 8, 15, 30, 2] ))


//9
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         return item.length
//     })
// }
// console.log(mapFunc(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ))


//10
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         return `<div>${item}</div>`
//     })
// }
// console.log(mapFunc([1, 2, 3, 4, 5 ]))


//11
// const filterFunc = (arr) => {
//     return arr.filter((item) => {
//         if (item % 2 === 0) {
//             return item
//         }
//         return 888
//     })
// }
// console.log(filterFunc(['ab', 'abc', 'abcd']))

