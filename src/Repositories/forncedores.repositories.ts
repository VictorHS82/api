import Fornecedores from '../entities/fornecedores.entities' 



export const createFornecedores = async (data: { cnpj: number, nome_empresa: string, razao_social: string, nome_vendedor: string, telefone_fornecedor: number, dados_bancarios: number, forma_recebimento: string, conducao_pagamento: string }) => {
  return Fornecedores.create({ data }) 
}

export const findAllFornecedores = async () => {
  return Fornecedores.findMany() 
}

export const findFornecedoresByCNPJ = async (cnpj: number) => {
  return Fornecedores.findFirst({ where: { cnpj } }) 
}

export const updateFornecedores = async (cnpj: number, data: { nome_empresa: string, razao_social: string, nome_vendedor: string, telefone_fornecedor: number, dados_bancarios: number, forma_recebimento: string, conducao_pagamento: string }) => {
  return Fornecedores.update({ where: { cnpj }, data }) // Atualiza um usuário
}

export const deleteFornecedores = async (cnpj: number) => {
  return Fornecedores.delete({ where: { cnpj } }) // Deleta um usuário
}


