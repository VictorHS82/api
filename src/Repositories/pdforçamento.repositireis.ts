import PDFDocument from 'pdfkit';
import path from 'path';
import fs from 'fs';

export const generateOrcamentoPdf = async (orcamento: {
  nome_responsavel: string;
  khw_consumido_ultimo_ano: number;
  quantidade_pecas: number;
  valor_instalacao: number;
  valor_homologacao: number;
  descontos: number;
  forma_pagamento: string;
  prazo_instalacao: number;
  prazo_homolagacao: number;
  valor_total: number;
}) => {
  try {
    // Diretório onde os PDFs serão salvos
    const outputDir = path.resolve(__dirname, '../output'); // Ajuste o caminho conforme sua estrutura de pastas

    // Verifica se o diretório existe, se não, cria
    if (!fs.existsSync(outputDir)) {
      console.log(`Diretório ${outputDir} não existe. Criando...`);
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Caminho completo do PDF
    const pdfPath = path.join(outputDir, `orcamento_${orcamento.nome_responsavel}.pdf`);

    // Cria e configura o documento PDF
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(pdfPath);
    doc.pipe(writeStream);

    // Conteúdo do PDF
    doc
      .fontSize(20)
      .text('Orçamento de Instalação', { align: 'center' })
      .moveDown(2);

    doc
      .fontSize(12)
      .text(`Nome do Responsável: ${orcamento.nome_responsavel}`)
      .text(`kWh Consumido Último Ano: ${orcamento.khw_consumido_ultimo_ano}`)
      .text(`Quantidade de Peças: ${orcamento.quantidade_pecas}`)
      .text(`Valor de Instalação: R$ ${orcamento.valor_instalacao}`)
      .text(`Valor de Homologação: R$ ${orcamento.valor_homologacao}`)
      .text(`Descontos: R$ ${orcamento.descontos}`)
      .text(`Forma de Pagamento: ${orcamento.forma_pagamento}`)
      .text(`Prazo de Instalação: ${orcamento.prazo_instalacao} dias`)
      .text(`Prazo de Homologação: ${orcamento.prazo_homolagacao} dias`)
      .text(`Prazo de Homologação: ${orcamento.valor_total} dias`);

    // Finaliza o PDF
    doc.end();

    return new Promise<string>((resolve, reject) => {
      writeStream.on('finish', () => {
        console.log(`PDF gerado com sucesso em: ${pdfPath}`);
        resolve(pdfPath);
      });

      writeStream.on('error', (error) => {
        console.error('Erro ao salvar o PDF:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('Erro ao gerar o PDF:', error);
    throw new Error('Falha ao criar o PDF.');
  }
};

