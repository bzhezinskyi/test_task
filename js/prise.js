document.addEventListener('DOMContentLoaded', () => {
    const basePrise = 300
    let colorPrise = 0
    let sizePrice = 0
    let framePrise = 0
    let counter = 1

    document.querySelectorAll('.color__list .color__btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            document
                .querySelectorAll('.color__list .color__btn')
                .forEach((b) => b.classList.remove('active'))
            this.classList.add('active')
            colorPrise = Number(this.dataset.prise) || 0
            updatePrice()
        })
    })
    document.querySelectorAll('.size__params .params__btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            document
                .querySelectorAll('.size__params .params__btn')
                .forEach((b) => b.classList.remove('active'))
            this.classList.add('active')
            sizePrice = Number(this.dataset.prise) || 0
            updatePrice()
        })
    })
    document.querySelectorAll('.frame__params .params__btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            document
                .querySelectorAll('.frame__params .params__btn')
                .forEach((b) => b.classList.remove('active'))
            this.classList.add('active')
            framePrise = Number(this.dataset.prise) || 0
            updatePrice()
        })
    })

    const minusBtn = document.querySelectorAll('.counter--minus')
    const plusBtn = document.querySelectorAll('.counter--plus')
    const counterValue = document.querySelectorAll('.pay__counter-value')

    minusBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (counter > 1) {
                counter--
                counterValue.forEach((span) => (span.textContent = counter))
                updatePrice()
            }
        })
    })

    plusBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            counter++
            counterValue.forEach((span) => (span.textContent = counter))
            updatePrice()
        })
    })

    function updatePrice() {
        const total =
            (basePrise + sizePrice + framePrise + colorPrise) * counter
        const notsale = total + 65 * counter
        document.querySelector('.pay__sum').textContent = `€${total.toFixed(2)}`
        document.querySelector(
            '.pay__notsale'
        ).textContent = `€${notsale.toFixed(2)}`
    }

    updatePrice()
})
