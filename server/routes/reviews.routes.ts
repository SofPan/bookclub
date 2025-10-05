import { Router } from 'express';
import { createReview, deleteReview, editReview } from '../controllers/reviews.controller';

const router = Router();

router.post('/', createReview);
router.put('/:id', editReview);
router.delete('/:id', deleteReview);

export default router;