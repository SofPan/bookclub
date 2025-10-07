import { Request, Response } from 'express';

import { getUserById, getUserBySearch } from '../models/queries/users/getUsers.ts';
import {createNewUser} from '../models/queries/users/postUsers.ts'
import {updateUser} from '../models/queries/users/putUsers.ts';
import {deleteOneUser} from '../models/queries/users/deleteUsers.ts';

// GET one user
export const getUser = (req:Request, res:Response) => {
  const id = req.params.id;
  getUserById(id)
    .then(result => res.json(result))
    .catch(error => console.error("Error getting user", error));
}

// TODO: GET users by search terms
export const searchUsers = (req:Request, res:Response) => {
  console.log("searching for users!");
}

export const postUser = (req:Request, res:Response) => {
  const values = req.body;
  createNewUser(values)
    .then(result => res.json(result))
    .catch(error => console.error("Error posting user", error));

}

export const editUser = (req:Request, res:Response) => {
  const values = {
    id: req.params.id,
    ...req.body
  }
  updateUser(values)
    .then(result => res.json(result))
    .catch(error => console.error("Error updating user", error));
}

export const deleteUser = (req:Request, res:Response) => {
  const id = req.params.id;
  deleteOneUser(id)
    .then(result => res.json(result))
    .catch(error => console.error("Error deleting user", error));
}