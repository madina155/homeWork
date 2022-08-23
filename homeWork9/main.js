//1
// const task1 = (arr, arr2) => {
//     return arr.reduce((acc, rec, idx) => {
//         return [...acc, rec + arr2[idx]]
//     }, [])
// }
// console.log(task1([2, 4] , [1, 3]))


//2
// const task2 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// }
// console.log(task2([1,2,3,4,5]))
// console.log(task2([7,14]))


//3
// const task3 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.id]
//     }, [])
// }
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]))
// console.log(task3([{id: true}]))


//4
// const task4 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div> ${rec} </div>`]
//     }, [])
// }
// console.log(task4([1,2]))
// console.log(task4(['Ada']))


//5
// const task5 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec.length % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task5(['ab', 'abc', 'abcd']))
// console.log(task5(['abc', 'abcde']))


//6
// const task6 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec * 2 % 10 === 0) {
//             return [...acc, rec * 2]
//         }
//         return acc
//     }, [])
// }
// console.log(task6([1,2,3,7,10,5]))
// console.log(task6([1,2,3,7,9,4]))

//7
// const task7 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec === true) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task7([true, false, true, true]))
// console.log(task7([false, true]))


//8
// const task8 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (typeof rec === "boolean") {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task8([true, false, true, true, undefined, true, undefined]))
// console.log(task8([undefined, true, undefined]))


//9
// const task9 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec
//     }, 0)
// }
// console.log(task9([1,2,3,4,5]))
// console.log(task9([2,11,5]))


//10
// const task10 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec && acc]
//     }, [])
// }
// console.log(task10([true,true,true,true]))
// console.log(task10([2,11,5]))


//11
// const setObj = (arr) => {
//      return arr.reduce((acc, rec, idx) => {
//         return [...acc,`'field${idx}`, rec]
//     }, [])
// }
// console.log(setObj([true, 1, 'you are smart, bro']))


//13
// const task12 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec.keys === false) {
//             return [...acc, rec.value]
//         }
//         return acc
//     }, [])
// }
// console.log(task12([{isActive: false, isPilot: true}]))
// console.log(task12([undefined, true, undefined]))


//12
// const task12 = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (typeof obj[rec] === 'string') {
//             return {...acc, [rec]: obj[rec]}
//         }
//         return acc
//         },{})
// }
// console.log(task12({isActive: true, name: 'pilot'}))


//14
// const task14 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec / 2
//     }, 0)
// }
// console.log(task14([4, 6]))
// console.log(task14([2, 4]))


//15
// const task15 = (arr, num) => {
//     return arr.reduce((acc, rec) => {
//         return rec(acc)
//     }, num)
// }
// console.log(task15([(a) => a + 1, (a) => a * 2 ], 5))
// console.log(task15([ (a) => a - 1, (a) => a * 2 ], 5))
// console.log(task15([ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3))


