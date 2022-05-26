var agora = new Date() // Coleta a data/hora exata do sistema e a coloca numa variável
var hora = agora.getHours() // Especifica qual parte do tempo a ser atribuida a variável
console.log(`Agora são exatamente ${hora} horas.`) // Retorna quantas horas são com uma mensagem
if (hora < 5) { // Cria uma condição
	console.log('Boa madrugada!') // O que acontece se a condição for atendida
}else if(hora < 12) { // Cria uma outra condição caso a condição anterior não tenha sido atendida
	console.log('Bom dia!') // O que acontece se a outra condição for atendida
}else if(hora <= 18) { // Cria uma outra condição caso a condição anterior não tenha sido atendida
	console.log('Boa tarde') // O que acontece se a outra condição for atendida
}else { // Não cria outra condição então irá atuar se nenhuma das condições anteriores forem atendidas
	console.log('Boa noite') // O que acontece se as outras condições não forem atendidas
}