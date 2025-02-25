class Produto{
    nome:string
    preco:number
    constructor(nome:string,preco:number){
        this.nome=nome
        this.preco=preco
    }
}
class Estoque{
    listadeprodutos:Produto []
    constructor(listadeprodutos:Produto[]){
        this.listadeprodutos=listadeprodutos
    }
    listaProdutosAcimasp(a:number):void{
        for(let i:number=0 ; i<this.listadeprodutos.length;i++){
            if(this.listadeprodutos[i].preco >a){
                console.log(this.listadeprodutos[i].nome)
            }
            
        }
    }
}
const f1 = new Produto("feijao",7)
const f2 = new Produto ("abacate",10.50)
let estoque : Estoque = new Estoque([f1,f2])
estoque.listaProdutosAcimasp(10)