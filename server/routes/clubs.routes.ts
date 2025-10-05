import { Router } from 'express';

import {
  getClub, 
  createClub, 
  editClub, 
  deleteClub,
  getClubMembers,
  getClubMember,
  addClubMember,
  editClubMember,
  deleteMember
} from '../controllers/clubs.controller.ts';

const router = Router();

// Club Routes
router.get('/:id', getClub);
router.post('/',createClub);
router.put('/:id', editClub);
router.delete('/:id', deleteClub);

// Club Member Routes
router.get('/:id/members/', getClubMembers);
router.get('/:id/members/:memberId', getClubMember);
router.post('/:id/members/', addClubMember);
router.put('/:id/members/:memberId', editClubMember);
router.delete('/:id/members/:memberId', deleteMember)

export default router;