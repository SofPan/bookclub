import {Router} from 'express';

import {
  deleteUser,
  editUser,
  getUser,
  postUser,
} from '../controllers/users.controller';

const router = Router();

router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;