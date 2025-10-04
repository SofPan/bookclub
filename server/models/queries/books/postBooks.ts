import {AppDataSource} from '../../../src/data-source.ts';

interface Book {
  external_api_id: string,
  title: string,
  author: string,
  cover_url: string,
  synopsis: string
};

export const createNewBook=(book:Book)=>{
  const values=[
    book.external_api_id,
    book.title,
    book.author,
    book.cover_url,
    book.synopsis
  ];
  const query = `
  INSERT INTO books (external_api_id, title, author, cover_url, synopsis)
    VALUES ($1, $2, $3, $4, $5);
  `
  return AppDataSource.query(query, values)
    .then(results => results)
    .catch(error => console.error("Error adding book", error));
}