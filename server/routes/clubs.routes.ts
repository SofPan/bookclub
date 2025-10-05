import { Router } from 'express';

import {getClub, createClub, editClub, deleteClub} from '../controllers/clubs.controller.ts';

const router = Router();

router.get('/:id', getClub);
router.post('/',createClub);
router.put('/:id', editClub);
router.delete('/:id', deleteClub);

export default router;