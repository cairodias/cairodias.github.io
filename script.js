// ==========================================
// O CAÇADOR RECOMENDA
// JavaScript
// ==========================================

// Navbar muda ao rolar

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.92)";
        header.style.transition = ".35s";

    } else {

        header.style.background = "rgba(0,0,0,.55)";

    }

});

// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Animação de entrada

const elementos = document.querySelectorAll(

    ".card, .beneficio, .depoimento, .faq-item"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{

    threshold:0.15

});

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".7s";

    observer.observe(el);

});

// Ano automático

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =

    "© " +

    new Date().getFullYear() +

    " O Caçador Recomenda. Todos os direitos reservados.";

}

console.log("O Caçador Recomenda carregado com sucesso.");
