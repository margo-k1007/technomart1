//  Работа с popub-form на главной

var link = document.querySelector(".about-us-right .button");
var popub = document.querySelector(".modal-content");     
var buttonClose = document.querySelector(".modal-content .modal-content-close");
var form = popub.querySelector("form");    
var userName = popub.querySelector("#userName");
var userEmail = popub.querySelector("#userEmail");
var letterText = popub.querySelector("#letterText");
var storage = localStorage.getItem("userEmail");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        popub.classList.add("modal-content-show");
        
        if (storage) {
            userEmail.value = storage;
            userName.focus();
        } else {
            userEmail.focus();
        }
    });

    buttonClose.addEventListener("click", function(event) {
        event.preventDefault();
        popub.classList.remove("modal-content-show");
        popub.classList.remove("modal-error");
    });
    
    form.addEventListener("submit", function(event) {
        
        if (!userName.value || !userEmail.value || !letterText.value) {
            event.preventDefault();
            // popup.classList.remove("modal-error");
            // popup.offsetWidth = popup.offsetWidth;
            popub.classList.add("modal-error");
        } else {
            localStorage.setItem("userEmail", userEmail.value);
        }
    });


// Закрытие popum с помощью ESC

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popub.classList.contains("modal-content-show")) {
                popub.classList.remove("modal-content-show");
                popub.classList.remove("modal-error");
            }
        }
    });


//  Работа с popub-map на главной

var linkMap = document.querySelector(".about-us-right .link-open-map");
var popubMap = document.querySelector(".modal-content-map");
var buttonCloseMap = document.querySelector(".modal-content-map .modal-content-close");

    linkMap.addEventListener("click", function(event) {
        event.preventDefault();
        popubMap.classList.add("modal-content-show");
    });

    buttonCloseMap.addEventListener("click", function(event) {
        event.preventDefault();
        popubMap.classList.remove("modal-content-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popubMap.classList.contains("modal-content-show")) {
                popubMap.classList.remove("modal-content-show");
            }
        }
    });


//  Работа с popub в каталоге

var linkCatalog = document.querySelector(".good-item .link-buy");
var popubCatalog = document.querySelector(".modal-content-add-bucket");
var buttonCloseCatalog = document.querySelector(".modal-content-add-bucket .modal-content-close");      

    linkCatalog.addEventListener("click", function(event) {
        event.preventDefault();
        popubCatalog.classList.add("modal-content-show");
    });

    buttonCloseCatalog.addEventListener("click", function(event) {
        event.preventDefault();
        popubCatalog.classList.remove("modal-content-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popubCatalog.classList.contains("modal-content-show")) {
                popubCatalog.classList.remove("modal-content-show");
            }
        }
    });

