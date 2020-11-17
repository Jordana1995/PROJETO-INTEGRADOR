window.addEventListener("scroll", function () {
    fadeInUpScroll();
    fadeIn();
});


window.addEventListener("load", function () {
    // 822
    var loadingClass = document.querySelector(".loading");

    loadingClass.classList.add("hidden");
});

function fadeInUpScroll() {
    var scrollY = window.pageYOffset;
    var groupItensClass = document.querySelectorAll(".group-itens");

    if (scrollY >= 200) {
        groupItensClass.forEach(element => {
            element.classList.add("fadeInUp");
            element.classList.remove("fadeOutDown");
        });
    } else {
        groupItensClass.forEach(element => {
            element.classList.add("fadeOutDown");
            element.classList.remove("fadeInUp");

        });
    }
}

function fadeIn() {
    var scrollY = window.pageYOffset;
    var animationClass = document.querySelectorAll(".animation");

    if (scrollY >= 810) {
        animationClass.forEach(element => {
            element.classList.add("fadeIn");
        });
    } else {
        animationClass.forEach(element => {
            element.classList.remove("fadeIn");
        });
    }
}
