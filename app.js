function calcularTotal(itens) {
    if (!Array.isArray(itens)) return 0

    let total = 0

    // soma os preços de todos os itens do carrinho
    for (let i = 0; i < itens.length; i++) {
        total += itens[i].preco
    }

    // devolve o total calculado
    return total
}