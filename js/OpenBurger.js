function OpenMenu() {
    var headburger = document.getElementsByClassName("header_burger")[0];
    var burgmenu = document.getElementsByClassName("burger_menu")[0];
    var bodyst = document.getElementsByClassName("body_st")[0];
    if (!burgmenu.classList.contains("active")) {
        headburger.classList.add("active") 
        burgmenu.classList.add("active")
        bodyst.classList.add("lock")
    }
    else {
        headburger.classList.remove("active")
        burgmenu.classList.remove("active")
        bodyst.classList.remove("lock")
    }
}