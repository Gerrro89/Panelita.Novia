function abrirCarta(num) {
    document.getElementById("portadas").style.display = "none";

    for (let i = 1; i <= 7; i++) {
        document.getElementById("carta" + i).classList.add("oculto");
    }

    document.getElementById("carta" + num).classList.remove("oculto");
}

function volver() {
    document.getElementById("portadas").style.display = "grid";

    for (let i = 1; i <= 7; i++) {
        document.getElementById("carta" + i).classList.add("oculto");
    }
}
