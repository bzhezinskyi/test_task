document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.querySelector('.image__img')
    const thumbs = Array.from(document.querySelectorAll('.photos__img'))
    let current = 0

    // Встановити індекс поточного зображення
    function updateCurrentIndex() {
        const src = mainImg.src.split('/').pop()
        const found = thumbs.findIndex(
            (img) => img.src.split('/').pop() === src
        )
        if (found !== -1) current = found
    }
    updateCurrentIndex()

    // Клік по мініатюрі
    thumbs.forEach((img, idx) => {
        img.addEventListener('click', function () {
            mainImg.src = this.dataset.src || this.src
            current = idx
        })
    })

    // Клік по image__btn
    document
        .querySelector('.image__btn--left')
        .addEventListener('click', () => {
            updateCurrentIndex()
            current = (current - 1 + thumbs.length) % thumbs.length
            mainImg.src = thumbs[current].dataset.src || thumbs[current].src
        })
    document
        .querySelector('.image__btn--right')
        .addEventListener('click', () => {
            updateCurrentIndex()
            current = (current + 1) % thumbs.length
            mainImg.src = thumbs[current].dataset.src || thumbs[current].src
        })

    // Клік по photos__btn
    document
        .querySelector('.photos__btn--left')
        .addEventListener('click', () => {
            updateCurrentIndex()
            current = (current - 1 + thumbs.length) % thumbs.length
            mainImg.src = thumbs[current].dataset.src || thumbs[current].src
        })
    document
        .querySelector('.photos__btn--right')
        .addEventListener('click', () => {
            updateCurrentIndex()
            current = (current + 1) % thumbs.length
            mainImg.src = thumbs[current].dataset.src || thumbs[current].src
        })
})
