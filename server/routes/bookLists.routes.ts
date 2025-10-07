import { Router } from 'express';

import {getBookList, getUserLists} from '../controllers/bookLists.controller.ts';

const router = Router();

router.get('/:userId/:listType', getBookList);
router.get('/:userId', getUserLists);


export default router;