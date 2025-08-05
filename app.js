const boyInput = document.querySelector(".boy")
const kiloInput = document.querySelector(".kilo")
const kEndexi = document.querySelector(".kitle")
const sonuc = document.querySelector(".sonuc")
const hesapla = document.querySelector(".hesapla")
const temizle = document.querySelector(".temizle")


hesapla.addEventListener("click", hesaplaa)

temizle.addEventListener("click", temizlee)

document.addEventListener("keydown", enter)


function enter(e) {
    if (e.key == "Enter") {
        hesaplaa()
    }
}




function hesaplaa() {
    const vke = kiloInput.value / (boyInput.value * boyInput.value)
    if (vke < 18.4) {
        kEndexi.textContent = "kitle endeksiniz: " + vke.toFixed(2)
        sonuc.textContent = "sonuç: zayıf"
    }
    else if (vke < 24.9) {
        kEndexi.textContent = "kitle endeksiniz: " + vke.toFixed(2)
        sonuc.textContent = "sonuç: normal kilolu"
    }
    else if (vke < 29.9) {
        kEndexi.textContent = "kitle endeksiniz: " + vke.toFixed(2)
        sonuc.textContent = "sonuç: fazla kilolu"
    }
    else if (vke < 34.9) {
        kEndexi.textContent = "kitle endeksiniz: " + vke.toFixed(2)
        sonuc.textContent = "sonuç: 1. derece obezite"
    }
    else if (vke < 39.9) {
        kEndexi.textContent = "kitle endeksiniz: " + vke.toFixed(2)
        sonuc.textContent = "sonuç: 2. derece obezite"
    }
    else if (vke > 40) {
        kEndexi.textContent = "kitle endeksiniz: " + vke.toFixed(2)
        sonuc.textContent = "sonuç: 3. derece(morbid) obezite"
    }
    else {
        alert("lütfen degerleri eksik girmeyiniz")
    }
}


function temizlee() {
    kEndexi.textContent = "kitle endeksiniz: "
    sonuc.textContent = "sonuç: "
    boyInput.value = ""
    kiloInput.value = ""
}