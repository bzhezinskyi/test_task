const text = document.getElementById('showMoreTxt')
const btn = document.getElementById('showMoreBtn')

btn.addEventListener('click', () => {
    text.classList.toggle('hidden')
    btn.textContent = text.classList.contains('hidden')
        ? 'Show more'
        : 'Show less'
})
