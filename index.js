$(document).ready(function() {
    //activer l'animation de la bannière
    $(window).scroll(function() {

        if (this.scrollY > 10) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    //activer/desactiver menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //calcul age
    function getAge(date) {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff);

        return Math.abs(age.getUTCFullYear() - 1970);
    }
    document.getElementById("age").innerHTML = getAge(new Date(1996, 10, 24)) + " years old";

    //animation ligne du temps et projets
    window.addEventListener("scroll", function() {
        document.querySelectorAll(".box").forEach(function(element) {
            let scrollTop = window.scrollY;
            let elementOffset = element.offsetTop;
            let distance = elementOffset - scrollTop;
            let windowHeight = window.innerHeight;
            let breakpoint = windowHeight * +0.04;

            if (distance < breakpoint) {
                element.classList.add("active");
            }
            if (distance > breakpoint) {
                element.classList.remove("active");
            }
        });
    });

    //slider langues
    $('.slider1').slick({
        prevArrow: '.arrow_prev',
        nextArrow: '.arrow_next',
        arrows: true,
        infinite: true,
    });

    $('.slider2').slick({
        prevArrow: '.arrow_prev2',
        nextArrow: '.arrow_next2',
        arrows: true,
        infinite: true,
    });
});