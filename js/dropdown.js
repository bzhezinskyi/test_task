document.querySelectorAll('.dropdown__toggle').forEach((btn) => {
    btn.addEventListener('click', function () {
        const dropdown = this.closest('.dropdown')
        dropdown.classList.toggle('open')
    })
})
