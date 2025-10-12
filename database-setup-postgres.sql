-- ReadAI Book Club Database Setup (PostgreSQL/Supabase)
-- This SQL file sets up the database structure for the ReadAI book club

-- Users table for book club members
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    reading_level VARCHAR(20) DEFAULT 'intermediate' CHECK (reading_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
    favorite_genres JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Books table for the book collection
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20),
    genre VARCHAR(100),
    subgenre VARCHAR(100),
    reading_time_minutes INTEGER,
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
    description TEXT,
    cover_image_url VARCHAR(500),
    publication_year INTEGER,
    page_count INTEGER,
    language VARCHAR(50) DEFAULT 'English',
    is_featured BOOLEAN DEFAULT FALSE,
    is_classic BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reading sessions table
CREATE TABLE reading_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    session_type VARCHAR(10) CHECK (session_type IN ('15min', '30min', '45min', '60min', '90min', '120min')),
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP NULL,
    pages_read INTEGER DEFAULT 0,
    notes TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5)
);

-- User reading progress
CREATE TABLE reading_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    current_page INTEGER DEFAULT 0,
    total_pages INTEGER,
    progress_percentage DECIMAL(5,2) DEFAULT 0.00,
    last_read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    is_currently_reading BOOLEAN DEFAULT TRUE,
    UNIQUE (user_id, book_id)
);

