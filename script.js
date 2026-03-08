// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})


// reveal animation

const cards = document.querySelectorAll(".card, .portfolio-card")

window.addEventListener("scroll", () => {

cards.forEach(card => {

const top = card.getBoundingClientRect().top

if(top < window.innerHeight - 100){

card.style.opacity = "1"
card.style.transform = "translateY(0)"

}

})

})
