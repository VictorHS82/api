import { createPeca, findAllPeca, findPecaByDescricao, updatePeca, findPecaById, deletePeca } from '../Repositories/peças.repositories' 


export const createPecaService = async (data: {descricao: string, especificao_peca_componente: string, valor_liquido_unitario: string, ncm:string, leadtime: number, tempo_garantia: number}) => {
  const peca = await findPecaByDescricao(data.descricao) 

  if (peca) {
    throw new Error('peca já cadastrado') 
  }

  return createPeca(data) 
}

export const findAllPecaService = async () => {
  return findAllPeca() 
}

export const updatePecaService = async (id: number, data: { descricao: string, especificao_peca_componente: string, valor_liquido_unitario: string, ncm:string, leadtime: number, tempo_garantia: number }) => {
  const peca = await findPecaById(id) // Busca um usuário pelo id

  if (!peca) {
    throw new Error('Peca não encontrado') // Se o usuário não existir, lança um erro
  }

  return updatePeca(id, data) // Atualiza um usuário
}

export const deletePecaService = async (id: number) => {
  const peca = await findPecaById(id) // Busca um usuário pelo id

  if (!peca) {
    throw new Error('Peca não encontrado') // Se o usuário não existir, lança um erro
  }

  return deletePeca(id) // Deleta um usuário
}
