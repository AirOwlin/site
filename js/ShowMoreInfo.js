function ShowExtraInfo() {
    var dots = document.getElementsByClassName("dots")[0];
    var moreText = document.getElementsByClassName("moreTxt")[0];
    var btnText = document.getElementsByClassName("myBtn")[0];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Подробнее";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Скрыть";
        moreText.style.display = "inline";
    }
}