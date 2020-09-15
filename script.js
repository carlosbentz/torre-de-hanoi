let disco0 = document.createElement("div")
disco0.setAttribute("id", "disco0")
let disco1 = document.createElement("div")
disco1.setAttribute("id", "disco1")
let disco2 = document.createElement("div")
disco2.setAttribute("id", "disco2")
let disco3 = document.createElement("div")
disco3.setAttribute("id", "disco3")
let vareta0 = document.getElementById("vareta0")
vareta0.appendChild(disco0)
vareta0.appendChild(disco1)
vareta0.appendChild(disco2)
vareta0.appendChild(disco3)
let vareta1 = document.getElementById("vareta1")
let vareta2 = document.getElementById("vareta2")
let jogadorStatus = "origem"
let discoSelecionado = ""
let fraseVenceu = document.createElement("div")
fraseVenceu.innerHTML = "Parabéns, Você Venceu !"
fraseVenceu.setAttribute("id", "fraseVenceu")
let checkWin = function () {
    if (vareta2.childElementCount === 4) {
        document.body.appendChild(fraseVenceu)
        vareta0.appendChild(disco0)
        vareta0.appendChild(disco1)
        vareta0.appendChild(disco2)
        vareta0.appendChild(disco3)
    }
}

vareta0.addEventListener("click", function () {
    if (jogadorStatus === "destino") {
        if (vareta0.childElementCount === 0) {
            vareta0.appendChild(discoSelecionado)
            jogadorStatus = "origem"
            checkWin()
        }
        else if (discoSelecionado.clientWidth < vareta0.lastElementChild.clientWidth) {
            vareta0.appendChild(discoSelecionado)
            jogadorStatus = "origem"
            checkWin()
        }
        else if (discoSelecionado.clientWidth > vareta0.lastElementChild.clientWidth) {
            discoSelecionado = ""
            jogadorStatus = "origem"
        }
    }
    else {
        if (vareta0.lastElementChild === null) {
            alert("Vareta Vazia !")
        }
        else {
            discoSelecionado = vareta0.lastElementChild
            jogadorStatus = "destino"
        }
    }
})
vareta1.addEventListener("click", function () {
    if (jogadorStatus === "destino") {
        if (vareta1.childElementCount === 0) {
            vareta1.appendChild(discoSelecionado)
            jogadorStatus = "origem"
            checkWin()
        }
        else if (discoSelecionado.clientWidth < vareta1.lastElementChild.clientWidth) {
            vareta1.appendChild(discoSelecionado)
            jogadorStatus = "origem"
            checkWin()
        }
        else if (discoSelecionado.clientWidth > vareta1.lastElementChild.clientWidth) {
            discoSelecionado = ""
            jogadorStatus = "origem"
        }
    }
    else {
        if (vareta1.lastElementChild === null) {
            alert("Vareta Vazia !")
        }
        else {
            discoSelecionado = vareta1.lastElementChild
            jogadorStatus = "destino"
        }
    }
})
vareta2.addEventListener("click", function () {
    if (jogadorStatus === "destino") {
        if (vareta2.childElementCount === 0) {
            vareta2.appendChild(discoSelecionado)
            jogadorStatus = "origem"
            checkWin()
        }
        else if (discoSelecionado.clientWidth < vareta2.lastElementChild.clientWidth) {
            vareta2.appendChild(discoSelecionado)
            jogadorStatus = "origem"
            checkWin()
        }
        else if (discoSelecionado.clientWidth > vareta2.lastElementChild.clientWidth) {
            discoSelecionado = ""
            jogadorStatus = "origem"
        }
    }
    else {
        if (vareta2.lastElementChild === null) {
            alert("Vareta Vazia !")
        }
        else {
            discoSelecionado = vareta2.lastElementChild
            jogadorStatus = "destino"
        }
    }
})