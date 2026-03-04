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

const filters = document.querySelectorAll(".filters")
filters.forEach(filter => {
    filter.addEventListener('change', function () {
        console.log(this.value)
    })
})

const filterTechnology = document.getElementById('filtro-tecnologia')
if (filterTechnology) {
    filterTechnology.addEventListener('change', function () {
        console.log('Tecnología seleccionada:', filterTechnology.value)
    })
}
// Cada filtro debera buscar en un elemento especifico del html, por ejemplo el fi

const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal_container");
const openTriggers = document.querySelectorAll(".resultos-trabajo");
const closeBtn = document.querySelector(".modal_cerrar");

// Abrir modal al hacer click en cualquier .resultos-trabajo
openTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        if (modalContainer) modalContainer.classList.add("modal_show");
    });
});

// Cerrar al hacer click fuera del .modal_container (en el overlay)
if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal && modalContainer) {
            modalContainer.classList.remove("modal_show");
        }
    });
}

// Cerrar con el botón de cierre dentro del modal
if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (modalContainer) modalContainer.classList.remove("modal_show");
    });
}
