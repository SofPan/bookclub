import { Request, Response } from 'express';

import {getAllBooks, getOneBookById} from '../models/queries/books/getBooks.ts';

/*
  Test Path, to be converted to a keyword search path 
  that searches the external API/DB for titles and authors.
*/ 
export const getBooks = async (req: Request, res: Response) => {
  getAllBooks()
  .then(books => {
    console.log('inside getBooks', books);
    res.json(books);
  }).catch(error => console.error('Error in Books controller', error));
};

/*
  Get book details by ID
*/
export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  getOneBookById(id)
  .then(book => {
    console.log("One book", book);
    res.json(book);
  })
  .catch(error => console.error('Error in controller', error));
};

export const createBook = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Book created' });
};