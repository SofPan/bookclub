import {AppDataSource} from '../../../src/data-source.ts';

export const getAllClubMembers = (id:string) => {
  const query = `
    SELECT * FROM club_members
    WHERE club_id=${id};
  `;

  return AppDataSource.query(query)
    .then(results => results)
    .catch(error => console.error("Error getting all clubs", error));
}

export const getOneClubMember = (clubId:string, memberId:string) => {
  const query = `
    SELECT * FROM club_members
    WHERE id=${clubId} AND user_id=${memberId};
  `

  return AppDataSource.query(query)
    .then(results => results[0])
    .catch(error => console.error("Error getting one club", error));
}