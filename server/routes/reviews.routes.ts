import { Router } from 'express';
import { createReview } from '../controllers/reviews.controller';

const router = Router();

router.post('/', createReview);

export default router;