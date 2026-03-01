// const botones = document.querySelectorAll(".buton-aply-job");

// botones.forEach(boton => {
//     boton.addEventListener('click', function () {
//         boton.textContent = "Postulado"
//         boton.classList.add = "is-aplied"
//         boton.disabled = true
//     });
// });
const jobListinSection = document.querySelector(".Resultados")
jobListinSection.addEventListener("click", function (event) {
    const element = event.target

    if (element.classList.contains("button-apply-job")) {
        element.textContent = "Postulado"
        element.classList.add("is-aplied")
        element.disabled = true
    }
})
const filterTechnology = document.getElementById('#filtro-technologia')

filterTechnology.addEventListener('change', function () {
    console.log('Tecnología seleccionada:', filterTechnology.value)
})

const modal = document.querySelector(".modal");
const openTrigger = document.querySelector(".resultos-trabajo");
const closeBtn = document.querySelector(".modal_container");

// Abrir modal
openTrigger.addEventListener("click", () => {
    modal.classList.add("modal_show");
});

// Cerrar al hacer click fuera del contenido
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("modal_show");
    }
});

// Cerrar con botón
closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal_show");
});
