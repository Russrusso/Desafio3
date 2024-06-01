class Heroi {
    constructor(tipo, idade, nome) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = "";

        if (tipo === "Guerreiro") {
            this.tipo = "O Guerreiro , Atacou usando a espada";
        } else if (tipo === "Mago") {
            this.tipo = "O Mago, atacou usando Magia";
        } else if (tipo === "Monge") {
            this.tipo = "O Monge, atacou utilizando Artes marciais";
        } else if (tipo === "Ninja") {
            this.tipo = "O Ninja, atacou usando uma Shuriken";
        
        }
    }

    ataque() {
        console.log(`${this.nome} - ${this.idade}, ${this.tipo};\n`);
        console.log("------------------------------------------\n");
    }
}

let exemplo = new Heroi("", "", "");
let campeao = new Heroi("Monge", 27, "nome");
let campeao1 = new Heroi("Ninja", 22, "nome1");
let campeao2 = new Heroi("Guerreiro", 60, "nome2");
let campeao3 = new Heroi("Mago", 350, "nome3");

exemplo.ataque();
campeao.ataque();
campeao1.ataque();
campeao2.ataque();
campeao3.ataque();

console.log("Olá Heroi, escolha seu nome, idade, e tipo por favor");