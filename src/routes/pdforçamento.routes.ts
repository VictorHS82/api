import { Router } from 'express';
import { downloadOrcamentoPdf } from '../Controller/pdforçamento.controller';

const router = Router();

router.get('/:id', downloadOrcamentoPdf as any);

export default router;
