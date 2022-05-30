let arr = [] // Cria uma array vazia
let tabela = document.querySelector('#tabela') // Atribui à variável "tabela" para o "select" de ID "tabela"

function adicionar() { // Cria a função que irá funcionar quando receber a chamada "adicionar()"

    let numtxt = (document.querySelector('#numtxt').value) // Atribuí o conteúdo na caixa de texto HTML a uma variável
    let num = Number(numtxt) // Atribuí o número na caixa de texto HTML a uma variável

    if (numtxt.length == 0) { // Cria uma condição 
        alert ('Digite um número') // Alerta caso a condição for atendida
    }
    else if (num >= 10) { // Cria uma condição
        alert ('Digite um número menor') // Alerta caso a condição for atendida
    }
    else if (num < 0) { // Cria uma condição
        alert ('Digite um número maior') // Alerta caso a condição for atendida
    }

    else { // Caso nenhuma condição for atendida irá executar
        let item = document.createElement('option') // Cria, dinamicamente, o Element "option" e atribuí a uma variável
        item.text = `Valor ${numtxt} adicionado.` // Altera o texto da variável 
        tabela.appendChild(item) // Adiciona a variável à select "tabela", uma vez que "option" é Child de "select"
        arr.push(num) // Adiciona a array vazia o número digitado ao HTML
    }
}

function finalizar() { // Cria a função que irá funcionar quando receber a chamada "finalizar()"
    if (tabela.length == 0){ // Cria uma condição
        alert('Digite mais números') // Alerta caso a condição for atendida
    }else{ // Caso nenhuma condição for atendida irá executar
        arr.sort() // Irá organizar a array de forma crescente
        let res = document.querySelector('#res') // Atribuí a div de ID "res" para uma variável
        let soma = 0 // Cria uma variável de valor inicial 0
        for(i = 0; i < arr.length; i++){ // Cria um loop que vai de 0 até o comprimento da array
            soma += arr[i] // Pra cada loop, adiciona à soma o valor de índice "i" 
        }
        res.innerHTML = `Ao todo, temos ${arr.length} números cadastrados.` // Altera o HTML de res 
        res.innerHTML += `<p>O maior valor informado foi ${arr[arr.length-1]}.</p>` // Concatena ao HTML de res um conteúdo
        res.innerHTML += `<p>O menor valor informado foi ${arr[0]}.</p>` // Concatena ao HTML de res um conteúdo
        res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>` // Concatena ao HTML de res um conteúdo
        res.innerHTML += `<p>A média dos valores informados é ${soma/arr.length}` // Concatena ao HTML de res um conteúdo
    }
}

function resetar() { // Cria uma função que irá funcionar quando receber a chamada "resetar()"
    tabela.innerHTML = '' // Reseta o HTML da tabela
    res.innerHTML = '' // Reseta o HTML da div
    arr = [] // Retira todos os elementos da array "arr"
}