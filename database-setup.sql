-- ReadAI Book Club Database Setup
-- This SQL file sets up the database structure for the ReadAI book club

-- Users table for book club members
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    reading_level ENUM('beginner', 'intermediate', 'advanced', 'expert') DEFAULT 'intermediate',
    favorite_genres JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Books table for the book collection
CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20),
    genre VARCHAR(100),
    subgenre VARCHAR(100),
    reading_time_minutes INT,
    difficulty_level ENUM('beginner', 'intermediate', 'advanced', 'expert'),
    description TEXT,
    cover_image_url VARCHAR(500),
    publication_year YEAR,
    page_count INT,
    language VARCHAR(50) DEFAULT 'English',
    is_featured BOOLEAN DEFAULT FALSE,
    is_classic BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Reading sessions table
CREATE TABLE reading_sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    session_type ENUM('15min', '30min', '45min', '60min', '90min', '120min'),
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP NULL,
    pages_read INT DEFAULT 0,
    notes TEXT,
    rating TINYINT CHECK (rating >= 1 AND rating <= 5),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

-- User reading progress
CREATE TABLE reading_progress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    current_page INT DEFAULT 0,
    total_pages INT,
    progress_percentage DECIMAL(5,2) DEFAULT 0.00,
    last_read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    is_currently_reading BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_book (user_id, book_id)
);

-- Discussion forums
CREATE TABLE forums (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Forum topics/posts
CREATE TABLE forum_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    forum_id INT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    is_pinned BOOLEAN DEFAULT FALSE,
    views INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (forum_id) REFERENCES forums(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Forum replies
CREATE TABLE forum_replies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT,
    user_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Reading challenges
CREATE TABLE reading_challenges (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    challenge_type ENUM('books_count', 'pages_count', 'genres', 'time_based'),
    target_value INT,
    start_date DATE,
    end_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User challenge participation
CREATE TABLE user_challenges (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    challenge_id INT,
    current_progress INT DEFAULT 0,
    completed_at TIMESTAMP NULL,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (challenge_id) REFERENCES reading_challenges(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_challenge (user_id, challenge_id)
);

-- Book recommendations
CREATE TABLE book_recommendations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    recommended_by ENUM('ai', 'user', 'system'),
    reason TEXT,
    confidence_score DECIMAL(3,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

-- Sample data insertion
INSERT INTO books (title, author, genre, reading_time_minutes, difficulty_level, description, is_featured) VALUES
('1984', 'George Orwell', 'Classic Literature', 300, 'intermediate', 'A dystopian social science fiction novel about totalitarian control.', TRUE),
('Pride and Prejudice', 'Jane Austen', 'Classic Literature', 420, 'intermediate', 'A romantic novel of manners written by Jane Austen.', TRUE),
('To Kill a Mockingbird', 'Harper Lee', 'Classic Literature', 360, 'intermediate', 'A novel about racial injustice and childhood innocence.', TRUE),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic Literature', 180, 'intermediate', 'A story of the fabulously wealthy Jay Gatsby.', TRUE),
('Dune', 'Frank Herbert', 'Science Fiction', 600, 'advanced', 'An epic science fiction novel set in the distant future.', TRUE),
('Foundation', 'Isaac Asimov', 'Science Fiction', 480, 'advanced', 'A science fiction series about psychohistory.', TRUE),
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 1200, 'intermediate', 'An epic high-fantasy novel about the quest to destroy the One Ring.', TRUE),
('A Game of Thrones', 'George R.R. Martin', 'Fantasy', 900, 'advanced', 'The first book in the A Song of Ice and Fire series.', TRUE),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 300, 'beginner', 'A fantasy novel about Bilbo Baggins adventure.', TRUE),
('The Wizard of Oz', 'L. Frank Baum', 'Children\'s Classics', 120, 'beginner', 'A children\'s novel about Dorothy\'s journey to Oz.', TRUE);

INSERT INTO forums (title, description, category) VALUES
('Classic Literature Discussion', 'Discuss timeless masterpieces and their impact on literature', 'Literature'),
('Science Fiction & Fantasy', 'Explore futuristic worlds and magical realms', 'Genre'),
('Reading Challenges', 'Share progress on monthly reading goals', 'Community'),
('Book Recommendations', 'Share and discover new books to read', 'Recommendations'),
('General Discussion', 'General book club conversations', 'General');

INSERT INTO reading_challenges (title, description, challenge_type, target_value, start_date, end_date) VALUES
('Classic Literature Challenge', 'Read 10 classic literature books this year', 'books_count', 10, '2024-01-01', '2024-12-31'),
('Around the World Reading', 'Read books from 20 different countries', 'genres', 20, '2024-01-01', '2024-12-31'),
('Speed Reading Challenge', 'Read 50 books in 6 months', 'books_count', 50, '2024-01-01', '2024-06-30'),
('Page Turner Challenge', 'Read 10,000 pages this year', 'pages_count', 10000, '2024-01-01', '2024-12-31');