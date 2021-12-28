//TIPOS BASICOS (aqui ocorre inferencia de tipos)
let nome: string = 'LUIZ'; //Qualquer tipo de string
let idade: number = 0b1010; //Qualquer tipo de string
let adulto: boolean = true; //Qualquer tipo de string
let simbolo: symbol = Symbol('qualquer-symbol'); //Qualquer tipo de string
//Arrays
let arraydenumeros: Array<number> = [1, 2, 3];
let arraydenumeros2: number[] = [1, 2, 3];
let arraydestrings: Array<string> = ['a', 'b'];

//objetos
let pessoa: {nome: string, idade:number, adulto?: boolean} = {
    idade: 30,
    nome: 'Luiz'
};

//Funcoes
function soma (x: number, y: number): number{
    return x + y;
}
