const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (maiusculo) => {
    return {
        nome: maiusculo.nome.toUpperCase(),
        profissao: maiusculo.profissao.toUpperCase(),
        username: maiusculo.username.toUpperCase(),
        senha: maiusculo.senha.toUpperCase()
    }
}
console.log(caixaAlta(objeto))

const texto = (objeto) => {
    return `Texto corrido: ${objeto.nome}, ${objeto.profissao}, ${objeto.username}, ${objeto.senha}`
}
console.log(texto(objeto))

const funcaoBala = (objetoA, callback) => {
    const response = callback(objetoA)

    console.log(response)
}

funcaoBala(objeto, caixaAlta)
funcaoBala(objeto, texto)
