import { Request, Response } from 'express';

import { getAllUsersLists, getListByType } from '../models/queries/bookLists/getBookLists.ts';

export const getBookList = (req:Request, res:Response) => {
  const userId = req.params.userId;
  const listType = req.params.listType;
  getListByType(userId, listType)
    .then(result => res.json(result))
    .catch(error => console.error("Error fetching book list", error));
}

export const getUserLists = (req:Request, res:Response) => {
  const userId = req.params.userId;
  getAllUsersLists(userId)
    .then(result => res.json(result))
    .catch(error => console.error("Error getting user lists", error));
}