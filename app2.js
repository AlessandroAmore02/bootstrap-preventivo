// Elementi del form
const formElement = document.getElementById('form')
const emailInputElement = document.getElementById('email')
const promoElement = document.getElementById('promo')
const jobElement = document.getElementById('job')
const checkElement = document.getElementById('check')
const nameElement = document.getElementById('name')
const surnameElement = document.getElementById('surname')

let fullPrice = 0
let discountedPrice = 0

formElement.addEventListener('submit', function (event) {

    // blocca invio del form
    event.preventDefault()
    console.log('submit del form')

    const name = checkName(nameElement)
    if (name === false) {
        console.log("Nome non valido")
    }
    const surname = checkSurname(surnameElement)
    if (surname === false) {
        console.log("Cognome non valido")
    }
    const job = checkJob(jobElement)
    if (job === false) {
        console.log("Lavoro non selezionato")
    }
    const promo = checkPromo(promoElement)
    if (promo === false) {
        console.log("Promo non valida")
    }
    const check = checkPrivacy(checkElement)
    if (check === false) {
        console.log("Acconsentire alla privacy obbligatorio")
    }

})



// Funzione controllo inserimento lavoro
function checkJob(job) {
    if (job === '0') {
        return false
    }
    else {
        return true
    }
}

// Funzione per controllo nome
function checkName(name) {
    if (name.length >= 3) {
        return true
    }
    else {
        return false
    }
}


// Funzione per controllo cognome
function checkName(surnamme) {
    if (surname.length >= 3) {
        return true
    }
    else {
        return false
    }
}

// Funzione per controllo privacy
function checkPrivacy(check) {
    if (check == true) {
        return true
    }
    else {
        return false
    }
}

// Funzione per calcolo del prezzo finale
function calcoloFinalPrice(fullPrice, promo) {
    let finalPrice = 0
    if (promo) {
        finalPrice = (fullPrice * 25) / 100
    }
    return finalPrice
}


// Funzione per calcolo preventivo a prezzo pieno
function calcoloPrice(job) {
    let fullPrice = 0
    if (job === 'BE') {
        fullPrice = 20.50 * 10
    }
    else if (job === 'FE') {
        fullPrice = 15.30 * 10
    }
    else if (job === 'PA') {
        fullPrice = 33.60 * 10
    }
    return fullPrice
}



// Funzione per controllo promozioni
function checkPromo(promo) {
    if (promo === 'YHDNU32') {
        return true
    }
    else if (promo === 'JANJC63') {
        return true
    }
    else if (promo === 'PWKCN25') {
        return true
    }

    else if (promo === 'SJDPO96') {
        return true
    }

    else if (promo === 'POCIE24') {
        return true
    }
    else {
        return false
    }
}
