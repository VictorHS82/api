import { Request, Response } from 'express';
import { generateOrcamentoPdf } from '../Repositories/pdforçamento.repositireis';
import { PrismaClient } from '@prisma/client' // Importa o cliente Prisma configurado
const prisma = new PrismaClient()

export const downloadOrcamentoPdf = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Busca o orçamento no banco de dados
    const orcamento = await prisma.orcamento.findUnique({
      where: { id: Number(id) },
    });

    if (!orcamento) {
      return res.status(404).json({ message: 'Orçamento não encontrado.' });
    }

    // Gera o PDF
    const pdfPath = await generateOrcamentoPdf({
      nome_responsavel: orcamento.nome_responsavel,
      khw_consumido_ultimo_ano: orcamento.khw_consumido_ultimo_ano,
      quantidade_pecas: orcamento.quantidade_pecas,
      valor_instalacao: orcamento.valor_instalacao,
      valor_homologacao: orcamento.valor_homologacao,
      descontos: orcamento.descontos,
      forma_pagamento: orcamento.forma_pagamento,
      prazo_instalacao: orcamento.prazo_instalacao,
      prazo_homolagacao: orcamento.prazo_homolagacao,
    });

    // Envia o PDF como resposta
    res.download(pdfPath, `orcamento_${id}.pdf`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao gerar PDF.' });
  }
};
