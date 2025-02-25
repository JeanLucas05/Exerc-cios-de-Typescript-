class Filme{
    titulo:string
    diretor:string
    constructor(titulo:string,diretor:string){
        this.titulo=titulo
        this.diretor=diretor
    }
}
function mesmoDiretor(f1:Filme,f2:Filme):boolean{
    return f1.diretor === f2.diretor
}
let f1:Filme = new Filme("Ainda estou aqui","Walter Sales")
let f2:Filme = new Filme("Central do  Brasil","Walter Sales")
console.log(mesmoDiretor(f1,f2))