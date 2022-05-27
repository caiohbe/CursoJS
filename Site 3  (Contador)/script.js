function contar() { // Cria uma função
    var Inicio = document.querySelector('#In').value // Cria uma variável que recebe o número do valor colocado na caixa "Início" do HTML
    var Fim = document.querySelector('#Fi').value // Cria uma variável que recebe o número do valor colocado na caixa "Fim" do HTML
    var Passos = document.querySelector('#Pa').value // Cria uma variável que recebe o número do valor colocado na caixa "Passos" do HTML

    var ini = Number(Inicio) // Cria uma variável que recebe o número do valor colocado na caixa "Início" do HTML
    var fim = Number(Fim) // Cria uma variável que recebe o número do valor colocado na caixa "Fim" do HTML
    var pas = Number(Passos) // Cria uma variável que recebe o número do valor colocado na caixa "Passos" do HTML
    var res = document.querySelector('#res') // Atrela a div vazia para uma variável para facilitar a mudança dela

    if (Inicio.length == 0 || Fim.lenght == 0 || Passos.lenght == 0) { // Checa se "ini" ou "fim" ou "pas" tem comprimento de caracteres igual a zero (caixa vazia)
        alert('Preencha todos os dados!') // Caso a condição for atendida dá um alerta

    }else if (pas == 0) { // Checa se "pas" é igual a zero
        alert('Digite um Passo diferente de zero!') // Caso a condição for atendida dá um alerta

    }else if (ini == fim) { // Checa se "ini" é igual a "fim"
        alert('Digite um Fim diferente de Início ou um Início diferente de Fim') // Caso a condição for atendida dá um alerta

    }else if (fim < ini && pas > 0) { // Checa se "fim" é menor do que "ini" e se "pas" é maior que zero
        alert('Digite um Fim maior que o Início ou um Passo menor que zero!') // Caso a condição for atendida dá um alerta

    }else if (fim > ini && pas < 0) { // Checa se "fim" é maior do que "ini" e se "pas" é menor que zero
        alert('Digite um Fim menor que o Início ou um Passo maior que zero!') // Caso a condição for atendida dá um alerta

    }else if (pas % 1 == 0 && pas > 0) { // Checa se é um número inteiro, se for, não usará ".toFixed"
        res.innerHTML = '<p>Contando:</p>' // Cria um conteúdo na div para ser possível adicionar conteúdo dentro dela através de "+="
        for (i = ini; i < fim; i += pas){ // Cria um loop indo de "ini" até "fim" com acrescimos de "pas"
            res.innerHTML += `${i} 👉 ` // Para cada loop é adicionado à div a string do número inicial com os acréscimos com um emoji ao lado
        }
        res.innerHTML += '🏁' // No final da execução da função irá adicionar outro emoji à div
    
    }else if (pas % 1 == 0 && pas < 0) { // Checa se é um número inteiro, se for, não usará ".toFixed"
        res.innerHTML = '<p>Contando:</p>' // Cria um conteúdo na div para ser possível adicionar conteúdo dentro dela através de "+="
        for (i = ini; i > fim; i += pas){ // Cria um loop indo de "ini" até "fim" com acrescimos de "pas"
            res.innerHTML += `${i} 👉 ` // Para cada loop é adicionado à div a string do número inicial com os acréscimos com um emoji ao lado
        }
        res.innerHTML += '🏁' // No final da execução da função irá adicionar outro emoji à div

    }else if (pas > 0) { // Checa se o passo é maior que zero
        res.innerHTML = '<p>Contando:</p>' // Cria um conteúdo na div para ser possível adicionar conteúdo dentro dela através de "+="
        for (i = ini; i < fim; i += pas){ // Cria um loop indo de "ini" até "fim" com acrescimos de "pas"
            res.innerHTML += `${i.toFixed(2)} 👉 ` // Para cada loop é adicionado à div a string do número inicial com os acréscimos com um emoji ao lado
        }
        res.innerHTML += '🏁' // No final da execução da função irá adicionar outro emoji à div

    }else if (pas < 0) { // Checa se o passo é maior que zero
        res.innerHTML = '<p>Contando:</p>' // Cria um conteúdo na div para ser possível adicionar conteúdo dentro dela através de "+="
        for (i = ini; i > fim; i += pas){ // Cria um loop indo de "ini" até "fim" com acrescimos de "pas"
            res.innerHTML += `${i.toFixed(2)} 👉 ` // Para cada loop é adicionado à div a string do número inicial com os acréscimos com um emoji ao lado
        }
        res.innerHTML += '🏁' // No final da execução da função irá adicionar outro emoji à div
    }
}