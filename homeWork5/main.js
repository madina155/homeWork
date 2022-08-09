//1
// let arr = [1, 2, 3, 4, 5]
// let results = arr
// for (let i = 0; i < arr.length; i++){
//
// }
// console.log(results)

//2
// let arr = [1, 2, 3, 4, 5]
// let results =  0
//
// for (let i = 0; i < arr.length; i++){
//     results += arr[i]
// }
// console.log(results)

//3
// let i = 0
// while (i < 3) {
//     console.log( `number ${i}!` )
//     i++
// }

//4
// let arr = [-2,7,9,5,8,1,12,15,17,3]
//
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }

//5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < 10; i++){
//     if (i % 2) {
//         console.log(arr[i])
//     }
// }

//6
// let numbers = 1
// for (let i = 0; i <= 100; i++){
//     numbers += i
// }
// console.log(numbers)

//7  не доделано
// let arr = ['BMW', 'Mercedes', 'Opel', 'Mazda', 'FIAT', 'Ferrari', 'Reno']
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toUpperCase()) {
//         console.log(arr[i])
//     }
// }


//8
// let arr = [2,3,4,5,6,7]
// for (let i = 0;  i < arr.length; i++) {
//     if (arr[i]) {
//         console.log(arr[i])
//     }
// }

//9
// let arr = [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3]
// for (let i = 0;i < arr.length; i++) {
//
//         console.log(arr[i])
//
// }

//10
// let weeks = ['monday', '']


//11
// let allPoints = ['Наташа','Анастасия','Дмитрий','Максим'],
//     midPoints = []
//
// for (let i = 0; i < (allPoints.length - 1); i++) {
//     midPoints.push(allPoints[i]);
// }
//
// console.log(midPoints);


//12
//1
// let arr = ['Наташа', 'Анастасия', 2, 'Максим', 4];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (typeof arr[i] !== "number")
//         arr.splice(i, 1);
// }
// console.log(JSON.stringify(arr));
//2
// let arr2 = ['Наташа', 'Анастасия', 2, 'Максим', 4];
// for (let i = arr2.length - 1; i >= 0; i--) {
//     if (typeof arr2[i] == "number")
//         arr2.splice(i, 1);
// }
// console.log(JSON.stringify(arr2));

//13
// let msg = ''
// for (let i = 0; i < 10; i++) {
//     if (msg += i + ' x 9 = ' + (i * 9)) {
//         console.log(msg)
//     }
// }
