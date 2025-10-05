import {AppDataSource} from '../../../src/data-source.ts';

export const getAllClubs = () => {
  const query = `
    SELECT * FROM clubs;
  `

  return AppDataSource.query(query)
    .then(results => results)
    .catch(error => console.error("Error getting all clubs", error));
}

export const getOneClub = (id:string) => {
  const query = `
    SELECT * FROM clubs
    WHERE id=${id};
  `

  return AppDataSource.query(query)
    .then(results => results[0])
    .catch(error => console.error("Error getting one club", error));
}