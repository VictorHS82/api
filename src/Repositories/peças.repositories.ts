import Peca from '../entities/peças.entities' 


export const createPeca = async (data: { descricao: string, especificao_peca_componente: string, valor_liquido_unitario: string, ncm:string, leadtime: number, tempo_garantia: number }) => {
  return Peca.create({ data }) 
}

export const findAllPeca = async () => {
  return Peca.findMany() 
}

export const findPecaByDescricao = async (descricao: string) => {
  return Peca.findFirst({ where: { descricao } }) 
}

export const updatePeca = async (id: number, data: { descricao: string, especificao_peca_componente: string, valor_liquido_unitario: string, ncm:string, leadtime: number, tempo_garantia: number }) => {
  return Peca.update({ where: { id }, data }) // Atualiza um usuário
}

export const deletePeca = async (id: number) => {
  return Peca.delete({ where: { id } }) // Deleta um usuário
}

export const findPecaById = async (id: number) => {
  return Peca.findFirst({ where: { id } }) // Busca um usuário pelo id
}
