let plus = document.querySelector(".btn-add");
let Saisir = document.querySelector(".add-tache");
let poster = document.querySelector("#poster");
let annuler = document.querySelector("#rejet");
let form = document.forms["inclus-tache"];
let bac = document.querySelector(".list");
let container; 

let svgClean = `<span class="clear">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </span>`

let tache = "";

function teste(){
    console.log("vous aviez cliquez");
};

function refresh(e) {
    e.preventDefault();
    if (form["tache"].value != "" ) {
        tache = form["tache"].value;
        form["tache"].value = "";
        let div1 = document.createElement("div");
        div1.classList.add("tache");
        let div2 = document.createElement("div");
        div2.classList.add("control");
        let paragraph = document.createElement("p");
        paragraph.innerText = tache;
        bac.appendChild(div1);
        div2.innerHTML = `${svgClean}`;
        div1.appendChild(div2);
        div1.appendChild(paragraph);
        container = document.querySelectorAll(".clear");
        for (let i of container ) {
            i.addEventListener("click",() => {
                let parent = i.closest(".tache");
                parent.classList.add("plane");
                setTimeout( () => {
                    parent.classList.remove("plane");
                    parent.remove();
                }, 1000);
            });
        }
    }
};

plus.addEventListener("click", function() {
    Saisir.classList.toggle("active");
    form["tache"].value = "";
});

poster.addEventListener("click", refresh);
annuler.addEventListener("click", (e) => {
    e.preventDefault();
    Saisir.classList.toggle("active");
});