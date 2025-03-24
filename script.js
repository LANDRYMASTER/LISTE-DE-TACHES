let plus = document.querySelector(".btn-add");
let Saisir = document.querySelector(".add-tache");

plus.addEventListener("click", function() {
    Saisir.classList.add("active");
    console.log("Vous avez cliqué");
})