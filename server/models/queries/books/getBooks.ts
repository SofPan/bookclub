import {AppDataSource} from '../../../src/data-source.ts';

export const getAllBooks = () => {
  const query = `
    SELECT * FROM books;
  `
  return AppDataSource.query(query)
    .then(results => {
      console.log("db results: ", results)
    }).catch(error => console.error("Error fetching books", error));
}