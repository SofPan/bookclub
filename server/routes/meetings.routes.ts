import {Router} from 'express';

import {
  getClubMeetings,
  getMeeting,
  addMeeting,
  editMeeting,
  deleteMeeting
} from '../controllers/meetings.controller.ts';

const router = Router();

router.get('/:clubId/', getClubMeetings);
router.get('/:clubId/:meetingId', getMeeting);
router.post('/:clubId', addMeeting);
router.put('/:clubId/:meetingId', editMeeting);
router.delete('/:clubId/:meetingId', deleteMeeting);

export default router;