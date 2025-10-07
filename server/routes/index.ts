import { Router } from 'express';
import userRoutes from './users.routes.ts';
import bookRoutes from './books.routes.ts';
import reviewRoutes from './reviews.routes.ts'
import clubRoutes from './clubs.routes.ts';
import memberRoutes from './members.routes.ts';
import meetingRoutes from './meetings.routes.ts';
import bookListRoutes from './bookLists.routes.ts';

const router = Router();

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/reviews', reviewRoutes);
router.use('/clubs', clubRoutes);
router.use('/members', memberRoutes);
router.use('/meetings', meetingRoutes);
router.use('/lists', bookListRoutes);
export default router;