import {AppDataSource} from '../../../src/data-source.ts';

export const getUserById = (id:string) => {
  const query = `
    SELECT * FROM users
    WHERE id=${id};
  `

  return AppDataSource.query(query)
    .then(result => result[0])
    .catch(error => console.error("Error finding user", error));
}

export const getUserBySearch = (searchQuery:string) => {
  const query = `
    SELECT * FROM users
    WHERE name=${searchQuery} OR user_name=${searchQuery} OR email=${searchQuery};
  `
  return AppDataSource.query(query)
    .then(result => result[0])
    .catch(error => console.error("Error finding user", error));
}