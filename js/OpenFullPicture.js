/* Твоя миниатюрная картинка */
/*var miniaturePic = document.getElementsByClassName("ImgToOpen")[0];*/

/* Блок просмотра */
var area = document.getElementsByClassName("AreaToView")[0];

/* Увеличенная картинка и её описание из alt в img */
var fullImg = document.getElementsByClassName("ImgOpenned")[0];
var describe = document.getElementsByClassName("Description")[0];

/* Функция нажатия по миниатюре */
function OpenFull(el) {
    area.style.display = "block";
    fullImg.src = el.src;
    describe.innerHTML = el.alt;
}

/* <span> (x), Закрытие по крестику */
document.getElementsByClassName("Cross")[0].addEventListener("click", function(e) {
    area.style.display = "none";
});

/* Блок просмотра, Закрытие по нажатию */
area.addEventListener("click", function(e) {
    area.style.display = "none";
});