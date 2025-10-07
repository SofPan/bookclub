import { Request, Response } from 'express';

import {getAllClubMeetings, getOneMeeting} from '../models/queries/meetings/getMeetings.ts';
import {addClubMeeting} from '../models/queries/meetings/postMeetings.ts';
import {updateClubMeeting} from '../models/queries/meetings/putMeetings.ts';
import {deleteMeetingFromClub} from '../models/queries/meetings/deleteMeetings.ts';

export const getClubMeetings = (req: Request, res: Response) => {
  const clubId = req.params.clubId;
  getAllClubMeetings(clubId)
  .then(results => res.json(results))
  .catch(error => console.error("Error fetching club meetings", error));
}

export const getMeeting = (req: Request, res: Response) => {
  const clubId = req.params.clubId;
  const meetingId = req.params.meetingId;
  getOneMeeting(clubId, meetingId)
  .then(results => res.json(results))
  .catch(error => console.error("Error fetching one club meeting", error));
}

export const addMeeting = (req: Request, res: Response) => {
  console.log('club id?', req.params.clubId);
  const values = {
    club_id: req.params.clubId,
    ...req.body
  }
  addClubMeeting(values)
  .then(results => res.json(results))
  .catch(error => console.error("Error adding club meeting", error));
}

export const editMeeting = (req: Request, res: Response) => {
  const values = {
    club_id: req.params.clubId,
    user_id: req.params.meetingId,
    ...req.body
  }
  updateClubMeeting(values)
  .then(results => res.json(results))
  .catch(error => console.error("Error editing club meeting", error));
}

export const deleteMeeting = (req: Request, res: Response) => {
  const clubId = req.params.clubId;
  const meetingId = req.params.meetingId;
  deleteMeetingFromClub(clubId, meetingId)
  .then(results => res.json(results))
  .catch(error => console.error("Error editing club meeting", error));
}