let num=[5,8,3,2,7]
console.log(num)
num.push(9)
console.log(`nosso vetor é o ${num}`)

// for(let pos=0;pos<num.length;pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }
// for(let pos in num){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }
let pos = num.indexOf(7)
console.log(`O valor esta na posição ${pos}`)