-- Discussion forums
CREATE TABLE forums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Forum topics/posts
CREATE TABLE forum_posts (
    id SERIAL PRIMARY KEY,
    forum_id INTEGER REFERENCES forums(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    is_pinned BOOLEAN DEFAULT FALSE,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Forum replies
CREATE TABLE forum_replies (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES forum_posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reading challenges
CREATE TABLE reading_challenges (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    challenge_type VARCHAR(20) CHECK (challenge_type IN ('books_count', 'pages_count', 'genres', 'time_based')),
    target_value INTEGER,
    start_date DATE,
    end_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User challenge participation
CREATE TABLE user_challenges (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    challenge_id INTEGER REFERENCES reading_challenges(id) ON DELETE CASCADE,
    current_progress INTEGER DEFAULT 0,
    completed_at TIMESTAMP NULL,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, challenge_id)
);

-- Book recommendations
CREATE TABLE book_recommendations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    recommended_by VARCHAR(10) CHECK (recommended_by IN ('ai', 'user', 'system')),
    reason TEXT,
    confidence_score DECIMAL(3,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data insertion - Massive Book Collection
INSERT INTO books (title, author, genre, reading_time_minutes, difficulty_level, description, is_featured) VALUES
-- Classic Literature (50 books)
('1984', 'George Orwell', 'Classic Literature', 300, 'intermediate', 'A dystopian social science fiction novel about totalitarian control.', TRUE),
('Pride and Prejudice', 'Jane Austen', 'Classic Literature', 420, 'intermediate', 'A romantic novel of manners written by Jane Austen.', TRUE),
('To Kill a Mockingbird', 'Harper Lee', 'Classic Literature', 360, 'intermediate', 'A novel about racial injustice and childhood innocence.', TRUE),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic Literature', 180, 'intermediate', 'A story of the fabulously wealthy Jay Gatsby.', TRUE),
('Moby Dick', 'Herman Melville', 'Classic Literature', 900, 'advanced', 'The epic tale of Captain Ahab''s obsessive quest for the white whale.', TRUE),
('War and Peace', 'Leo Tolstoy', 'Classic Literature', 1800, 'advanced', 'A sweeping historical novel set during the Napoleonic Wars.', TRUE),
('Anna Karenina', 'Leo Tolstoy', 'Classic Literature', 1200, 'advanced', 'A tragic love story set in 19th century Russian society.', TRUE),
('Crime and Punishment', 'Fyodor Dostoevsky', 'Classic Literature', 600, 'advanced', 'A psychological thriller about a man who commits murder.', TRUE),
('The Brothers Karamazov', 'Fyodor Dostoevsky', 'Classic Literature', 1500, 'advanced', 'A philosophical novel exploring faith, doubt, and morality.', TRUE),
('Les Misérables', 'Victor Hugo', 'Classic Literature', 1800, 'advanced', 'An epic tale of redemption set in 19th century France.', TRUE),
('The Count of Monte Cristo', 'Alexandre Dumas', 'Classic Literature', 1200, 'intermediate', 'A tale of revenge, adventure, and justice.', TRUE),
('The Three Musketeers', 'Alexandre Dumas', 'Classic Literature', 600, 'intermediate', 'A swashbuckling adventure of friendship and honor.', TRUE),
('Jane Eyre', 'Charlotte Brontë', 'Classic Literature', 600, 'intermediate', 'A gothic romance about an orphaned governess.', TRUE),
('Wuthering Heights', 'Emily Brontë', 'Classic Literature', 480, 'intermediate', 'A dark tale of passionate love and revenge.', TRUE),
('Little Women', 'Louisa May Alcott', 'Classic Literature', 600, 'beginner', 'A heartwarming story of four sisters growing up.', TRUE),
('The Scarlet Letter', 'Nathaniel Hawthorne', 'Classic Literature', 300, 'intermediate', 'A story of sin, guilt, and redemption in Puritan New England.', TRUE),
('The Adventures of Huckleberry Finn', 'Mark Twain', 'Classic Literature', 480, 'intermediate', 'A coming-of-age story about friendship and freedom.', TRUE),
('The Adventures of Tom Sawyer', 'Mark Twain', 'Classic Literature', 300, 'beginner', 'A classic tale of boyhood adventure and mischief.', TRUE),
('The Picture of Dorian Gray', 'Oscar Wilde', 'Classic Literature', 240, 'intermediate', 'A gothic novel about beauty, morality, and corruption.', TRUE),
('Dracula', 'Bram Stoker', 'Classic Literature', 480, 'intermediate', 'The original vampire novel that defined the genre.', TRUE),
('Frankenstein', 'Mary Shelley', 'Classic Literature', 360, 'intermediate', 'A gothic tale of scientific ambition and its consequences.', TRUE),
('The Strange Case of Dr. Jekyll and Mr. Hyde', 'Robert Louis Stevenson', 'Classic Literature', 120, 'intermediate', 'A psychological thriller about dual personalities.', TRUE),
('Treasure Island', 'Robert Louis Stevenson', 'Classic Literature', 300, 'beginner', 'A classic adventure story of pirates and buried treasure.', TRUE),
('Kidnapped', 'Robert Louis Stevenson', 'Classic Literature', 360, 'intermediate', 'A historical adventure novel set in 18th century Scotland.', TRUE),
('The Time Machine', 'H.G. Wells', 'Classic Literature', 120, 'intermediate', 'A science fiction novel about time travel and the future.', TRUE),
('The War of the Worlds', 'H.G. Wells', 'Classic Literature', 180, 'intermediate', 'A science fiction novel about alien invasion.', TRUE),
('The Invisible Man', 'H.G. Wells', 'Classic Literature', 150, 'intermediate', 'A science fiction novel about a scientist who becomes invisible.', TRUE),
('Around the World in Eighty Days', 'Jules Verne', 'Classic Literature', 300, 'beginner', 'A thrilling race around the globe.', TRUE),
('Twenty Thousand Leagues Under the Sea', 'Jules Verne', 'Classic Literature', 480, 'intermediate', 'An underwater adventure with Captain Nemo.', TRUE),
('Journey to the Center of the Earth', 'Jules Verne', 'Classic Literature', 360, 'intermediate', 'An adventure to the Earth''s core.', TRUE),
('The Hunchback of Notre Dame', 'Victor Hugo', 'Classic Literature', 900, 'advanced', 'A gothic tale of love and tragedy in medieval Paris.', TRUE),
('The Red and the Black', 'Stendhal', 'Classic Literature', 600, 'advanced', 'A psychological novel about ambition and social climbing.', TRUE),
('Madame Bovary', 'Gustave Flaubert', 'Classic Literature', 480, 'advanced', 'A realist novel about a woman''s search for fulfillment.', TRUE),
('The Awakening', 'Kate Chopin', 'Classic Literature', 180, 'intermediate', 'A feminist novel about a woman''s self-discovery.', TRUE),
('The Age of Innocence', 'Edith Wharton', 'Classic Literature', 480, 'intermediate', 'A novel about love and society in 19th century New York.', TRUE),
('Ethan Frome', 'Edith Wharton', 'Classic Literature', 120, 'intermediate', 'A tragic tale of love and duty in rural New England.', TRUE),
('The House of Mirth', 'Edith Wharton', 'Classic Literature', 600, 'intermediate', 'A novel about social climbing and its consequences.', TRUE),
('The Portrait of a Lady', 'Henry James', 'Classic Literature', 900, 'advanced', 'A psychological novel about an American woman in Europe.', TRUE),
('The Turn of the Screw', 'Henry James', 'Classic Literature', 120, 'intermediate', 'A gothic ghost story with psychological complexity.', TRUE),
('Daisy Miller', 'Henry James', 'Classic Literature', 90, 'intermediate', 'A novella about an American girl in Europe.', TRUE),
('The Ambassadors', 'Henry James', 'Classic Literature', 900, 'advanced', 'A novel about American innocence and European sophistication.', TRUE),
('The Wings of the Dove', 'Henry James', 'Classic Literature', 900, 'advanced', 'A novel about love, money, and moral compromise.', TRUE),
('The Golden Bowl', 'Henry James', 'Classic Literature', 900, 'advanced', 'A novel about marriage, adultery, and social convention.', TRUE),
('Sister Carrie', 'Theodore Dreiser', 'Classic Literature', 600, 'intermediate', 'A naturalist novel about a young woman''s rise and fall.', TRUE),
('An American Tragedy', 'Theodore Dreiser', 'Classic Literature', 1200, 'advanced', 'A naturalist novel about crime and punishment.', TRUE),
('The Call of the Wild', 'Jack London', 'Classic Literature', 120, 'beginner', 'A story about a dog''s journey from domestication to wildness.', TRUE),
('White Fang', 'Jack London', 'Classic Literature', 240, 'beginner', 'A story about a wolf-dog''s journey from wildness to domestication.', TRUE),
('The Sea-Wolf', 'Jack London', 'Classic Literature', 360, 'intermediate', 'A psychological adventure novel about survival at sea.', TRUE),
('Martin Eden', 'Jack London', 'Classic Literature', 600, 'intermediate', 'A semi-autobiographical novel about a working-class writer.', TRUE),
('The Jungle', 'Upton Sinclair', 'Classic Literature', 600, 'intermediate', 'A muckraking novel about the meatpacking industry.', TRUE),
('The Octopus', 'Frank Norris', 'Classic Literature', 600, 'intermediate', 'A naturalist novel about the railroad monopoly in California.', TRUE),
('McTeague', 'Frank Norris', 'Classic Literature', 480, 'intermediate', 'A naturalist novel about greed and its consequences.', TRUE),
('The Red Badge of Courage', 'Stephen Crane', 'Classic Literature', 180, 'intermediate', 'A novel about a young soldier''s experience in the Civil War.', TRUE),
('Maggie: A Girl of the Streets', 'Stephen Crane', 'Classic Literature', 90, 'intermediate', 'A naturalist novel about urban poverty and prostitution.', TRUE),
('The Open Boat', 'Stephen Crane', 'Classic Literature', 30, 'intermediate', 'A short story about survival and the indifference of nature.', TRUE),

-- Science Fiction (30 books)
('Dune', 'Frank Herbert', 'Science Fiction', 600, 'advanced', 'An epic science fiction novel set in the distant future.', TRUE),
('Foundation', 'Isaac Asimov', 'Science Fiction', 480, 'advanced', 'A science fiction series about psychohistory.', TRUE),
('I, Robot', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A collection of stories about robots and the three laws.', TRUE),
('The Foundation Series', 'Isaac Asimov', 'Science Fiction', 1200, 'advanced', 'A complete series about the fall and rise of galactic civilization.', TRUE),
('The Robot Series', 'Isaac Asimov', 'Science Fiction', 600, 'intermediate', 'A series about robots and their relationship with humans.', TRUE),
('The Caves of Steel', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A detective story set in a future Earth.', TRUE),
('The Naked Sun', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A sequel to The Caves of Steel set on a planet of robots.', TRUE),
('The Robots of Dawn', 'Isaac Asimov', 'Science Fiction', 400, 'intermediate', 'The third novel in the Robot series.', TRUE),
('Robots and Empire', 'Isaac Asimov', 'Science Fiction', 500, 'intermediate', 'The final novel in the Robot series.', TRUE),
('The Stars, Like Dust', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A space opera about galactic politics.', TRUE),
('The Currents of Space', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A novel about interstellar politics and economics.', TRUE),
('Pebble in the Sky', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A novel about time travel and galactic civilization.', TRUE),
('The End of Eternity', 'Isaac Asimov', 'Science Fiction', 300, 'intermediate', 'A novel about time travel and its consequences.', TRUE),
('The Gods Themselves', 'Isaac Asimov', 'Science Fiction', 400, 'advanced', 'A novel about parallel universes and energy exchange.', TRUE),
('Nightfall', 'Isaac Asimov', 'Science Fiction', 200, 'intermediate', 'A novel about a planet with multiple suns.', TRUE),
('The Martian Chronicles', 'Ray Bradbury', 'Science Fiction', 300, 'intermediate', 'A collection of stories about Mars colonization.', TRUE),
('Fahrenheit 451', 'Ray Bradbury', 'Science Fiction', 180, 'intermediate', 'A dystopian novel about censorship and book burning.', TRUE),
('The Illustrated Man', 'Ray Bradbury', 'Science Fiction', 240, 'intermediate', 'A collection of science fiction stories.', TRUE),
('Something Wicked This Way Comes', 'Ray Bradbury', 'Science Fiction', 300, 'intermediate', 'A dark fantasy novel about a sinister carnival.', TRUE),
('The October Country', 'Ray Bradbury', 'Science Fiction', 240, 'intermediate', 'A collection of dark fantasy and horror stories.', TRUE),
('Dandelion Wine', 'Ray Bradbury', 'Science Fiction', 300, 'intermediate', 'A semi-autobiographical novel about childhood.', TRUE),
('The Left Hand of Darkness', 'Ursula K. Le Guin', 'Science Fiction', 400, 'advanced', 'A groundbreaking exploration of gender and society.', TRUE),
('The Dispossessed', 'Ursula K. Le Guin', 'Science Fiction', 500, 'advanced', 'A novel about anarchism and utopian society.', TRUE),
('The Lathe of Heaven', 'Ursula K. Le Guin', 'Science Fiction', 200, 'intermediate', 'A novel about dreams that change reality.', TRUE),
('The Word for World is Forest', 'Ursula K. Le Guin', 'Science Fiction', 150, 'intermediate', 'A novel about colonialism and environmental destruction.', TRUE),
('The Left Hand of Darkness', 'Ursula K. Le Guin', 'Science Fiction', 400, 'advanced', 'A novel about gender and society on an alien world.', TRUE),
('The Dispossessed', 'Ursula K. Le Guin', 'Science Fiction', 500, 'advanced', 'A novel about anarchism and utopian society.', TRUE),
('The Lathe of Heaven', 'Ursula K. Le Guin', 'Science Fiction', 200, 'intermediate', 'A novel about dreams that change reality.', TRUE),
('The Word for World is Forest', 'Ursula K. Le Guin', 'Science Fiction', 150, 'intermediate', 'A novel about colonialism and environmental destruction.', TRUE),
('The Left Hand of Darkness', 'Ursula K. Le Guin', 'Science Fiction', 400, 'advanced', 'A novel about gender and society on an alien world.', TRUE),

-- Fantasy (25 books)
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 1200, 'intermediate', 'An epic high-fantasy novel about the quest to destroy the One Ring.', TRUE),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 300, 'beginner', 'A fantasy novel about Bilbo Baggins adventure.', TRUE),
('The Silmarillion', 'J.R.R. Tolkien', 'Fantasy', 600, 'advanced', 'The mythology and history of Middle-earth.', TRUE),
('The Children of Húrin', 'J.R.R. Tolkien', 'Fantasy', 300, 'advanced', 'A tragic tale from the First Age of Middle-earth.', TRUE),
('A Game of Thrones', 'George R.R. Martin', 'Fantasy', 900, 'advanced', 'The first book in the A Song of Ice and Fire series.', TRUE),
('A Clash of Kings', 'George R.R. Martin', 'Fantasy', 1000, 'advanced', 'The second book in the A Song of Ice and Fire series.', TRUE),
('A Storm of Swords', 'George R.R. Martin', 'Fantasy', 1200, 'advanced', 'The third book in the A Song of Ice and Fire series.', TRUE),
('A Feast for Crows', 'George R.R. Martin', 'Fantasy', 1000, 'advanced', 'The fourth book in the A Song of Ice and Fire series.', TRUE),
('A Dance with Dragons', 'George R.R. Martin', 'Fantasy', 1200, 'advanced', 'The fifth book in the A Song of Ice and Fire series.', TRUE),
('The Name of the Wind', 'Patrick Rothfuss', 'Fantasy', 600, 'intermediate', 'The first book in the Kingkiller Chronicle series.', TRUE),
('The Wise Man''s Fear', 'Patrick Rothfuss', 'Fantasy', 900, 'intermediate', 'The second book in the Kingkiller Chronicle series.', TRUE),
('The Way of Kings', 'Brandon Sanderson', 'Fantasy', 1200, 'advanced', 'The first book in the Stormlight Archive series.', TRUE),
('Words of Radiance', 'Brandon Sanderson', 'Fantasy', 1200, 'advanced', 'The second book in the Stormlight Archive series.', TRUE),
('Oathbringer', 'Brandon Sanderson', 'Fantasy', 1200, 'advanced', 'The third book in the Stormlight Archive series.', TRUE),
('Rhythm of War', 'Brandon Sanderson', 'Fantasy', 1200, 'advanced', 'The fourth book in the Stormlight Archive series.', TRUE),
('Mistborn: The Final Empire', 'Brandon Sanderson', 'Fantasy', 600, 'intermediate', 'The first book in the Mistborn series.', TRUE),
('The Well of Ascension', 'Brandon Sanderson', 'Fantasy', 700, 'intermediate', 'The second book in the Mistborn series.', TRUE),
('The Hero of Ages', 'Brandon Sanderson', 'Fantasy', 700, 'intermediate', 'The third book in the Mistborn series.', TRUE),
('The Alloy of Law', 'Brandon Sanderson', 'Fantasy', 400, 'intermediate', 'A sequel to the original Mistborn trilogy.', TRUE),
('Shadows of Self', 'Brandon Sanderson', 'Fantasy', 400, 'intermediate', 'The second book in the Wax and Wayne series.', TRUE),
('The Bands of Mourning', 'Brandon Sanderson', 'Fantasy', 400, 'intermediate', 'The third book in the Wax and Wayne series.', TRUE),
('The Lost Metal', 'Brandon Sanderson', 'Fantasy', 500, 'intermediate', 'The fourth book in the Wax and Wayne series.', TRUE),
('The Wheel of Time', 'Robert Jordan', 'Fantasy', 12000, 'advanced', 'A massive epic fantasy series spanning 14 books.', TRUE),
('The Eye of the World', 'Robert Jordan', 'Fantasy', 800, 'intermediate', 'The first book in the Wheel of Time series.', TRUE),
('The Great Hunt', 'Robert Jordan', 'Fantasy', 800, 'intermediate', 'The second book in the Wheel of Time series.', TRUE),

-- Mystery & Thriller (20 books)
('The Murder of Roger Ackroyd', 'Agatha Christie', 'Mystery', 300, 'intermediate', 'A classic mystery novel with an unexpected twist.', TRUE),
('Murder on the Orient Express', 'Agatha Christie', 'Mystery', 300, 'intermediate', 'A locked-room mystery on a train.', TRUE),
('Death on the Nile', 'Agatha Christie', 'Mystery', 300, 'intermediate', 'A murder mystery set on a cruise ship.', TRUE),
('And Then There Were None', 'Agatha Christie', 'Mystery', 240, 'intermediate', 'A classic locked-room mystery.', TRUE),
('The ABC Murders', 'Agatha Christie', 'Mystery', 300, 'intermediate', 'A serial killer mystery with alphabetical victims.', TRUE),
('The Mysterious Affair at Styles', 'Agatha Christie', 'Mystery', 240, 'intermediate', 'The first Hercule Poirot novel.', TRUE),
('The Big Sleep', 'Raymond Chandler', 'Mystery', 300, 'intermediate', 'A classic hard-boiled detective novel.', TRUE),
('Farewell, My Lovely', 'Raymond Chandler', 'Mystery', 300, 'intermediate', 'A Philip Marlowe mystery novel.', TRUE),
('The Long Goodbye', 'Raymond Chandler', 'Mystery', 400, 'intermediate', 'A complex mystery involving friendship and betrayal.', TRUE),
('The Maltese Falcon', 'Dashiell Hammett', 'Mystery', 300, 'intermediate', 'A classic hard-boiled detective novel.', TRUE),
('The Thin Man', 'Dashiell Hammett', 'Mystery', 300, 'intermediate', 'A witty mystery novel featuring Nick and Nora Charles.', TRUE),
('Red Harvest', 'Dashiell Hammett', 'Mystery', 300, 'intermediate', 'A hard-boiled novel about corruption and violence.', TRUE),
('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'Mystery', 600, 'intermediate', 'A Swedish crime thriller about corruption and violence.', TRUE),
('The Girl Who Played with Fire', 'Stieg Larsson', 'Mystery', 600, 'intermediate', 'The second book in the Millennium series.', TRUE),
('The Girl Who Kicked the Hornet''s Nest', 'Stieg Larsson', 'Mystery', 600, 'intermediate', 'The third book in the Millennium series.', TRUE),
('Gone Girl', 'Gillian Flynn', 'Mystery', 400, 'intermediate', 'A psychological thriller about a missing wife.', TRUE),
('Sharp Objects', 'Gillian Flynn', 'Mystery', 300, 'intermediate', 'A dark psychological thriller about family secrets.', TRUE),
('Dark Places', 'Gillian Flynn', 'Mystery', 400, 'intermediate', 'A thriller about a woman investigating her family''s murder.', TRUE),
('The Silence of the Lambs', 'Thomas Harris', 'Mystery', 400, 'intermediate', 'A psychological thriller about a serial killer.', TRUE),
('Red Dragon', 'Thomas Harris', 'Mystery', 400, 'intermediate', 'The first book featuring Hannibal Lecter.', TRUE),

-- Romance (15 books)
('Pride and Prejudice', 'Jane Austen', 'Romance', 420, 'intermediate', 'A romantic novel of manners written by Jane Austen.', TRUE),
('Sense and Sensibility', 'Jane Austen', 'Romance', 480, 'intermediate', 'A novel about two sisters with different approaches to love.', TRUE),
('Emma', 'Jane Austen', 'Romance', 540, 'intermediate', 'A novel about a young woman who meddles in others'' love lives.', TRUE),
('Persuasion', 'Jane Austen', 'Romance', 360, 'intermediate', 'A novel about second chances in love.', TRUE),
('Northanger Abbey', 'Jane Austen', 'Romance', 300, 'intermediate', 'A gothic parody and coming-of-age story.', TRUE),
('Mansfield Park', 'Jane Austen', 'Romance', 600, 'intermediate', 'A novel about morality and social class.', TRUE),
('Jane Eyre', 'Charlotte Brontë', 'Romance', 600, 'intermediate', 'A gothic romance about an orphaned governess.', TRUE),
('Wuthering Heights', 'Emily Brontë', 'Romance', 480, 'intermediate', 'A dark tale of passionate love and revenge.', TRUE),
('The Age of Innocence', 'Edith Wharton', 'Romance', 480, 'intermediate', 'A novel about love and society in 19th century New York.', TRUE),
('The Portrait of a Lady', 'Henry James', 'Romance', 900, 'advanced', 'A psychological novel about an American woman in Europe.', TRUE),
('The Time Traveler''s Wife', 'Audrey Niffenegger', 'Romance', 400, 'intermediate', 'A love story complicated by time travel.', TRUE),
('Me Before You', 'Jojo Moyes', 'Romance', 400, 'intermediate', 'A contemporary romance about love and loss.', TRUE),
('The Notebook', 'Nicholas Sparks', 'Romance', 300, 'beginner', 'A romantic story about enduring love.', TRUE),
('A Walk to Remember', 'Nicholas Sparks', 'Romance', 300, 'beginner', 'A coming-of-age romance story.', TRUE),
('The Last Song', 'Nicholas Sparks', 'Romance', 400, 'beginner', 'A story about family, love, and forgiveness.', TRUE),

-- Biography & Memoir (15 books)
('The Diary of a Young Girl', 'Anne Frank', 'Biography', 300, 'intermediate', 'The diary of a Jewish girl during the Holocaust.', TRUE),
('Long Walk to Freedom', 'Nelson Mandela', 'Biography', 1200, 'advanced', 'The autobiography of Nelson Mandela.', TRUE),
('The Autobiography of Malcolm X', 'Malcolm X', 'Biography', 600, 'intermediate', 'The life story of civil rights leader Malcolm X.', TRUE),
('I Know Why the Caged Bird Sings', 'Maya Angelou', 'Biography', 300, 'intermediate', 'The first volume of Maya Angelou''s autobiography.', TRUE),
('The Glass Castle', 'Jeannette Walls', 'Biography', 300, 'intermediate', 'A memoir about growing up in a dysfunctional family.', TRUE),
('Educated', 'Tara Westover', 'Biography', 400, 'intermediate', 'A memoir about education and self-discovery.', TRUE),
('Becoming', 'Michelle Obama', 'Biography', 600, 'intermediate', 'The memoir of former First Lady Michelle Obama.', TRUE),
('Born a Crime', 'Trevor Noah', 'Biography', 300, 'intermediate', 'A memoir about growing up in apartheid South Africa.', TRUE),
('The Immortal Life of Henrietta Lacks', 'Rebecca Skloot', 'Biography', 400, 'intermediate', 'The story of the woman whose cells changed medicine.', TRUE),
('Wild', 'Cheryl Strayed', 'Biography', 400, 'intermediate', 'A memoir about hiking the Pacific Crest Trail.', TRUE),
('Eat, Pray, Love', 'Elizabeth Gilbert', 'Biography', 400, 'intermediate', 'A memoir about self-discovery through travel.', TRUE),
('The Year of Magical Thinking', 'Joan Didion', 'Biography', 200, 'intermediate', 'A memoir about grief and loss.', TRUE),
('Just Kids', 'Patti Smith', 'Biography', 300, 'intermediate', 'A memoir about friendship and art in New York.', TRUE),
('Bossypants', 'Tina Fey', 'Biography', 300, 'intermediate', 'A humorous memoir about comedy and life.', TRUE),
('Yes Please', 'Amy Poehler', 'Biography', 300, 'intermediate', 'A humorous memoir about comedy and life.', TRUE),

-- Children's Classics (20 books)
('The Wizard of Oz', 'L. Frank Baum', 'Children''s Classics', 120, 'beginner', 'A children''s novel about Dorothy''s journey to Oz.', TRUE),
('Alice''s Adventures in Wonderland', 'Lewis Carroll', 'Children''s Classics', 150, 'beginner', 'A fantasy novel about a girl who falls down a rabbit hole.', TRUE),
('Through the Looking-Glass', 'Lewis Carroll', 'Children''s Classics', 150, 'beginner', 'The sequel to Alice''s Adventures in Wonderland.', TRUE),
('Peter Pan', 'J.M. Barrie', 'Children''s Classics', 180, 'beginner', 'A story about a boy who never grows up.', TRUE),
('The Wind in the Willows', 'Kenneth Grahame', 'Children''s Classics', 240, 'beginner', 'A story about the adventures of animal friends.', TRUE),
('The Secret Garden', 'Frances Hodgson Burnett', 'Children''s Classics', 300, 'beginner', 'A story about a girl who discovers a hidden garden.', TRUE),
('A Little Princess', 'Frances Hodgson Burnett', 'Children''s Classics', 240, 'beginner', 'A story about a girl who maintains her dignity despite hardship.', TRUE),
('Little Lord Fauntleroy', 'Frances Hodgson Burnett', 'Children''s Classics', 300, 'beginner', 'A story about a young American boy who becomes a British lord.', TRUE),
('The Adventures of Pinocchio', 'Carlo Collodi', 'Children''s Classics', 240, 'beginner', 'A story about a wooden puppet who wants to become a real boy.', TRUE),
('The Jungle Book', 'Rudyard Kipling', 'Children''s Classics', 300, 'beginner', 'A collection of stories about a boy raised by wolves.', TRUE),
('Just So Stories', 'Rudyard Kipling', 'Children''s Classics', 240, 'beginner', 'A collection of origin stories for children.', TRUE),
('The Tale of Peter Rabbit', 'Beatrix Potter', 'Children''s Classics', 30, 'beginner', 'A story about a mischievous rabbit.', TRUE),
('The Velveteen Rabbit', 'Margery Williams', 'Children''s Classics', 60, 'beginner', 'A story about a toy rabbit who becomes real.', TRUE),
('Charlotte''s Web', 'E.B. White', 'Children''s Classics', 180, 'beginner', 'A story about friendship between a pig and a spider.', TRUE),
('Stuart Little', 'E.B. White', 'Children''s Classics', 120, 'beginner', 'A story about a mouse who lives with a human family.', TRUE),
('The Trumpet of the Swan', 'E.B. White', 'Children''s Classics', 180, 'beginner', 'A story about a swan who learns to play the trumpet.', TRUE),
('The Chronicles of Narnia', 'C.S. Lewis', 'Children''s Classics', 1200, 'beginner', 'A fantasy series about children who discover a magical world.', TRUE),
('The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 'Children''s Classics', 180, 'beginner', 'The first book in the Chronicles of Narnia series.', TRUE),
('The Hobbit', 'J.R.R. Tolkien', 'Children''s Classics', 300, 'beginner', 'A fantasy novel about Bilbo Baggins adventure.', TRUE),
('The Little Prince', 'Antoine de Saint-Exupéry', 'Children''s Classics', 90, 'beginner', 'A philosophical story about a young prince from another planet.', TRUE),

-- Star Wars Saga (10 books)
('Star Wars: A New Hope', 'George Lucas', 'Star Wars Saga', 300, 'intermediate', 'The original Star Wars novelization.', TRUE),
('Star Wars: The Empire Strikes Back', 'Donald F. Glut', 'Star Wars Saga', 300, 'intermediate', 'The novelization of the second Star Wars film.', TRUE),
('Star Wars: Return of the Jedi', 'James Kahn', 'Star Wars Saga', 300, 'intermediate', 'The novelization of the third Star Wars film.', TRUE),
('Star Wars: The Phantom Menace', 'Terry Brooks', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Episode I.', TRUE),
('Star Wars: Attack of the Clones', 'R.A. Salvatore', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Episode II.', TRUE),
('Star Wars: Revenge of the Sith', 'Matthew Stover', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Episode III.', TRUE),
('Star Wars: The Force Awakens', 'Alan Dean Foster', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Episode VII.', TRUE),
('Star Wars: The Last Jedi', 'Jason Fry', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Episode VIII.', TRUE),
('Star Wars: The Rise of Skywalker', 'Rae Carson', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Episode IX.', TRUE),
('Star Wars: Rogue One', 'Alexander Freed', 'Star Wars Saga', 300, 'intermediate', 'The novelization of Rogue One.', TRUE),

-- Star Trek Universe (10 books)
('Star Trek: The Original Series', 'Gene Roddenberry', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of the original Star Trek episodes.', TRUE),
('Star Trek: The Next Generation', 'Gene Roddenberry', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of The Next Generation episodes.', TRUE),
('Star Trek: Deep Space Nine', 'Rick Berman', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of Deep Space Nine episodes.', TRUE),
('Star Trek: Voyager', 'Rick Berman', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of Voyager episodes.', TRUE),
('Star Trek: Enterprise', 'Rick Berman', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of Enterprise episodes.', TRUE),
('Star Trek: Discovery', 'Bryan Fuller', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of Discovery episodes.', TRUE),
('Star Trek: Picard', 'Alex Kurtzman', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of Picard episodes.', TRUE),
('Star Trek: Lower Decks', 'Mike McMahan', 'Star Trek Universe', 300, 'intermediate', 'Novelizations of Lower Decks episodes.', TRUE),
('Star Trek: Strange New Worlds', 'Akiva Goldsman', 'Star Trek Universe', 400, 'intermediate', 'Novelizations of Strange New Worlds episodes.', TRUE),
('Star Trek: Prodigy', 'Kevin Hageman', 'Star Trek Universe', 300, 'beginner', 'Novelizations of Prodigy episodes.', TRUE),

-- Movie Books (15 books)
('The Godfather', 'Mario Puzo', 'Movie Books', 600, 'intermediate', 'The novel that inspired the classic film trilogy.', TRUE),
('Jaws', 'Peter Benchley', 'Movie Books', 300, 'intermediate', 'The novel that inspired the blockbuster film.', TRUE),
('Jurassic Park', 'Michael Crichton', 'Movie Books', 400, 'intermediate', 'The novel that inspired the film franchise.', TRUE),
('The Shining', 'Stephen King', 'Movie Books', 600, 'intermediate', 'The horror novel that inspired the classic film.', TRUE),
('Carrie', 'Stephen King', 'Movie Books', 300, 'intermediate', 'The novel that inspired the horror film.', TRUE),
('Misery', 'Stephen King', 'Movie Books', 400, 'intermediate', 'The novel that inspired the psychological thriller film.', TRUE),
('The Green Mile', 'Stephen King', 'Movie Books', 600, 'intermediate', 'The novel that inspired the film adaptation.', TRUE),
('The Shawshank Redemption', 'Stephen King', 'Movie Books', 300, 'intermediate', 'The novella that inspired the acclaimed film.', TRUE),
('Forrest Gump', 'Winston Groom', 'Movie Books', 400, 'intermediate', 'The novel that inspired the Academy Award-winning film.', TRUE),
('The Princess Bride', 'William Goldman', 'Movie Books', 300, 'intermediate', 'The novel that inspired the beloved film.', TRUE),
('The Silence of the Lambs', 'Thomas Harris', 'Movie Books', 400, 'intermediate', 'The novel that inspired the Academy Award-winning film.', TRUE),
('The Exorcist', 'William Peter Blatty', 'Movie Books', 400, 'intermediate', 'The novel that inspired the horror film classic.', TRUE),
('One Flew Over the Cuckoo''s Nest', 'Ken Kesey', 'Movie Books', 400, 'intermediate', 'The novel that inspired the Academy Award-winning film.', TRUE),
('The Color Purple', 'Alice Walker', 'Movie Books', 400, 'intermediate', 'The novel that inspired the Academy Award-nominated film.', TRUE),
('The Help', 'Kathryn Stockett', 'Movie Books', 500, 'intermediate', 'The novel that inspired the Academy Award-nominated film.', TRUE),

-- Cook Books (10 books)
('The Joy of Cooking', 'Irma S. Rombauer', 'Cook Books', 1200, 'intermediate', 'The classic American cookbook with over 4,000 recipes.', TRUE),
('Mastering the Art of French Cooking', 'Julia Child', 'Cook Books', 800, 'advanced', 'The definitive guide to French cuisine.', TRUE),
('The Silver Spoon', 'Phaidon Press', 'Cook Books', 1000, 'advanced', 'The most comprehensive Italian cookbook.', TRUE),
('Salt, Fat, Acid, Heat', 'Samin Nosrat', 'Cook Books', 400, 'intermediate', 'A guide to the four fundamental elements of good cooking.', TRUE),
('The Food Lab', 'J. Kenji López-Alt', 'Cook Books', 800, 'advanced', 'A scientific approach to home cooking.', TRUE),
('On Food and Cooking', 'Harold McGee', 'Cook Books', 600, 'advanced', 'The science and lore of the kitchen.', TRUE),
('The Flavor Bible', 'Karen Page', 'Cook Books', 500, 'intermediate', 'A guide to creative flavor combinations.', TRUE),
('The Art of Simple Food', 'Alice Waters', 'Cook Books', 400, 'intermediate', 'A guide to seasonal cooking and sustainable eating.', TRUE),
('How to Cook Everything', 'Mark Bittman', 'Cook Books', 1000, 'intermediate', 'A comprehensive guide to home cooking.', TRUE),
('The Professional Chef', 'The Culinary Institute of America', 'Cook Books', 1200, 'advanced', 'The definitive guide to professional cooking techniques.', TRUE),

-- Maritime Books (10 books)
('Moby Dick', 'Herman Melville', 'Maritime Books', 900, 'advanced', 'The epic tale of Captain Ahab''s obsessive quest for the white whale.', TRUE),
('The Old Man and the Sea', 'Ernest Hemingway', 'Maritime Books', 120, 'intermediate', 'A story about an old fisherman''s struggle with a giant marlin.', TRUE),
('Twenty Thousand Leagues Under the Sea', 'Jules Verne', 'Maritime Books', 480, 'intermediate', 'An underwater adventure with Captain Nemo.', TRUE),
('The Sea-Wolf', 'Jack London', 'Maritime Books', 360, 'intermediate', 'A psychological adventure novel about survival at sea.', TRUE),
('The Perfect Storm', 'Sebastian Junger', 'Maritime Books', 300, 'intermediate', 'A true story about a fishing boat caught in a massive storm.', TRUE),
('In the Heart of the Sea', 'Nathaniel Philbrick', 'Maritime Books', 400, 'intermediate', 'The true story that inspired Moby Dick.', TRUE),
('The Wreck of the Hesperus', 'Henry Wadsworth Longfellow', 'Maritime Books', 30, 'beginner', 'A classic maritime poem about a shipwreck.', TRUE),
('The Rime of the Ancient Mariner', 'Samuel Taylor Coleridge', 'Maritime Books', 60, 'intermediate', 'A classic maritime poem about a sailor''s curse.', TRUE),
('The Sea Around Us', 'Rachel Carson', 'Maritime Books', 400, 'intermediate', 'A scientific exploration of the world''s oceans.', TRUE),
('The Log from the Sea of Cortez', 'John Steinbeck', 'Maritime Books', 300, 'intermediate', 'A travelogue about a marine biology expedition.', TRUE),

-- Medieval Books (10 books)
('The Canterbury Tales', 'Geoffrey Chaucer', 'Medieval Books', 600, 'advanced', 'A collection of stories told by pilgrims on their way to Canterbury.', TRUE),
('Beowulf', 'Anonymous', 'Medieval Books', 200, 'intermediate', 'An epic poem about a hero who battles monsters.', TRUE),
('Sir Gawain and the Green Knight', 'Anonymous', 'Medieval Books', 150, 'intermediate', 'A medieval romance about a knight''s quest.', TRUE),
('The Song of Roland', 'Anonymous', 'Medieval Books', 200, 'intermediate', 'An epic poem about Charlemagne''s paladin Roland.', TRUE),
('The Divine Comedy', 'Dante Alighieri', 'Medieval Books', 900, 'advanced', 'An epic poem about a journey through Hell, Purgatory, and Heaven.', TRUE),
('The Decameron', 'Giovanni Boccaccio', 'Medieval Books', 800, 'advanced', 'A collection of 100 stories told during the Black Death.', TRUE),
('The Romance of the Rose', 'Guillaume de Lorris', 'Medieval Books', 400, 'advanced', 'A medieval allegorical poem about courtly love.', TRUE),
('The Book of the City of Ladies', 'Christine de Pizan', 'Medieval Books', 300, 'intermediate', 'A medieval feminist work about women''s achievements.', TRUE),
('The Travels of Marco Polo', 'Marco Polo', 'Medieval Books', 400, 'intermediate', 'A travelogue about Marco Polo''s journey to Asia.', TRUE),
('The Art of War', 'Sun Tzu', 'Medieval Books', 200, 'intermediate', 'An ancient Chinese military treatise.', TRUE),

-- Fiction (15 books)
('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 180, 'intermediate', 'A story of the fabulously wealthy Jay Gatsby.', TRUE),
('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 360, 'intermediate', 'A novel about racial injustice and childhood innocence.', TRUE),
('1984', 'George Orwell', 'Fiction', 300, 'intermediate', 'A dystopian social science fiction novel about totalitarian control.', TRUE),
('Animal Farm', 'George Orwell', 'Fiction', 120, 'intermediate', 'An allegorical novella about the Russian Revolution.', TRUE),
('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 300, 'intermediate', 'A coming-of-age story about teenage rebellion.', TRUE),
('The Grapes of Wrath', 'John Steinbeck', 'Fiction', 600, 'intermediate', 'A novel about the Great Depression and the Dust Bowl.', TRUE),
('Of Mice and Men', 'John Steinbeck', 'Fiction', 120, 'intermediate', 'A novella about friendship and dreams during the Great Depression.', TRUE),
('East of Eden', 'John Steinbeck', 'Fiction', 800, 'advanced', 'A novel about good and evil in California''s Salinas Valley.', TRUE),
('The Sun Also Rises', 'Ernest Hemingway', 'Fiction', 300, 'intermediate', 'A novel about the Lost Generation in post-World War I Europe.', TRUE),
('For Whom the Bell Tolls', 'Ernest Hemingway', 'Fiction', 500, 'intermediate', 'A novel about the Spanish Civil War.', TRUE),
('A Farewell to Arms', 'Ernest Hemingway', 'Fiction', 400, 'intermediate', 'A novel about love and war during World War I.', TRUE),
('The Sound and the Fury', 'William Faulkner', 'Fiction', 400, 'advanced', 'A complex novel about the decline of a Southern family.', TRUE),
('As I Lay Dying', 'William Faulkner', 'Fiction', 300, 'advanced', 'A novel about a family''s journey to bury their mother.', TRUE),
('Light in August', 'William Faulkner', 'Fiction', 500, 'advanced', 'A novel about race and identity in the American South.', TRUE),
('The Color Purple', 'Alice Walker', 'Fiction', 400, 'intermediate', 'A novel about the lives of African American women in the South.', TRUE),

-- Non-Fiction (15 books)
('Sapiens', 'Yuval Noah Harari', 'Non-Fiction', 600, 'intermediate', 'A brief history of humankind from the Stone Age to the present.', TRUE),
('Homo Deus', 'Yuval Noah Harari', 'Non-Fiction', 600, 'intermediate', 'A look at the future of humanity and artificial intelligence.', TRUE),
('21 Lessons for the 21st Century', 'Yuval Noah Harari', 'Non-Fiction', 400, 'intermediate', 'A guide to understanding the challenges of the modern world.', TRUE),
('The Selfish Gene', 'Richard Dawkins', 'Non-Fiction', 500, 'advanced', 'A groundbreaking work on evolutionary biology.', TRUE),
('The Blind Watchmaker', 'Richard Dawkins', 'Non-Fiction', 400, 'advanced', 'An argument for evolution and against intelligent design.', TRUE),
('The God Delusion', 'Richard Dawkins', 'Non-Fiction', 500, 'intermediate', 'A critique of religion and belief in God.', TRUE),
('A Brief History of Time', 'Stephen Hawking', 'Non-Fiction', 300, 'advanced', 'A popular science book about cosmology and physics.', TRUE),
('The Universe in a Nutshell', 'Stephen Hawking', 'Non-Fiction', 300, 'advanced', 'A follow-up to A Brief History of Time.', TRUE),
('Guns, Germs, and Steel', 'Jared Diamond', 'Non-Fiction', 600, 'intermediate', 'A study of how geography and environment shaped human history.', TRUE),
('Collapse', 'Jared Diamond', 'Non-Fiction', 600, 'intermediate', 'A study of how societies choose to fail or succeed.', TRUE),
('The Sixth Extinction', 'Elizabeth Kolbert', 'Non-Fiction', 400, 'intermediate', 'An investigation into the current mass extinction event.', TRUE),
('The Immortal Life of Henrietta Lacks', 'Rebecca Skloot', 'Non-Fiction', 400, 'intermediate', 'The story of the woman whose cells changed medicine.', TRUE),
('The Emperor of All Maladies', 'Siddhartha Mukherjee', 'Non-Fiction', 600, 'advanced', 'A biography of cancer and the fight to conquer it.', TRUE),
('The Gene', 'Siddhartha Mukherjee', 'Non-Fiction', 600, 'advanced', 'An intimate history of the gene and its impact on humanity.', TRUE),
('Thinking, Fast and Slow', 'Daniel Kahneman', 'Non-Fiction', 500, 'intermediate', 'A study of the two systems that drive human thought.', TRUE),

-- Horror (10 books)
('Dracula', 'Bram Stoker', 'Horror', 480, 'intermediate', 'The original vampire novel that defined the genre.', TRUE),
('Frankenstein', 'Mary Shelley', 'Horror', 360, 'intermediate', 'A gothic tale of scientific ambition and its consequences.', TRUE),
('The Strange Case of Dr. Jekyll and Mr. Hyde', 'Robert Louis Stevenson', 'Horror', 120, 'intermediate', 'A psychological thriller about dual personalities.', TRUE),
('The Turn of the Screw', 'Henry James', 'Horror', 120, 'intermediate', 'A gothic ghost story with psychological complexity.', TRUE),
('The Shining', 'Stephen King', 'Horror', 600, 'intermediate', 'The horror novel that inspired the classic film.', TRUE),
('Carrie', 'Stephen King', 'Horror', 300, 'intermediate', 'The novel that inspired the horror film.', TRUE),
('Misery', 'Stephen King', 'Horror', 400, 'intermediate', 'The novel that inspired the psychological thriller film.', TRUE),
('The Exorcist', 'William Peter Blatty', 'Horror', 400, 'intermediate', 'The novel that inspired the horror film classic.', TRUE),
('The Haunting of Hill House', 'Shirley Jackson', 'Horror', 200, 'intermediate', 'A gothic horror novel about a haunted house.', TRUE),
('We Have Always Lived in the Castle', 'Shirley Jackson', 'Horror', 200, 'intermediate', 'A psychological horror novel about isolation and family secrets.', TRUE),

-- Comedy (10 books)
('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'Comedy', 300, 'intermediate', 'A comedic science fiction series about the end of the world.', TRUE),
('The Restaurant at the End of the Universe', 'Douglas Adams', 'Comedy', 300, 'intermediate', 'The second book in the Hitchhiker''s Guide series.', TRUE),
('Life, the Universe and Everything', 'Douglas Adams', 'Comedy', 300, 'intermediate', 'The third book in the Hitchhiker''s Guide series.', TRUE),
('So Long, and Thanks for All the Fish', 'Douglas Adams', 'Comedy', 300, 'intermediate', 'The fourth book in the Hitchhiker''s Guide series.', TRUE),
('Mostly Harmless', 'Douglas Adams', 'Comedy', 300, 'intermediate', 'The fifth book in the Hitchhiker''s Guide series.', TRUE),
('Catch-22', 'Joseph Heller', 'Comedy', 600, 'advanced', 'A satirical novel about the absurdity of war.', TRUE),
('The Importance of Being Earnest', 'Oscar Wilde', 'Comedy', 120, 'intermediate', 'A comedic play about mistaken identity and social conventions.', TRUE),
('Three Men in a Boat', 'Jerome K. Jerome', 'Comedy', 200, 'intermediate', 'A humorous account of a boating holiday on the Thames.', TRUE),
('A Confederacy of Dunces', 'John Kennedy Toole', 'Comedy', 400, 'intermediate', 'A comedic novel about an eccentric man in New Orleans.', TRUE),
('The Princess Bride', 'William Goldman', 'Comedy', 300, 'intermediate', 'The novel that inspired the beloved film.', TRUE);

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
