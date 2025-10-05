import {AppDataSource} from '../../../src/data-source.ts';

export const deleteUserReview = async (id:string) => {
  const query = `
  DELETE FROM reviews
  WHERE id = ${id};
  `

  return AppDataSource.query(query)
    .then(result => result)
    .catch(error => console.error("Error deleting review", error));
}