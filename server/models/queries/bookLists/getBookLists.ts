import {AppDataSource} from '../../../src/data-source.ts';

export const getListByType = (userId:string, listType:string) => {
  const query = `
    SELECT * FROM user_book_lists
    WHERE user_id=${userId} AND list_type='${listType}';
  `

  return AppDataSource.query(query)
    .then(result => result[0])
    .catch(error => console.error("Error getting list type", error));
}

export const getAllUsersLists = (userId: string) => {
  const query = `
    SELECT * FROM user_book_lists
    WHERE user_id=${userId};
  `

  return AppDataSource.query(query)
    .then(result => result)
    .catch(error => console.error("Error fetching user's lists", error));
}