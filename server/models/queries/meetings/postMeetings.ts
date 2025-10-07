import {AppDataSource} from '../../../src/data-source.ts';

interface Meeting {
  club_id: string,
  title: string,
  scheduled_at: string,
  created_by: string
}

export const addClubMeeting = (meeting:Meeting) => {
  const values = [
    meeting.club_id,
    meeting.title,
    meeting.scheduled_at,
    meeting.created_by
  ]
  
  const query = `
    INSERT INTO meetings (club_id, title, scheduled_at, created_by)
    VALUES ($1, $2, $3, $4);
  `

  return AppDataSource.query(query, values)
    .then(results => results)
    .catch(error => console.error("Error adding new meeting", error));
}