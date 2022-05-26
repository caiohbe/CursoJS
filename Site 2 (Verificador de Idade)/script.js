function verificar() { // Cria uma função 
    var data = new Date() // Cria a variável "data" coletando a data do sistema
    var ano = data.getFullYear() // Cria a variável "ano" que é o ano da data coletada na variável anterior
    var Fano = document.querySelector('#nascimento') // Cria a variável "Fano" que está atrelada ao formulario do ano de nascimento no HTML
    var res = document.querySelector('#res') // Cria a variável "res" que está atrelada a div que será modificada
    if (Fano.value.length == 0 || Number(Fano.value) > ano) { // Cria condição para caso a caixa estiver vazia ou o ano de nascimento for maior que o ano
        alert('[ERRO] Verifique os dados e tente novamente.') // Prompt de alerta 
    } else { // Caso a condição não for atendida
        var idade = ano - Number(Fano.value) // Cria variável da idade em função do ano do sistema menos o ano do formulário
        var gênero = '' // Cria variável vazia que será modificada
        var Fsex = document.getElementsByName('radsex') // Cria variável "Fsex" que está atrelada aos formulários de name = 'radsex'
        var img = document.createElement('img') // Cria um img
        img.setAttribute('id', 'foto') // Dá ID 'foto' para o img criado
        if (Fsex[0].checked) { // Cria condição caso o valor [0] (primeiro valor) do formulário estiver com check 
            gênero = 'Homem' // Transforma genêro em 'Homem'
            if (idade >= 0 && idade < 10) { // E se além disso cria outra condição caso estiver entre 0 e 10 anos
                // Bebe
                img.setAttribute('src', 'homembebe.png')
            } else if (idade < 17) { // E caso estiver abaixo de 17 anos
                // Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 24) { // E caso estiver abaixo de 24 anos
                // Adolescente
                img.setAttribute('src', 'homemadolescente.png')
            } else if (idade < 37) { // E caso estiver abaixo de 37 anos
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else if (idade < 60) { // E caso estiver abaixo de 60 anos
                // Mais Adulto
                img.setAttribute('src', 'homemmaisadulto.png')
            } else { // Caso nenhum intervalo de idade tenha sido atendido
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else {
            gênero = 'Mulher' // Transforma genêro em 'Mulher'
            if (idade >= 0 && idade < 10) { // E se além disso cria outra condição caso estiver entre 0 e 10 anos
                // Bebe
                img.setAttribute('src', 'mulherbebe.png')
            } else if (idade < 17) { // E caso estiver abaixo de 17 anos
                // Criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 24) { // E caso estiver abaixo de 17 anos
                // Adolescente
                img.setAttribute('src', 'mulheradolescente.png')
            } else if (idade < 37) { // E caso estiver abaixo de 17 anos
                // Adulta
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade < 60) { // E caso estiver abaixo de 17 anos
                // Mais Adulta
                img.setAttribute('src', 'mulhermaisadulta.png')
            } else { // Caso nenhum intervalo de idade tenha sido atendido
                // Idosa
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'  // Centraliza o texto, inclusive a imagem
        res.innerHTML = `<p>É uma ${gênero} com ${idade} anos de idade.<p>` // Altera o HTML da div de ID 'res' 
        res.appendChild(img) // Adiciona 'img' ao texto
    }
}