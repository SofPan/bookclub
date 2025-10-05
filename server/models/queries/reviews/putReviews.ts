import {AppDataSource} from '../../../src/data-source.ts';

interface Review {
  id: number,
  rating: number,
  content: string,
};

export const editUserReview=(review:Review)=>{
  const values=[
    review.id,
    review.rating,
    review.content
  ];

  const query = `
  UPDATE reviews
  SET rating=$2, content=$3
  WHERE id=$1;
  `
  return AppDataSource.query(query, values)
    .then(results => results[0])
    .catch(error => console.error("Error adding review", error));
}