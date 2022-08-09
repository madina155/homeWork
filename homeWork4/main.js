//1
// let a = 'test'
// if (a === 'test' ) {
//     console.log('верно')
// } else {
//     console.log('не верно')
// }
// a === 'test' ? console.log('верно') : console.log('неверно')


//2
// let number
//     data = false
// if (data === true) {
//     number = 2
// } else {
//     number = 3
// }
// console.log(number)
//
//
// data === true ? console.log(number) : console.log(number)


//3
// let time = prompt('когда вы приедете?')
// switch (time) {
//     case  '23:00':
//     case  '00:00':
//     case  '01:00':
//     case  '02:00':
//     case  '03:00':
//     case  '04:00':
//     case  '05:00':
//     case  '06:00':
//     case  '07:00':
//     case  '08:00':
//     case  '09:00':
//         alert('В это время мы не работаем')
//         break
//     case '10:00':
//     case '11:00':
//         alert('Будем рады вас видеть')
//         break
//     case '12:00':
//     case '13:00':
//         alert('У нас обед')
//         break
//     case '14:00':
//     case '15:00':
//     case '16:00':
//     case '17:00':
//     case '18:00':
//     case '19:00':
//     case '20:00':
//     case '21:00':
//     case '22:00':
//         alert('Будем рады вас видеть')
// }

//4
// let m = 75
// let n = 35
//
// if (m > 50){
//     console.log('большой')
// } else {
//     console.log('маленький')
// }

// let a = 5
// if (a === 0 || a === 2) {
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }
//
// a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10)

//6
//
// let person = confirm('Сколько вам лет?')
// if (person) {
//     console.log('есть')
// } else {
//     console.log('нет')
// }

//7
// let a  = 3
// let b = 5
// if (a <= 1 && b >= 3){
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }
// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b)

//8
// let Pasha = 17
// if (Pasha <= 17) {
//     console.log('Он еще ребенок')
// } else {
//     console.log('Он уже врослый')
// }

//9
// let season = 'май'
// switch (season)  {
//     case 'декабрь':
//     case 'январь':
//     case 'февраль':
//         console.log('зима')
//         break
//     case 'апрель':
//     case 'март':
//     case 'май':
//         console.log('весна')
//         break
//     case 'июнь':
//     case 'июль':
//     case 'август':
//         console.log('лето')
//         break
//     case  'сентябрь':
//     case 'октябрь':
//     case 'ноябрь':
//         console.log('осень')
// }
//10
// let time = 317
// if (time > 0 && time <= 15) {
//     console.log("время относится к четверти часа")
// }
// else if (time > 15 && time <= 30) {
//     console.log("время относится к половине часа")
// }
// else if (time > 30 && time<= 45) {
//     console.log("время относится к 3/4 часа")
// } else if (time > 45 && time <= 60) {
//     console.log("время относится к целому часу")
// } else {
//     console.log("неизвестный диапазон")
// }