// scripts/dbReset.js
import dotenv from 'dotenv';
import { execSync } from 'child_process';
import path from 'path';

// Load environment variables
dotenv.config();

const { DB_USER, DB_PASS, DB_NAME, DB_HOST = 'localhost', DB_PORT = 5432 } = process.env;

if (!DB_USER || !DB_PASS || !DB_NAME) {
  console.error('❌ Missing required environment variables. Check your .env file.');
  process.exit(1);
}

// Paths to SQL files
const schemaPath = path.resolve('models/schema.sql');
const seedsPath = path.resolve('models/seeds.sql');

// Build psql command
// -w skips password prompt (requires PGPASSWORD environment variable)
const baseCmd = `PGPASSWORD="${DB_PASS}" psql -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} -d ${DB_NAME}`;

try {
  console.log('🔄 Resetting database schema...');
  execSync(`${baseCmd} -f "${schemaPath}"`, { stdio: 'inherit' });

  console.log('🌱 Seeding database...');
  execSync(`${baseCmd} -f "${seedsPath}"`, { stdio: 'inherit' });

  console.log('✅ Database reset and seeded successfully!');
} catch (error:unknown) {
  if (error instanceof Error){
    console.error('❌ Error running database scripts:', error.message);
    process.exit(1);
  } else {
    console.error('dbReset.ts: An unknown error occurred')
  }
}
