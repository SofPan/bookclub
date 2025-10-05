import { Request, Response } from 'express';

import { createNewReview } from '../models/queries/reviews/postReviews';

export const createReview = (req: Request, res: Response) => {
  const reviewValues = req.body;
  createNewReview(reviewValues)
  .then(() => {
    res.status(201).json();
  }).catch(error => console.error("Error createReview", error));
};