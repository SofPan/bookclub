import { Request, Response } from 'express';

import {getOneClub} from '../models/queries/clubs/getClubs.ts';
import {createOneClub} from '../models/queries/clubs/postClubs.ts';
import {editUserClub} from '../models/queries/clubs/putClubs.ts';
import {deleteUserClub} from '../models/queries/clubs/deleteClubs.ts';


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