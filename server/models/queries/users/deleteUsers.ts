import {AppDataSource} from '../../../src/data-source.ts';

export const deleteOneUser = (id:string) => {
  const query = `
    DELETE FROM users
    WHERE id=${id};
  `

  return AppDataSource.query(query)
    .then(result => result)
    .catch(error => console.error("Error deleting user", error));
}