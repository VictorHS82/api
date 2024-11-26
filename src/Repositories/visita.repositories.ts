import Visita from '../entities/visita.entities' 

export const createVisita = async (data: { clienteId: number, tipoEdificao: string, tipo_telha: string, localizacao_imovel: string; 
    orientacao_telhado: string, inclinacao_telhado: number, ponto_de_ancoragem: string, espaco_de_elevacao_ate_o_telhado: number,
    informacoes_adicionais: string }) => {
  return Visita.create({ data }) 
}

export const findAllVisita = async () => {
  return Visita.findMany() 
}

export const findVisitaByClienteId = async ( clienteId: number) => {
  return Visita.findFirst({ where: { clienteId } }) 
}

export const updateVisita = async (id: number, data: {clienteId: number, tipoEdificao: string, tipo_telha: string, localizacao_imovel: string; 
  orientacao_telhado: string, inclinacao_telhado: number, ponto_de_ancoragem: string, espaco_de_elevacao_ate_o_telhado: number,
  informacoes_adicionais: string}) => {
  return Visita.update({ where: { id }, data }) // Atualiza um usuário
}

export const deleteVisita = async (id: number) => {
  return Visita.delete({ where: { id } }) // Deleta um usuário
}

export const findVisitaById = async (id: number) => {
  return Visita.findFirst({ where: { id } }) // Busca um usuário pelo id
}