import {AppDataSource} from '../../../src/data-source.ts';

interface User {
  id: string,
  name: string,
  user_name: string,
  email: string,
  password_hash: string,
  avatar_url: string | null
}

export const updateUser = (user:User) => {
  const values = [
    user.id,
    user.name,
    user.user_name,
    user.email,
    user.password_hash,
    user.avatar_url || null
  ]
  const query = `
    UPDATE users
    SET name=$2, user_name=$3, email=$4, password_hash=$5, avatar_url=$6
    WHERE id=$1;
  `

  return AppDataSource.query(query, values)
    .then(result => result)
    .catch(error => console.error("Error updating user", error));
}