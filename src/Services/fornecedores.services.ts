import { createFornecedores, findAllFornecedores, findFornecedoresByCNPJ, updateFornecedores, deleteFornecedores } from '../Repositories/forncedores.repositories' 


export const createFornecedoresService = async (data: { cnpj: number, nome_empresa: string, razao_social: string, nome_vendedor: string, telefone_fornecedor: number, dados_bancarios: number, forma_recebimento: string, conducao_pagamento: string}) => {
  const Fornecedores = await findFornecedoresByCNPJ(data.cnpj) 

  if (Fornecedores) {
    throw new Error('Fornecedores já cadastrado') 
  }

  return createFornecedores(data) 
}

export const findAllFornecedoresService = async () => {
  return findAllFornecedores() 
}

export const updateFornecedoresService = async (cnpj: number, data: { nome_empresa: string, razao_social: string, nome_vendedor: string, telefone_fornecedor: number, dados_bancarios: number, forma_recebimento: string, conducao_pagamento: string }) => {
  const fornecedores = await findFornecedoresByCNPJ(cnpj) // Busca um usuário pelo id

  if (!fornecedores) {
    throw new Error('Fornecedores não encontrado') // Se o usuário não existir, lança um erro
  }

  return updateFornecedores(cnpj, data) // Atualiza um usuário
}

export const deleteFornecedoresService = async (cnpj: number) => {
  const fornecedores = await findFornecedoresByCNPJ(cnpj) // Busca um usuário pelo id

  if (!fornecedores) {
    throw new Error('Fornecedores não encontrado') // Se o usuário não existir, lança um erro
  }

  return deleteFornecedores(cnpj) // Deleta um usuário
}
