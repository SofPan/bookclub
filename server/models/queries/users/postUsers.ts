import {AppDataSource} from '../../../src/data-source.ts';

interface User {
  name: string,
  user_name: string,
  email: string,
  password_hash: string,
  avatar_url: string | null
}

export const createNewUser = (user:User) => {
  const values = [
    user.name,
    user.user_name,
    user.email,
    user.password_hash,
    user.avatar_url || null
  ]
  const query = `
    INSERT INTO users(name, user_name, email, password_hash, avatar_url)
      VALUES($1, $2, $3, $4, $5);
  `

  return AppDataSource.query(query, values)
    .then(result => result)
    .catch(error => console.error("Error creating new user", error));
}