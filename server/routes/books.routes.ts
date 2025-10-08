import { Router } from 'express';
import { getBooks, getBookById, createBook, getBookReviews, queryBooks } from '../controllers/books.controller.ts';

const router = Router();

router.get('/search', queryBooks);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.get('/:id/reviews', getBookReviews);
router.post('/', createBook);

export default router;