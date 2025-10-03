import { Request, Response } from 'express';

import {getAllBooks} from '../models/queries/books/getBooks.ts';

export const getBooks = (req: Request, res: Response) => {
  // res.json({ message: 'All books' });
  console.log("Getting All Books...");
  getAllBooks()
  .then(books => {
    res.json(books);
  })
};

export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Book with id ${id}` });
};

export const createBook = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Book created' });
};