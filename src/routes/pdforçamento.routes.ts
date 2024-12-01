import { Router } from 'express';
import { downloadOrcamentoPdf } from '../Controller/pdforçamento.controller';

const router = Router();

router.get('/:id', downloadOrcamentoPdf);

export default router;
