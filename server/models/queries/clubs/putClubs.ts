import {AppDataSource} from '../../../src/data-source.ts';

interface Club {
  id: string,
  name: string,
  description: string,
}

export const editUserClub = (club:Club) => {
  const values = [
    club.id,
    club.name,
    club.description,
  ]
  
  const query = `
    UPDATE clubs
    SET name=$2, description=$3
    WHERE id=$1;
  `

  return AppDataSource.query(query, values)
    .then(results => results[0])
    .catch(error => console.error("Error editing clubs", error));
}