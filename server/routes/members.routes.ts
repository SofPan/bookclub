import {Router} from 'express';

import {
  getClubMembers,
  getClubMember,
  addClubMember,
  editClubMember,
  deleteMember
} from '../controllers/members.controller.ts';

const router = Router();

// Club Member Routes
router.get('/:clubId/', getClubMembers);
router.get('/:clubId/:memberId', getClubMember);
router.post('/:clubId', addClubMember);
router.put('/:clubId/:memberId', editClubMember);
router.delete('/:clubId/:memberId', deleteMember);

export default router;