import { Router } from 'express';
import bookRoutes from './books.routes.ts';
// import userRoutes from './users.routes';
// import clubRoutes from './clubs.routes';

const router = Router();

router.use('/books', bookRoutes);
// router.use('/users', userRoutes);
// router.use('/clubs', clubRoutes);

export default router;