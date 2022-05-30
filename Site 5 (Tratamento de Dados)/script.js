let arr = []
let tabela = document.querySelector('#tabela')

function adicionar() {

    let numtxt = (document.querySelector('#numtxt').value)
    let num = Number(numtxt)

    if (numtxt.length == 0) {
        alert ('Digite um número')
    }
    else if (num >= 10) {
        alert ('Digite um número menor')
    }
    else if (num < 0) {
        alert ('Digite um número maior')
    }

    else {
        let item = document.createElement('option')
        item.text = `Valor ${numtxt} adicionado.`
        tabela.appendChild(item)    
        arr.push(num)
    }
}

function finalizar() {
    if (tabela.length == 0){
        alert('Digite mais números')
    }else{
        arr.sort()
        let res = document.querySelector('#res')
        let soma = 0
        for(i = 0; i < arr.length; i++){
            soma += arr[i]
        }
        res.innerHTML = `Ao todo, temos ${arr.length} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${arr[arr.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${arr[0]}.</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${soma/arr.length}`
    }
}

function resetar() {
    tabela.innerHTML = ''
    res.innerHTML = ''
    arr = []
}