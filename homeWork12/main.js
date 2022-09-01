//task1
// let task1 = document.querySelector('.list-item')
// console.log(task1.textContent)


//task2
// let task2 = document.querySelectorAll('li')
// Array.from(task2).forEach((item) => {
//     item.textContent
// })
// console.log(task2)


// task3
// let task3 = document.querySelectorAll('.list-item')
// Array.from(task3).forEach((item) => {
//     item.textContent
// })
// console.log(task3)


//task4
// let task4 = document.querySelectorAll('.list-item')
// Array.from(task4).forEach((item) => {
//     return item.getAttribute('class')
// })
// console.log(task4)


//task6
// let incCClr = Array.from(document.querySelectorAll('.list-item'))
// const task6 = () => {
//     return  incCClr.map((el) => el.getAttribute('class').split(' ')[1] === el.textContent)
// }
// console.log(task6())


//task7
// const task7 = () => {
//     return Array.from(document.getElementsByClassName('list-item'))
//         .map((el) => el.innerText =
//             `${el.getAttribute('data-test-id' )} ${el.innerText}`)
// }
// console.log(task7())


//task8
// let incCClr = Array.from(document.querySelectorAll('.list-item'))
// const task8 = () => {
//    return incCClr.filter((el) => el.getAttribute('class').split(' ')[1] === el.textContent)
// }
// console.log(task8())


//task9
// let task9 = document.querySelector('#secret-login')
// task9.setAttribute('id', 'You were hacked')


//task10


//task11
// let task11 = document.querySelector('#append-div')
//
// let div = document.createElement('div')
// div.innerHTML = 'Hello'
// task11.setAttribute('id', 'just-text')
// task11.appendChild(div)
// console.log(task11)


//task12
// let task12 = document.querySelector('#append-div')
// let ul = document.createElement('ul')
// ul.innerHTML = 'hello'
// task12.setAttribute('id', 'list')
// task12.appendChild(ul)
// console.log(task12)

// let task12_2 = document.querySelector('#list')
// for (let i = 1; i <= 10; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = `Child ${i}`;
//     task12_2.appendChild(li)
// }
// console.log(task12_2)

