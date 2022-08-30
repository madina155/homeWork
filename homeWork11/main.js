let parseToHTML = ({
    type: 'p',
    attrs: {
        class: 'test',
        id: 'test-id',
        style: 'color:white',
    },
    children: [{
        type: 'p',
        attrs: {
            class: 'max'
        },
        children: [{
            type: 'p',
            attrs: {class: 'test3', id: 3}
        }],
    },
        {
            type: 'div',
            attrs: {class: 'test2', id: 2},
            children: null
        }]
})


const classHtml = (arr) => {
    return Object.values(arr)
}
console.log(classHtml(parseToHTML))

