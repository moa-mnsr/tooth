// FIRST COLUMN OF POEM - in the code, we will call this box "Hippo"

// data for holding which line we are on
let hippoNumber = 0

// holding the content for each line
const hippos = [
  { text: "third changed hippo!"},
  { text: "first changed hippo!"},
  { text: "second changed hippo!"},
]

// picking the relevant tags
const hippoTag = document.querySelector("section.hippo")

// making a next function to increase LineANumber
const nextHippo = function () {
  hippoNumber = hippoNumber + 1

  if (hippoNumber > hippos.length - 1) {
    hippoNumber = 0
  }

  updateHippo()
}

// updating the content of the section
const updateHippo = function () {
  hippoTag.innerHTML = hippos[hippoNumber].text
}

// on click of box, run this
hippoTag.addEventListener("click", function () {
  nextHippo()
})

// SECOND COLUMN OF POEM - in the code, we will call this box "Zebra"

// data fr holding which line we are on
let zebraNumber = 0

// holding the content for each line
const zebras = [
  { text: "third changed zebra!"},
  { text: "first changed zebra!"},
  { text: "second changed zebra!"},
]

// picking the relevant tags
const zebraTag = document.querySelector("section.zebra")

// making a next function to increase LineANumber
const nextZebra = function () {
  zebraNumber = zebraNumber + 1

  if (zebraNumber > zebras.length - 1) {
    zebraNumber = 0
  }

  updateZebra()
}

// updating the content of the section
const updateZebra = function () {
  zebraTag.innerHTML = zebras[zebraNumber].text
}

// on click of box, run this
zebraTag.addEventListener("click", function () {
  nextZebra()
})