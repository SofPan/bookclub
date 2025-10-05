import {AppDataSource} from '../../../src/data-source.ts';

interface Club {
  name: string,
  description: string,
  created_by: number
}

export const createOneClub = (club:Club) => {
  const values = [
    club.name,
    club.description,
    club.created_by
  ]
  
  const query = `
    INSERT INTO clubs(name, description, created_by)
    VALUES ($1, $2, $3);
  `

  return AppDataSource.query(query, values)
    .then(results => results[0])
    .catch(error => console.error("Error creating a club", error));
}