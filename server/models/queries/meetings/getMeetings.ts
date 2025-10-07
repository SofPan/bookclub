import {AppDataSource} from '../../../src/data-source.ts';

export const getAllClubMeetings = (id:string) => {
  const query = `
    SELECT * FROM meetings
    WHERE club_id=${id};
  `;

  return AppDataSource.query(query)
    .then(results => results)
    .catch(error => console.error("Error getting all clubs", error));
}

export const getOneMeeting = (clubId:string, meetingId:string) => {
  const query = `
    SELECT * FROM meetings
    WHERE id=${clubId} AND id=${meetingId};
  `

  return AppDataSource.query(query)
    .then(results => results[0])
    .catch(error => console.error("Error getting one club", error));
}