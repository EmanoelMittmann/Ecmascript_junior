function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img.img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!!
        img.src = 'img/pexels-ave-calvar-martinez-3030459.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'pexels-christo-james-v-724507.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE!
        img.src="/modelo/pexels-pedro-figueras-681467.jpg"
        document.body.style.background = '#515154'
    }
}