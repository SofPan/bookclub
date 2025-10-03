import { Router } from 'express';
import { getBooks, getBookById, createBook } from '../controllers/books.controller.ts';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);

export default router;