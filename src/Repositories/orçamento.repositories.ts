import Orcamento from '../entities/orçamento.entities' 

export const createOrçamento = async ( data: {
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
    prazo_instalacao: number;                
    prazo_homolagacao: number; }) => {
  return Orcamento.create({ data }) 
}

export const findAllOrçamento = async () => {
  return Orcamento.findMany() 
}

export const findOrçamentoByclienteId = async (clienteId: number) => {
  return Orcamento.findFirst({ where: { clienteId } }) 
}

export const updateOrçamento = async (id: number, data: { 
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
    prazo_instalacao: number;                
    prazo_homolagacao: number; }) => {
  return Orcamento.update({ where: { id }, data }) // Atualiza um usuário
}

export const deleteOrçamento = async (id: number) => {
  return Orcamento.delete({ where: { id } }) // Deleta um usuário
}

