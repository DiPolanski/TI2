cadastrarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nomeProduto = e.target.nomeProduto.value;
  const quantidade = parseInt(e.target.quantidade.value);
  const dataFabricacao = e.target.dataFabricacao.value;
  const preco = parseFloat(e.target.preco.value);
  const descricao = e.target.descricao.value;

  // Aqui você pode adicionar validações e lógica para cadastrar o produto

  produtos.push({
    nomeProduto,
    quantidade,
    dataFabricacao,
    preco,
    descricao,
  });
  atualizarListaProdutos();
});
cadastrarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nomeProduto = e.target.nomeProduto.value;
  const quantidade = parseInt(e.target.quantidade.value);
  const dataFabricacao = e.target.dataFabricacao.value;
  const preco = parseFloat(e.target.preco.value);
  const descricao = e.target.descricao.value;

  // Aqui você pode adicionar validações e lógica para cadastrar o produto

  produtos.push({
    nomeProduto,
    quantidade,
    dataFabricacao,
    preco,
    descricao,
  });
  atualizarListaProdutos();
});
