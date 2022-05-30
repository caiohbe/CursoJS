function gerar() { // Cria a função que funcionará ao receber "gerar()"
    let num = (document.querySelector('#numtxt').value) // Atribui à variável num, o valor escrito na caixa HTML
    let tab = document.querySelector('#seltab') // Atribui à variavel tab, a tabela no HTML

    if (num.length == 0) { // Cria uma condição 
        alert('Digite um número') // Alertará caso a condição for atendida
    } else { // Se a condição não for atendida
        let n = Number(num) // Atribuí o número que estava na caixa HTML a uma variável
        tab.innerHTML = '' // Deixa a tabela vazia para não existir sobreposição de dados
        for (i = 1; i <= 10; i++) { // Cria o loop de 1 até 10
            let item = document.createElement('option') // Pra cada loop cria um item 'option' para a tabela
            item.text = `${n} x ${i} = ${n*i}` // Da ao texto do item conteúdo
            tab.appendChild(item) // Adiciona o item para a tabela "tab", uma vez que 'option' é child de 'select'
        }
    }
}