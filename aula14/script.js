function verifica(){
    let inicio = document.getElementById('contador')
    let termino = document.getElementById('quant')
    let fim = document.getElementById('fim')
    let res = document.querySelector('div.res')
    if(inicio.value.lenght == 0 || termino.value.lenght == 0 || fim.value.lenght == 0){
        alert("[ERRO] faltam dados")
    }else{
        res.innerHTML = 'Contando.....'
        let i= Number(inicio.value)
        let f= Number(termino.value)
        let p= Number(fim.value)

        for(let a = i; a <= f ; a += p){
            res.innerHTML += `&#128073;${ a } `
        }
    }
}
