import { Request, Response } from 'express';
import {fetchFromOpenLibrary} from '../utils/openLibraryClient.ts';
import {AppDataSource as db} from '../src/data-source.ts';


import {getAllBooks, getOneBookById, getReviewsForOneBook} from '../models/queries/books/getBooks.ts';
import {createNewBook} from '../models/queries/books/postBooks.ts';

/*
  Test Path, to be converted to a keyword search path 
  that searches the external API/DB for titles and authors.
*/ 
export const getBooks = async (req: Request, res: Response) => {
  getAllBooks()
  .then(books => {
    res.json(books);
  }).catch(error => console.error('Error in Books controller', error));
};

/*
  GET book details by ID
*/
export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  
  getOneBookById(id)
  .then(book => {
    res.json(book);
  }).catch(error => console.error('Error in controller', error));
};

/*
  Search DB for query text and pull from DB if record exists
  Otherwise make API call to search for book then update DB
*/

export const queryBooks = async (req: Request, res: Response) => {
  const {q} = req.query;
  console.log("we have a query", q);
  /*
    Check if user query is already cached in DB
  */ 
  const cached = await db.query(`
      SELECT * FROM books
      WHERE title LIKE '%${q}%';
    `);

  if (cached.length){
    return res.json(cached[0]);
  }

  const queryString = q?.toString();

  /*
    Run fetch request from external API
    and capture necessary details
  */ 
  const externalSearch = await fetchFromOpenLibrary(queryString);
  const details = externalSearch.docs;

  interface ExternalBook {
  key: string,
  title: string,
  author_name: string,
  cover_i: string,
}

  const changeExternalToInternalKeys = (book:ExternalBook) => {
    console.log("inside translator", book);
    const newBook = {
      external_api_id: book.key.replace('/works/', ''),
      title: book.title,
      author: book.author_name[0],
      cover_url: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
    }
    console.log("newBook", newBook);
    return newBook;
  }

  const changeBooks = details.map((book:ExternalBook) => {
    return changeExternalToInternalKeys(book)
  });

  /*
    Double check user selection is not in DB before 
    caching a new record
  */ 
  // const doubleCheckCached = await db.query(`
  //     SELECT * FROM books
  //     WHERE external_api_id LIKE '%${apiValues[0]}%';
  //   `);
  
  // if (doubleCheckCached.length){
  //   return res.json(doubleCheckCached[0]);
  // }

  // /*
  //   Cache new record in DB to bring down external API load
  // */ 

  // await db.query(`
  //     INSERT INTO books(external_api_id, title, author, cover_url)
  //       VALUES ($1, $2, $3, $4);
  //   `, apiValues);
  console.log("changeBooks", changeBooks);
    return res.json(changeBooks);
}

/*
  GET reviews for a book
*/
export const getBookReviews = (req: Request, res: Response) => {
  const {id} = req.params;
  getReviewsForOneBook(id)
  .then(reviews => {
    res.json(reviews);
  }).catch(error => console.error('Error in controller', error));
}
/*
  POST book to DB
*/ 
export const createBook = (req: Request, res: Response) => {
  const bookValues = req.body;
  createNewBook(bookValues)
  .then(() => {
    res.status(201).json();
  }).catch(error => console.error("Error createBook", error));
};

/*
  The preference is not to have any UPDATE/DELETE Book API
  requests because these changes update to all users.

  User routes will handle an individual's updates/deletes.
*/