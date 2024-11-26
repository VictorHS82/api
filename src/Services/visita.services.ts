import { createVisita, findAllVisita, findVisitaByClienteId, updateVisita, findVisitaById, deleteVisita } from '../Repositories/visita.repositories' 


export const createVisitaService = async (data: {clienteId: number, tipoEdificao: string, tipo_telha: string, localizacao_imovel: string, 
    orientacao_telhado: string, inclinacao_telhado: number, ponto_de_ancoragem: string, espaco_de_elevacao_ate_o_telhado: number,
    informacoes_adicionais: string }) => {
  const Visita = await findVisitaByClienteId(data.clienteId) 

  if (Visita) {
    throw new Error('Visita já cadastrado') 
  }

  return createVisita(data) 
}

export const findAllVisitaService = async () => {
  return findAllVisita() 
}

export const updateVisitaService = async (id: number, data: { clienteId: number, tipoEdificao: string, tipo_telha: string, localizacao_imovel: string, 
    orientacao_telhado: string, inclinacao_telhado: number, ponto_de_ancoragem: string, espaco_de_elevacao_ate_o_telhado: number,
    informacoes_adicionais: string }) => {
  const Visita = await findVisitaById(id) // Busca um usuário pelo id

  if (!Visita) {
    throw new Error('Visita não encontrado') // Se o usuário não existir, lança um erro
  }

  return updateVisita(id, data) // Atualiza um usuário
}

export const deleteVisitaService = async (id: number) => {
  const Visita = await findVisitaById(id) // Busca um usuário pelo id

  if (!Visita) {
    throw new Error('Visita não encontrado') // Se o usuário não existir, lança um erro
  }

  return deleteVisita(id) // Deleta um usuário
}
