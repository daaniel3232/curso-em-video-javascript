var idade = 70
if(idade < 16){
    console.log('Não vota')
} else {
    /*if (idade >= 16 && idade < 18){
        console.log('Voto opcional')
    }*/
    if (idade < 18 || idade > 70) {
        console.log('Voto opcional')
    }
    if (idade >= 18 && idade <= 70){
        console.log('Voto Obrigatório!')
    }
    

}
