import {AppDataSource} from '../../../../src/data-source.ts';

export const deleteMemberFromClub = (clubId:string, memberId:string) => {
  const query = `
    DELETE FROM club_members
    WHERE club_id=${clubId} AND user_id=${memberId};
  `

  return AppDataSource.query(query)
    .then(results => results)
    .catch(error => console.error("Error getting one club", error));
}