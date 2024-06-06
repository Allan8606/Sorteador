function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const txt = document.querySelector("p");
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if ((min === 0) & (max === 0)) {
        txt.innerHTML = "Você precisa escolher números diferentes de 0";
        txt.style.display = "block";
    } else if (max < min) {
        txt.innerHTML = "O número máximo tem que ser maior que o número mínimo";
        txt.style.display = "block";
    } else if (min < 0 || max < 0) {
        txt.innerHTML = "Você não pode escolher números menores que 0";
        txt.style.display = "block";
    } else {
        txt.innerHTML = "O número Sorteado foi: " + result;
        txt.style.display = "block";
    }
}
