import { Router } from 'express';
// import userRoutes from './users.routes.ts';
import bookRoutes from './books.routes.ts';
import reviewRoutes from './reviews.routes.ts'
import clubRoutes from './clubs.routes.ts';
import memberRoutes from './members.routes.ts';

const router = Router();

// router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/reviews', reviewRoutes);
router.use('/clubs', clubRoutes);
router.use('/members', memberRoutes);

export default router;