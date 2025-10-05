import {AppDataSource} from '../../../src/data-source.ts';

interface Review {
  user_id: number,
  book_id: number,
  rating: number,
  content: string,
};

export const createNewReview=(review:Review)=>{
  const values=[
    review.user_id,
    review.book_id,
    review.rating,
    review.content
  ];

  const query = `
  INSERT INTO reviews (user_id, book_id, rating, content)
    VALUES ($1, $2, $3, $4);
  `
  return AppDataSource.query(query, values)
    .then(results => results)
    .catch(error => console.error("Error adding review", error));
}