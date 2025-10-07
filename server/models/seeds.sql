-- =========================================
-- USERS
-- =========================================
INSERT INTO users (name, user_name, email, password_hash, avatar_url)
VALUES
  ('Alice Johnson', 'allieJohn', 'alice@example.com', 'hashed_pw_1', 'https://avatar.iran.liara.run/public'),
  ('Brian Smith', 'bSmith', 'brian@example.com', 'hashed_pw_2', 'https://avatar.iran.liara.run/public'),
  ('Chloe Lee', 'chloeoeoe', 'chloe@example.com', 'hashed_pw_3', 'https://avatar.iran.liara.run/public'),
  ('Diego Ramirez', 'd_ramz', 'diego@example.com', 'hashed_pw_4', NULL),
  ('Ella Thompson', 'e_t_phone_home','ella@example.com', 'hashed_pw_5', NULL),
  ('Test User', 'its_a_test', 'test@example.com', 'test_pw', 'https://avatar.iran.liara.run/public');

-- =========================================
-- BOOKS
-- =========================================
INSERT INTO books (external_api_id, title, author, cover_url, synopsis, avg_rating_cache)
VALUES
  ('OL123M', 'The Great Gatsby', 'F. Scott Fitzgerald', 'https://example.com/gatsby.jpg', 'A story of wealth, love, and tragedy in 1920s America.', 4.1),
  ('OL456M', 'Pride and Prejudice', 'Jane Austen', 'https://example.com/pride.jpg', 'A classic romance exploring class, family, and first impressions.', 4.6),
  ('OL789M', 'The Hobbit', 'J.R.R. Tolkien', 'https://example.com/hobbit.jpg', 'Bilbo Baggins embarks on an unexpected adventure with dwarves.', 4.8),
  ('OL101M', '1984', 'George Orwell', 'https://example.com/1984.jpg', 'A dystopian novel about totalitarianism and surveillance.', 4.4),
  ('TEST1', 'Test', 'Test Author', 'https://example.com/test', 'A test book for testing tests', 0);

-- =========================================
-- USER_BOOK_LISTS
-- =========================================
-- Assume we fetch user IDs and book IDs from the inserted records
-- Example with subqueries for clarity:
INSERT INTO user_book_lists (user_id, book_id, list_type)
VALUES
  ((SELECT id FROM users WHERE email='alice@example.com'),
   (SELECT id FROM books WHERE title='The Great Gatsby'), 'Currently Reading'),
  ((SELECT id FROM users WHERE email='alice@example.com'),
   (SELECT id FROM books WHERE title='Pride and Prejudice'), 'Want to Read'),
  ((SELECT id FROM users WHERE email='brian@example.com'),
   (SELECT id FROM books WHERE title='1984'), 'Read'),
  ((SELECT id FROM users WHERE email='chloe@example.com'),
   (SELECT id FROM books WHERE title='The Hobbit'), 'Want to Read');

-- =========================================
-- REVIEWS
-- =========================================
INSERT INTO reviews (user_id, book_id, rating, content)
VALUES
  ((SELECT id FROM users WHERE email='alice@example.com'),
   (SELECT id FROM books WHERE title='The Great Gatsby'), 5, 'A timeless classic! Loved the prose and symbolism.'),
  ((SELECT id FROM users WHERE email='brian@example.com'),
   (SELECT id FROM books WHERE title='1984'), 4, 'Chilling and thought-provoking, but a bit heavy.'),
  ((SELECT id FROM users WHERE email='chloe@example.com'),
   (SELECT id FROM books WHERE title='Pride and Prejudice'), 5, 'An all-time favorite romance with wit and charm.');

-- =========================================
-- CLUBS
-- =========================================
INSERT INTO clubs (name, description, created_by)
VALUES
  ('Fantasy Enthusiasts', 'A group for fans of fantasy novels.', (SELECT id FROM users WHERE email='alice@example.com')),
  ('Classics Circle', 'Exploring literary classics together.', (SELECT id FROM users WHERE email='brian@example.com')),
  ('Dystopia Readers', 'Discussing the dark futures imagined by great authors.', (SELECT id FROM users WHERE email='chloe@example.com'));

-- =========================================
-- CLUB_MEMBERS
-- =========================================
INSERT INTO club_members (club_id, user_id, role)
VALUES
  ((SELECT id FROM clubs WHERE name='Fantasy Enthusiasts'), (SELECT id FROM users WHERE email='alice@example.com'), 'admin'),
  ((SELECT id FROM clubs WHERE name='Fantasy Enthusiasts'), (SELECT id FROM users WHERE email='chloe@example.com'), 'member'),
  ((SELECT id FROM clubs WHERE name='Classics Circle'), (SELECT id FROM users WHERE email='brian@example.com'), 'admin'),
  ((SELECT id FROM clubs WHERE name='Classics Circle'), (SELECT id FROM users WHERE email='ella@example.com'), 'member'),
  ((SELECT id FROM clubs WHERE name='Dystopia Readers'), (SELECT id FROM users WHERE email='diego@example.com'), 'member');

-- =========================================
-- MEETINGS
-- =========================================
INSERT INTO meetings (club_id, title, scheduled_at, created_by)
VALUES
  ((SELECT id FROM clubs WHERE name='Fantasy Enthusiasts'), 'Discuss The Hobbit', '2025-10-15 18:00:00', (SELECT id FROM users WHERE email='alice@example.com')),
  ((SELECT id FROM clubs WHERE name='Classics Circle'), 'Pride and Prejudice Deep Dive', '2025-10-20 19:00:00', (SELECT id FROM users WHERE email='brian@example.com')),
  ((SELECT id FROM clubs WHERE name='Dystopia Readers'), '1984 Group Discussion', '2025-10-25 17:30:00', (SELECT id FROM users WHERE email='chloe@example.com'));
