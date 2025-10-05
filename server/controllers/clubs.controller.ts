import { Request, Response } from 'express';

import {getOneClub} from '../models/queries/clubs/getClubs.ts';
import {createOneClub} from '../models/queries/clubs/postClubs.ts';
import {editUserClub} from '../models/queries/clubs/putClubs.ts';
import {deleteUserClub} from '../models/queries/clubs/deleteClubs.ts';
import {getAllClubMembers, getOneClubMember} from '../models/queries/clubs/members/getMembers.ts';
import {addMemberToClub} from '../models/queries/clubs/members/postMembers.ts';
import {updateClubMember} from '../models/queries/clubs/members/putMembers.ts';
import {deleteMemberFromClub} from '../models/queries/clubs/members/deleteMembers.ts';

// Club API
export const getClub = (req: Request, res: Response) => {
  const id = req.params.id;
  getOneClub(id)
  .then(result => res.json(result))
  .catch(error => console.error("Error fetching club", error));
}

export const createClub = (req: Request, res: Response) => {
  const values = req.body;
  createOneClub(values)
  .then(result => res.json(result))
  .catch(error => console.error("Error creating club", error));
}

export const editClub = (req: Request, res: Response) => {
  const values = {
    id: req.params.id,
    ...req.body
  }
  editUserClub(values)
  .then(result => res.json(result))
  .catch(error => console.error("Error editing club", error));
}

export const deleteClub = (req: Request, res: Response) => {
  const id = req.params.id;
  deleteUserClub(id)
  .then(result => res.json(result))
  .catch(error => console.error("Error deleting club", error));
}

// Club Members API

export const getClubMembers = (req: Request, res: Response) => {
  const clubId = req.params.id;
  getAllClubMembers(clubId)
  .then(results => res.json(results))
  .catch(error => console.error("Error fetching club members", error));
}

export const getClubMember = (req: Request, res: Response) => {
  const clubId = req.params.id;
  const memberId = req.params.memberId;
  getOneClubMember(clubId, memberId)
  .then(results => res.json(results))
  .catch(error => console.error("Error fetching one club member", error));
}

export const addClubMember = (req: Request, res: Response) => {
  const values = {
    club_id: req.params.id,
    ...req.body
  }
  addMemberToClub(values)
  .then(results => res.json(results))
  .catch(error => console.error("Error adding club member", error));
}

export const editClubMember = (req: Request, res: Response) => {
  const values = {
    club_id: req.params.id,
    user_id: req.params.memberId,
    ...req.body
  }
  updateClubMember(values)
  .then(results => res.json(results))
  .catch(error => console.error("Error editing club member", error));
}

export const deleteMember = (req: Request, res: Response) => {
  const clubId = req.params.id;
  const memberId = req.params.memberId;
  deleteMemberFromClub(clubId, memberId)
  .then(results => res.json(results))
  .catch(error => console.error("Error editing club member", error));
}