// ------------
// ESERCIZIO 1
// ------------

const p = document.createElement("p")
p.textContent = "Testo di partenza"

// 1. stampa il testo attuale
console.log(p.textContent)

// 2. cambialo e stampalo di nuovo
p.textContent = "Testo nuovo"
console.log(p.textContent)

// ------------
// ESERCIZIO 2
// ------------

const materie = ["TPSIT", "Sistemi", "Informatica"]

const ul = document.createElement("ul")

// costruisci qui i li e attaccali a ul con appendChild
materie.forEach(e => {
  const li = document.createElement("li")
  li.textContent = e
  ul.appendChild(li)
})
document.body.appendChild(ul)

// poi conta e stampa
console.log(document.querySelectorAll("li").length)
document.querySelectorAll("li").forEach(li => console.log(li.textContent))

// ------------
// ESERCIZIO 3
// ------------

const bottone = document.querySelector("#bottone")
bottone.addEventListener("click", () => {
  const titolo = document.querySelector("#titolo")
  titolo.textContent = "Hai premuto!"
})

const bottone2 = document.createElement("button")
bottone2.textContent = "A posto"
bottone2.addEventListener("click", () => {
  const titolo = document.querySelector("#titolo")
  titolo.textContent = "TPSIT"
})
document.body.appendChild(bottone2)

// ------------
// ESERCIZIO 4
// ------------

const bottoneEvidenzia = document.createElement("button")
bottoneEvidenzia.textContent = "Evidenzia"
bottoneEvidenzia.addEventListener("click", () => {
  const titolo = document.querySelector("#titolo")
  titolo.classList.toggle("evidenziato")
  bottoneEvidenzia.textContent = titolo.classList.contains("evidenziato") ? "Togli evidenza" : "Evidenzia"
})
document.body.appendChild(bottoneEvidenzia)

// ------------
// ESERCIZIO 5
// ------------

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

const bottoneCambiaColore = document.createElement("button")
bottoneCambiaColore.textContent = "Cambia colore"
bottoneCambiaColore.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor()
})
document.body.appendChild(bottoneCambiaColore)

// -------------
// ESERCIZI 6-7
// -------------

const contatore = document.querySelector("#contatore")
const bottoneAggiungi = document.querySelector("#aggiungi")
const input = document.querySelector("#input")
const lista = document.querySelector("#lista")
bottoneAggiungi.addEventListener("click", () => {
  const li = document.createElement("li")
  li.classList.add("voce")
  li.textContent = input.value
  lista.appendChild(li)
  input.value = ""
  contatore.textContent = `Elementi nella lista: ${lista.children.length}`
})

lista.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.remove()
  }
  contatore.textContent = `Elementi nella lista: ${lista.children.length}`
})
