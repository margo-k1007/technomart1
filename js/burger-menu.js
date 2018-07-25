var menuIcon = document.querySelector(".burger-menu-icon");
var menuList = document.querySelector(".page-header .main-navigation");

    menuIcon.addEventListener("click", function(event) {
        event.preventDefault();
        if (menuList.classList.contains("main-navigation-show")) {
            menuList.classList.remove("main-navigation-show");
        } else {
        menuList.classList.add("main-navigation-show");
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (menuList.classList.contains("main-navigation-show")) {
                menuList.classList.remove("main-navigation-show");
            }
        }
    });

