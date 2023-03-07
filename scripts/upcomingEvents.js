import data from "../scripts/amazing.js";

console.table(data)

const eventos = data.events
const fecha = data.currentDate

let futuro = eventos.filter(evento => evento.date > fecha)

const template = document.querySelector("#card").content
const padre = document.querySelector(".cards-section")
const fragment = document.createDocumentFragment()

futuro.forEach(evento => {
    template.querySelector(".img-tarjeta").src = evento.image
    template.querySelector(".tittle").textContent = evento.name
    template.querySelector(".description").textContent = evento.description
    template.querySelector(".price").textContent = "$" + evento.price
    const copia = template.cloneNode(true)
    fragment.appendChild(copia)
})

padre.appendChild(fragment)