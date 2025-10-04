import {AppDataSource} from '../../../src/data-source.ts';

export const getAllBooks = () => {
  const query = `
    SELECT * FROM books;
  `
  return AppDataSource.query(query)
    .then(results => {
      return results;
    }).catch(error => console.error("Error fetching books", error));
}

export const getOneBookById = (id:string) => {
  const values = [id];
  const query = `
    SELECT * FROM books
    WHERE id=$1;
  `

  return AppDataSource.query(query, values)
    .then(results => results[0])
    .catch(error => console.error(`Error fetching book with id ${id}`, error))
}

export const getReviewsForOneBook = (id:string) => {
  const values = [id];
  const query = `
    SELECT * FROM reviews
    WHERE book_id=$1;
  `

  return AppDataSource.query(query, values)
    .then(results => results)
    .catch(error => console.error(`Error fetching review with book id ${id}`, error))
}