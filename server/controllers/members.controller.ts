import { Request, Response } from 'express';

import {getAllClubMembers, getOneClubMember} from '../models/queries/clubs/members/getMembers.ts';
import {addMemberToClub} from '../models/queries/clubs/members/postMembers.ts';
import {updateClubMember} from '../models/queries/clubs/members/putMembers.ts';
import {deleteMemberFromClub} from '../models/queries/clubs/members/deleteMembers.ts';

// Club Members API

export const getClubMembers = (req: Request, res: Response) => {
  const clubId = req.params.clubId;
  getAllClubMembers(clubId)
  .then(results => res.json(results))
  .catch(error => console.error("Error fetching club members", error));
}

export const getClubMember = (req: Request, res: Response) => {
  const clubId = req.params.clubId;
  const memberId = req.params.memberId;
  getOneClubMember(clubId, memberId)
  .then(results => res.json(results))
  .catch(error => console.error("Error fetching one club member", error));
}

export const addClubMember = (req: Request, res: Response) => {
  console.log('club id?', req.params.clubId);
  const values = {
    club_id: req.params.clubId,
    ...req.body
  }
  addMemberToClub(values)
  .then(results => res.json(results))
  .catch(error => console.error("Error adding club member", error));
}

export const editClubMember = (req: Request, res: Response) => {
  const values = {
    club_id: req.params.clubId,
    user_id: req.params.memberId,
    ...req.body
  }
  updateClubMember(values)
  .then(results => res.json(results))
  .catch(error => console.error("Error editing club member", error));
}

export const deleteMember = (req: Request, res: Response) => {
  const clubId = req.params.clubId;
  const memberId = req.params.memberId;
  deleteMemberFromClub(clubId, memberId)
  .then(results => res.json(results))
  .catch(error => console.error("Error editing club member", error));
}