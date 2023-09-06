/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let vitorias = 123;
let derrotas =  23;

function calculaSaldoVitorias (vitorias, derrotas) {
    return vitorias - derrotas;
}

function ranking (vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    if (saldoVitorias > 100) {
        return "Imortal";
    } else if (saldoVitorias > 90) {
        return "Lendário";
    } else if (saldoVitorias > 80) {
        return "Diamante";
    } else if (saldoVitorias > 50) {
        return "Ouro";
    } else if (saldoVitorias > 20) {
        return "Prata";
    } else if (saldoVitorias > 10) {
        return "Bronze";
    } else {
        return "Ferro";
    }
}

calculaSaldoVitorias(vitorias, derrotas) > 0 ?
console.log(`O herói tem saldo de ${calculaSaldoVitorias(vitorias, derrotas)} vitória(s) e está no nível ${ranking(vitorias, derrotas)}!`) :
console.log(`O herói tem saldo de vitórias menor ou igual a 0 e está no nível ${ranking(vitorias, derrotas)}!`)
