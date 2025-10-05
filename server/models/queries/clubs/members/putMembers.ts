import {AppDataSource} from '../../../../src/data-source.ts';

interface Member {
  club_id: string,
  user_id: string,
  role: string,
}

export const updateClubMember = (member:Member) => {
  const values = [
    member.club_id,
    member.user_id,
    member.role
  ]
  
  const query = `
    UPDATE club_members
    SET role=$3, updated_at=NOW()
    WHERE club_id=$1 AND user_id=$2;
  `

  return AppDataSource.query(query, values)
    .then(results => results[0])
    .catch(error => console.error("Error editing club member", error));
}