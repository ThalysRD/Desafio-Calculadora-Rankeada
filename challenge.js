const calculadora = (vitorias, derrotas) => {
    const saldo = vitorias - derrotas;
    if(saldo < 10){
        nivel = "Ferro"
    } else if(saldo < 20){
        nivel = "Bronze"
    } else if (saldo < 50) {
        nivel = "Prata"
    } else if (saldo < 80){
        nivel = "Ouro"
    } else if(saldo < 90){
        nivel = "Diamante"
    } else if (saldo < 100) {
        nivel = "Lendário"
    } else { nivel = "Imortal"}

    return `O herói tem de saldo ${saldo} está no nível de ${nivel}`
}
