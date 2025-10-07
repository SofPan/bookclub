import {AppDataSource} from '../../../src/data-source.ts';

export const deleteMeetingFromClub = (clubId:string, meetingId:string) => {
  const query = `
    DELETE FROM meetings
    WHERE club_id=${clubId} AND id=${meetingId};
  `

  return AppDataSource.query(query)
    .then(results => results)
    .catch(error => console.error("Error deleting meeting", error));
}