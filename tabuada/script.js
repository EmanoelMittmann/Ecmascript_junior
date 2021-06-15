function carregar(){
    var tabuada =document.getElementById('tab')
    var gtab= document.getElementById('gtab')
    if(tab.value.lenght == 0){
        window.alert("Digite um numero")
    }else{
        let tab = Number(tabuada.value)
        let c =1
        gtab.innerHTML=""
        while(c <= 10){
            let item=document.createElement('option')
            item.text=`${tab} X ${c} = ${tab*c}`
            gtab.appendChild(item)
            c++
        }
    }
}