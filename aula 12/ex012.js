var idade = 19
console.log(`voce tem ${idade} anos`)
if(idade < 16){
    console.log('nao vota')
}else if(idade<18 || idade>65){
    console.log('voto opcional')
}else if(idade >= 18){
    console.log('voto obrigatório')
}


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom Dia!')
}else if(hora <= 18){
    console.log('Boa Tarde !')
}else{
    console.log('Boa Noite!')
}