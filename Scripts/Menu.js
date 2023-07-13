//LOGO
const logoBlack = document.querySelector('.Logo.Black');
const logoWhite = document.querySelector('.Logo.White');

logoBlack.addEventListener('click', function () {
    window.location.href = 'home.html';
});

logoWhite.addEventListener('click', function () {
    window.location.href = 'home.html';
});

(function () {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".mynav a");
    const activelink = document.querySelector(".menu-active")




    const widtha = activelink.getBoundingClientRect().width;
    const heighta = activelink.getBoundingClientRect().height;
    const lefta = activelink.getBoundingClientRect().left + window.pageXOffset;
    const topa = activelink.getBoundingClientRect().top + window.pageYOffset;

    target.style.width = `${widtha}px`;
    target.style.height = `${heighta}px`;
    target.style.left = `${lefta}px`;
    target.style.top = `${topa}px`;
    target.style.borderColor = '#0B0B0B';
    target.style.transform = "none";



    function mouseenterFunc() {
        if (!this.parentNode.classList.contains("menu-active")) {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("menu-active")) {
                    links[i].parentNode.classList.remove("menu-active");
                }
            }

            this.parentNode.classList.add("menu-active");


            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const top = this.getBoundingClientRect().top + window.pageYOffset;

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.borderColor = '#0B0B0B';
            target.style.transform = "none";
        }
    }

    function mouseleaveFunc() {
        const widtha = activelink.getBoundingClientRect().width;
        const heighta = activelink.getBoundingClientRect().height;
        const lefta = activelink.getBoundingClientRect().left + window.pageXOffset;
        const topa = activelink.getBoundingClientRect().top + window.pageYOffset;

        target.style.width = `${widtha}px`;
        target.style.height = `${heighta}px`;
        target.style.left = `${lefta}px`;
        target.style.top = `${topa}px`;
        target.style.borderColor = '#0B0B0B';
        target.style.transform = "none";

    }

    // Asigna el evento 'mouseleave' a cada enlace
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseleave", mouseleaveFunc);
    }


    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        const active = document.querySelector(".mynav li.menu-active");

        if (active) {
            const left = active.getBoundingClientRect().left + window.pageXOffset;
            const top = active.getBoundingClientRect().top + window.pageYOffset;

            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
        }
    }


    window.addEventListener("resize", resizeFunc);
    window.addEventListener("DOMContentLoaded", resizeFunc);


})();
