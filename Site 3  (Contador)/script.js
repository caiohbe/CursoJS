function contar() { // Cria uma função
    var ini = Number.parseFloat(document.querySelector('#In').value) // Cria uma variável que recebe o número do valor colocado na caixa "Início" do HTML
    var fim = Number.parseFloat(document.querySelector('#Fi').value) // Cria uma variável que recebe o número do valor colocado na caixa "Fim" do HTML
    var pas = Number.parseFloat(document.querySelector('#Pa').value) // Cria uma variável que recebe o número do valor colocado na caixa "Passos" do HTML
    var res = document.querySelector('#res') // Atrela a div vazia para uma variável para facilitar a mudança dela
    res.innerHTML = '' // Cria um conteúdo vazio na div para ser possível adicionar conteúdo dentro através de "+="
    if (!ini || !fim || !pas) { // Checa se "ini" ou "fim" ou "pas" é falso (caixa vazia)
        alert('Preencha todos os dados!') // Caso a condição for atendida dá um alerta
    }else if (fim <= ini) { // Checa se fim é menor ou igual a "ini"
        alert('Digite um Fim maior que o Início!') // Caso a condição for atendida dá um alerta
    }else { // Se nenhuma condição for atendida segue este código normal
        for (i = ini; i < fim; i += pas){ // Cria um loop indo de "ini" até "fim" com acrescimos de "pas"
            res.innerHTML += `${i.toFixed(2)} 👉 ` // Para cada loop é adicionado à div a string do número inicial com os acréscimos com um emoji ao lado
        }
        res.innerHTML += '🏁' // No final da execução da função irá adicionar outro emoji à div
    }
}