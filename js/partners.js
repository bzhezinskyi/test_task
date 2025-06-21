document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.partners__list')
    if (list) {
        list.innerHTML += list.innerHTML
    }
})
