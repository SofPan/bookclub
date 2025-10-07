import {Router} from 'express';

import {
  editUser,
  getUser,
  postUser,
} from '../controllers/users.controller';

const router = Router();

router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', editUser);


export default router;