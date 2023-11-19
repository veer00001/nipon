let menubar = document.querySelector('#menubar').addEventListener('click', function () {
    let menuitems = document.querySelector('.nav-list-icons-parant');

    if (screen.width < 576) {
        if (menuitems.style.display === "block") {
            menuitems.style.display = "none"
        }
        else {
            menuitems.style.display = "block"
        }
    }
    else {

        let navlist = document.querySelector('.nav-icons')

        if (navlist.style.display === "flex") {
            navlist.style.display = "none"
        }
        else {
            navlist.style.display = "flex"
        }

    }


});
