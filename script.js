var hamb = document.querySelector(".hamburguer");
// criei uma variavel e peguei atraves do .hamburguer o elemento dele
hamb.addEventListener("click", function () {// aqui a var hamb ira esperar o evento click p executar a funcao como ela nao tem nome podemos transf ela em uma aerofunction => porem n foi feita.
    document.querySelector(".container").classList.toggle("show-menu");// aqui o toggle ira add ou remover na classe show-menu
});

/* o mesmo codigo porem mais simples
document.querySelector(".hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle(".show-menu"));   */

/* aqui tenho que fazer o tratamento pois qdo entro na pag ela fica como 
null entao tenho q tratar isso */

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
// aqui irei verificar o prazo em semanas
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo em ${prazo} semana(s)`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const laySim = document.querySelector("#layout-sim").checked
    const layNao = document.querySelector("#layout-nao").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (laySim) preco += 500
    if (layNao) preco *= 1

    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia

    // preco = preco + (preco * 10/100) da certo porem mto grande o cod

    // tomar cuidado na hora de por o .value pois deu um trabalhao ja que o js colocou Value e é value,... o toFixed(2) limita o valor decimal pois estamos trabalhando com valores quebrados
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`

}

