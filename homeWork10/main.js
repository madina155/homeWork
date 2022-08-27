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
// const task7 = (key, val, arr) => {
//     return arr.reduce((acc, rec) =>{
//         if (rec[key].includes(val)) {
//             return [...acc, rec]
//         }
//         return acc
//     },[])
// }
// console.log(task7('title', 'hello', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]))


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
//     const task11 = (str, num) => {
//         return str.split('').reduce((acc, rec) => {
//             if (acc[acc.length - 1].length < num) {
//                 acc[acc.length - 1] = acc[acc.length - 1] + rec
//                 return acc
//             }
//             return [...acc, rec]
//         }, [''])
//     }
// console.log(task11('abrac', 2))
// } catch (err) {
//    console.log(`You have an error in function task11 : ${err.message}`)
//}

// try {
//     const task2 = arr => arr.reduce((acc, rec) => {
//        if(rec > 0) {
//             return [...acc,`+${rec - 10}`]
//         }
//         return [...acc, `${rec - 10}`]
//         }, [])
//     console.log(task2([10, 20, 25, 0]))
// } catch (err) {
//     console.log(`You have an error in function task2 : ${err.message}`)
// }








