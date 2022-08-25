//1
// try {
//     const task1 = (arr, arr2) => {
//     return [...new Set (arr.filter((item) => {
//         return arr2.includes(item)
//     }).filter((item, idx, array) => {
//         return array.indexOf(item) === idx
//     }))]
// }
//     console.log(task1([5,1,2,3,4,5], [1,12,3,8,5]))
// } catch (err) {
//     console.log(`You have an error in function task1 : ${err.message}`)
// }



//2
// try {
//     const task2 = arr => arr.reduce((acc, rec) => {
//             return {...acc, [rec.token] : rec}
//         }, {})
//     console.log(task2( [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]))
// } catch (err) {
//     console.log(`You have an error in function task2 : ${err.message}`)
// }


//3
// try{
//     const task3 = arr => arr.reduce((acc, rec)=> {
//         return (acc[rec]) ? {...acc,[rec] : acc[rec] + 1} : {...acc, [rec] : 1}
//         }, {})
//     console.log(task3(['a', 'b', 'a']))
// } catch (err) {
//     console.log(`You have an error in function task3 : ${err.message}`)
// }


//task4
// try{
//     const task4 = arr => arr.reduce((acc, rec) => {
//             return acc.concat(rec)
//         })
//     console.log(task4([['ab','abc'],['abcd']]))
// } catch (err) {
//     console.log(`You have an error in function task4 : ${err.message}`)
// }


//5
// const arr=['html','css','html','js']
//
//
// const newArr=arr.filter((item)=>{
//
//
//     return item
//
// })
// console.log(newArr);


//6
// try {
//     const task6 = arr => [...new Set (arr.filter((item, idx, array) => {
//         return array.indexOf(item) === idx
//     }))]
//     console.log(task6([true, false, true,true]))
//     console.log(task6([1,true, 1]))
//
// } catch (err) {
//     console.log(`You have an error in function task1 : ${err.message}`)
// }

//7


//8
// try{
//     const task8 = arr => arr.split(/[/]+/).map((rec, index) => ({
//             "id": index,
//             "token": rec
//         }))
//     console.log(task8('http://google.com/hello/world'))
// } catch (err) {
//     console.log(`You have an error in function task8 : ${err.message}`)
// }


//9
// try{
//     const task9 = arr => arr.split(',').map((item) => {
//           return `${item}(${item.length})`
//         })
//     console.log(task9('hello,world,abra,carabfa,re,wrewer,rwer'))
// } catch (err) {
//     console.log(`You have an error in function task9 : ${err.message}`)
// }


//11
// try {
//     const  task11 = (arr) => {
//         return arr.split('').map((item) => {
//             if (item.length < 2) {
//                 return item
//             } else if (item.length === 2) {
//                 return item
//             }
//         })
//     }
// console.log(task11('abrac'))
// } catch (err) {
//    console.log(`You have an error in function task10 : ${err.message}`)
// }


//
function qwerty(str) {
    return str.split("").reverse().join("")
}
console.log(qwerty('hello'))










