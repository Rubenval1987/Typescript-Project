//CLASSES
//Primeira maneira
class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, 
        mes: number = 1, ano: number = 1950) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
const aniversario = new Data(8, 4, 1955)
console.log(aniversario.dia) //Imprimindo só o dia
console.log(aniversario)

const casamento = new Data()
casamento.ano = 2555 //Modificando o valor do ano
console.log(casamento) //Dia e mês serão imprimidos os valores padrões

//Segunda maneira
//Não é mais necessário declarar as váriáveis
class DataEsperta { 
    constructor(public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1950) {
    }
}
const aniversarioEsperto = new DataEsperta(10, 12, 1750)
console.log(aniversarioEsperto.dia) //Imprimindo só o dia
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta()
casamentoEsperto.ano = 2000 //Modificando o valor do ano
console.log(casamentoEsperto) //Dia e mês serão imprimidos os valores padrões




//DESAFIO
// Primeira maneira
// Criar uma classe 
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1: Desconto é opcional(valor padrão 0)
// Obs 2: Criar dois produtos: passando dois e três parâmetros
class Produto1 {
    constructor(public nome: string,
        public preco: number,
        public desconto: number = 0) {
    }
}
const celular = new Produto1('Motorola', 1500) //Sem colocar o valor de desconto
celular.desconto = 0.15 //Modificando o valor padrão(0) do desconto
console.log(celular)

const tablet = new Produto1('Samsung', 900, 0.25)
console.log(tablet)

//Segunda maneira
//Usando classes e métodos
//Método(this)
class Produto2 {
    constructor(public nome: string,
        public preco: number,
        public desconto: number = 0) {
    }
    public resumo(): string {
        return `${this.nome} custa R$${this.preco} e ${this.desconto * 100}% Off`
    }
}
const notebook = new Produto2('Asus', 2222) //Sem colocar o valor de desconto
celular.desconto = 0.1 //Modificando o valor padrão(0) do desconto
console.log(notebook.resumo())

const smartwatch = new Produto2('Acer', 1800, 0.3)
console.log(smartwatch.resumo())

//Terceira maneira
//Método(this)
//Agora imprimindo o valor do desconto, após tirar o percentual
class Produto3 {
    constructor(public nome: string, 
        public preco: number, 
        public desconto: number = 0) {
    }

    precoComDesconto(): number { //Gerando o percentual de desconto
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} com ${this.desconto * 100}% Off`
    }
}
const prod1 = new Produto3('Caneta Bic Preta', 2.00)
prod1.desconto = 0.05
console.log(prod1.resumo())

const prod2 = new Produto3('Caderno Escolar', 19.90, 0.4)
console.log(prod2.resumo())




//MODIFICADORES DE ACESSO
//public, protected e private
class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, 
        public modelo: string,
        private velocidadeMaxima: number = 200) {
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } 
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}
const carro1 = new Carro('Ford', 'Ka', 185)
Array(30).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(25).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

//Extends permite a classe "Ferrari" herdar os dados de "Carro"
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}
const fiat= new Ferrari('Pulse', 300)
console.log(`${fiat.marca} ${fiat.modelo}`)
console.log(fiat.acelerar()) //Aumentando de 20 em 20
console.log(fiat.acelerar())
console.log(fiat.acelerar())
console.log(fiat.frear()) //Reduzibdo de -15 em -15
console.log(fiat.frear())
console.log(fiat.frear())




//GETTERS E SETTERS
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}
const pessoa1 = new Pessoa
pessoa1.idade = 35
console.log(`Idade da pessoa1: ${pessoa1.idade}`)




//STATIC
class Matematica {
    static Pi: number = 13.1416

    static areaCirc(raio: number): number {
        return this.Pi * (raio * raio)
    }
}
console.log(Matematica.areaCirc(10))




//ABSTRACT
//Classe abstrata só serve para ser usada por outra classe
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}
let c1: Soma = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

let c2 = new Multiplicacao()
c2.executar(2, 3, 4, 5)
console.log(c2.getResultado())



// SINGLETON
// Garante a existência de apenas uma instância de uma classe, 
// mantendo um ponto global de acesso ao seu objeto
class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}
console.log(Unico.getInstance().agora())




// ATRIBUTOS SOMENTE DE LEITURA
// Readonly
class Aviao {
    public readonly modelo: string
    
    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC')
console.log(turboHelice)
const name = 'Otávio Miranda';
const upperCaseName = name.toUppercase();
console.log(upperCaseName);