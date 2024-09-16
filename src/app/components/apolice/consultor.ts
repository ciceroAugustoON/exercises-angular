export class Consultor {
    nome: string;
    sexo: string;
    idade: number;
    valor: number;
    apolice: number = 0;

    constructor(nome: string, sexo: string, idade: number, valor: number) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.valor = valor;
        this.calcular()
    }

    calcular() {
        if (this.sexo == 'M') {
            this.apolice = (this.idade > 25) ? this.valor * 0.10 : this.valor * 0.15; 
        } else if (this.sexo == 'F') {
            this.apolice = this.valor * 0.08
        }
    }
}