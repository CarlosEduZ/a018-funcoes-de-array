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



