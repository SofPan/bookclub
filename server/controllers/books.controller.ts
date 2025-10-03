import { Request, Response } from 'express';

import {getAllBooks} from '../models/queries/books/getBooks.ts';

export const getBooks = async (req: Request, res: Response) => {
  console.log("Getting All Books...");
  getAllBooks()
  .then(books => {
    console.log('inside getBooks', books);
    res.json(books);
  }).catch(error => console.error('Error in Books controller', error));
};

export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Book with id ${id}` });
};

export const createBook = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Book created' });
};