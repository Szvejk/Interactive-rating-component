const firstBox = document.querySelector(".firstBox")
const secondBox = document.querySelector(".secondBox")
const submitButton = document.querySelector(".submit")
const ratings = document.getElementById("ratings")
const rates = document.querySelectorAll(".btn")




submitButton.addEventListener("click", () => {
    secondBox.classList.remove("hidden")
    firstBox.style.display = "none"
})

rates.forEach((rate) => {
rate.addEventListener("click", ()=> {
ratings.innerHTML=rate.innerHTML
})
}
)