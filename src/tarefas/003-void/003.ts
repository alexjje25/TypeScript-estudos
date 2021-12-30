function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

const pessoa = {
    nome: 'ALEX',
    sobrenome: 'santos',

    exibirNome():void{
        console.log(this.nome+ ' ' + this.sobrenome);
    }
}
semRetorno ('alex','sss');
pessoa.exibirNome();

export {pessoa};