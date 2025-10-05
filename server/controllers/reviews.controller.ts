import { Request, Response } from 'express';

import { createNewReview } from '../models/queries/reviews/postReviews';
import {editUserReview} from '../models/queries/reviews/putReviews';
import {deleteUserReview} from '../models/queries/reviews/deleteReviews';


/*
  POST new review
*/
export const createReview = (req: Request, res: Response) => {
  const reviewValues = req.body;
  createNewReview(reviewValues)
  .then(() => {
    res.status(201).json();
  }).catch(error => console.error("Error createReview", error));
};

/*
  PUT existing review
*/

export const editReview = (req: Request, res: Response) => {
  const values = {
      id: req.params.id,
      ...req.body
    };
  editUserReview(values)
  .then(result => {
    res.json(result);
  })
  .catch(error => console.error("Error editing review", error));
}

/*
  DELETE existing review
*/

export const deleteReview = (req: Request, res: Response) => {
  const id = req.params.id;
  deleteUserReview(id)
  .then(result => res.json(result))
  .catch(error => console.error("Error deleting review", error));
}