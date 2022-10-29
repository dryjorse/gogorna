document.querySelector('.icon-menu').addEventListener('click', function () {
    document.querySelector('.menu__body').classList.toggle('open__menu')
})

let obj = {
    name: 'Andrew',
    age: 15,
    inner: {
        weight: 50,
        size: 18,
    }
}

let newed = {...obj, inner: {...obj.inner}}

console.log(newed)