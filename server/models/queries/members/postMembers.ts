import {AppDataSource} from '../../../src/data-source.ts';

interface Member {
  club_id: string,
  user_id: number,
  role: string,
}

export const addMemberToClub = (member:Member) => {
  console.log("member data", member);
  const values = [
    member.club_id,
    member.user_id,
    member.role
  ]
  
  const query = `
    INSERT INTO club_members (club_id, user_id, role)
    VALUES ($1, $2, $3);
  `

  return AppDataSource.query(query, values)
    .then(results => results)
    .catch(error => console.error("Error adding new member", error));
}