DROP TABLE IF EXISTS api_usage_logs;
DROP TABLE IF EXISTS meetings;
DROP TABLE IF EXISTS club_members;
DROP TABLE IF EXISTS clubs;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS user_book_lists;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS users;

DROP TYPE IF EXISTS member_role;
DROP TYPE IF EXISTS book_list_type;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

------------------------------------------------------------
-- USERS
------------------------------------------------------------
CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    name TEXT NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

------------------------------------------------------------
-- BOOKS
-- Stores books users interact with (fetched from external API)
------------------------------------------------------------
CREATE TABLE books (
    id SERIAL PRIMARY KEY ,
    external_api_id TEXT UNIQUE NOT NULL, -- e.g., Open Library ID
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    cover_url TEXT,
    synopsis TEXT,
    avg_rating_cache DECIMAL(2,1) DEFAULT 0, -- optional cached average rating
    created_at TIMESTAMP DEFAULT NOW()
);

------------------------------------------------------------
-- USER_BOOK_LISTS
-- Tracks user's book lists (Want to Read / Currently Reading / Read)
------------------------------------------------------------
CREATE TYPE book_list_type AS ENUM (
  'Want to Read', 
  'Currently Reading', 
  'Read');

CREATE TABLE user_book_lists (
    id SERIAL PRIMARY KEY ,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    list_type book_list_type NOT NULL,
    added_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (user_id, book_id) -- prevents duplicate entries for same book
);

------------------------------------------------------------
-- REVIEWS
-- Stores user reviews and ratings for books
------------------------------------------------------------
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY ,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    rating DECIMAL CHECK (rating >= 1 AND rating <= 5),
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (user_id, book_id) -- each user can leave one review per book
);

------------------------------------------------------------
-- CLUBS
-- Represents book clubs/groups
------------------------------------------------------------
CREATE TABLE clubs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

------------------------------------------------------------
-- CLUB_MEMBERS
-- Tracks which users belong to which clubs
------------------------------------------------------------
CREATE TYPE member_role AS ENUM ('member', 'admin');

CREATE TABLE club_members (
    id SERIAL PRIMARY KEY ,
    club_id INTEGER REFERENCES clubs(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    role member_role DEFAULT 'member',
    joined_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (club_id, user_id) -- one membership per user per club
);

------------------------------------------------------------
-- MEETINGS
-- Represents scheduled meetings for clubs
------------------------------------------------------------
CREATE TABLE meetings (
    id SERIAL PRIMARY KEY ,
    club_id INTEGER REFERENCES clubs(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    scheduled_at TIMESTAMP NOT NULL,
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

------------------------------------------------------------
-- API_USAGE_LOGS
-- Log of External API calls for volume/query tracking
------------------------------------------------------------
CREATE TABLE api_usage_logs (
  id SERIAL PRIMARY KEY,
  endpoint TEXT NOT NULL,
  status_code INT,
  response_time_ms INT,
  requested_at TIMESTAMP DEFAULT NOW()
);
