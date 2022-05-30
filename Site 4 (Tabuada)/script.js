function gerar() {
    let num = (document.querySelector('#numtxt').value)
    let tab = document.querySelector('#seltab')

    if (num.length == 0) {
        alert('Digite um número')
    } else {
        let n = Number(num)
        tab.innerHTML = ''
        for (i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}