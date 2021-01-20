function changeBgHandler(e) {
    document.querySelector('body').style.backgroundColor = window.getComputedStyle(e.target).backgroundColor
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.card-box').forEach( el => { 
        el.addEventListener('click', changeBgHandler)
    })
})