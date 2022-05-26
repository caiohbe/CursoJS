function carregar() {
    var msg = document.querySelector('#msg') // Cria a variável msg que será atribuida à div com id 'msg'
    var img = document.querySelector('#imagem') // Cria a variável img que será atribuida à div com id 'imagem'
    var data = new Date() // Cria a variável que será atríbuida aos dados de tempo do computador
    var hora = data.getHours() // Cria a variável que será atribuida na medida de tempo "Horas" em função da variável "data"
    var minuto = data.getMinutes() // Cria a variável que será atribuida na medida de tempo "Minutos" em função da variável "data"
    if (hora < 5 && hora > 1) { // Cria condição para hora
        // Boa madrugada
        msg.innerHTML = 'Você descobriu o segredo da madrugada! Obrigado por ser a mulher da minha vida, Sofia. Você é a pessoa que eu quero passar a minha vida junto, a minha pessoa favorita da vida. Estarei sempre dando meu máximo dentro das minhas capacidades para te fazer a mulher mais feliz do mundo! Te amo mais do que qualquer coisa na minha vida amorzinho, desculpa caso eu tenha lhe feito mal algum dia, amor. Você é a pessoa mais especial pra mim.' // Transforma o HTML da div de id 'msg' em algo
        img.src = 'fotomadrugada.png' // Torna o src da img em 'fotomadrugada.png'
        document.body.style.background = '#ff7777' // Transforma o background do body inteiro nesse código hexadecimal pegado no Photoshop
    }else if (hora >= 5 && hora < 12) { // Cria condição para hora
        // Bom dia
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos! Ainda está de manhã.` // Transforma o HTML da div de id 'msg' em algo
        img.src = 'fotomanha.png' // Torna o src da img em 'fotomanha.png'
        document.body.style.background = '#67a6f3' // Transforma o background do body inteiro nesse código hexadecimal pegado no Photoshop
    }else if (hora >= 12 && hora < 18) { // Cria condição para hora
        // Boa tarde 
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos! Está de tarde.` // Transforma o HTML da div de id 'msg' em algo
        img.src = 'fototarde.png' // Torna o src da img em 'fototarde.png'
        document.body.style.background = '#dfa482' // Transforma o background do body inteiro nesse código hexadecimal pegado no Photoshop
    }else { // Caso as condições não forem atendidas só pode estar de noite
        // Boa noite 
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos! Já está de noite.` // Transforma o HTML da div de id 'msg' em algo
        img.src = 'fotonoite.png' // Torna o src da img em 'fotonoite.png'
        document.body.style.background = '#3b4157' // Transforma o background do body inteiro nesse código hexadecimal pegado no Photoshop
    }
}
