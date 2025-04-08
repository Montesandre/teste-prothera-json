//  Pessoa com ID = 2
const pessoaID2 = pessoas.find(pessoa => pessoa.id === 2);
console.log("Pessoa com ID 2:", pessoaID2);

//  Listagem de pessoas por idade (crescente) com número do CPF
const pessoasOrdenadasPorIdade = pessoas
  .slice() // copia o array pra não modificar o original
  .sort((a, b) => a.idade - b.idade)
  .map(pessoa => {
    const cpf = pessoa.documentos.find(doc => doc.tipo === "CPF");
    return {
      nome: pessoa.nome,
      idade: pessoa.idade,
      cpf: cpf ? cpf.numero : "Sem CPF"
    };
  });
console.log("Pessoas por idade (com CPF):", pessoasOrdenadasPorIdade);

//  Pessoas com idade > 50
const maioresDe50 = pessoas.filter(pessoa => pessoa.idade > 50);
console.log("Pessoas com mais de 50 anos:", maioresDe50);

//  Pessoas que não possuem CPF
const semCPF = pessoas.filter(pessoa => 
  !pessoa.documentos.some(doc => doc.tipo === "CPF")
);
console.log("Pessoas sem CPF:", semCPF);

//  Listagem de tipos de documentos únicos (sem repetir)
const tiposDeDocumentos = [
  ...new Set(
    pessoas.flatMap(pessoa =>
      pessoa.documentos.map(doc => doc.tipo)
    )
  )
];
console.log("Tipos de documentos encontrados:", tiposDeDocumentos);
