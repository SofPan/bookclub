import {AppDataSource} from '../../../src/data-source.ts';

export const deleteUserClub = (id:string) => {
  const query = `
    DELETE FROM clubs
    WHERE id=${id};
  `

  return AppDataSource.query(query)
    .then(results => results[0])
    .catch(error => console.error("Error getting one club", error));
}