export class Estoque {
    id: number
    cod: number
    desc: string
    qtdedisponivel: number
    maxima: number
    minima: number
    
    constructor(id: number, cod: number, desc: string, qtdedisponivel: number, maxima: number, minima: number){
        this.id = id
        this.cod = cod
        this.desc = desc
        this.qtdedisponivel = qtdedisponivel
        this.maxima = maxima
        this.minima = minima
    }
}