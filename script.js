var hamb = document.querySelector(".hamburguer");
// criei uma variavel e peguei atraves do .hamburguer o elemento dele
hamb.addEventListener("click", function () {// aqui a var hamb ira esperar o evento click p executar a funcao como ela nao tem nome podemos transf ela em uma aerofunction => porem n foi feita.
    document.querySelector(".container").classList.toggle("show-menu");// aqui o toggle ira add ou remover na classe show-menu
});

/* o mesmo codigo porem mais simples
document.querySelector(".hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle(".show-menu"));   */