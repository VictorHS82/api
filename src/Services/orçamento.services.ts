import { createOrçamento, findAllOrçamento, updateOrçamento, findOrçamentoByclienteId, deleteOrçamento } from '../Repositories/orçamento.repositories' 


export const createOrçamentoService = async (data: { 
    clienteId: number; 
    visitaId: number;  
    pecasId: number;   
    nome_responsavel: string;              
    khw_consumido_ultimo_ano: number;      
    quantidade_pecas: number;              
    valor_instalacao: number;              
    valor_homologacao: number;             
    descontos: number;                     
    forma_pagamento: string;               
    prazo_instalacao: Date;                
    prazo_homolagacao: Date }) => {
  const Orçamento = await findOrçamentoByclienteId(data.clienteId) 

  if (Orçamento) {
    throw new Error('Orçamento já cadastrado') 
  }

  return createOrçamento(data) 
}

export const findAllOrçamentoService = async () => {
  return findAllOrçamento() 
}

export const updateOrçamentoService = async (clienteId: number, data: {   
    visitaId: number;  
    pecasId: number;   
    nome_responsavel: string;              
    khw_consumido_ultimo_ano: number;      
    quantidade_pecas: number;              
    valor_instalacao: number;              
    valor_homologacao: number;             
    descontos: number;                     
    forma_pagamento: string;               
    prazo_instalacao: Date;                
    prazo_homolagacao: Date  }) => {
  const Orçamento = await findOrçamentoByclienteId(clienteId) // Busca um usuário pelo id

  if (!Orçamento) {
    throw new Error('Orçamento não encontrado') // Se o usuário não existir, lança um erro
  }

  return updateOrçamento(clienteId, data) // Atualiza um usuário
}

export const deleteOrçamentoService = async (clienteId: number) => {
  const Orçamento = await findOrçamentoByclienteId(clienteId) // Busca um usuário pelo id

  if (!Orçamento) {
    throw new Error('Orçamento não encontrado') // Se o usuário não existir, lança um erro
  }

  return deleteOrçamento(clienteId) // Deleta um usuário
}