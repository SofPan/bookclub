import {AppDataSource} from '../../../src/data-source.ts';

interface Meeting {
  club_id: string,
  title: string,
  scheduled_at: string,
  created_by: string
}

export const updateClubMeeting = (meeting:Meeting) => {
  const values = [
    meeting.club_id,
    meeting.title,
    meeting.scheduled_at,
    meeting.created_by
  ]
  
  const query = `
    UPDATE meetings
    SET title=$2, scheduled_at=$3
    WHERE club_id=$1 AND created_by=$4;
  `

  return AppDataSource.query(query, values)
    .then(results => results[0])
    .catch(error => console.error("Error editing club meeting", error));
}