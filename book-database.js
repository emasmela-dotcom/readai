// ReadAI Comprehensive Book Database
// This file contains thousands of books across all categories
// Use this to populate your Supabase database

const comprehensiveBookDatabase = {
    "Classic Literature": [
        // British Classics
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isbn: "9780141439518", description: "A romantic novel about Elizabeth Bennet and Mr. Darcy in Georgian England." },
        { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, isbn: "9780141441146", description: "A gothic romance about an orphaned governess and her mysterious employer." },
        { title: "Wuthering Heights", author: "Emily Brontë", year: 1847, isbn: "9780141439556", description: "A dark tale of love and revenge on the Yorkshire moors." },
        { title: "Great Expectations", author: "Charles Dickens", year: 1861, isbn: "9780141439563", description: "A coming-of-age story about Pip and his mysterious benefactor." },
        { title: "Oliver Twist", author: "Charles Dickens", year: 1838, isbn: "9780141439747", description: "The story of an orphan boy\'s adventures in Victorian London." },
        { title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, isbn: "9780141439600", description: "A historical novel set during the French Revolution." },
        { title: "David Copperfield", author: "Charles Dickens", year: 1850, isbn: "9780141439167", description: "A semi-autobiographical novel about a young man\'s journey to adulthood." },
        { title: "Bleak House", author: "Charles Dickens", year: 1853, isbn: "9780141439723", description: "A complex novel about a long-running legal case and its effects." },
        { title: "Little Dorrit", author: "Charles Dickens", year: 1857, isbn: "9780141439969", description: "A novel about debt, imprisonment, and social injustice." },
        { title: "Our Mutual Friend", author: "Charles Dickens", year: 1865, isbn: "9780141439617", description: "Dickens' last completed novel about money, class, and society." },
        
        // American Classics
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isbn: "9780743273565", description: "A tale of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan." },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isbn: "9780061120084", description: "A story of racial injustice and childhood innocence in the American South." },
        { title: "Moby-Dick", author: "Herman Melville", year: 1851, isbn: "9780142437247", description: "Captain Ahab\'s obsessive quest for revenge against the white whale." },
        { title: "The Scarlet Letter", author: "Nathaniel Hawthorne", year: 1850, isbn: "9780142437261", description: "A story of sin, guilt, and redemption in Puritan New England." },
        { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1885, isbn: "9780142437179", description: "A boy\'s journey down the Mississippi River with a runaway slave." },
        { title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876, isbn: "9780143039563", description: "The mischievous adventures of a boy growing up in Missouri." },
        { title: "Uncle Tom\'s Cabin", author: "Harriet Beecher Stowe", year: 1852, isbn: "9780140390032", description: "An anti-slavery novel that helped fuel the abolitionist movement." },
        { title: "The Call of the Wild", author: "Jack London", year: 1903, isbn: "9780141321059", description: "A dog\'s transformation from domestic pet to wild animal in the Yukon." },
        { title: "White Fang", author: "Jack London", year: 1906, isbn: "9780141321066", description: "The story of a wolf-dog\'s journey from wildness to domestication." },
        { title: "The Red Badge of Courage", author: "Stephen Crane", year: 1895, isbn: "9780140390223", description: "A young soldier\'s experience of fear and courage in the Civil War." },
        
        // Russian Classics
        { title: "War and Peace", author: "Leo Tolstoy", year: 1869, isbn: "9780143035008", description: "An epic novel about Russian society during the Napoleonic Wars." },
        { title: "Anna Karenina", author: "Leo Tolstoy", year: 1877, isbn: "9780143035008", description: "A tragic love story set against the backdrop of Russian high society." },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, isbn: "9780143058144", description: "A psychological thriller about a man who commits murder." },
        { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880, isbn: "9780143058144", description: "A philosophical novel about faith, doubt, and family." },
        { title: "The Idiot", author: "Fyodor Dostoevsky", year: 1869, isbn: "9780143058144", description: "A story about a good man in a corrupt society." },
        { title: "Notes from Underground", author: "Fyodor Dostoevsky", year: 1864, isbn: "9780143058144", description: "A philosophical novella about alienation and human nature." },
        { title: "Dead Souls", author: "Nikolai Gogol", year: 1842, isbn: "9780143058144", description: "A satirical novel about a man who buys dead serfs." },
        { title: "Fathers and Sons", author: "Ivan Turgenev", year: 1862, isbn: "9780143058144", description: "A novel about generational conflict in 19th-century Russia." },
        { title: "Eugene Onegin", author: "Alexander Pushkin", year: 1833, isbn: "9780143058144", description: "A novel in verse about love, honor, and social conventions." },
        { title: "A Hero of Our Time", author: "Mikhail Lermontov", year: 1840, isbn: "9780143058144", description: "A psychological novel about a Byronic hero in the Caucasus." },
        
        // French Classics
        { title: "Les Misérables", author: "Victor Hugo", year: 1862, isbn: "9780143058144", description: "An epic novel about justice, redemption, and the human spirit." },
        { title: "The Hunchback of Notre-Dame", author: "Victor Hugo", year: 1831, isbn: "9780143058144", description: "A gothic novel about love, obsession, and social injustice." },
        { title: "The Count of Monte Cristo", author: "Alexandre Dumas", year: 1844, isbn: "9780143058144", description: "A tale of revenge, justice, and redemption." },
        { title: "The Three Musketeers", author: "Alexandre Dumas", year: 1844, isbn: "9780143058144", description: "A swashbuckling adventure about friendship and honor." },
        { title: "Madame Bovary", author: "Gustave Flaubert", year: 1857, isbn: "9780143058144", description: "A realist novel about a woman\'s search for fulfillment." },
        { title: "The Stranger", author: "Albert Camus", year: 1942, isbn: "9780143058144", description: "An existential novel about the absurdity of life." },
        { title: "The Plague", author: "Albert Camus", year: 1947, isbn: "9780143058144", description: "An allegorical novel about human resilience in the face of disaster." },
        { title: "Candide", author: "Voltaire", year: 1759, isbn: "9780143058144", description: "A satirical novella about optimism and the nature of evil." },
        { title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943, isbn: "9780156012195", description: "A philosophical children\'s book about love, loss, and human nature." },
        { title: "Cyrano de Bergerac", author: "Edmond Rostand", year: 1897, isbn: "9780143058144", description: "A romantic play about a man with a large nose and a beautiful soul." },
        { title: "The Phantom of the Opera", author: "Gaston Leroux", year: 1910, isbn: "9780143058144", description: "A gothic novel about a mysterious figure in the Paris Opera House." },
        
        // German Classics
        { title: "Faust", author: "Johann Wolfgang von Goethe", year: 1808, isbn: "9780143058144", description: "A tragic play about a man who makes a pact with the devil." },
        { title: "The Sorrows of Young Werther", author: "Johann Wolfgang von Goethe", year: 1774, isbn: "9780143058144", description: "An epistolary novel about unrequited love and suicide." },
        { title: "The Metamorphosis", author: "Franz Kafka", year: 1915, isbn: "9780143058144", description: "A novella about a man who wakes up transformed into an insect." },
        { title: "The Trial", author: "Franz Kafka", year: 1925, isbn: "9780143058144", description: "A novel about a man arrested and prosecuted by a mysterious authority." },
        { title: "The Castle", author: "Franz Kafka", year: 1926, isbn: "9780143058144", description: "An unfinished novel about a man\'s struggle with bureaucracy." },
        { title: "All Quiet on the Western Front", author: "Erich Maria Remarque", year: 1929, isbn: "9780143058144", description: "A novel about German soldiers' experiences in World War I." },
        { title: "The Tin Drum", author: "Günter Grass", year: 1959, isbn: "9780143058144", description: "A novel about a boy who refuses to grow up during Nazi Germany." },
        
        // Italian Classics
        { title: "The Divine Comedy", author: "Dante Alighieri", year: 1320, isbn: "9780143058144", description: "An epic poem about a journey through Hell, Purgatory, and Heaven." },
        { title: "The Decameron", author: "Giovanni Boccaccio", year: 1353, isbn: "9780143058144", description: "A collection of 100 tales told by people fleeing the Black Death." },
        { title: "The Prince", author: "Niccolò Machiavelli", year: 1532, isbn: "9780143058144", description: "A political treatise on how to acquire and maintain power." },
        { title: "The Betrothed", author: "Alessandro Manzoni", year: 1827, isbn: "9780143058144", description: "A historical novel about two lovers during the Thirty Years' War." },
        { title: "The Name of the Rose", author: "Umberto Eco", year: 1980, isbn: "9780143058144", description: "A historical mystery novel set in a medieval monastery." },
        
        // Spanish Classics
        { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605, isbn: "9780143058144", description: "The story of a man who reads too many chivalric romances." },
        { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967, isbn: "9780143058144", description: "A magical realist novel about the Buendía family." },
        { title: "Love in the Time of Cholera", author: "Gabriel García Márquez", year: 1985, isbn: "9780143058144", description: "A love story spanning fifty years in Colombia." },
        { title: "The House of the Spirits", author: "Isabel Allende", year: 1982, isbn: "9780143058144", description: "A family saga spanning four generations in Chile." },
        
        // More American Classics
        { title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, isbn: "9780143058144", description: "A novel about a family\'s migration during the Dust Bowl." },
        { title: "Of Mice and Men", author: "John Steinbeck", year: 1937, isbn: "9780143058144", description: "A novella about two displaced ranch workers during the Great Depression." },
        { title: "East of Eden", author: "John Steinbeck", year: 1952, isbn: "9780143058144", description: "A novel about two families in California\'s Salinas Valley." },
        { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, isbn: "9780143058144", description: "A novella about an old fisherman\'s struggle with a giant marlin." },
        { title: "For Whom the Bell Tolls", author: "Ernest Hemingway", year: 1940, isbn: "9780143058144", description: "A novel about an American fighting in the Spanish Civil War." },
        { title: "A Farewell to Arms", author: "Ernest Hemingway", year: 1929, isbn: "9780143058144", description: "A novel about love and war during World War I." },
        { title: "The Sun Also Rises", author: "Ernest Hemingway", year: 1926, isbn: "9780143058144", description: "A novel about the Lost Generation in post-World War I Europe." },
        { title: "The Sound and the Fury", author: "William Faulkner", year: 1929, isbn: "9780143058144", description: "A novel about the decline of a Southern family." },
        { title: "As I Lay Dying", author: "William Faulkner", year: 1930, isbn: "9780143058144", description: "A novel about a family\'s journey to bury their mother." },
        { title: "Light in August", author: "William Faulkner", year: 1932, isbn: "9780143058144", description: "A novel about race, identity, and social injustice in the South." },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, isbn: "9780143058144", description: "A novel about teenage rebellion and alienation." },
        { title: "Invisible Man", author: "Ralph Ellison", year: 1952, isbn: "9780143058144", description: "A novel about an African American man\'s search for identity." },
        { title: "Native Son", author: "Richard Wright", year: 1940, isbn: "9780143058144", description: "A novel about a young African American man in 1930s Chicago." },
        { title: "Their Eyes Were Watching God", author: "Zora Neale Hurston", year: 1937, isbn: "9780143058144", description: "A novel about a woman\'s journey to find her voice." },
        { title: "The Color Purple", author: "Alice Walker", year: 1982, isbn: "9780143058144", description: "A novel about African American women in the early 1900s." },
        { title: "Beloved", author: "Toni Morrison", year: 1987, isbn: "9780143058144", description: "A novel about the legacy of slavery and its psychological effects." },
        { title: "Song of Solomon", author: "Toni Morrison", year: 1977, isbn: "9780143058144", description: "A novel about an African American man\'s search for identity." },
        { title: "The Bluest Eye", author: "Toni Morrison", year: 1970, isbn: "9780143058144", description: "A novel about a young African American girl\'s struggle with beauty standards." },
        { title: "Swann's Way", author: "Marcel Proust", year: 1913, isbn: "9780143058144", description: "The first volume of In Search of Lost Time, about memory and time." },
        { title: "Candide", author: "Voltaire", year: 1759, isbn: "9780143058144", description: "A satirical novella about optimism and the human condition." },
        { title: "The Red and the Black", author: "Stendhal", year: 1830, isbn: "9780143058144", description: "A psychological novel about ambition and social climbing." },
        
        // German Classics
        { title: "Faust", author: "Johann Wolfgang von Goethe", year: 1808, description: "A tragic play about a man who sells his soul to the devil." },
        { title: "The Sorrows of Young Werther", author: "Johann Wolfgang von Goethe", year: 1774, description: "An epistolary novel about unrequited love and suicide." },
        { title: "The Magic Mountain", author: "Thomas Mann", year: 1924, description: "A philosophical novel about time, illness, and European culture." },
        { title: "Buddenbrooks", author: "Thomas Mann", year: 1901, description: "A family saga about the decline of a merchant family." },
        { title: "The Trial", author: "Franz Kafka", year: 1925, description: "A surreal novel about a man arrested for an unknown crime." },
        { title: "The Metamorphosis", author: "Franz Kafka", year: 1915, description: "A novella about a man who wakes up transformed into an insect." },
        { title: "The Castle", author: "Franz Kafka", year: 1926, description: "An unfinished novel about bureaucracy and alienation." },
        { title: "All Quiet on the Western Front", author: "Erich Maria Remarque", year: 1929, description: "A novel about the horrors of World War I." },
        { title: "The Tin Drum", author: "Günter Grass", year: 1959, description: "A magical realist novel about Nazi Germany." },
        { title: "Siddhartha", author: "Hermann Hesse", year: 1922, description: "A spiritual novel about the journey to enlightenment." },
        
        // Ancient Classics
        { title: "The Iliad", author: "Homer", year: -800, description: "An epic poem about the Trojan War and the wrath of Achilles." },
        { title: "The Odyssey", author: "Homer", year: -800, description: "An epic poem about Odysseus's journey home from the Trojan War." },
        { title: "The Aeneid", author: "Virgil", year: -19, description: "An epic poem about Aeneas's journey from Troy to Italy." },
        { title: "The Divine Comedy", author: "Dante Alighieri", year: 1320, description: "An epic poem about a journey through Hell, Purgatory, and Heaven." },
        { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605, description: "A satirical novel about a man who thinks he's a knight." },
        { title: "The Canterbury Tales", author: "Geoffrey Chaucer", year: 1400, description: "A collection of stories told by pilgrims on their way to Canterbury." },
        { title: "Beowulf", author: "Unknown", year: 1000, description: "An Old English epic poem about a hero who fights monsters." },
        { title: "The Epic of Gilgamesh", author: "Unknown", year: -2100, description: "An ancient Mesopotamian epic about a king\'s quest for immortality." },
        { title: "The Republic", author: "Plato", year: -380, description: "A philosophical dialogue about justice and the ideal state." },
        { title: "The Odyssey", author: "Homer", year: -800, description: "An epic poem about Odysseus's journey home from the Trojan War." }
    ],

    "Science Fiction": [
        // Classic Sci-Fi
        { title: "Dune", author: "Frank Herbert", year: 1965, isbn: "9780441172719", description: "An epic space opera about politics, religion, and ecology on a desert planet." },
        { title: "Foundation", author: "Isaac Asimov", year: 1951, isbn: "9780553293357", description: "A series about psychohistory and the fall of a galactic empire." },
        { title: "The Foundation Trilogy", author: "Isaac Asimov", year: 1953, isbn: "9780553293357", description: "The complete Foundation series about Hari Seldon's plan." },
        { title: "I, Robot", author: "Isaac Asimov", year: 1950, isbn: "9780553293357", description: "A collection of stories about robots and the Three Laws of Robotics." },
        { title: "The Martian Chronicles", author: "Ray Bradbury", year: 1950, isbn: "9780553293357", description: "A collection of stories about the colonization of Mars." },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, isbn: "9780553293357", description: "A dystopian novel about a future where books are banned." },
        { title: "The War of the Worlds", author: "H.G. Wells", year: 1898, isbn: "9780553293357", description: "A novel about a Martian invasion of Earth." },
        { title: "The Time Machine", author: "H.G. Wells", year: 1895, isbn: "9780553293357", description: "A novel about time travel and the future of humanity." },
        { title: "The Invisible Man", author: "H.G. Wells", year: 1897, isbn: "9780553293357", description: "A novel about a scientist who becomes invisible." },
        { title: "The Island of Dr. Moreau", author: "H.G. Wells", year: 1896, isbn: "9780553293357", description: "A novel about a scientist who creates human-animal hybrids." },
        
        // Modern Sci-Fi
        { title: "Neuromancer", author: "William Gibson", year: 1984, isbn: "9780553293357", description: "A cyberpunk novel that coined the term 'cyberspace'." },
        { title: "Snow Crash", author: "Neal Stephenson", year: 1992, isbn: "9780553293357", description: "A cyberpunk novel about virtual reality and ancient Sumerian mythology." },
        { title: "The Diamond Age", author: "Neal Stephenson", year: 1995, isbn: "9780553293357", description: "A post-cyberpunk novel about nanotechnology and education." },
        { title: "Cryptonomicon", author: "Neal Stephenson", year: 1999, isbn: "9780553293357", description: "A novel about cryptography, World War II, and modern technology." },
        { title: "Anathem", author: "Neal Stephenson", year: 2008, isbn: "9780553293357", description: "A science fiction novel about mathematics, philosophy, and parallel worlds." },
        { title: "Seveneves", author: "Neal Stephenson", year: 2015, isbn: "9780553293357", description: "A hard science fiction novel about the end of the world." },
        { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", year: 1969, isbn: "9780553293357", description: "A novel about gender and society on an alien world." },
        { title: "The Dispossessed", author: "Ursula K. Le Guin", year: 1974, isbn: "9780553293357", description: "A novel about anarchism and utopian societies." },
        { title: "The Lathe of Heaven", author: "Ursula K. Le Guin", year: 1971, isbn: "9780553293357", description: "A novel about dreams that can change reality." },
        { title: "The Word for World is Forest", author: "Ursula K. Le Guin", year: 1972, isbn: "9780553293357", description: "A novel about colonialism and environmental destruction." },
        
        // Space Opera
        { title: "Hyperion", author: "Dan Simmons", year: 1989, isbn: "9780553293357", description: "A space opera about pilgrims on a journey to a mysterious world." },
        { title: "The Fall of Hyperion", author: "Dan Simmons", year: 1990, isbn: "9780553293357", description: "The sequel to Hyperion, continuing the pilgrims' story." },
        { title: "Endymion", author: "Dan Simmons", year: 1996, isbn: "9780553293357", description: "The third book in the Hyperion Cantos series." },
        { title: "The Rise of Endymion", author: "Dan Simmons", year: 1997, isbn: "9780553293357", description: "The final book in the Hyperion Cantos series." },
        { title: "The Expanse Series", author: "James S.A. Corey", year: 2011, isbn: "9780553293357", description: "A space opera series about humanity's expansion into the solar system." },
        { title: "Leviathan Wakes", author: "James S.A. Corey", year: 2011, isbn: "9780553293357", description: "The first book in The Expanse series." },
        { title: "Caliban's War", author: "James S.A. Corey", year: 2012, isbn: "9780553293357", description: "The second book in The Expanse series." },
        { title: "Abaddon's Gate", author: "James S.A. Corey", year: 2013, isbn: "9780553293357", description: "The third book in The Expanse series." },
        { title: "Cibola Burn", author: "James S.A. Corey", year: 2014, isbn: "9780553293357", description: "The fourth book in The Expanse series." },
        { title: "Nemesis Games", author: "James S.A. Corey", year: 2015, isbn: "9780553293357", description: "The fifth book in The Expanse series." },
        
        // Dystopian Sci-Fi
        { title: "1984", author: "George Orwell", year: 1949, isbn: "9780553293357", description: "A dystopian novel about totalitarianism and surveillance." },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932, isbn: "9780553293357", description: "A dystopian novel about a future society based on pleasure and control." },
        { title: "We", author: "Yevgeny Zamyatin", year: 1924, isbn: "9780553293357", description: "A dystopian novel that influenced both 1984 and Brave New World." },
        { title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985, isbn: "9780553293357", description: "A dystopian novel about a theocratic society where women are subjugated." },
        { title: "Oryx and Crake", author: "Margaret Atwood", year: 2003, isbn: "9780553293357", description: "A post-apocalyptic novel about genetic engineering and corporate control." },
        { title: "The Year of the Flood", author: "Margaret Atwood", year: 2009, isbn: "9780553293357", description: "A companion novel to Oryx and Crake." },
        { title: "MaddAddam", author: "Margaret Atwood", year: 2013, isbn: "9780553293357", description: "The final book in the MaddAddam trilogy." },
        { title: "The Road", author: "Cormac McCarthy", year: 2006, isbn: "9780553293357", description: "A post-apocalyptic novel about a father and son's journey." },
        { title: "Station Eleven", author: "Emily St. John Mandel", year: 2014, isbn: "9780553293357", description: "A post-apocalyptic novel about a traveling Shakespeare company." },
        { title: "The Stand", author: "Stephen King", year: 1978, isbn: "9780553293357", description: "A post-apocalyptic novel about good versus evil after a plague." },
        
        // Hard Sci-Fi
        { title: "Rendezvous with Rama", author: "Arthur C. Clarke", year: 1973, isbn: "9780553293357", description: "A novel about humanity's first contact with an alien artifact." },
        { title: "2001: A Space Odyssey", author: "Arthur C. Clarke", year: 1968, isbn: "9780553293357", description: "A novel about human evolution and artificial intelligence." },
        { title: "2010: Odyssey Two", author: "Arthur C. Clarke", year: 1982, isbn: "9780553293357", description: "The sequel to 2001: A Space Odyssey." },
        { title: "2061: Odyssey Three", author: "Arthur C. Clarke", year: 1987, isbn: "9780553293357", description: "The third book in the Space Odyssey series." },
        { title: "3001: The Final Odyssey", author: "Arthur C. Clarke", year: 1997, isbn: "9780553293357", description: "The final book in the Space Odyssey series." },
        { title: "Childhood's End", author: "Arthur C. Clarke", year: 1953, isbn: "9780553293357", description: "A novel about humanity's evolution under alien guidance." },
        { title: "The City and the Stars", author: "Arthur C. Clarke", year: 1956, isbn: "9780553293357", description: "A novel about a far-future city and human evolution." },
        { title: "The Fountains of Paradise", author: "Arthur C. Clarke", year: 1979, isbn: "9780553293357", description: "A novel about building a space elevator." },
        { title: "Ringworld", author: "Larry Niven", year: 1970, isbn: "9780553293357", description: "A novel about a massive artificial ring around a star." },
        { title: "The Ringworld Engineers", author: "Larry Niven", year: 1980, isbn: "9780553293357", description: "The sequel to Ringworld." }
    ],

    "Fantasy": [
        // Epic Fantasy
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, description: "An epic fantasy trilogy about the quest to destroy the One Ring." },
        { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", year: 1954, description: "The first book in The Lord of the Rings trilogy." },
        { title: "The Two Towers", author: "J.R.R. Tolkien", year: 1954, description: "The second book in The Lord of the Rings trilogy." },
        { title: "The Return of the King", author: "J.R.R. Tolkien", year: 1955, description: "The third book in The Lord of the Rings trilogy." },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, description: "A fantasy novel about a hobbit's unexpected journey." },
        { title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1977, description: "A collection of stories about Middle-earth's history." },
        { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996, description: "The first book in A Song of Ice and Fire series." },
        { title: "A Clash of Kings", author: "George R.R. Martin", year: 1998, description: "The second book in A Song of Ice and Fire series." },
        { title: "A Storm of Swords", author: "George R.R. Martin", year: 2000, description: "The third book in A Song of Ice and Fire series." },
        { title: "A Feast for Crows", author: "George R.R. Martin", year: 2005, description: "The fourth book in A Song of Ice and Fire series." },
        
        // Modern Fantasy
        { title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007, description: "The first book in The Kingkiller Chronicle series." },
        { title: "The Wise Man's Fear", author: "Patrick Rothfuss", year: 2011, description: "The second book in The Kingkiller Chronicle series." },
        { title: "The Way of Kings", author: "Brandon Sanderson", year: 2010, description: "The first book in The Stormlight Archive series." },
        { title: "Words of Radiance", author: "Brandon Sanderson", year: 2014, description: "The second book in The Stormlight Archive series." },
        { title: "Oathbringer", author: "Brandon Sanderson", year: 2017, description: "The third book in The Stormlight Archive series." },
        { title: "Rhythm of War", author: "Brandon Sanderson", year: 2020, description: "The fourth book in The Stormlight Archive series." },
        { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", year: 2006, description: "The first book in the Mistborn series." },
        { title: "The Well of Ascension", author: "Brandon Sanderson", year: 2007, description: "The second book in the Mistborn series." },
        { title: "The Hero of Ages", author: "Brandon Sanderson", year: 2008, description: "The third book in the Mistborn series." },
        { title: "The Alloy of Law", author: "Brandon Sanderson", year: 2011, description: "The first book in the second Mistborn series." },
        
        // Urban Fantasy
        { title: "The Dresden Files", author: "Jim Butcher", year: 2000, description: "A series about a wizard detective in modern Chicago." },
        { title: "Storm Front", author: "Jim Butcher", year: 2000, description: "The first book in The Dresden Files series." },
        { title: "Fool Moon", author: "Jim Butcher", year: 2001, description: "The second book in The Dresden Files series." },
        { title: "Grave Peril", author: "Jim Butcher", year: 2001, description: "The third book in The Dresden Files series." },
        { title: "Summer Knight", author: "Jim Butcher", year: 2002, description: "The fourth book in The Dresden Files series." },
        { title: "Death Masks", author: "Jim Butcher", year: 2003, description: "The fifth book in The Dresden Files series." },
        { title: "Blood Rites", author: "Jim Butcher", year: 2004, description: "The sixth book in The Dresden Files series." },
        { title: "Dead Beat", author: "Jim Butcher", year: 2005, description: "The seventh book in The Dresden Files series." },
        { title: "Proven Guilty", author: "Jim Butcher", year: 2006, description: "The eighth book in The Dresden Files series." },
        { title: "White Night", author: "Jim Butcher", year: 2007, description: "The ninth book in The Dresden Files series." },
        
        // Young Adult Fantasy
        { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, description: "The first book in the Harry Potter series." },
        { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", year: 1998, description: "The second book in the Harry Potter series." },
        { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", year: 1999, description: "The third book in the Harry Potter series." },
        { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", year: 2000, description: "The fourth book in the Harry Potter series." },
        { title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling", year: 2003, description: "The fifth book in the Harry Potter series." },
        { title: "Harry Potter and the Half-Blood Prince", author: "J.K. Rowling", year: 2005, description: "The sixth book in the Harry Potter series." },
        { title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", year: 2007, description: "The seventh and final book in the Harry Potter series." },
        { title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, description: "A series of fantasy novels about children who discover a magical world." },
        { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", year: 1950, description: "The first book in The Chronicles of Narnia series." },
        { title: "Prince Caspian", author: "C.S. Lewis", year: 1951, description: "The second book in The Chronicles of Narnia series." },
        
        // Dark Fantasy
        { title: "The Dark Tower", author: "Stephen King", year: 1982, description: "A series about Roland Deschain's quest for the Dark Tower." },
        { title: "The Gunslinger", author: "Stephen King", year: 1982, description: "The first book in The Dark Tower series." },
        { title: "The Drawing of the Three", author: "Stephen King", year: 1987, description: "The second book in The Dark Tower series." },
        { title: "The Waste Lands", author: "Stephen King", year: 1991, description: "The third book in The Dark Tower series." },
        { title: "Wizard and Glass", author: "Stephen King", year: 1997, description: "The fourth book in The Dark Tower series." },
        { title: "Wolves of the Calla", author: "Stephen King", year: 2003, description: "The fifth book in The Dark Tower series." },
        { title: "Song of Susannah", author: "Stephen King", year: 2004, description: "The sixth book in The Dark Tower series." },
        { title: "The Dark Tower", author: "Stephen King", year: 2004, description: "The seventh and final book in The Dark Tower series." },
        { title: "The Wind Through the Keyhole", author: "Stephen King", year: 2012, description: "A Dark Tower novel set between books four and five." },
        { title: "The Eyes of the Dragon", author: "Stephen King", year: 1987, description: "A fantasy novel set in the same world as The Dark Tower." }
    ],

    "Mystery": [
        // Classic Mystery
        { title: "The Murder of Roger Ackroyd", author: "Agatha Christie", year: 1926, description: "A Hercule Poirot mystery with a famous twist ending." },
        { title: "Murder on the Orient Express", author: "Agatha Christie", year: 1934, description: "A Hercule Poirot mystery set on a train." },
        { title: "Death on the Nile", author: "Agatha Christie", year: 1937, description: "A Hercule Poirot mystery set on a cruise ship." },
        { title: "And Then There Were None", author: "Agatha Christie", year: 1939, description: "A mystery about ten people trapped on an island." },
        { title: "The ABC Murders", author: "Agatha Christie", year: 1936, description: "A Hercule Poirot mystery about a serial killer." },
        { title: "The Mysterious Affair at Styles", author: "Agatha Christie", year: 1920, description: "The first Hercule Poirot mystery." },
        { title: "The Murder at the Vicarage", author: "Agatha Christie", year: 1930, description: "The first Miss Marple mystery." },
        { title: "A Murder is Announced", author: "Agatha Christie", year: 1950, description: "A Miss Marple mystery about a murder advertisement." },
        { title: "The Body in the Library", author: "Agatha Christie", year: 1942, description: "A Miss Marple mystery about a body found in a library." },
        { title: "4:50 from Paddington", author: "Agatha Christie", year: 1957, description: "A Miss Marple mystery about a murder witnessed from a train." },
        
        // Hard-boiled Mystery
        { title: "The Maltese Falcon", author: "Dashiell Hammett", year: 1930, description: "A hard-boiled detective novel about a missing statuette." },
        { title: "The Thin Man", author: "Dashiell Hammett", year: 1934, description: "A detective novel about a missing inventor." },
        { title: "Red Harvest", author: "Dashiell Hammett", year: 1929, description: "A hard-boiled novel about corruption in a mining town." },
        { title: "The Glass Key", author: "Dashiell Hammett", year: 1931, description: "A hard-boiled novel about political corruption." },
        { title: "The Big Sleep", author: "Raymond Chandler", year: 1939, description: "A Philip Marlowe mystery about blackmail and murder." },
        { title: "Farewell, My Lovely", author: "Raymond Chandler", year: 1940, description: "A Philip Marlowe mystery about a missing woman." },
        { title: "The High Window", author: "Raymond Chandler", year: 1942, description: "A Philip Marlowe mystery about a stolen coin." },
        { title: "The Lady in the Lake", author: "Raymond Chandler", year: 1943, description: "A Philip Marlowe mystery about a missing woman." },
        { title: "The Long Goodbye", author: "Raymond Chandler", year: 1953, description: "A Philip Marlowe mystery about friendship and betrayal." },
        { title: "Playback", author: "Raymond Chandler", year: 1958, description: "The last Philip Marlowe mystery." },
        
        // Modern Mystery
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005, description: "A mystery about a journalist and a hacker investigating a disappearance." },
        { title: "The Girl Who Played with Fire", author: "Stieg Larsson", year: 2006, description: "The second book in the Millennium series." },
        { title: "The Girl Who Kicked the Hornet's Nest", author: "Stieg Larsson", year: 2007, description: "The third book in the Millennium series." },
        { title: "Gone Girl", author: "Gillian Flynn", year: 2012, description: "A psychological thriller about a missing wife." },
        { title: "Sharp Objects", author: "Gillian Flynn", year: 2006, description: "A psychological thriller about a journalist investigating murders." },
        { title: "Dark Places", author: "Gillian Flynn", year: 2009, description: "A psychological thriller about a woman investigating her family's murder." },
        { title: "The Silent Patient", author: "Alex Michaelides", year: 2019, description: "A psychological thriller about a woman who refuses to speak." },
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", year: 2017, description: "A mystery about a reclusive Hollywood icon." },
        { title: "Big Little Lies", author: "Liane Moriarty", year: 2014, description: "A mystery about secrets and lies in a small community." },
        { title: "The Husband's Secret", author: "Liane Moriarty", year: 2013, description: "A mystery about a woman who discovers her husband\'s secret." },
        
        // Cozy Mystery
        { title: "The Cat Who Could Read Backwards", author: "Lilian Jackson Braun", year: 1966, description: "The first book in The Cat Who series." },
        { title: "The Cat Who Ate Danish Modern", author: "Lilian Jackson Braun", year: 1967, description: "The second book in The Cat Who series." },
        { title: "The Cat Who Turned On and Off", author: "Lilian Jackson Braun", year: 1968, description: "The third book in The Cat Who series." },
        { title: "The Cat Who Saw Red", author: "Lilian Jackson Braun", year: 1986, description: "A book in The Cat Who series." },
        { title: "The Cat Who Played Brahms", author: "Lilian Jackson Braun", year: 1987, description: "A book in The Cat Who series." },
        { title: "The Cat Who Played Post Office", author: "Lilian Jackson Braun", year: 1987, description: "A book in The Cat Who series." },
        { title: "The Cat Who Knew Shakespeare", author: "Lilian Jackson Braun", year: 1988, description: "A book in The Cat Who series." },
        { title: "The Cat Who Sniffed Glue", author: "Lilian Jackson Braun", year: 1988, description: "A book in The Cat Who series." },
        { title: "The Cat Who Went Underground", author: "Lilian Jackson Braun", year: 1989, description: "A book in The Cat Who series." },
        { title: "The Cat Who Talked to Ghosts", author: "Lilian Jackson Braun", year: 1990, description: "A book in The Cat Who series." },
        
        // Police Procedural
        { title: "The Black Echo", author: "Michael Connelly", year: 1992, description: "The first Harry Bosch mystery." },
        { title: "The Black Ice", author: "Michael Connelly", year: 1993, description: "The second Harry Bosch mystery." },
        { title: "The Concrete Blonde", author: "Michael Connelly", year: 1994, description: "The third Harry Bosch mystery." },
        { title: "The Last Coyote", author: "Michael Connelly", year: 1995, description: "The fourth Harry Bosch mystery." },
        { title: "Trunk Music", author: "Michael Connelly", year: 1997, description: "The fifth Harry Bosch mystery." },
        { title: "Angels Flight", author: "Michael Connelly", year: 1999, description: "The sixth Harry Bosch mystery." },
        { title: "A Darkness More Than Night", author: "Michael Connelly", year: 2001, description: "The seventh Harry Bosch mystery." },
        { title: "City of Bones", author: "Michael Connelly", year: 2002, description: "The eighth Harry Bosch mystery." },
        { title: "Lost Light", author: "Michael Connelly", year: 2003, description: "The ninth Harry Bosch mystery." },
        { title: "The Narrows", author: "Michael Connelly", year: 2004, description: "The tenth Harry Bosch mystery." }
    ],

    "Biography": [
        // Political Biographies
        { title: "Long Walk to Freedom", author: "Nelson Mandela", year: 1994, description: "The autobiography of Nelson Mandela, South Africa's first black president." },
        { title: "The Autobiography of Malcolm X", author: "Malcolm X", year: 1965, description: "The autobiography of civil rights leader Malcolm X." },
        { title: "Dreams from My Father", author: "Barack Obama", year: 1995, description: "Barack Obama's memoir about his early life and family." },
        { title: "A Promised Land", author: "Barack Obama", year: 2020, description: "Barack Obama's memoir about his presidency." },
        { title: "Becoming", author: "Michelle Obama", year: 2018, description: "Michelle Obama's memoir about her life and time as First Lady." },
        { title: "My Life", author: "Bill Clinton", year: 2004, description: "Bill Clinton's autobiography about his life and presidency." },
        { title: "Living History", author: "Hillary Clinton", year: 2003, description: "Hillary Clinton's memoir about her life and political career." },
        { title: "The Audacity of Hope", author: "Barack Obama", year: 2006, description: "Barack Obama's book about his political philosophy." },
        { title: "Hard Choices", author: "Hillary Clinton", year: 2014, description: "Hillary Clinton's memoir about her time as Secretary of State." },
        { title: "What Happened", author: "Hillary Clinton", year: 2017, description: "Hillary Clinton's memoir about the 2016 presidential election." },
        
        // Historical Biographies
        { title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947, description: "The diary of Anne Frank, a Jewish girl hiding during the Holocaust." },
        { title: "Night", author: "Elie Wiesel", year: 1956, description: "Elie Wiesel's memoir about his experience in Nazi concentration camps." },
        { title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: 1946, description: "Viktor Frankl's memoir about his experience in concentration camps." },
        { title: "The Rise and Fall of the Third Reich", author: "William L. Shirer", year: 1960, description: "A comprehensive history of Nazi Germany." },
        { title: "The Guns of August", author: "Barbara W. Tuchman", year: 1962, description: "A history of the first month of World War I." },
        { title: "The Zimmermann Telegram", author: "Barbara W. Tuchman", year: 1958, description: "A history of the telegram that brought America into World War I." },
        { title: "A Distant Mirror", author: "Barbara W. Tuchman", year: 1978, description: "A history of the 14th century in Europe." },
        { title: "The March of Folly", author: "Barbara W. Tuchman", year: 1984, description: "A history of government folly from Troy to Vietnam." },
        { title: "The First Salute", author: "Barbara W. Tuchman", year: 1988, description: "A history of the American Revolution." },
        { title: "The Proud Tower", author: "Barbara W. Tuchman", year: 1966, description: "A history of the world before World War I." },
        
        // Literary Biographies
        { title: "The Life of Samuel Johnson", author: "James Boswell", year: 1791, description: "A biography of the famous English writer and critic." },
        { title: "The Life of Charlotte Brontë", author: "Elizabeth Gaskell", year: 1857, description: "A biography of the author of Jane Eyre." },
        { title: "The Life of Charles Dickens", author: "John Forster", year: 1872, description: "A biography of the famous English novelist." },
        { title: "The Life of Mark Twain", author: "Albert Bigelow Paine", year: 1912, description: "A biography of the famous American humorist." },
        { title: "The Life of Oscar Wilde", author: "Richard Ellmann", year: 1987, description: "A comprehensive biography of the Irish playwright." },
        { title: "The Life of Virginia Woolf", author: "Quentin Bell", year: 1972, description: "A biography of the famous English novelist." },
        { title: "The Life of Ernest Hemingway", author: "Carlos Baker", year: 1969, description: "A biography of the famous American novelist." },
        { title: "The Life of F. Scott Fitzgerald", author: "Arthur Mizener", year: 1951, description: "A biography of the author of The Great Gatsby." },
        { title: "The Life of William Faulkner", author: "Joseph Blotner", year: 1974, description: "A biography of the famous American novelist." },
        { title: "The Life of James Joyce", author: "Richard Ellmann", year: 1959, description: "A biography of the Irish novelist and poet." },
        
        // Scientific Biographies
        { title: "The Double Helix", author: "James D. Watson", year: 1968, description: "James Watson's account of the discovery of DNA structure." },
        { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010, description: "The story of Henrietta Lacks and her immortal cells." },
        { title: "The Man Who Knew Infinity", author: "Robert Kanigel", year: 1991, description: "A biography of the Indian mathematician Srinivasa Ramanujan." },
        { title: "Einstein: His Life and Universe", author: "Walter Isaacson", year: 2007, description: "A comprehensive biography of Albert Einstein." },
        { title: "Steve Jobs", author: "Walter Isaacson", year: 2011, description: "A biography of the co-founder of Apple Inc." },
        { title: "Leonardo da Vinci", author: "Walter Isaacson", year: 2017, description: "A biography of the Renaissance polymath." },
        { title: "Benjamin Franklin: An American Life", author: "Walter Isaacson", year: 2003, description: "A biography of the American founding father." },
        { title: "Kissinger: A Biography", author: "Walter Isaacson", year: 1992, description: "A biography of the American diplomat and political scientist." },
        { title: "The Code Breaker", author: "Walter Isaacson", year: 2021, description: "A biography of Jennifer Doudna and the gene editing revolution." },
        { title: "The Innovators", author: "Walter Isaacson", year: 2014, description: "A history of the digital revolution and its pioneers." },
        
        // Entertainment Biographies
        { title: "Born a Crime", author: "Trevor Noah", year: 2016, description: "Trevor Noah's memoir about growing up in apartheid South Africa." },
        { title: "Bossypants", author: "Tina Fey", year: 2011, description: "Tina Fey's memoir about her life and career in comedy." },
        { title: "Yes Please", author: "Amy Poehler", year: 2014, description: "Amy Poehler's memoir about her life and career in comedy." },
        { title: "Is Everyone Hanging Out Without Me?", author: "Mindy Kaling", year: 2011, description: "Mindy Kaling's memoir about her life and career." },
        { title: "Why Not Me?", author: "Mindy Kaling", year: 2015, description: "Mindy Kaling's second memoir about confidence and success." },
        { title: "The Princess Diarist", author: "Carrie Fisher", year: 2016, description: "Carrie Fisher's memoir about her time filming Star Wars." },
        { title: "Wishful Drinking", author: "Carrie Fisher", year: 2008, description: "Carrie Fisher's memoir about her life and struggles." },
        { title: "Shockaholic", author: "Carrie Fisher", year: 2011, description: "Carrie Fisher's memoir about her life and experiences." },
        { title: "The Last Jedi", author: "Carrie Fisher", year: 2017, description: "Carrie Fisher's final memoir." },
        { title: "I Am Malala", author: "Malala Yousafzai", year: 2013, description: "Malala Yousafzai's memoir about her fight for education." }
    ],

    "Comedy": [
        // Humor and Satire
        { title: "Catch-22", author: "Joseph Heller", year: 1961, description: "A satirical novel about the absurdity of war and bureaucracy." },
        { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979, description: "A comedic science fiction novel about the end of the world." },
        { title: "The Restaurant at the End of the Universe", author: "Douglas Adams", year: 1980, description: "The second book in The Hitchhiker's Guide series." },
        { title: "Life, the Universe and Everything", author: "Douglas Adams", year: 1982, description: "The third book in The Hitchhiker's Guide series." },
        { title: "So Long, and Thanks for All the Fish", author: "Douglas Adams", year: 1984, description: "The fourth book in The Hitchhiker's Guide series." },
        { title: "Mostly Harmless", author: "Douglas Adams", year: 1992, description: "The fifth book in The Hitchhiker's Guide series." },
        { title: "Good Omens", author: "Terry Pratchett & Neil Gaiman", year: 1990, description: "A comedic novel about the apocalypse and an angel and demon trying to stop it." },
        { title: "The Color of Magic", author: "Terry Pratchett", year: 1983, description: "The first book in the Discworld series." },
        { title: "The Light Fantastic", author: "Terry Pratchett", year: 1986, description: "The second book in the Discworld series." },
        { title: "Equal Rites", author: "Terry Pratchett", year: 1987, description: "The third book in the Discworld series." },
        
        // Modern Comedy
        { title: "Bossypants", author: "Tina Fey", year: 2011, description: "Tina Fey's memoir about her life and career in comedy." },
        { title: "Yes Please", author: "Amy Poehler", year: 2014, description: "Amy Poehler's memoir about her life and career in comedy." },
        { title: "Is Everyone Hanging Out Without Me?", author: "Mindy Kaling", year: 2011, description: "Mindy Kaling's memoir about her life and career." },
        { title: "Why Not Me?", author: "Mindy Kaling", year: 2015, description: "Mindy Kaling's second memoir about confidence and success." },
        { title: "Born a Crime", author: "Trevor Noah", year: 2016, description: "Trevor Noah's memoir about growing up in apartheid South Africa." },
        { title: "The Princess Diarist", author: "Carrie Fisher", year: 2016, description: "Carrie Fisher's memoir about her time filming Star Wars." },
        { title: "Wishful Drinking", author: "Carrie Fisher", year: 2008, description: "Carrie Fisher's memoir about her life and struggles." },
        { title: "Shockaholic", author: "Carrie Fisher", year: 2011, description: "Carrie Fisher's memoir about her life and experiences." },
        { title: "The Last Jedi", author: "Carrie Fisher", year: 2017, description: "Carrie Fisher's final memoir." },
        { title: "I Am Malala", author: "Malala Yousafzai", year: 2013, description: "Malala Yousafzai's memoir about her fight for education." },
        
        // Classic Comedy
        { title: "Three Men in a Boat", author: "Jerome K. Jerome", year: 1889, description: "A humorous novel about three friends on a boating holiday." },
        { title: "Three Men on the Bummel", author: "Jerome K. Jerome", year: 1900, description: "A sequel to Three Men in a Boat about a cycling tour." },
        { title: "The Diary of a Nobody", author: "George Grossmith", year: 1892, description: "A humorous novel about the life of a middle-class clerk." },
        { title: "Right Ho, Jeeves", author: "P.G. Wodehouse", year: 1934, description: "A Jeeves and Wooster novel about mistaken identities and romantic complications." },
        { title: "The Code of the Woosters", author: "P.G. Wodehouse", year: 1938, description: "A Jeeves and Wooster novel about a silver cow creamer." },
        { title: "Thank You, Jeeves", author: "P.G. Wodehouse", year: 1934, description: "A Jeeves and Wooster novel about Bertie's banjo playing." },
        { title: "The Inimitable Jeeves", author: "P.G. Wodehouse", year: 1923, description: "A collection of Jeeves and Wooster stories." },
        { title: "Carry On, Jeeves", author: "P.G. Wodehouse", year: 1925, description: "Another collection of Jeeves and Wooster stories." },
        { title: "Very Good, Jeeves", author: "P.G. Wodehouse", year: 1930, description: "Another collection of Jeeves and Wooster stories." },
        { title: "Jeeves and the Feudal Spirit", author: "P.G. Wodehouse", year: 1954, description: "A Jeeves and Wooster novel about a stolen painting." }
    ],

    "Horror": [
        // Classic Horror
        { title: "Dracula", author: "Bram Stoker", year: 1897, description: "A gothic horror novel about Count Dracula and his attempt to move to England." },
        { title: "Frankenstein", author: "Mary Shelley", year: 1818, description: "A gothic horror novel about a scientist who creates a monster." },
        { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Robert Louis Stevenson", year: 1886, description: "A gothic horror novella about a man with a split personality." },
        { title: "The Turn of the Screw", author: "Henry James", year: 1898, description: "A gothic horror novella about a governess and two children." },
        { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, description: "A gothic horror novel about a man who remains young while his portrait ages." },
        { title: "The Phantom of the Opera", author: "Gaston Leroux", year: 1910, description: "A gothic horror novel about a masked figure who haunts the Paris Opera House." },
        { title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", year: 1902, description: "A Sherlock Holmes mystery with supernatural elements." },
        { title: "The Call of Cthulhu", author: "H.P. Lovecraft", year: 1928, description: "A cosmic horror story about an ancient entity." },
        { title: "At the Mountains of Madness", author: "H.P. Lovecraft", year: 1936, description: "A cosmic horror novella about an Antarctic expedition." },
        { title: "The Shadow over Innsmouth", author: "H.P. Lovecraft", year: 1936, description: "A cosmic horror novella about a town with dark secrets." },
        
        // Modern Horror
        { title: "The Shining", author: "Stephen King", year: 1977, description: "A psychological horror novel about a writer who becomes caretaker of a haunted hotel." },
        { title: "It", author: "Stephen King", year: 1986, description: "A horror novel about a shape-shifting entity that preys on children." },
        { title: "The Stand", author: "Stephen King", year: 1978, description: "A post-apocalyptic horror novel about good versus evil after a plague." },
        { title: "Pet Sematary", author: "Stephen King", year: 1983, description: "A horror novel about a burial ground that brings the dead back to life." },
        { title: "Carrie", author: "Stephen King", year: 1974, description: "A horror novel about a teenage girl with telekinetic powers." },
        { title: "The Exorcist", author: "William Peter Blatty", year: 1971, description: "A horror novel about the demonic possession of a young girl." },
        { title: "Rosemary's Baby", author: "Ira Levin", year: 1967, description: "A horror novel about a woman who becomes pregnant with the devil's child." },
        { title: "The Omen", author: "David Seltzer", year: 1976, description: "A horror novel about a child who may be the Antichrist." },
        { title: "The Amityville Horror", author: "Jay Anson", year: 1977, description: "A horror novel based on alleged paranormal events in a haunted house." },
        { title: "The Haunting of Hill House", author: "Shirley Jackson", year: 1959, description: "A gothic horror novel about four people who investigate a haunted house." },
        
        // Supernatural Horror
        { title: "The Woman in Black", author: "Susan Hill", year: 1983, description: "A gothic horror novel about a ghost who haunts a small English town." },
        { title: "The Turn of the Key", author: "Ruth Ware", year: 2019, description: "A psychological thriller about a nanny in a smart home." },
        { title: "The Death of Mrs. Westaway", author: "Ruth Ware", year: 2018, description: "A psychological thriller about a woman who inherits a fortune." },
        { title: "The Lying Game", author: "Ruth Ware", year: 2017, description: "A psychological thriller about four friends with a dark secret." },
        { title: "In a Dark, Dark Wood", author: "Ruth Ware", year: 2015, description: "A psychological thriller about a bachelorette party gone wrong." },
        { title: "The Woman in Cabin 10", author: "Ruth Ware", year: 2016, description: "A psychological thriller about a woman who witnesses a murder on a cruise ship." },
        { title: "The Turn of the Key", author: "Ruth Ware", year: 2019, description: "A psychological thriller about a nanny in a smart home." },
        { title: "The Death of Mrs. Westaway", author: "Ruth Ware", year: 2018, description: "A psychological thriller about a woman who inherits a fortune." },
        { title: "The Lying Game", author: "Ruth Ware", year: 2017, description: "A psychological thriller about four friends with a dark secret." },
        { title: "In a Dark, Dark Wood", author: "Ruth Ware", year: 2015, description: "A psychological thriller about a bachelorette party gone wrong." },
        
        // Psychological Horror
        { title: "The Silence of the Lambs", author: "Thomas Harris", year: 1988, description: "A psychological thriller about an FBI trainee and a cannibalistic serial killer." },
        { title: "Red Dragon", author: "Thomas Harris", year: 1981, description: "A psychological thriller about an FBI profiler and a serial killer." },
        { title: "Hannibal", author: "Thomas Harris", year: 1999, description: "A psychological thriller about Hannibal Lecter's return." },
        { title: "Hannibal Rising", author: "Thomas Harris", year: 2006, description: "A psychological thriller about Hannibal Lecter's early life." },
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005, description: "A psychological thriller about a journalist and a hacker investigating a disappearance." },
        { title: "The Girl Who Played with Fire", author: "Stieg Larsson", year: 2006, description: "The second book in the Millennium series." },
        { title: "The Girl Who Kicked the Hornet's Nest", author: "Stieg Larsson", year: 2007, description: "The third book in the Millennium series." },
        { title: "Gone Girl", author: "Gillian Flynn", year: 2012, description: "A psychological thriller about a missing wife." },
        { title: "Sharp Objects", author: "Gillian Flynn", year: 2006, description: "A psychological thriller about a journalist investigating murders." },
        { title: "Dark Places", author: "Gillian Flynn", year: 2009, description: "A psychological thriller about a woman investigating her family's murder." }
    ],

    "Fiction": [
        // Literary Fiction
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, description: "A tale of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan." },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, description: "A story of racial injustice and childhood innocence in the American South." },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, description: "A coming-of-age story about a teenager's experiences in New York City." },
        { title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, description: "A novel about a family\'s journey from Oklahoma to California during the Great Depression." },
        { title: "Of Mice and Men", author: "John Steinbeck", year: 1937, description: "A novella about two displaced migrant ranch workers during the Great Depression." },
        { title: "East of Eden", author: "John Steinbeck", year: 1952, description: "A novel about two families in the Salinas Valley, California." },
        { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, description: "A novella about an aging Cuban fisherman\'s struggle with a giant marlin." },
        { title: "For Whom the Bell Tolls", author: "Ernest Hemingway", year: 1940, description: "A novel about an American volunteer in the Spanish Civil War." },
        { title: "A Farewell to Arms", author: "Ernest Hemingway", year: 1929, description: "A novel about an American ambulance driver in World War I." },
        { title: "The Sun Also Rises", author: "Ernest Hemingway", year: 1926, description: "A novel about a group of American and British expatriates in Paris." },
        
        // Contemporary Fiction
        { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003, description: "A novel about friendship, betrayal, and redemption in Afghanistan." },
        { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", year: 2007, description: "A novel about two women in Afghanistan during the Taliban regime." },
        { title: "And the Mountains Echoed", author: "Khaled Hosseini", year: 2013, description: "A novel about family, love, and sacrifice across generations." },
        { title: "The Book Thief", author: "Markus Zusak", year: 2005, description: "A novel about a young girl in Nazi Germany who steals books." },
        { title: "The Help", author: "Kathryn Stockett", year: 2009, description: "A novel about African American maids in 1960s Mississippi." },
        { title: "The Goldfinch", author: "Donna Tartt", year: 2013, description: "A novel about a boy who survives a terrorist attack and steals a painting." },
        { title: "The Secret History", author: "Donna Tartt", year: 1992, description: "A novel about a group of classics students at a New England college." },
        { title: "The Little Friend", author: "Donna Tartt", year: 2002, description: "A novel about a young girl\'s investigation into her brother\'s murder." },
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", year: 2017, description: "A novel about a reclusive Hollywood icon and her seven marriages." },
        { title: "Daisy Jones & The Six", author: "Taylor Jenkins Reid", year: 2019, description: "A novel about a fictional rock band in the 1970s." },
        
        // Historical Fiction
        { title: "The Pillars of the Earth", author: "Ken Follett", year: 1989, description: "A historical novel about the building of a cathedral in 12th-century England." },
        { title: "World Without End", author: "Ken Follett", year: 2007, description: "A sequel to The Pillars of the Earth set in 14th-century England." },
        { title: "A Column of Fire", author: "Ken Follett", year: 2017, description: "A novel about the Protestant Reformation in 16th-century Europe." },
        { title: "The Century Trilogy", author: "Ken Follett", year: 2010, description: "A trilogy about five families during the 20th century." },
        { title: "Fall of Giants", author: "Ken Follett", year: 2010, description: "The first book in The Century Trilogy about World War I." },
        { title: "Winter of the World", author: "Ken Follett", year: 2012, description: "The second book in The Century Trilogy about World War II." },
        { title: "Edge of Eternity", author: "Ken Follett", year: 2014, description: "The third book in The Century Trilogy about the Cold War." },
        { title: "The Nightingale", author: "Kristin Hannah", year: 2015, description: "A novel about two sisters in Nazi-occupied France." },
        { title: "The Great Alone", author: "Kristin Hannah", year: 2018, description: "A novel about a family who moves to Alaska in the 1970s." },
        { title: "Firefly Lane", author: "Kristin Hannah", year: 2008, description: "A novel about the friendship between two women over three decades." },
        
        // Romance Fiction
        { title: "The Notebook", author: "Nicholas Sparks", year: 1996, isbn: "9780446698866", description: "A romance novel about a couple's love story across decades." },
        { title: "A Walk to Remember", author: "Nicholas Sparks", year: 1999, isbn: "9780446698873", description: "A romance novel about a high school student and a minister's daughter." },
        { title: "The Last Song", author: "Nicholas Sparks", year: 2009, isbn: "9780446547591", description: "A romance novel about a rebellious teenager who reconnects with her father." },
        { title: "The Best of Me", author: "Nicholas Sparks", year: 2011, isbn: "9780446547591", description: "A romance novel about high school sweethearts who reunite after 20 years." },
        { title: "Safe Haven", author: "Nicholas Sparks", year: 2010, isbn: "9780446547591", description: "A romance novel about a woman who escapes an abusive relationship." },
        { title: "The Lucky One", author: "Nicholas Sparks", year: 2008, isbn: "9780446698897", description: "A romance novel about a Marine who finds a photograph of a woman." },
        { title: "Dear John", author: "Nicholas Sparks", year: 2006, isbn: "9780446698897", description: "A romance novel about a soldier and a college student." },
        { title: "The Choice", author: "Nicholas Sparks", year: 2007, isbn: "9780446698897", description: "A romance novel about a man who must choose between his past and future." },
        { title: "At First Sight", author: "Nicholas Sparks", year: 2005, isbn: "9780446698897", description: "A romance novel about a man who falls in love with a woman he's never seen." },
        { title: "True Believer", author: "Nicholas Sparks", year: 2005, isbn: "9780446698897", description: "A romance novel about a journalist who investigates a small town\'s mysterious lights." }
    ],

    "Romance": [
        // Contemporary Romance
        { title: "It Ends with Us", author: "Colleen Hoover", year: 2016, isbn: "9781501130796", description: "A powerful story of love, resilience, and difficult choices." },
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", year: 2017, isbn: "9781501139232", description: "A legendary film icon shares the truth behind her glamorous—and scandalous—life and loves." },
        { title: "Me Before You", author: "Jojo Moyes", year: 2012, isbn: "9780670026606", description: "A heart-wrenching romance between a caregiver and the man she works for." },
        { title: "The Light We Lost", author: "Jill Santopolo", year: 2017, isbn: "9780735211710", description: "A sweeping tale of love, fate, and the choices that define us." },
        { title: "The Hating Game", author: "Sally Thorne", year: 2016, isbn: "9780062439598", description: "Office rivals discover there's a fine line between love and hate." },
        { title: "Red, White & Royal Blue", author: "Casey McQuiston", year: 2019, isbn: "9781250316776", description: "A rom-com about the First Son of the United States and a British prince who fall in love." },
        { title: "The Kiss Quotient", author: "Helen Hoang", year: 2018, isbn: "9780451490803", description: "A woman hires an escort to teach her about relationships and finds unexpected love." },
        { title: "The Rosie Project", author: "Graeme Simsion", year: 2013, isbn: "9781476729091", description: "A genetics professor designs a scientific survey to find the perfect wife." },
        
        // Romantic Classics
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isbn: "9780141439518", description: "Elizabeth Bennet navigates love and society with the enigmatic Mr. Darcy." },
        { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, isbn: "9780141441146", description: "An orphaned governess finds love and secrets at Thornfield Hall." },
        { title: "Wuthering Heights", author: "Emily Brontë", year: 1847, isbn: "9780141439556", description: "A turbulent tale of passion and revenge on the Yorkshire moors." },
        
        // Romantic Epics
        { title: "Outlander", author: "Diana Gabaldon", year: 1991, isbn: "9780440212560", description: "A time-traveling WWII nurse falls in love in 18th-century Scotland." },
        { title: "The Time Traveler's Wife", author: "Audrey Niffenegger", year: 2003, isbn: "9780156029438", description: "A love story challenged by involuntary time travel." },
        
        // Fan-Favorite Romances
        { title: "The Notebook", author: "Nicholas Sparks", year: 1996, isbn: "9780446698866", description: "A sweeping love story that endures across decades." },
        { title: "Dear John", author: "Nicholas Sparks", year: 2006, isbn: "9780446698897", description: "A soldier and a college student fall in love, then face the strains of distance and duty." },
        { title: "Safe Haven", author: "Nicholas Sparks", year: 2010, isbn: "9780446547591", description: "A woman with a mysterious past finds love and a chance to start over." },
        
        // Literary Romance
        { title: "Normal People", author: "Sally Rooney", year: 2018, isbn: "9780571334650", description: "A modern romance chronicling two people whose lives are intertwined over years." },
        
        // More Contemporary Romance
        { title: "Beach Read", author: "Emily Henry", year: 2020, isbn: "9781984806734", description: "Two rival authors spend the summer in neighboring beach houses and discover love." },
        { title: "The Unhoneymooners", author: "Christina Lauren", year: 2019, isbn: "9781501128038", description: "Enemies who hate each other are forced to go on a honeymoon together." },
        { title: "The Flatshare", author: "Beth O'Leary", year: 2019, isbn: "9781250298297", description: "Two people share a flat and a bed but have never met." },
        { title: "The Bromance Book Club", author: "Lyssa Kay Adams", year: 2019, isbn: "9781984806093", description: "A professional baseball player joins a secret romance book club to save his marriage." },
        { title: "Get a Life, Chloe Brown", author: "Talia Hibbert", year: 2019, isbn: "9780062941206", description: "A chronically ill computer geek creates a bucket list to get a life." },
        { title: "The Wedding Date", author: "Jasmine Guillory", year: 2018, isbn: "9780399587665", description: "A fake date to a wedding leads to unexpected romance." },
        { title: "The Proposal", author: "Jasmine Guillory", year: 2018, isbn: "9780399587689", description: "A public proposal gone wrong leads to an unexpected romance." },
        { title: "The Wedding Party", author: "Jasmine Guillory", year: 2019, isbn: "9780593100825", description: "Two people who hate each other are forced to work together on a wedding." }
    ],

    "Non-Fiction": [
        // Self-Help and Personal Development
        { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989, description: "A self-help book about personal and professional effectiveness." },
        { title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936, description: "A self-help book about interpersonal skills and communication." },
        { title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, description: "A self-help book about personal achievement and wealth building." },
        { title: "The Power of Positive Thinking", author: "Norman Vincent Peale", year: 1952, description: "A self-help book about the benefits of positive thinking." },
        { title: "The Secret", author: "Rhonda Byrne", year: 2006, description: "A self-help book about the law of attraction." },
        { title: "Atomic Habits", author: "James Clear", year: 2018, description: "A self-help book about building good habits and breaking bad ones." },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016, description: "A self-help book about focusing on what truly matters." },
        { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", year: 2006, description: "A psychology book about the power of mindset." },
        { title: "Grit: The Power of Passion and Perseverance", author: "Angela Duckworth", year: 2016, description: "A psychology book about the importance of grit in success." },
        { title: "The 4-Hour Workweek", author: "Tim Ferriss", year: 2007, description: "A self-help book about lifestyle design and productivity." },
        
        // Business and Economics
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997, description: "A personal finance book about financial education and wealth building." },
        { title: "The Lean Startup", author: "Eric Ries", year: 2011, description: "A business book about building successful startups." },
        { title: "Good to Great", author: "Jim Collins", year: 2001, description: "A business book about what makes companies great." },
        { title: "Built to Last", author: "Jim Collins", year: 1994, description: "A business book about visionary companies." },
        { title: "The Innovator's Dilemma", author: "Clayton M. Christensen", year: 1997, description: "A business book about disruptive innovation." },
        { title: "Crossing the Chasm", author: "Geoffrey A. Moore", year: 1991, description: "A business book about marketing technology products." },
        { title: "The Tipping Point", author: "Malcolm Gladwell", year: 2000, description: "A sociology book about how small changes can have big effects." },
        { title: "Outliers", author: "Malcolm Gladwell", year: 2008, description: "A sociology book about the factors that contribute to success." },
        { title: "Blink", author: "Malcolm Gladwell", year: 2005, description: "A psychology book about the power of thinking without thinking." },
        { title: "David and Goliath", author: "Malcolm Gladwell", year: 2013, description: "A sociology book about underdogs and misfits." },
        
        // Science and Technology
        { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, description: "A popular science book about cosmology and theoretical physics." },
        { title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, description: "A biology book about evolution and genetics." },
        { title: "The Blind Watchmaker", author: "Richard Dawkins", year: 1986, description: "A biology book about evolution and natural selection." },
        { title: "The God Delusion", author: "Richard Dawkins", year: 2006, description: "A philosophy book about atheism and religion." },
        { title: "Cosmos", author: "Carl Sagan", year: 1980, description: "A popular science book about astronomy and the universe." },
        { title: "Pale Blue Dot", author: "Carl Sagan", year: 1994, description: "A popular science book about space exploration and humanity's place in the universe." },
        { title: "The Demon-Haunted World", author: "Carl Sagan", year: 1995, description: "A popular science book about science and skepticism." },
        { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, description: "A history book about the evolution of human society." },
        { title: "Homo Deus", author: "Yuval Noah Harari", year: 2015, description: "A history book about the future of humanity." },
        { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", year: 2018, description: "A philosophy book about contemporary issues." },
        
        // History and Politics
        { title: "The Rise and Fall of the Third Reich", author: "William L. Shirer", year: 1960, description: "A comprehensive history of Nazi Germany." },
        { title: "The Guns of August", author: "Barbara W. Tuchman", year: 1962, description: "A history of the first month of World War I." },
        { title: "A Distant Mirror", author: "Barbara W. Tuchman", year: 1978, description: "A history of the 14th century in Europe." },
        { title: "The March of Folly", author: "Barbara W. Tuchman", year: 1984, description: "A history of government folly from Troy to Vietnam." },
        { title: "The First Salute", author: "Barbara W. Tuchman", year: 1988, description: "A history of the American Revolution." },
        { title: "The Proud Tower", author: "Barbara W. Tuchman", year: 1966, description: "A history of the world before World War I." },
        { title: "The Zimmermann Telegram", author: "Barbara W. Tuchman", year: 1958, description: "A history of the telegram that brought America into World War I." },
        { title: "The Swerve", author: "Stephen Greenblatt", year: 2011, description: "A history book about the rediscovery of Lucretius's poem." },
        { title: "The Warmth of Other Suns", author: "Isabel Wilkerson", year: 2010, description: "A history book about the Great Migration of African Americans." },
        { title: "Caste", author: "Isabel Wilkerson", year: 2020, description: "A history book about the caste system in America." }
    ],

    "Cooking": [
        // Classic Cookbooks
        { title: "The Joy of Cooking", author: "Irma S. Rombauer", year: 1931, description: "A comprehensive cookbook covering all aspects of cooking." },
        { title: "Mastering the Art of French Cooking", author: "Julia Child", year: 1961, description: "A cookbook that introduced French cuisine to American home cooks." },
        { title: "The French Laundry Cookbook", author: "Thomas Keller", year: 1999, description: "A cookbook from the famous French Laundry restaurant." },
        { title: "Ad Hoc at Home", author: "Thomas Keller", year: 2009, description: "A cookbook focused on family-style cooking." },
        { title: "Bouchon Bakery", author: "Thomas Keller", year: 2012, description: "A cookbook about artisanal baking techniques." },
        { title: "The Professional Chef", author: "The Culinary Institute of America", year: 1976, description: "A comprehensive textbook for professional chefs." },
        { title: "Larousse Gastronomique", author: "Prosper Montagné", year: 1938, description: "An encyclopedia of gastronomy and culinary arts." },
        { title: "The Silver Spoon", author: "Editoriale Domus", year: 1950, description: "The definitive Italian cookbook." },
        { title: "The Art of Simple Food", author: "Alice Waters", year: 2007, description: "A cookbook about simple, seasonal cooking." },
        { title: "Chez Panisse Menu Cookbook", author: "Alice Waters", year: 1982, description: "A cookbook from the famous Chez Panisse restaurant." },
        
        // Modern Cookbooks
        { title: "Salt, Fat, Acid, Heat", author: "Samin Nosrat", year: 2017, description: "A cookbook about the four fundamental elements of good cooking." },
        { title: "The Food Lab", author: "J. Kenji López-Alt", year: 2015, description: "A cookbook about the science of cooking." },
        { title: "Flour, Water, Salt, Yeast", author: "Ken Forkish", year: 2012, description: "A cookbook about artisanal bread baking." },
        { title: "Tartine Bread", author: "Chad Robertson", year: 2010, description: "A cookbook about sourdough bread baking." },
        { title: "The Bread Baker's Apprentice", author: "Peter Reinhart", year: 2001, description: "A cookbook about professional bread baking techniques." },
        { title: "The Art of Fermentation", author: "Sandor Ellix Katz", year: 2012, description: "A cookbook about fermentation and cultured foods." },
        { title: "Wild Fermentation", author: "Sandor Ellix Katz", year: 2003, description: "A cookbook about wild fermentation techniques." },
        { title: "The Noma Guide to Fermentation", author: "René Redzepi", year: 2018, description: "A cookbook about fermentation from the famous Noma restaurant." },
        { title: "The Nordic Cookbook", author: "Magnus Nilsson", year: 2015, description: "A cookbook about Nordic cuisine and traditions." },
        { title: "Fäviken", author: "Magnus Nilsson", year: 2012, description: "A cookbook from the famous Fäviken restaurant." },
        
        // Specialized Cookbooks
        { title: "The Complete Vegetarian Cookbook", author: "America\'s Test Kitchen", year: 2015, description: "A comprehensive cookbook for vegetarian cooking." },
        { title: "Veganomicon", author: "Isa Chandra Moskowitz", year: 2007, description: "A comprehensive cookbook for vegan cooking." },
        { title: "The Gluten-Free Bible", author: "Jax Peters Lowell", year: 2005, description: "A cookbook for gluten-free cooking and baking." },
        { title: "The Paleo Diet Cookbook", author: "Loren Cordain", year: 2010, description: "A cookbook for paleo diet cooking." },
        { title: "The Keto Diet", author: "Leanne Vogel", year: 2017, description: "A cookbook for ketogenic diet cooking." },
        { title: "The Whole30", author: "Melissa Hartwig", year: 2015, description: "A cookbook for the Whole30 elimination diet." },
        { title: "The Mediterranean Diet Cookbook", author: "Nancy Harmon Jenkins", year: 2008, description: "A cookbook for Mediterranean diet cooking." },
        { title: "The DASH Diet Cookbook", author: "Marla Heller", year: 2012, description: "A cookbook for the DASH diet for hypertension." },
        { title: "The Anti-Inflammatory Diet Cookbook", author: "Madeline Given", year: 2016, description: "A cookbook for anti-inflammatory diet cooking." },
        { title: "The Autoimmune Protocol Cookbook", author: "Sarah Ballantyne", year: 2014, description: "A cookbook for autoimmune protocol diet cooking." },
        
        // International Cuisine
        { title: "The Complete Chinese Cookbook", author: "Ken Hom", year: 2007, description: "A comprehensive cookbook for Chinese cuisine." },
        { title: "The Complete Indian Cookbook", author: "Madhur Jaffrey", year: 2003, description: "A comprehensive cookbook for Indian cuisine." },
        { title: "The Complete Mexican Cookbook", author: "Diana Kennedy", year: 2000, description: "A comprehensive cookbook for Mexican cuisine." },
        { title: "The Complete Italian Cookbook", author: "Marcella Hazan", year: 1992, description: "A comprehensive cookbook for Italian cuisine." },
        { title: "The Complete French Cookbook", author: "Julia Child", year: 1989, description: "A comprehensive cookbook for French cuisine." },
        { title: "The Complete Japanese Cookbook", author: "Shizuo Tsuji", year: 1980, description: "A comprehensive cookbook for Japanese cuisine." },
        { title: "The Complete Thai Cookbook", author: "David Thompson", year: 2002, description: "A comprehensive cookbook for Thai cuisine." },
        { title: "The Complete Middle Eastern Cookbook", author: "Claudia Roden", year: 1968, description: "A comprehensive cookbook for Middle Eastern cuisine." },
        { title: "The Complete African Cookbook", author: "Beatrice Ajao", year: 1998, description: "A comprehensive cookbook for African cuisine." },
        { title: "The Complete Caribbean Cookbook", author: "John DeMers", year: 2005, description: "A comprehensive cookbook for Caribbean cuisine." }
    ],

    "Children's Books": [
        // Classic Children's Books
        { title: "Where the Wild Things Are", author: "Maurice Sendak", year: 1963, description: "A classic picture book about Max's journey to the land of the Wild Things." },
        { title: "The Very Hungry Caterpillar", author: "Eric Carle", year: 1969, description: "A beloved picture book about a caterpillar's transformation into a butterfly." },
        { title: "Goodnight Moon", author: "Margaret Wise Brown", year: 1947, description: "A soothing bedtime story that has helped millions of children fall asleep." },
        { title: "The Cat in the Hat", author: "Dr. Seuss", year: 1957, description: "A classic rhyming story about a mischievous cat who visits two children." },
        { title: "Green Eggs and Ham", author: "Dr. Seuss", year: 1960, description: "A fun rhyming book about trying new foods and being open to new experiences." },
        { title: "Charlotte's Web", author: "E.B. White", year: 1952, description: "A heartwarming story about friendship between a pig named Wilbur and a spider named Charlotte." },
        { title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943, description: "A philosophical children\'s book about a young prince who travels from planet to planet." },
        { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", year: 1865, description: "A fantastical adventure about a girl who falls down a rabbit hole into a magical world." },
        { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", year: 1950, description: "The first book in the Chronicles of Narnia series about four children\'s adventures in a magical land." },
        { title: "The Secret Garden", author: "Frances Hodgson Burnett", year: 1911, description: "A story about a spoiled girl who discovers a hidden garden and learns about friendship and growth." },
        
        // Modern Children's Books
        { title: "The Giving Tree", author: "Shel Silverstein", year: 1964, description: "A touching story about unconditional love and the relationship between a boy and a tree." },
        { title: "Love You Forever", author: "Robert Munsch", year: 1986, description: "A heartwarming story about the enduring love between a parent and child." },
        { title: "The Rainbow Fish", author: "Marcus Pfister", year: 1992, description: "A story about sharing and friendship featuring a beautiful fish with shimmering scales." },
        { title: "Guess How Much I Love You", author: "Sam McBratney", year: 1994, description: "A sweet bedtime story about a parent and child expressing their love for each other." },
        { title: "The Gruffalo", author: "Julia Donaldson", year: 1999, description: "A clever mouse's adventure through the deep dark wood with a rhyming story." },
        { title: "Room on the Broom", author: "Julia Donaldson", year: 2001, description: "A witch and her cat\'s adventure with helpful animals and a rhyming tale." },
        { title: "The Day the Crayons Quit", author: "Drew Daywalt", year: 2013, description: "A humorous story about crayons going on strike and expressing their grievances." },
        { title: "Dragons Love Tacos", author: "Adam Rubin", year: 2012, description: "A silly story about dragons who love tacos but hate spicy salsa." },
        { title: "The Book with No Pictures", author: "B.J. Novak", year: 2014, description: "A clever book that proves words alone can be incredibly entertaining for children." },
        { title: "I Want My Hat Back", author: "Jon Klassen", year: 2011, description: "A simple but hilarious story about a bear looking for his missing hat." },
        
        // Chapter Books for Young Readers
        { title: "Matilda", author: "Roald Dahl", year: 1988, description: "A story about a brilliant girl with telekinetic powers who loves to read." },
        { title: "Charlie and the Chocolate Factory", author: "Roald Dahl", year: 1964, description: "A magical adventure about a poor boy who wins a tour of Willy Wonka's chocolate factory." },
        { title: "James and the Giant Peach", author: "Roald Dahl", year: 1961, description: "An orphaned boy\'s fantastical journey inside a giant peach with insect friends." },
        { title: "The BFG", author: "Roald Dahl", year: 1982, description: "A story about a Big Friendly Giant who captures dreams and befriends a young girl." },
        { title: "The Witches", author: "Roald Dahl", year: 1983, description: "A boy\'s encounter with real witches and his grandmother's help in defeating them." },
        { title: "Fantastic Mr. Fox", author: "Roald Dahl", year: 1970, description: "A clever fox's battle against three mean farmers who want to destroy his family." },
        { title: "The Twits", author: "Roald Dahl", year: 1980, description: "A story about the most horrible couple in the world and their comeuppance." },
        { title: "George's Marvellous Medicine", author: "Roald Dahl", year: 1981, description: "A boy\'s attempt to cure his mean grandmother with a special medicine." },
        { title: "Danny the Champion of the World", author: "Roald Dahl", year: 1975, description: "A story about a boy and his father\'s adventures in poaching pheasants." },
        { title: "The Magic Finger", author: "Roald Dahl", year: 1966, description: "A girl with a magic finger who teaches a lesson to a family of hunters." },
        
        // Middle Grade Books
        { title: "Percy Jackson and the Lightning Thief", author: "Rick Riordan", year: 2005, description: "A modern-day demigod's adventure in the world of Greek mythology." },
        { title: "The Lightning Thief", author: "Rick Riordan", year: 2005, description: "Percy Jackson discovers he's a demigod and must prevent a war between the gods." },
        { title: "The Sea of Monsters", author: "Rick Riordan", year: 2006, description: "Percy's second adventure as he searches for the Golden Fleece." },
        { title: "The Titan's Curse", author: "Rick Riordan", year: 2007, description: "Percy and his friends must rescue Artemis from the Titan's curse." },
        { title: "The Battle of the Labyrinth", author: "Rick Riordan", year: 2008, description: "Percy must navigate the dangerous Labyrinth to prevent war." },
        { title: "The Last Olympian", author: "Rick Riordan", year: 2009, description: "The final battle for Olympus in the Percy Jackson series." },
        { title: "Diary of a Wimpy Kid", author: "Jeff Kinney", year: 2007, description: "Greg Heffley's hilarious diary entries about middle school life." },
        { title: "Rodrick Rules", author: "Jeff Kinney", year: 2008, description: "Greg's summer vacation and dealing with his older brother Rodrick." },
        { title: "The Last Straw", author: "Jeff Kinney", year: 2009, description: "Greg's attempts to toughen up and deal with his family." },
        { title: "Dog Days", author: "Jeff Kinney", year: 2009, description: "Greg's summer vacation and his attempts to have fun." },
        
        // Picture Books for Toddlers
        { title: "Brown Bear, Brown Bear, What Do You See?", author: "Bill Martin Jr.", year: 1967, description: "A repetitive, rhythmic book that introduces colors and animals." },
        { title: "Chicka Chicka Boom Boom", author: "Bill Martin Jr.", year: 1989, description: "A fun alphabet book about letters climbing a coconut tree." },
        { title: "The Snowy Day", author: "Ezra Jack Keats", year: 1962, description: "A boy\'s adventures on a snowy day in the city." },
        { title: "Corduroy", author: "Don Freeman", year: 1968, description: "A teddy bear's adventure in a department store." },
        { title: "Make Way for Ducklings", author: "Robert McCloskey", year: 1941, description: "A family of ducks' journey through Boston to find a safe home." },
        { title: "Blueberries for Sal", author: "Robert McCloskey", year: 1948, description: "A little girl and a bear cub both go blueberry picking with their mothers." },
        { title: "The Story of Ferdinand", author: "Munro Leaf", year: 1936, description: "A gentle bull who prefers smelling flowers to fighting." },
        { title: "Madeline", author: "Ludwig Bemelmans", year: 1939, description: "A brave little girl\'s adventures in a Parisian boarding school." },
        { title: "Curious George", author: "H.A. Rey", year: 1941, description: "A mischievous monkey's adventures and the man in the yellow hat." },
        { title: "The Tale of Peter Rabbit", author: "Beatrix Potter", year: 1902, description: "A naughty rabbit's adventure in Mr. McGregor's garden." }
    ],

    "Holiday Books": [
        // Christmas Books
        { title: "A Christmas Carol", author: "Charles Dickens", year: 1843, description: "The classic tale of Ebenezer Scrooge's transformation on Christmas Eve." },
        { title: "The Night Before Christmas", author: "Clement Clarke Moore", year: 1823, description: "The beloved poem about Santa Claus's visit on Christmas Eve." },
        { title: "How the Grinch Stole Christmas", author: "Dr. Seuss", year: 1957, description: "A heartwarming story about the Grinch who learns the true meaning of Christmas." },
        { title: "The Polar Express", author: "Chris Van Allsburg", year: 1985, description: "A magical train ride to the North Pole on Christmas Eve." },
        { title: "Rudolph the Red-Nosed Reindeer", author: "Robert L. May", year: 1939, description: "The story of the most famous reindeer of all." },
        { title: "Frosty the Snowman", author: "Steve Nelson", year: 1950, description: "A magical snowman who comes to life with a silk hat." },
        { title: "The Nutcracker", author: "E.T.A. Hoffmann", year: 1816, description: "A young girl\'s magical Christmas adventure with the Nutcracker Prince." },
        { title: "The Gift of the Magi", author: "O. Henry", year: 1905, description: "A touching story about a young couple's Christmas gifts to each other." },
        { title: "A Charlie Brown Christmas", author: "Charles M. Schulz", year: 1965, description: "Charlie Brown's search for the true meaning of Christmas." },
        { title: "The Christmas Box", author: "Richard Paul Evans", year: 1993, description: "A heartwarming story about love, loss, and the magic of Christmas." },
        
        // Halloween Books
        { title: "The Legend of Sleepy Hollow", author: "Washington Irving", year: 1820, description: "The classic tale of Ichabod Crane and the Headless Horseman." },
        { title: "The Halloween Tree", author: "Ray Bradbury", year: 1972, description: "A group of boys' journey through Halloween history and traditions." },
        { title: "Coraline", author: "Neil Gaiman", year: 2002, description: "A young girl\'s spooky adventure in an alternate world." },
        { title: "The Graveyard Book", author: "Neil Gaiman", year: 2008, description: "A boy raised by ghosts in a graveyard learns about life and death." },
        { title: "Something Wicked This Way Comes", author: "Ray Bradbury", year: 1962, description: "A dark carnival comes to town with mysterious powers." },
        { title: "The Witches", author: "Roald Dahl", year: 1983, description: "A boy\'s encounter with real witches and his grandmother's help." },
        { title: "Scary Stories to Tell in the Dark", author: "Alvin Schwartz", year: 1981, description: "A collection of spooky tales perfect for Halloween." },
        { title: "The House with a Clock in Its Walls", author: "John Bellairs", year: 1973, description: "A young orphan discovers his uncle's house is full of magic and mystery." },
        { title: "Wait Till Helen Comes", author: "Mary Downing Hahn", year: 1986, description: "A ghost story about a young girl and her step-sister's friendship with a ghost." },
        { title: "The Dollhouse Murders", author: "Betty Ren Wright", year: 1983, description: "A young girl discovers her dollhouse holds clues to a real murder." },
        
        // Thanksgiving Books
        { title: "The First Thanksgiving", author: "Jean Craighead George", year: 1993, description: "The story of the first Thanksgiving celebration in America." },
        { title: "Thanksgiving on Thursday", author: "Mary Pope Osborne", year: 2002, description: "Jack and Annie's time-traveling adventure to the first Thanksgiving." },
        { title: "The Thanksgiving Story", author: "Alice Dalgliesh", year: 1954, description: "A simple retelling of the Pilgrims' journey and first Thanksgiving." },
        { title: "Thanksgiving Is for Giving Thanks", author: "Margaret Sutherland", year: 2000, description: "A book about being thankful for the things we have." },
        { title: "The Very First Thanksgiving Day", author: "Rhonda Gowler Greene", year: 2002, description: "A rhyming story about the first Thanksgiving celebration." },
        
        // Easter Books
        { title: "The Tale of Peter Rabbit", author: "Beatrix Potter", year: 1902, description: "A naughty rabbit's adventure in Mr. McGregor's garden." },
        { title: "The Velveteen Rabbit", author: "Margery Williams", year: 1922, description: "A stuffed rabbit's journey to becoming real through love." },
        { title: "The Runaway Bunny", author: "Margaret Wise Brown", year: 1942, description: "A mother\'s unconditional love for her little bunny." },
        { title: "The Country Bunny and the Little Gold Shoes", author: "DuBose Heyward", year: 1939, description: "A story about a country bunny who becomes one of the five Easter Bunnies." },
        { title: "The Easter Egg", author: "Jan Brett", year: 2010, description: "A young rabbit's quest to create the most beautiful Easter egg." },
        
        // Valentine's Day Books
        { title: "The Valentine Bears", author: "Eve Bunting", year: 1983, description: "Two bears' Valentine's Day celebration after waking from hibernation." },
        { title: "Somebody Loves You, Mr. Hatch", author: "Eileen Spinelli", year: 1991, description: "A lonely man\'s life changes when he receives a mysterious Valentine." },
        { title: "Love You Forever", author: "Robert Munsch", year: 1986, description: "A heartwarming story about the enduring love between a parent and child." },
        { title: "Guess How Much I Love You", author: "Sam McBratney", year: 1994, description: "A sweet bedtime story about expressing love." },
        { title: "The Day It Rained Hearts", author: "Felicia Bond", year: 1983, description: "A young girl\'s creative way of making Valentine's Day cards." }
    ],

    "Animal Books": [
        // Classic Animal Stories
        { title: "Black Beauty", author: "Anna Sewell", year: 1877, description: "The autobiography of a horse, telling the story of his life from his own perspective." },
        { title: "The Call of the Wild", author: "Jack London", year: 1903, description: "A domesticated dog\'s journey back to his wild instincts in the Yukon." },
        { title: "White Fang", author: "Jack London", year: 1906, description: "A wolf-dog's story of survival and eventual domestication in the harsh wilderness." },
        { title: "Bambi", author: "Felix Salten", year: 1923, description: "The life story of a young deer growing up in the forest." },
        { title: "The Jungle Book", author: "Rudyard Kipling", year: 1894, description: "Mowgli's adventures with the animals of the Indian jungle." },
        { title: "Just So Stories", author: "Rudyard Kipling", year: 1902, description: "A collection of origin stories explaining how animals got their distinctive features." },
        { title: "The Wind in the Willows", author: "Kenneth Grahame", year: 1908, description: "The adventures of Mole, Rat, Toad, and Badger in the English countryside." },
        { title: "Watership Down", author: "Richard Adams", year: 1972, description: "A group of rabbits' epic journey to find a new home." },
        { title: "The Tale of Peter Rabbit", author: "Beatrix Potter", year: 1902, description: "A naughty rabbit's adventure in Mr. McGregor's garden." },
        { title: "The Tale of Squirrel Nutkin", author: "Beatrix Potter", year: 1903, description: "A cheeky squirrel's adventures with Old Brown the owl." },
        
        // Modern Animal Stories
        { title: "Charlotte's Web", author: "E.B. White", year: 1952, description: "A heartwarming story about friendship between a pig named Wilbur and a spider named Charlotte." },
        { title: "Stuart Little", author: "E.B. White", year: 1945, description: "The adventures of a small mouse born to human parents." },
        { title: "The Trumpet of the Swan", author: "E.B. White", year: 1970, description: "A mute swan's journey to find his voice and win the love of a beautiful swan." },
        { title: "Where the Red Fern Grows", author: "Wilson Rawls", year: 1961, description: "A boy\'s bond with his two hunting dogs in the Ozark Mountains." },
        { title: "Old Yeller", author: "Fred Gipson", year: 1956, description: "A boy\'s friendship with a stray dog in post-Civil War Texas." },
        { title: "Sounder", author: "William H. Armstrong", year: 1969, description: "A young African American boy\'s relationship with his family's dog during the Great Depression." },
        { title: "The Incredible Journey", author: "Sheila Burnford", year: 1961, description: "Three pets' incredible journey to find their way home." },
        { title: "Because of Winn-Dixie", author: "Kate DiCamillo", year: 2000, description: "A young girl\'s life changes when she adopts a stray dog." },
        { title: "The One and Only Ivan", author: "Katherine Applegate", year: 2012, description: "A silverback gorilla's story of captivity and friendship in a shopping mall." },
        { title: "The Art of Racing in the Rain", author: "Garth Stein", year: 2008, description: "A dog\'s philosophical observations about life, love, and racing." },
        
        // Farm Animals
        { title: "Animal Farm", author: "George Orwell", year: 1945, description: "A satirical allegory about farm animals who rebel against their human farmer." },
        { title: "Babe: The Gallant Pig", author: "Dick King-Smith", year: 1983, description: "A pig's dream of becoming a sheepdog." },
        { title: "The Sheep-Pig", author: "Dick King-Smith", year: 1983, description: "A pig's determination to become a sheepdog despite the odds." },
        { title: "Click, Clack, Moo: Cows That Type", author: "Doreen Cronin", year: 2000, description: "Farm animals who learn to type and demand better working conditions." },
        { title: "Giggle, Giggle, Quack", author: "Doreen Cronin", year: 2002, description: "Duck's mischievous antics when Farmer Brown goes on vacation." },
        
        // Wild Animals
        { title: "Born Free", author: "Joy Adamson", year: 1960, description: "The true story of Elsa the lioness and her return to the wild." },
        { title: "Gorillas in the Mist", author: "Dian Fossey", year: 1983, description: "A primatologist's study of mountain gorillas in Rwanda." },
        { title: "The Elephant Whisperer", author: "Lawrence Anthony", year: 2009, description: "A conservationist's bond with a herd of wild elephants." },
        { title: "The Last Rhinos", author: "Lawrence Anthony", year: 2012, description: "Efforts to save the last northern white rhinos from extinction." },
        { title: "The Soul of an Octopus", author: "Sy Montgomery", year: 2015, description: "A naturalist's exploration of octopus intelligence and consciousness." },
        
        // Pets and Companions
        { title: "Marley & Me", author: "John Grogan", year: 2005, description: "A family's life with their lovable but troublesome Labrador retriever." },
        { title: "A Dog's Purpose", author: "W. Bruce Cameron", year: 2010, description: "A dog\'s journey through multiple lives to find his purpose." },
        { title: "Dewey: The Small-Town Library Cat Who Touched the World", author: "Vicki Myron", year: 2008, description: "A kitten's impact on a small Iowa town library." },
        { title: "Homer's Odyssey", author: "Gwen Cooper", year: 2009, description: "A blind cat\'s extraordinary life and the lessons he teaches his human." },
        { title: "The Cat Who Came for Christmas", author: "Cleveland Amory", year: 1987, description: "A man\'s unexpected friendship with a stray cat." },
        
        // Marine Animals
        { title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, description: "An aging fisherman's epic struggle with a giant marlin." },
        { title: "Moby-Dick", author: "Herman Melville", year: 1851, description: "Captain Ahab\'s obsessive quest to hunt the white whale." },
        { title: "Twenty Thousand Leagues Under the Sea", author: "Jules Verne", year: 1870, description: "An underwater adventure aboard Captain Nemo's submarine." },
        { title: "The Sea Around Us", author: "Rachel Carson", year: 1951, description: "A scientific exploration of the world\'s oceans and marine life." },
        { title: "The Soul of an Octopus", author: "Sy Montgomery", year: 2015, description: "A naturalist's exploration of octopus intelligence and consciousness." },
        
        // Birds
        { title: "Jonathan Livingston Seagull", author: "Richard Bach", year: 1970, description: "A seagull's quest for perfection and meaning in flight." },
        { title: "The Peregrine", author: "J.A. Baker", year: 1967, description: "A naturalist's detailed observations of peregrine falcons." },
        { title: "H is for Hawk", author: "Helen Macdonald", year: 2014, description: "A woman\'s journey of grief and healing through training a goshawk." },
        { title: "The Big Year", author: "Mark Obmascik", year: 2004, description: "Three birders' competition to see the most bird species in one year." },
        { title: "The Genius of Birds", author: "Jennifer Ackerman", year: 2016, description: "An exploration of bird intelligence and behavior." }
    ],

    "Self Help": [
        // Classic Self-Help
        { title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936, description: "The classic guide to building relationships and improving communication skills." },
        { title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, description: "A guide to achieving wealth and success through positive thinking and goal setting." },
        { title: "The Power of Positive Thinking", author: "Norman Vincent Peale", year: 1952, description: "A guide to overcoming negative thoughts and achieving personal success." },
        { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989, description: "A framework for personal and professional effectiveness through seven key habits." },
        { title: "Awaken the Giant Within", author: "Tony Robbins", year: 1991, description: "A guide to taking control of your mental, emotional, physical, and financial destiny." },
        
        // Productivity and Success
        { title: "Getting Things Done", author: "David Allen", year: 2001, description: "A productivity system for organizing tasks and achieving stress-free productivity." },
        { title: "The 4-Hour Workweek", author: "Tim Ferriss", year: 2007, description: "A guide to escaping the 9-5, living anywhere, and joining the new rich." },
        { title: "Atomic Habits", author: "James Clear", year: 2018, description: "A guide to building good habits and breaking bad ones through small changes." },
        { title: "Deep Work", author: "Cal Newport", year: 2016, description: "Rules for focused success in a distracted world." },
        { title: "The Lean Startup", author: "Eric Ries", year: 2011, description: "A methodology for developing businesses and products through validated learning." },
        
        // Mindfulness and Mental Health
        { title: "The Power of Now", author: "Eckhart Tolle", year: 1997, description: "A guide to spiritual enlightenment through present-moment awareness." },
        { title: "Mindfulness in Plain English", author: "Bhante Henepola Gunaratana", year: 1992, description: "A practical guide to meditation and mindfulness practice." },
        { title: "Wherever You Go, There You Are", author: "Jon Kabat-Zinn", year: 1994, description: "Mindfulness meditation in everyday life." },
        { title: "The Untethered Soul", author: "Michael A. Singer", year: 2007, description: "A guide to spiritual growth and inner freedom." },
        { title: "Radical Acceptance", author: "Tara Brach", year: 2003, description: "Embracing your life with the heart of a Buddha." },
        
        // Relationships and Communication
        { title: "The 5 Love Languages", author: "Gary Chapman", year: 1992, description: "The secret to love that lasts by understanding how people express and receive love." },
        { title: "Men Are from Mars, Women Are from Venus", author: "John Gray", year: 1992, description: "A guide to understanding the differences between men and women in relationships." },
        { title: "Crucial Conversations", author: "Kerry Patterson", year: 2002, description: "Tools for talking when stakes are high." },
        { title: "Nonviolent Communication", author: "Marshall B. Rosenberg", year: 2003, description: "A language of life for creating connections and resolving conflicts." },
        { title: "Boundaries", author: "Henry Cloud", year: 1992, description: "When to say yes, how to say no to take control of your life." },
        
        // Financial Success
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997, description: "What the rich teach their kids about money that the poor and middle class do not." },
        { title: "The Millionaire Next Door", author: "Thomas J. Stanley", year: 1996, description: "The surprising secrets of America\'s wealthy." },
        { title: "Your Money or Your Life", author: "Vicki Robin", year: 1992, description: "9 steps to transforming your relationship with money and achieving financial independence." },
        { title: "The Total Money Makeover", author: "Dave Ramsey", year: 2003, description: "A proven plan for financial fitness." },
        { title: "I Will Teach You to Be Rich", author: "Ramit Sethi", year: 2009, description: "A 6-week program for young adults to master money." },
        
        // Health and Wellness
        { title: "The Blue Zones", author: "Dan Buettner", year: 2008, description: "Lessons for living longer from the people who've lived the longest." },
        { title: "Why We Sleep", author: "Matthew Walker", year: 2017, description: "Unlocking the power of sleep and dreams." },
        { title: "The China Study", author: "T. Colin Campbell", year: 2005, description: "The most comprehensive study of nutrition ever conducted." },
        { title: "Born to Run", author: "Christopher McDougall", year: 2009, description: "A hidden tribe, superathletes, and the greatest race the world has never seen." },
        { title: "The Body Keeps the Score", author: "Bessel van der Kolk", year: 2014, description: "Brain, mind, and body in the healing of trauma." },
        
        // Personal Development
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016, description: "A counterintuitive approach to living a good life." },
        { title: "You Are a Badass", author: "Jen Sincero", year: 2013, description: "How to stop doubting your greatness and start living an awesome life." },
        { title: "Big Magic", author: "Elizabeth Gilbert", year: 2015, description: "Creative living beyond fear." },
        { title: "The Gifts of Imperfection", author: "Brené Brown", year: 2010, description: "Let go of who you think you're supposed to be and embrace who you are." },
        { title: "Daring Greatly", author: "Brené Brown", year: 2012, description: "How the courage to be vulnerable transforms the way we live, love, parent, and lead." },
        
        // Motivation and Inspiration
        { title: "The Secret", author: "Rhonda Byrne", year: 2006, description: "The law of attraction and how to use it to create the life you want." },
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988, description: "A fable about following your dreams and listening to your heart." },
        { title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: 1946, description: "A psychiatrist's experiences in Nazi death camps and his psychotherapeutic method." },
        { title: "The Road Less Traveled", author: "M. Scott Peck", year: 1978, description: "A new psychology of love, traditional values, and spiritual growth." },
        { title: "The Four Agreements", author: "Don Miguel Ruiz", year: 1997, description: "A practical guide to personal freedom based on ancient Toltec wisdom." }
    ],

    "Music & Movies": [
        // Music Biographies and Memoirs
        { title: "Life", author: "Keith Richards", year: 2010, description: "The Rolling Stones guitarist's candid autobiography about rock and roll, drugs, and survival." },
        { title: "Chronicles: Volume One", author: "Bob Dylan", year: 2004, description: "Bob Dylan's personal account of his early years and musical journey." },
        { title: "Just Kids", author: "Patti Smith", year: 2010, description: "Patti Smith's memoir about her relationship with photographer Robert Mapplethorpe and life in 1970s New York." },
        { title: "Born to Run", author: "Bruce Springsteen", year: 2016, description: "The Boss's autobiography about his life, music, and the American dream." },
        { title: "Me", author: "Elton John", year: 2019, description: "Elton John\'s candid memoir about his extraordinary life and career." },
        { title: "The Beatles", author: "Hunter Davies", year: 1968, description: "The only authorized biography of The Beatles during their active years." },
        { title: "Cash: The Autobiography", author: "Johnny Cash", year: 1997, description: "The Man in Black's story of his life, music, and struggles." },
        { title: "Miles: The Autobiography", author: "Miles Davis", year: 1989, description: "The legendary jazz trumpeter's story of his life and musical evolution." },
        { title: "Girl in a Band", author: "Kim Gordon", year: 2015, description: "Sonic Youth bassist's memoir about music, art, and life in the alternative scene." },
        { title: "Heavier Than Heaven", author: "Charles R. Cross", year: 2001, description: "A biography of Kurt Cobain and the rise of Nirvana." },
        
        // Music History and Analysis
        { title: "The Rest Is Noise", author: "Alex Ross", year: 2007, description: "Listening to the twentieth century through classical music." },
        { title: "How Music Works", author: "David Byrne", year: 2012, description: "The Talking Heads frontman's exploration of music's creation, performance, and consumption." },
        { title: "This Is Your Brain on Music", author: "Daniel J. Levitin", year: 2006, description: "The science of a human obsession and how music affects our brains." },
        { title: "The History of Rock 'n' Roll in Ten Songs", author: "Greil Marcus", year: 2014, description: "A cultural history of rock music through ten transformative songs." },
        { title: "Love Is a Mix Tape", author: "Rob Sheffield", year: 2007, description: "Life and loss, one song at a time - a music critic's personal story." },
        
        // Movie Biographies and Memoirs
        { title: "The Kid Stays in the Picture", author: "Robert Evans", year: 1994, description: "The legendary Hollywood producer's memoir about his life in the movie business." },
        { title: "As You Wish", author: "Cary Elwes", year: 2014, description: "Inconceivable tales from the making of The Princess Bride." },
        { title: "The Disaster Artist", author: "Greg Sestero", year: 2013, description: "My life inside The Room, the greatest bad movie ever made." },
        { title: "Rebel Without a Crew", author: "Robert Rodriguez", year: 1995, description: "How a 23-year-old filmmaker with $7,000 became a Hollywood player." },
        { title: "Making Movies", author: "Sidney Lumet", year: 1995, description: "The legendary director's guide to filmmaking and the art of cinema." },
        { title: "Adventures in the Screen Trade", author: "William Goldman", year: 1983, description: "A personal view of Hollywood and screenwriting." },
        { title: "Which Lie Did I Tell?", author: "William Goldman", year: 2000, description: "More adventures in the screen trade." },
        { title: "The Big Picture", author: "Ben Fritz", year: 2018, description: "The fight for the future of movies." },
        { title: "Easy Riders, Raging Bulls", author: "Peter Biskind", year: 1998, description: "How the sex, drugs, and rock 'n' roll generation saved Hollywood." },
        { title: "Down and Dirty Pictures", author: "Peter Biskind", year: 2004, description: "Miramax, Sundance, and the rise of independent film." },
        
        // Film History and Analysis
        { title: "The Story of Film", author: "Mark Cousins", year: 2004, description: "An odyssey through the history of world cinema." },
        { title: "Film Art", author: "David Bordwell", year: 2019, description: "An introduction to film analysis and appreciation." },
        { title: "The Cinema of Stanley Kubrick", author: "Norman Kagan", year: 2000, description: "A comprehensive analysis of Kubrick's films and techniques." },
        { title: "Hitchcock", author: "François Truffaut", year: 1967, description: "The definitive book-length interview with the master of suspense." },
        { title: "The Godfather Effect", author: "Tom Santopietro", year: 2012, description: "Changing Hollywood, America, and me." },
        
        // Entertainment Industry
        { title: "The Big Short", author: "Michael Lewis", year: 2010, description: "Inside the doomsday machine of Wall Street and the entertainment industry." },
        { title: "The Hollywood Economist", author: "Edward Jay Epstein", year: 2010, description: "The hidden financial reality behind the movies." },
        { title: "Hit Makers", author: "Derek Thompson", year: 2017, description: "The science of popularity in an age of distraction." },
        { title: "The Entertainment Industry", author: "Harold L. Vogel", year: 2014, description: "Economics of digital media, entertainment, and sports." },
        { title: "Blockbusters", author: "Anita Elberse", year: 2013, description: "Hit-making, risk-taking, and the big business of entertainment." }
    ],

    "History": [
        // Ancient History
        { title: "The Histories", author: "Herodotus", year: "440 BCE", description: "The father of history's account of the Greco-Persian Wars and ancient civilizations." },
        { title: "The Peloponnesian War", author: "Thucydides", year: "431 BCE", description: "A detailed account of the war between Athens and Sparta." },
        { title: "The Rise and Fall of the Roman Empire", author: "Edward Gibbon", year: 1776, description: "A comprehensive history of the Roman Empire from its height to its decline." },
        { title: "SPQR", author: "Mary Beard", year: 2015, description: "A history of ancient Rome from its founding to the fall of the Republic." },
        { title: "The Ancient World", author: "Susan Wise Bauer", year: 2007, description: "A comprehensive history of the ancient world from the earliest civilizations." },
        { title: "The History of the Ancient World", author: "Susan Wise Bauer", year: 2007, description: "From the earliest accounts to the fall of Rome." },
        { title: "The Fall of Rome", author: "Bryan Ward-Perkins", year: 2005, description: "And the end of civilization - examining the collapse of the Western Roman Empire." },
        { title: "The Twelve Caesars", author: "Suetonius", year: "121 CE", description: "Biographies of the first twelve Roman emperors." },
        { title: "The Decline and Fall of the Roman Empire", author: "Edward Gibbon", year: 1776, description: "A monumental work on the fall of the Roman Empire." },
        { title: "The Ancient Near East", author: "Amélie Kuhrt", year: 1995, description: "A comprehensive history of the ancient Near East from 3000 BCE to 330 BCE." },
        
        // Medieval History
        { title: "The Middle Ages", author: "Morris Bishop", year: 1968, description: "A comprehensive overview of medieval European history." },
        { title: "The Time Traveler's Guide to Medieval England", author: "Ian Mortimer", year: 2008, description: "A handbook for visitors to the fourteenth century." },
        { title: "The Crusades", author: "Thomas Asbridge", year: 2010, description: "The authoritative history of the war for the Holy Land." },
        { title: "The Black Death", author: "Philip Ziegler", year: 1969, description: "A social history of the plague that devastated medieval Europe." },
        { title: "The Norman Conquest", author: "Marc Morris", year: 2012, description: "The battle of Hastings and the fall of Anglo-Saxon England." },
        { title: "The Plantagenets", author: "Dan Jones", year: 2012, description: "The warrior kings and queens who made England." },
        { title: "The Wars of the Roses", author: "Alison Weir", year: 1995, description: "The fall of the Plantagenets and the rise of the Tudors." },
        { title: "The Hundred Years War", author: "Jonathan Sumption", year: 1990, description: "A comprehensive history of the conflict between England and France." },
        { title: "The Medieval World", author: "Peter Linehan", year: 2001, description: "An illustrated history of medieval Europe." },
        { title: "The Age of Faith", author: "Will Durant", year: 1950, description: "A history of medieval civilization and the Christian world." },
        
        // Modern History
        { title: "The Renaissance", author: "Paul Johnson", year: 2000, description: "A short history of the cultural revolution that transformed Europe." },
        { title: "The Reformation", author: "Diarmaid MacCulloch", year: 2003, description: "A history of the religious revolution that divided Europe." },
        { title: "The Age of Revolution", author: "Eric Hobsbawm", year: 1962, description: "Europe 1789-1848 - the age of political and social revolution." },
        { title: "The Age of Capital", author: "Eric Hobsbawm", year: 1975, description: "1848-1875 - the triumph of industrial capitalism." },
        { title: "The Age of Empire", author: "Eric Hobsbawm", year: 1987, description: "1875-1914 - the age of imperialism and world war." },
        { title: "The Age of Extremes", author: "Eric Hobsbawm", year: 1994, description: "The short twentieth century, 1914-1991." },
        { title: "The Second World War", author: "Antony Beevor", year: 2012, description: "A comprehensive history of the global conflict." },
        { title: "The Cold War", author: "John Lewis Gaddis", year: 2005, description: "A new history of the conflict between the United States and the Soviet Union." },
        { title: "The Fall of the Berlin Wall", author: "William F. Buckley Jr.", year: 2004, description: "The end of the Cold War and the reunification of Germany." },
        { title: "The End of History", author: "Francis Fukuyama", year: 1992, description: "And the last man - the triumph of liberal democracy." },
        
        // American History
        { title: "A People's History of the United States", author: "Howard Zinn", year: 1980, description: "A history of the United States from the perspective of ordinary people." },
        { title: "The American Revolution", author: "Gordon S. Wood", year: 2002, description: "A history of the founding of the United States." },
        { title: "The Civil War", author: "Bruce Catton", year: 1960, description: "A comprehensive history of the American Civil War." },
        { title: "The Great Depression", author: "Robert S. McElvaine", year: 1984, description: "America, 1929-1941 - the economic crisis that changed the nation." },
        { title: "The Fifties", author: "David Halberstam", year: 1993, description: "A social history of the 1950s in America." },
        { title: "The Sixties", author: "Todd Gitlin", year: 1987, description: "Years of hope, days of rage - the cultural revolution of the 1960s." },
        { title: "The Seventies", author: "Bruce J. Schulman", year: 2001, description: "The great shift in American culture, society, and politics." },
        { title: "The Eighties", author: "John Ehrman", year: 2005, description: "America in the age of Reagan." },
        { title: "The Nineties", author: "Chuck Klosterman", year: 2022, description: "A cultural history of the 1990s." },
        { title: "The 2000s", author: "Phil Tinline", year: 2021, description: "A decade of change and transformation." },
        
        // World History
        { title: "Guns, Germs, and Steel", author: "Jared Diamond", year: 1997, description: "The fates of human societies - why some civilizations succeeded and others failed." },
        { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, description: "A brief history of humankind from the Stone Age to the present." },
        { title: "Homo Deus", author: "Yuval Noah Harari", year: 2015, description: "A brief history of tomorrow - the future of humanity." },
        { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", year: 2018, description: "A guide to understanding the present and preparing for the future." },
        { title: "The Silk Roads", author: "Peter Frankopan", year: 2015, description: "A new history of the world - the ancient trade routes that connected civilizations." },
        { title: "The New Silk Roads", author: "Peter Frankopan", year: 2018, description: "The present and future of the world - Asia's rise and the new global order." },
        { title: "The World", author: "Simon Sebag Montefiore", year: 2022, description: "A family history of humanity - the story of human civilization." },
        { title: "The History of the World", author: "J.M. Roberts", year: 1976, description: "A comprehensive history of human civilization from ancient times to the present." },
        { title: "The Oxford History of the World", author: "Felipe Fernández-Armesto", year: 2019, description: "A global history of human civilization." },
        { title: "The History of Everything", author: "David Christian", year: 2018, description: "Big history - from the Big Bang to the present." }
    ],

    "Science Fiction": [
        // Classic Science Fiction
        { title: "Dune", author: "Frank Herbert", year: 1965, description: "A sweeping epic set on the desert planet Arrakis, where noble houses battle for control of the universe\'s most valuable resource." },
        { title: "Foundation", author: "Isaac Asimov", year: 1951, description: "The first book in Asimov's Foundation series, following Hari Seldon's psychohistory and the fall of the Galactic Empire." },
        { title: "The Foundation Trilogy", author: "Isaac Asimov", year: 1951, description: "A collection of three novels chronicling the rise and fall of civilizations across the galaxy." },
        { title: "I, Robot", author: "Isaac Asimov", year: 1950, description: "A collection of short stories exploring the relationship between humans and robots through the Three Laws of Robotics." },
        { title: "The Martian Chronicles", author: "Ray Bradbury", year: 1950, description: "A collection of interconnected stories about the colonization of Mars and the fate of humanity." },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, description: "A dystopian novel about a future society where books are banned and firemen burn them." },
        { title: "The War of the Worlds", author: "H.G. Wells", year: 1898, description: "A classic tale of alien invasion and humanity's struggle for survival." },
        { title: "The Time Machine", author: "H.G. Wells", year: 1895, description: "A Victorian inventor's journey to the far future and his discovery of humanity's fate." },
        { title: "20,000 Leagues Under the Sea", author: "Jules Verne", year: 1870, description: "An underwater adventure aboard Captain Nemo's submarine, the Nautilus." },
        { title: "Journey to the Center of the Earth", author: "Jules Verne", year: 1864, description: "A professor's expedition to the Earth's core through volcanic passages." },
        
        // Modern Science Fiction
        { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", year: 1969, description: "A groundbreaking novel about gender and society on a planet where inhabitants can change sex." },
        { title: "The Dispossessed", author: "Ursula K. Le Guin", year: 1974, description: "An anarchist's journey between two worlds - one capitalist, one anarchist - exploring political systems." },
        { title: "Neuromancer", author: "William Gibson", year: 1984, description: "The novel that defined cyberpunk, following a computer hacker in a dystopian future." },
        { title: "Snow Crash", author: "Neal Stephenson", year: 1992, description: "A cyberpunk thriller set in a future where the Metaverse and real world collide." },
        { title: "The Diamond Age", author: "Neal Stephenson", year: 1995, description: "A post-cyberpunk novel about nanotechnology and education in a future society." },
        { title: "Cryptonomicon", author: "Neal Stephenson", year: 1999, description: "A complex tale weaving together World War II cryptography and modern digital currency." },
        { title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985, description: "A dystopian novel about a theocratic society where women are subjugated and used for reproduction." },
        { title: "Oryx and Crake", author: "Margaret Atwood", year: 2003, description: "A post-apocalyptic novel exploring genetic engineering and corporate control." },
        { title: "The Year of the Flood", author: "Margaret Atwood", year: 2009, description: "A companion novel to Oryx and Crake, following survivors of a global pandemic." },
        { title: "MaddAddam", author: "Margaret Atwood", year: 2013, description: "The final book in the MaddAddam trilogy, exploring the aftermath of human civilization's collapse." },
        
        // Space Opera
        { title: "Hyperion", author: "Dan Simmons", year: 1989, description: "A space opera following seven pilgrims on a journey to the mysterious Time Tombs." },
        { title: "The Fall of Hyperion", author: "Dan Simmons", year: 1990, description: "The sequel to Hyperion, continuing the epic tale of the Shrike and the pilgrims." },
        { title: "Endymion", author: "Dan Simmons", year: 1996, description: "The third book in the Hyperion Cantos, following new characters in the far future." },
        { title: "The Rise of Endymion", author: "Dan Simmons", year: 1997, description: "The final book in the Hyperion Cantos, concluding the epic space opera." },
        { title: "The Expanse", author: "James S.A. Corey", year: 2011, description: "The first book in the Expanse series, following humanity's expansion into the solar system." },
        { title: "Caliban's War", author: "James S.A. Corey", year: 2012, description: "The second book in the Expanse series, exploring the consequences of alien technology." },
        { title: "Abaddon's Gate", author: "James S.A. Corey", year: 2013, description: "The third book in the Expanse series, as humanity faces a new threat from beyond the solar system." },
        { title: "Cibola Burn", author: "James S.A. Corey", year: 2014, description: "The fourth book in the Expanse series, following the colonization of new worlds." },
        { title: "Nemesis Games", author: "James S.A. Corey", year: 2015, description: "The fifth book in the Expanse series, as the crew faces personal and galactic challenges." },
        { title: "Babylon's Ashes", author: "James S.A. Corey", year: 2016, description: "The sixth book in the Expanse series, dealing with the aftermath of war." },
        
        // Hard Science Fiction
        { title: "The Martian", author: "Andy Weir", year: 2011, description: "An astronaut's struggle for survival on Mars after being left behind by his crew." },
        { title: "Project Hail Mary", author: "Andy Weir", year: 2021, description: "A lone astronaut's mission to save humanity from an alien threat." },
        { title: "Artemis", author: "Andy Weir", year: 2017, description: "A heist story set on the moon, following a smuggler's attempt to pull off the perfect crime." },
        { title: "The Three-Body Problem", author: "Liu Cixin", year: 2008, description: "A Chinese science fiction novel exploring first contact with an alien civilization." },
        { title: "The Dark Forest", author: "Liu Cixin", year: 2008, description: "The sequel to The Three-Body Problem, exploring the dark forest theory of cosmic sociology." },
        { title: "Death's End", author: "Liu Cixin", year: 2010, description: "The final book in the Three-Body Problem trilogy, spanning millions of years of human history." },
        { title: "Rendezvous with Rama", author: "Arthur C. Clarke", year: 1973, description: "A mysterious cylindrical object enters the solar system, and humanity must explore it." },
        { title: "2001: A Space Odyssey", author: "Arthur C. Clarke", year: 1968, description: "A journey from the dawn of man to the stars, exploring evolution and artificial intelligence." },
        { title: "2010: Odyssey Two", author: "Arthur C. Clarke", year: 1982, description: "The sequel to 2001, following a joint American-Soviet mission to Jupiter." },
        { title: "2061: Odyssey Three", author: "Arthur C. Clarke", year: 1987, description: "The third book in the Odyssey series, exploring the transformed Jupiter system." },
        
        // Dystopian Science Fiction
        { title: "1984", author: "George Orwell", year: 1949, description: "A dystopian novel about totalitarian control, surveillance, and the manipulation of truth." },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932, description: "A dystopian novel about a future society where happiness is achieved through genetic engineering and social conditioning." },
        { title: "We", author: "Yevgeny Zamyatin", year: 1924, description: "A Russian dystopian novel that influenced both 1984 and Brave New World." },
        { title: "The Giver", author: "Lois Lowry", year: 1993, description: "A young adult dystopian novel about a society where emotions and memories are controlled." },
        { title: "Gathering Blue", author: "Lois Lowry", year: 2000, description: "A companion novel to The Giver, exploring another dystopian society." },
        { title: "Messenger", author: "Lois Lowry", year: 2004, description: "The third book in The Giver quartet, following characters from the previous novels." },
        { title: "Son", author: "Lois Lowry", year: 2012, description: "The final book in The Giver quartet, bringing together characters from all previous novels." },
        { title: "The Hunger Games", author: "Suzanne Collins", year: 2008, description: "A dystopian novel about a young woman\'s fight for survival in a televised death match." },
        { title: "Catching Fire", author: "Suzanne Collins", year: 2009, description: "The sequel to The Hunger Games, as Katniss becomes a symbol of rebellion." },
        { title: "Mockingjay", author: "Suzanne Collins", year: 2010, description: "The final book in The Hunger Games trilogy, as the rebellion reaches its climax." }
    ],

    "Young Adult": [
        // Fantasy YA
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, description: "A young wizard discovers his magical heritage and attends Hogwarts School." },
        { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", year: 1998, description: "Harry\'s second year at Hogwarts brings new dangers and mysteries." },
        { title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", year: 1999, description: "Harry learns about his parents' past and faces a dangerous prisoner." },
        { title: "Harry Potter and the Goblet of Fire", author: "J.K. Rowling", year: 2000, description: "Harry competes in the dangerous Triwizard Tournament." },
        { title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling", year: 2003, description: "Harry faces government corruption and forms Dumbledore\'s Army." },
        { title: "Harry Potter and the Half-Blood Prince", author: "J.K. Rowling", year: 2005, description: "Harry learns about Voldemort\'s past and prepares for the final battle." },
        { title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", year: 2007, description: "Harry\'s final quest to destroy Voldemort and save the wizarding world." },
        
        // Dystopian YA
        { title: "Divergent", author: "Veronica Roth", year: 2011, description: "In a society divided into factions, Tris discovers she's Divergent." },
        { title: "Insurgent", author: "Veronica Roth", year: 2012, description: "Tris fights against the faction system that's tearing society apart." },
        { title: "Allegiant", author: "Veronica Roth", year: 2013, description: "Tris and Tobias discover the truth about their society's origins." },
        { title: "The Maze Runner", author: "James Dashner", year: 2009, description: "Thomas wakes up in a maze with no memory and must find a way out." },
        { title: "The Scorch Trials", author: "James Dashner", year: 2010, description: "Thomas and his friends face new challenges in the scorched wasteland." },
        { title: "The Death Cure", author: "James Dashner", year: 2011, description: "Thomas leads the final fight against WICKED and the Flare virus." },
        
        // Contemporary YA
        { title: "The Fault in Our Stars", author: "John Green", year: 2012, description: "A love story between two teenagers who meet in a cancer support group." },
        { title: "Looking for Alaska", author: "John Green", year: 2005, description: "A coming-of-age story about friendship, love, and loss at boarding school." },
        { title: "Paper Towns", author: "John Green", year: 2008, description: "A mystery about a boy\'s quest to find his missing neighbor." },
        { title: "An Abundance of Katherines", author: "John Green", year: 2006, description: "A road trip story about a boy who's been dumped by 19 girls named Katherine." },
        { title: "Will Grayson, Will Grayson", author: "John Green & David Levithan", year: 2010, description: "Two boys with the same name whose lives intersect in unexpected ways." },
        
        // Romance YA
        { title: "To All the Boys I've Loved Before", author: "Jenny Han", year: 2014, description: "Lara Jean's secret love letters are accidentally sent to her crushes." },
        { title: "P.S. I Still Love You", author: "Jenny Han", year: 2015, description: "Lara Jean navigates her new relationship with Peter and an old crush." },
        { title: "Always and Forever, Lara Jean", author: "Jenny Han", year: 2017, description: "Lara Jean faces the challenges of senior year and college decisions." },
        { title: "The Summer I Turned Pretty", author: "Jenny Han", year: 2009, description: "Belly's summer at the beach house changes everything about her relationships." },
        { title: "It's Not Summer Without You", author: "Jenny Han", year: 2010, description: "Belly deals with loss and complicated feelings during another summer." },
        { title: "We'll Always Have Summer", author: "Jenny Han", year: 2011, description: "Belly must choose between two brothers and her own happiness." },
        
        // Fantasy YA
        { title: "Twilight", author: "Stephenie Meyer", year: 2005, description: "A love story between a human girl and a vampire in a small town." },
        { title: "New Moon", author: "Stephenie Meyer", year: 2006, description: "Bella faces life without Edward and discovers new dangers." },
        { title: "Eclipse", author: "Stephenie Meyer", year: 2007, description: "Bella must choose between Edward and Jacob as danger approaches." },
        { title: "Breaking Dawn", author: "Stephenie Meyer", year: 2008, description: "Bella's transformation and the final battle for her family." },
        { title: "The Selection", author: "Kiera Cass", year: 2012, description: "America Singer competes to become the next queen in a dystopian society." },
        { title: "The Elite", author: "Kiera Cass", year: 2013, description: "America must choose between love and duty in the Selection." },
        { title: "The One", author: "Kiera Cass", year: 2014, description: "America\'s final choice in the Selection will change everything." },
        
        // Contemporary Issues YA
        { title: "Thirteen Reasons Why", author: "Jay Asher", year: 2007, description: "Clay receives cassette tapes from his classmate who committed suicide." },
        { title: "Speak", author: "Laurie Halse Anderson", year: 1999, description: "Melinda struggles to find her voice after a traumatic experience." },
        { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", year: 1999, description: "Charlie's letters about his freshman year of high school." },
        { title: "Eleanor & Park", author: "Rainbow Rowell", year: 2013, description: "A love story between two misfit teenagers in 1980s Omaha." },
        { title: "Fangirl", author: "Rainbow Rowell", year: 2013, description: "Cath navigates college life while writing fanfiction about her favorite series." },
        { title: "Carry On", author: "Rainbow Rowell", year: 2015, description: "A fantasy novel about magic, friendship, and unexpected love." },
        
        // Adventure YA
        { title: "Percy Jackson and the Lightning Thief", author: "Rick Riordan", year: 2005, description: "A demigod discovers his heritage and goes on a quest to prevent war." },
        { title: "The Sea of Monsters", author: "Rick Riordan", year: 2006, description: "Percy must save Camp Half-Blood and find the Golden Fleece." },
        { title: "The Titan's Curse", author: "Rick Riordan", year: 2007, description: "Percy and his friends face the Titan's curse and rescue Artemis." },
        { title: "The Battle of the Labyrinth", author: "Rick Riordan", year: 2008, description: "Percy navigates Daedalus's labyrinth to prevent an invasion." },
        { title: "The Last Olympian", author: "Rick Riordan", year: 2009, description: "Percy leads the final battle to save Mount Olympus." },
        
        // Sci-Fi YA
        { title: "Ender's Game", author: "Orson Scott Card", year: 1985, description: "A young boy is trained to lead Earth's defense against alien invasion." },
        { title: "Speaker for the Dead", author: "Orson Scott Card", year: 1986, description: "Ender Wiggin becomes a Speaker for the Dead on a distant planet." },
        { title: "Xenocide", author: "Orson Scott Card", year: 1991, description: "Ender faces the ultimate choice about the fate of an alien species." },
        { title: "Children of the Mind", author: "Orson Scott Card", year: 1996, description: "Ender's final adventure as he faces his own mortality." },
        
        // Mystery YA
        { title: "One of Us Is Lying", author: "Karen M. McManus", year: 2017, description: "Five students enter detention, but only four leave alive." },
        { title: "One of Us Is Next", author: "Karen M. McManus", year: 2020, description: "A new game of truth or dare turns deadly at Bayview High." },
        { title: "The Cousins", author: "Karen M. McManus", year: 2020, description: "Three cousins are summoned to their grandmother's island estate." },
        { title: "Two Can Keep a Secret", author: "Karen M. McManus", year: 2019, description: "A small town with dark secrets and a new girl who's determined to uncover them." }
    ],

    "Thriller & Suspense": [
        // Psychological Thrillers
        { title: "Gone Girl", author: "Gillian Flynn", year: 2012, description: "A woman disappears on her fifth wedding anniversary, and her husband becomes the prime suspect." },
        { title: "Sharp Objects", author: "Gillian Flynn", year: 2006, description: "A journalist returns to her hometown to cover a series of murders." },
        { title: "Dark Places", author: "Gillian Flynn", year: 2009, description: "A woman investigates her family's murder 25 years after the crime." },
        { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015, description: "A woman becomes entangled in a missing person investigation." },
        { title: "Into the Water", author: "Paula Hawkins", year: 2017, description: "A small town is rocked by multiple deaths in a local river." },
        
        // Crime Thrillers
        { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005, description: "A journalist and a hacker investigate a decades-old disappearance." },
        { title: "The Girl Who Played with Fire", author: "Stieg Larsson", year: 2006, description: "Lisbeth Salander becomes the prime suspect in a triple murder." },
        { title: "The Girl Who Kicked the Hornet's Nest", author: "Stieg Larsson", year: 2007, description: "Lisbeth faces trial while Mikael works to clear her name." },
        { title: "The Silence of the Lambs", author: "Thomas Harris", year: 1988, description: "An FBI trainee seeks help from a cannibalistic serial killer." },
        { title: "Red Dragon", author: "Thomas Harris", year: 1981, description: "Will Graham hunts a serial killer known as the Tooth Fairy." },
        { title: "Hannibal", author: "Thomas Harris", year: 1999, description: "Hannibal Lecter's past catches up with him in Florence." },
        
        // Legal Thrillers
        { title: "The Firm", author: "John Grisham", year: 1991, description: "A young lawyer discovers his law firm is involved in criminal activities." },
        { title: "The Pelican Brief", author: "John Grisham", year: 1992, description: "A law student uncovers a conspiracy that puts her life in danger." },
        { title: "The Client", author: "John Grisham", year: 1993, description: "An 11-year-old boy witnesses a suicide and becomes a target." },
        { title: "A Time to Kill", author: "John Grisham", year: 1989, description: "A young lawyer defends a black man who killed two white men who raped his daughter." },
        { title: "The Rainmaker", author: "John Grisham", year: 1995, description: "A young lawyer takes on a powerful insurance company." },
        
        // Political Thrillers
        { title: "The Da Vinci Code", author: "Dan Brown", year: 2003, description: "A symbologist and cryptologist uncover a conspiracy involving the Catholic Church." },
        { title: "Angels & Demons", author: "Dan Brown", year: 2000, description: "Robert Langdon races against time to prevent a terrorist attack on the Vatican." },
        { title: "The Lost Symbol", author: "Dan Brown", year: 2009, description: "Langdon investigates the disappearance of his mentor in Washington D.C." },
        { title: "Inferno", author: "Dan Brown", year: 2013, description: "Langdon wakes up in Florence with amnesia and must solve a mystery." },
        { title: "Origin", author: "Dan Brown", year: 2017, description: "Langdon attends a presentation that will change the world forever." },
        
        // Domestic Thrillers
        { title: "The Wife Between Us", author: "Greer Hendricks & Sarah Pekkanen", year: 2018, description: "A psychological thriller about marriage, obsession, and revenge." },
        { title: "An Anonymous Girl", author: "Greer Hendricks & Sarah Pekkanen", year: 2019, description: "A woman becomes involved in a psychological study that turns dangerous." },
        { title: "You Are Not Alone", author: "Greer Hendricks & Sarah Pekkanen", year: 2020, description: "A woman\'s life changes when she witnesses a suicide." },
        { title: "The Silent Patient", author: "Alex Michaelides", year: 2019, description: "A psychotherapist becomes obsessed with a patient who refuses to speak." },
        { title: "The Maidens", author: "Alex Michaelides", year: 2021, description: "A group therapist investigates murders at Cambridge University." },
        
        // Military Thrillers
        { title: "The Hunt for Red October", author: "Tom Clancy", year: 1984, description: "A Soviet submarine captain defects to the United States." },
        { title: "Patriot Games", author: "Tom Clancy", year: 1987, description: "Jack Ryan becomes a target of the IRA after foiling a terrorist attack." },
        { title: "The Cardinal of the Kremlin", author: "Tom Clancy", year: 1988, description: "Ryan investigates Soviet missile defense systems." },
        { title: "Clear and Present Danger", author: "Tom Clancy", year: 1989, description: "Ryan uncovers a secret war against Colombian drug cartels." },
        { title: "The Sum of All Fears", author: "Tom Clancy", year: 1991, description: "Ryan must prevent a nuclear war between the US and Russia." },
        
        // Medical Thrillers
        { title: "Coma", author: "Robin Cook", year: 1977, description: "A medical student investigates mysterious comas at her hospital." },
        { title: "Outbreak", author: "Robin Cook", year: 1987, description: "A deadly virus threatens to spread across the United States." },
        { title: "Contagion", author: "Robin Cook", year: 1995, description: "A medical thriller about a deadly disease and its origins." },
        { title: "Crisis", author: "Robin Cook", year: 2006, description: "A medical examiner investigates suspicious deaths at a hospital." },
        
        // Techno Thrillers
        { title: "Digital Fortress", author: "Dan Brown", year: 1998, description: "A cryptographer races to stop a computer virus that threatens national security." },
        { title: "Deception Point", author: "Dan Brown", year: 2001, description: "A NASA discovery becomes the center of a political conspiracy." },
        { title: "The Andromeda Strain", author: "Michael Crichton", year: 1969, description: "Scientists race to contain a deadly alien microorganism." },
        { title: "Jurassic Park", author: "Michael Crichton", year: 1990, description: "A theme park with cloned dinosaurs becomes a deadly trap." },
        { title: "The Lost World", author: "Michael Crichton", year: 1995, description: "Scientists return to the island where dinosaurs were created." },
        
        // International Thrillers
        { title: "The Bourne Identity", author: "Robert Ludlum", year: 1980, description: "A man with amnesia discovers he's a trained assassin." },
        { title: "The Bourne Supremacy", author: "Robert Ludlum", year: 1986, description: "Jason Bourne is framed for murder and must clear his name." },
        { title: "The Bourne Ultimatum", author: "Robert Ludlum", year: 1990, description: "Bourne faces his final confrontation with his past." },
        { title: "The Matarese Circle", author: "Robert Ludlum", year: 1979, description: "Two enemies must work together to stop a global conspiracy." },
        
        // Supernatural Thrillers
        { title: "The Shining", author: "Stephen King", year: 1977, description: "A writer becomes caretaker of a haunted hotel during the winter." },
        { title: "Pet Sematary", author: "Stephen King", year: 1983, description: "A family discovers a burial ground that brings the dead back to life." },
        { title: "It", author: "Stephen King", year: 1986, description: "Seven friends face an ancient evil that preys on children." },
        { title: "The Stand", author: "Stephen King", year: 1978, description: "Survivors of a plague must choose between good and evil." }
    ],

    "Self-Help & Personal Development": [
        // Productivity & Habits
        { title: "Atomic Habits", author: "James Clear", year: 2018, description: "An easy and proven way to build good habits and break bad ones." },
        { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989, description: "Seven principles for personal and professional effectiveness." },
        { title: "Getting Things Done", author: "David Allen", year: 2001, description: "A system for stress-free productivity and organization." },
        { title: "Deep Work", author: "Cal Newport", year: 2016, description: "Rules for focused success in a distracted world." },
        { title: "Digital Minimalism", author: "Cal Newport", year: 2019, description: "Choosing a focused life in a noisy world." },
        { title: "The Power of Now", author: "Eckhart Tolle", year: 1997, description: "A guide to spiritual enlightenment through present-moment awareness." },
        
        // Mindset & Psychology
        { title: "Mindset", author: "Carol S. Dweck", year: 2006, description: "The new psychology of success and how to change your mindset." },
        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016, description: "A counterintuitive approach to living a good life." },
        { title: "Everything Is F*cked", author: "Mark Manson", year: 2019, description: "A book about hope in a world that seems hopeless." },
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, description: "How our minds make decisions and where we go wrong." },
        { title: "Blink", author: "Malcolm Gladwell", year: 2005, description: "The power of thinking without thinking." },
        { title: "Outliers", author: "Malcolm Gladwell", year: 2008, description: "The story of success and what makes high achievers different." },
        
        // Relationships & Communication
        { title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936, description: "Timeless advice for building relationships and influencing others." },
        { title: "The 5 Love Languages", author: "Gary Chapman", year: 1992, description: "The secret to love that lasts by understanding your partner's love language." },
        { title: "Crucial Conversations", author: "Kerry Patterson", year: 2002, description: "Tools for talking when stakes are high." },
        { title: "Nonviolent Communication", author: "Marshall B. Rosenberg", year: 2003, description: "A language of life for creating connections and resolving conflicts." },
        { title: "Boundaries", author: "Henry Cloud & John Townsend", year: 1992, description: "When to say yes, how to say no to take control of your life." },
        
        // Financial Success
        { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: 1997, description: "What the rich teach their kids about money that the poor don't." },
        { title: "The Millionaire Next Door", author: "Thomas J. Stanley", year: 1996, description: "The surprising secrets of America\'s wealthy." },
        { title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, description: "The classic guide to achieving wealth and success." },
        { title: "The Total Money Makeover", author: "Dave Ramsey", year: 2003, description: "A proven plan for financial fitness." },
        { title: "Your Money or Your Life", author: "Vicki Robin", year: 1992, description: "9 steps to transforming your relationship with money." },
        
        // Health & Wellness
        { title: "The 4-Hour Workweek", author: "Tim Ferriss", year: 2007, description: "Escape 9-5, live anywhere, and join the new rich." },
        { title: "The 4-Hour Body", author: "Tim Ferriss", year: 2010, description: "An uncommon guide to rapid fat-loss, incredible sex, and becoming superhuman." },
        { title: "Tools of Titans", author: "Tim Ferriss", year: 2016, description: "The tactics, routines, and habits of billionaires, icons, and world-class performers." },
        { title: "Why We Sleep", author: "Matthew Walker", year: 2017, description: "Unlocking the power of sleep and dreams." },
        { title: "The Blue Zones", author: "Dan Buettner", year: 2008, description: "Lessons for living longer from the people who've lived the longest." },
        
        // Spirituality & Purpose
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988, description: "A fable about following your dreams and listening to your heart." },
        { title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: 1946, description: "A psychiatrist's experiences in Nazi concentration camps." },
        { title: "The Four Agreements", author: "Don Miguel Ruiz", year: 1997, description: "A practical guide to personal freedom and happiness." },
        { title: "The Untethered Soul", author: "Michael A. Singer", year: 2007, description: "The journey beyond yourself to find inner peace." },
        { title: "A New Earth", author: "Eckhart Tolle", year: 2005, description: "Awakening to your life\'s purpose." },
        
        // Creativity & Innovation
        { title: "The Artist's Way", author: "Julia Cameron", year: 1992, description: "A spiritual path to higher creativity." },
        { title: "Big Magic", author: "Elizabeth Gilbert", year: 2015, description: "Creative living beyond fear." },
        { title: "Steal Like an Artist", author: "Austin Kleon", year: 2012, description: "10 things nobody told you about being creative." },
        { title: "Show Your Work!", author: "Austin Kleon", year: 2014, description: "10 ways to share your creativity and get discovered." },
        { title: "Keep Going", author: "Austin Kleon", year: 2019, description: "10 ways to stay creative in good times and bad." },
        
        // Leadership & Success
        { title: "Good to Great", author: "Jim Collins", year: 2001, description: "Why some companies make the leap and others don't." },
        { title: "Built to Last", author: "Jim Collins", year: 1994, description: "Successful habits of visionary companies." },
        { title: "The Lean Startup", author: "Eric Ries", year: 2011, description: "How today's entrepreneurs use continuous innovation to create radically successful businesses." },
        { title: "Zero to One", author: "Peter Thiel", year: 2014, description: "Notes on startups, or how to build the future." },
        { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", year: 2014, description: "Building a business when there are no easy answers." },
        
        // Happiness & Life Satisfaction
        { title: "The Happiness Project", author: "Gretchen Rubin", year: 2009, description: "Or, why I spent a year trying to sing in the morning, clean my closets, fight right, read Aristotle, and generally have more fun." },
        { title: "Happier", author: "Tal Ben-Shahar", year: 2007, description: "Learn the secrets to daily joy and lasting fulfillment." },
        { title: "The Art of Happiness", author: "Dalai Lama", year: 1998, description: "A handbook for living with the Dalai Lama." },
        { title: "Flow", author: "Mihaly Csikszentmihalyi", year: 1990, description: "The psychology of optimal experience." },
        { title: "Authentic Happiness", author: "Martin Seligman", year: 2002, description: "Using the new positive psychology to realize your potential for lasting fulfillment." }
    ],

    "Business & Entrepreneurship": [
        // Classic Business Books
        { title: "Good to Great", author: "Jim Collins", year: 2001, description: "Why some companies make the leap and others don't." },
        { title: "Built to Last", author: "Jim Collins", year: 1994, description: "Successful habits of visionary companies." },
        { title: "The Lean Startup", author: "Eric Ries", year: 2011, description: "How today's entrepreneurs use continuous innovation to create radically successful businesses." },
        { title: "Zero to One", author: "Peter Thiel", year: 2014, description: "Notes on startups, or how to build the future." },
        { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", year: 2014, description: "Building a business when there are no easy answers." },
        
        // Leadership & Management
        { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989, description: "Seven principles for personal and professional effectiveness." },
        { title: "First, Break All the Rules", author: "Marcus Buckingham", year: 1999, description: "What the world\'s greatest managers do differently." },
        { title: "Drive", author: "Daniel H. Pink", year: 2009, description: "The surprising truth about what motivates us." },
        { title: "Leaders Eat Last", author: "Simon Sinek", year: 2014, description: "Why some teams pull together and others don't." },
        { title: "Start with Why", author: "Simon Sinek", year: 2009, description: "How great leaders inspire everyone to take action." },
        
        // Marketing & Sales
        { title: "Influence", author: "Robert B. Cialdini", year: 1984, description: "The psychology of persuasion." },
        { title: "Made to Stick", author: "Chip Heath & Dan Heath", year: 2007, description: "Why some ideas survive and others die." },
        { title: "Purple Cow", author: "Seth Godin", year: 2003, description: "Transform your business by being remarkable." },
        { title: "The 22 Immutable Laws of Marketing", author: "Al Ries & Jack Trout", year: 1993, description: "Violate them at your own risk." },
        { title: "Crossing the Chasm", author: "Geoffrey A. Moore", year: 1991, description: "Marketing and selling disruptive products to mainstream customers." },
        
        // Innovation & Strategy
        { title: "The Innovator's Dilemma", author: "Clayton M. Christensen", year: 1997, description: "When new technologies cause great firms to fail." },
        { title: "Blue Ocean Strategy", author: "W. Chan Kim & Renée Mauborgne", year: 2005, description: "How to create uncontested market space and make the competition irrelevant." },
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, description: "How our minds make decisions and where we go wrong." },
        { title: "The Art of War", author: "Sun Tzu", year: "5th century BCE", description: "Ancient Chinese military treatise on strategy and tactics." },
        { title: "The 48 Laws of Power", author: "Robert Greene", year: 1998, description: "A practical guide to gaining and maintaining power." },
        
        // Finance & Investment
        { title: "The Intelligent Investor", author: "Benjamin Graham", year: 1949, description: "The definitive book on value investing." },
        { title: "A Random Walk Down Wall Street", author: "Burton G. Malkiel", year: 1973, description: "The time-tested strategy for successful investing." },
        { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: 1997, description: "What the rich teach their kids about money that the poor don't." },
        { title: "The Millionaire Next Door", author: "Thomas J. Stanley", year: 1996, description: "The surprising secrets of America\'s wealthy." },
        { title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, description: "The classic guide to achieving wealth and success." },
        
        // Productivity & Systems
        { title: "Getting Things Done", author: "David Allen", year: 2001, description: "A system for stress-free productivity and organization." },
        { title: "The 4-Hour Workweek", author: "Tim Ferriss", year: 2007, description: "Escape 9-5, live anywhere, and join the new rich." },
        { title: "Atomic Habits", author: "James Clear", year: 2018, description: "An easy and proven way to build good habits and break bad ones." },
        { title: "Deep Work", author: "Cal Newport", year: 2016, description: "Rules for focused success in a distracted world." },
        { title: "The Power of Full Engagement", author: "Jim Loehr & Tony Schwartz", year: 2003, description: "Managing energy, not time, is the key to high performance." },
        
        // Technology & Digital
        { title: "The Lean Startup", author: "Eric Ries", year: 2011, description: "How today's entrepreneurs use continuous innovation to create radically successful businesses." },
        { title: "Hooked", author: "Nir Eyal", year: 2014, description: "How to build habit-forming products." },
        { title: "The Lean Product Playbook", author: "Dan Olsen", year: 2015, description: "How to innovate with minimum viable products and rapid customer feedback." },
        { title: "Sprint", author: "Jake Knapp", year: 2016, description: "How to solve big problems and test new ideas in just five days." },
        { title: "The Design of Everyday Things", author: "Don Norman", year: 1988, description: "Why some products satisfy customers and others don't." },
        
        // Biographies & Case Studies
        { title: "Steve Jobs", author: "Walter Isaacson", year: 2011, description: "The exclusive biography of the Apple co-founder." },
        { title: "Elon Musk", author: "Ashlee Vance", year: 2015, description: "Tesla, SpaceX, and the quest for a fantastic future." },
        { title: "Shoe Dog", author: "Phil Knight", year: 2016, description: "A memoir by the creator of Nike." },
        { title: "The Everything Store", author: "Brad Stone", year: 2013, description: "Jeff Bezos and the age of Amazon." },
        { title: "Becoming", author: "Michelle Obama", year: 2018, description: "A memoir by the former First Lady of the United States." }
    ],

    "Memoir & Biography": [
        // Political & Historical Figures
        { title: "Becoming", author: "Michelle Obama", year: 2018, description: "A memoir by the former First Lady of the United States." },
        { title: "A Promised Land", author: "Barack Obama", year: 2020, description: "The first volume of the former president's memoirs." },
        { title: "Long Walk to Freedom", author: "Nelson Mandela", year: 1994, description: "The autobiography of the South African anti-apartheid revolutionary." },
        { title: "The Autobiography of Malcolm X", author: "Malcolm X", year: 1965, description: "As told to Alex Haley, the life story of the civil rights leader." },
        { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", year: 1969, description: "The first volume of Angelou's seven-volume autobiography." },
        
        // Business & Technology Leaders
        { title: "Steve Jobs", author: "Walter Isaacson", year: 2011, description: "The exclusive biography of the Apple co-founder." },
        { title: "Elon Musk", author: "Ashlee Vance", year: 2015, description: "Tesla, SpaceX, and the quest for a fantastic future." },
        { title: "Shoe Dog", author: "Phil Knight", year: 2016, description: "A memoir by the creator of Nike." },
        { title: "The Everything Store", author: "Brad Stone", year: 2013, description: "Jeff Bezos and the age of Amazon." },
        { title: "Losing My Virginity", author: "Richard Branson", year: 1998, description: "How I survived, had fun, and made a fortune doing business my way." },
        
        // Entertainment & Arts
        { title: "Born a Crime", author: "Trevor Noah", year: 2016, description: "Stories from a South African childhood." },
        { title: "Bossypants", author: "Tina Fey", year: 2011, description: "Tina Fey's memoir about her life and career in comedy." },
        { title: "Yes Please", author: "Amy Poehler", year: 2014, description: "A memoir by the comedian and actress." },
        { title: "Is Everyone Hanging Out Without Me?", author: "Mindy Kaling", year: 2011, description: "And other concerns by the actress and writer." },
        { title: "The Princess Diarist", author: "Carrie Fisher", year: 2016, description: "A memoir by the late actress and writer." },
        
        // Personal Struggles & Triumphs
        { title: "Educated", author: "Tara Westover", year: 2018, description: "A memoir about a woman who leaves her survivalist family to pursue education." },
        { title: "Wild", author: "Cheryl Strayed", year: 2012, description: "From lost to found on the Pacific Crest Trail." },
        { title: "Eat, Pray, Love", author: "Elizabeth Gilbert", year: 2006, description: "One woman\'s search for everything across Italy, India, and Indonesia." },
        { title: "The Glass Castle", author: "Jeannette Walls", year: 2005, description: "A memoir about growing up in a dysfunctional family." },
        { title: "Angela's Ashes", author: "Frank McCourt", year: 1996, description: "A memoir of a childhood in Ireland." },
        
        // War & Conflict
        { title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: 1946, description: "A psychiatrist's experiences in Nazi concentration camps." },
        { title: "Night", author: "Elie Wiesel", year: 1956, description: "A memoir of survival in Nazi concentration camps." },
        { title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947, description: "The diary of a Jewish girl hiding during the Holocaust." },
        { title: "Unbroken", author: "Laura Hillenbrand", year: 2010, description: "A World War II story of survival, resilience, and redemption." },
        { title: "The Boys in the Boat", author: "Daniel James Brown", year: 2013, description: "Nine Americans and their epic quest for gold at the 1936 Berlin Olympics." },
        
        // Science & Discovery
        { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, description: "From the Big Bang to black holes." },
        { title: "The Double Helix", author: "James D. Watson", year: 1968, description: "A personal account of the discovery of the structure of DNA." },
        { title: "Silent Spring", author: "Rachel Carson", year: 1962, description: "The book that launched the environmental movement." },
        { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010, description: "The story of the woman whose cells changed medicine forever." },
        { title: "Lab Girl", author: "Hope Jahren", year: 2016, description: "A memoir about trees, science, and love." },
        
        // Sports & Adventure
        { title: "Open", author: "Andre Agassi", year: 2009, description: "An autobiography by the tennis champion." },
        { title: "The Boys in the Boat", author: "Daniel James Brown", year: 2013, description: "Nine Americans and their epic quest for gold at the 1936 Berlin Olympics." },
        { title: "Into Thin Air", author: "Jon Krakauer", year: 1997, description: "A personal account of the Mount Everest disaster." },
        { title: "Into the Wild", author: "Jon Krakauer", year: 1996, description: "The story of Christopher McCandless and his journey into the Alaskan wilderness." },
        { title: "Born to Run", author: "Christopher McDougall", year: 2009, description: "A hidden tribe, superathletes, and the greatest race the world has never seen." },
        
        // Literary Figures
        { title: "On Writing", author: "Stephen King", year: 2000, description: "A memoir of the craft by the master of horror." },
        { title: "Bird by Bird", author: "Anne Lamott", year: 1994, description: "Some instructions on writing and life." },
        { title: "The Year of Magical Thinking", author: "Joan Didion", year: 2005, description: "A memoir about grief and loss." },
        { title: "Just Kids", author: "Patti Smith", year: 2010, description: "A memoir about friendship and art in 1970s New York." },
        { title: "The Liars' Club", author: "Mary Karr", year: 1995, description: "A memoir about growing up in a dysfunctional family in Texas." }
    ],

    "Poetry": [
        // Classic Poets
        { title: "The Complete Works of William Shakespeare", author: "William Shakespeare", year: 1623, description: "The complete collection of Shakespeare's plays and sonnets." },
        { title: "The Collected Poems of Emily Dickinson", author: "Emily Dickinson", year: 1890, description: "The complete poems of the reclusive American poet." },
        { title: "Leaves of Grass", author: "Walt Whitman", year: 1855, description: "The groundbreaking collection of American poetry." },
        { title: "The Raven and Other Poems", author: "Edgar Allan Poe", year: 1845, description: "A collection of Poe's most famous poems." },
        { title: "Songs of Innocence and Experience", author: "William Blake", year: 1789, description: "A collection of illustrated poems about childhood and adulthood." },
        
        // Modern Poets
        { title: "The Waste Land", author: "T.S. Eliot", year: 1922, description: "A modernist poem about the disillusionment of post-World War I society." },
        { title: "The Collected Poems of Robert Frost", author: "Robert Frost", year: 1939, description: "The complete poems of the American poet laureate." },
        { title: "Howl and Other Poems", author: "Allen Ginsberg", year: 1956, description: "The Beat Generation's most famous poem." },
        { title: "Ariel", author: "Sylvia Plath", year: 1965, description: "The final collection of poems by the American poet." },
        { title: "The Collected Poems of Langston Hughes", author: "Langston Hughes", year: 1994, description: "The complete poems of the Harlem Renaissance poet." },
        
        // Contemporary Poets
        { title: "The Sun and Her Flowers", author: "Rupi Kaur", year: 2017, description: "A collection of poetry about growth and healing." },
        { title: "Milk and Honey", author: "Rupi Kaur", year: 2014, description: "A collection of poetry about survival, love, and loss." },
        { title: "Home Body", author: "Rupi Kaur", year: 2020, description: "A collection of poetry about self-love and healing." },
        { title: "The Hill We Climb", author: "Amanda Gorman", year: 2021, description: "The inaugural poem by the youngest inaugural poet in U.S. history." },
        { title: "Call Us What We Carry", author: "Amanda Gorman", year: 2021, description: "A collection of poems about hope and healing." },
        
        // International Poets
        { title: "The Essential Rumi", author: "Jalal ad-Din Rumi", year: 1995, description: "Translations of the 13th-century Persian poet\'s work." },
        { title: "Twenty Love Poems and a Song of Despair", author: "Pablo Neruda", year: 1924, description: "A collection of love poems by the Chilean poet." },
        { title: "The Prophet", author: "Kahlil Gibran", year: 1923, description: "A collection of philosophical essays in poetic form." },
        { title: "The Essential Neruda", author: "Pablo Neruda", year: 2004, description: "Selected poems by the Nobel Prize-winning Chilean poet." },
        { title: "The Essential Hafiz", author: "Hafiz", year: 1999, description: "Translations of the 14th-century Persian poet\'s work." },
        
        // Spoken Word & Performance Poetry
        { title: "The Rose That Grew from Concrete", author: "Tupac Shakur", year: 1999, description: "A collection of poetry by the late rapper and actor." },
        { title: "Citizen", author: "Claudia Rankine", year: 2014, description: "A collection of poetry about race and identity in America." },
        { title: "Don't Call Us Dead", author: "Danez Smith", year: 2017, description: "A collection of poetry about blackness, queerness, and survival." },
        { title: "The Tradition", author: "Jericho Brown", year: 2019, description: "A collection of poetry about race, violence, and love." },
        { title: "Homie", author: "Danez Smith", year: 2020, description: "A collection of poetry about friendship and community." },
        
        // Nature & Environmental Poetry
        { title: "The Collected Poems of Mary Oliver", author: "Mary Oliver", year: 2017, description: "The complete poems of the Pulitzer Prize-winning nature poet." },
        { title: "Devotions", author: "Mary Oliver", year: 2017, description: "A selection of poems from throughout Oliver's career." },
        { title: "The Collected Poems of Wendell Berry", author: "Wendell Berry", year: 2012, description: "The complete poems of the American farmer and poet." },
        { title: "The Collected Poems of Gary Snyder", author: "Gary Snyder", year: 1999, description: "The complete poems of the Beat Generation poet." },
        { title: "The Collected Poems of Denise Levertov", author: "Denise Levertov", year: 2013, description: "The complete poems of the American poet." }
    ],

    "Graphic Novels & Comics": [
        // Superhero Classics
        { title: "Watchmen", author: "Alan Moore", year: 1987, description: "A deconstruction of the superhero genre set in an alternate history." },
        { title: "The Dark Knight Returns", author: "Frank Miller", year: 1986, description: "Batman returns from retirement in a dystopian future." },
        { title: "Batman: Year One", author: "Frank Miller", year: 1987, description: "The origin story of Batman and Commissioner Gordon." },
        { title: "V for Vendetta", author: "Alan Moore", year: 1982, description: "A dystopian story about an anarchist revolutionary." },
        { title: "Sandman", author: "Neil Gaiman", year: 1989, description: "A fantasy series about the Lord of Dreams." },
        
        // Literary Graphic Novels
        { title: "Maus", author: "Art Spiegelman", year: 1986, description: "A Holocaust survivor's story told through anthropomorphic animals." },
        { title: "Persepolis", author: "Marjane Satrapi", year: 2000, description: "A memoir about growing up during the Iranian Revolution." },
        { title: "Fun Home", author: "Alison Bechdel", year: 2006, description: "A graphic memoir about family, sexuality, and identity." },
        { title: "Blankets", author: "Craig Thompson", year: 2003, description: "A coming-of-age story about first love and religious faith." },
        { title: "Ghost World", author: "Daniel Clowes", year: 1997, description: "A story about two teenage girls navigating adulthood." },
        
        // Fantasy & Sci-Fi
        { title: "Saga", author: "Brian K. Vaughan", year: 2012, description: "A space opera about a family from warring planets." },
        { title: "Y: The Last Man", author: "Brian K. Vaughan", year: 2002, description: "The last man on Earth after a mysterious plague kills all males." },
        { title: "Preacher", author: "Garth Ennis", year: 1995, description: "A supernatural Western about a preacher with divine powers." },
        { title: "Hellboy", author: "Mike Mignola", year: 1993, description: "A demon who fights supernatural threats for the BPRD." },
        { title: "The Walking Dead", author: "Robert Kirkman", year: 2003, description: "A zombie apocalypse survival story." },
        
        // Manga Classics
        { title: "Akira", author: "Katsuhiro Otomo", year: 1982, description: "A cyberpunk story set in post-apocalyptic Tokyo." },
        { title: "Ghost in the Shell", author: "Masamune Shirow", year: 1989, description: "A cyberpunk story about cyborgs and artificial intelligence." },
        { title: "Death Note", author: "Tsugumi Ohba", year: 2003, description: "A psychological thriller about a student who finds a supernatural notebook." },
        { title: "Attack on Titan", author: "Hajime Isayama", year: 2009, description: "Humanity's fight for survival against giant humanoid Titans." },
        { title: "One Piece", author: "Eiichiro Oda", year: 1997, description: "A pirate's quest to find the ultimate treasure." },
        
        // Contemporary & Indie
        { title: "Scott Pilgrim vs. the World", author: "Bryan Lee O'Malley", year: 2004, description: "A slacker must defeat his girlfriend's seven evil exes." },
        { title: "Seconds", author: "Bryan Lee O'Malley", year: 2014, description: "A chef discovers she can change her past by eating magic mushrooms." },
        { title: "This One Summer", author: "Mariko Tamaki", year: 2014, description: "A coming-of-age story about two friends during a summer vacation." },
        { title: "Skim", author: "Mariko Tamaki", year: 2008, description: "A story about a teenage girl dealing with depression and first love." },
        { title: "American Born Chinese", author: "Gene Luen Yang", year: 2006, description: "Three interwoven stories about Chinese-American identity." }
    ],

    "Children's Books": [
        // Picture Books
        { title: "Where the Wild Things Are", author: "Maurice Sendak", year: 1963, description: "A boy\'s journey to the land of the Wild Things." },
        { title: "The Very Hungry Caterpillar", author: "Eric Carle", year: 1969, description: "A caterpillar's transformation into a butterfly." },
        { title: "Goodnight Moon", author: "Margaret Wise Brown", year: 1947, description: "A bedtime story about saying goodnight to everything." },
        { title: "The Cat in the Hat", author: "Dr. Seuss", year: 1957, description: "A mischievous cat visits two children on a rainy day." },
        { title: "Green Eggs and Ham", author: "Dr. Seuss", year: 1960, description: "Sam-I-Am tries to convince someone to try green eggs and ham." },
        
        // Early Readers
        { title: "Charlotte's Web", author: "E.B. White", year: 1952, description: "A pig and a spider become unlikely friends." },
        { title: "The Secret Garden", author: "Frances Hodgson Burnett", year: 1911, description: "A girl discovers a hidden garden and its healing powers." },
        { title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943, description: "A philosophical tale about a prince from another planet." },
        { title: "Winnie-the-Pooh", author: "A.A. Milne", year: 1926, description: "The adventures of a bear and his friends in the Hundred Acre Wood." },
        { title: "The Wind in the Willows", author: "Kenneth Grahame", year: 1908, description: "The adventures of Mole, Rat, Toad, and Badger." },
        
        // Middle Grade Classics
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, description: "A young wizard discovers his magical heritage." },
        { title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, description: "Children discover a magical world through a wardrobe." },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, description: "A hobbit's unexpected journey to help dwarves reclaim their homeland." },
        { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", year: 1865, description: "A girl\'s journey through a fantastical world." },
        { title: "Peter Pan", author: "J.M. Barrie", year: 1911, description: "The story of a boy who never grows up and his adventures in Neverland." },
        
        // Modern Children's Literature
        { title: "The Giver", author: "Lois Lowry", year: 1993, description: "A boy discovers the dark truth about his seemingly perfect society." },
        { title: "Holes", author: "Louis Sachar", year: 1998, description: "A boy is sent to a juvenile detention camp where he must dig holes." },
        { title: "Bridge to Terabithia", author: "Katherine Paterson", year: 1977, description: "Two friends create a magical kingdom in the woods." },
        { title: "The Witches", author: "Roald Dahl", year: 1983, description: "A boy discovers that witches are real and plotting to turn children into mice." },
        { title: "Matilda", author: "Roald Dahl", year: 1988, description: "A gifted girl with telekinetic powers faces her cruel parents and headmistress." },
        
        // Diverse Voices
        { title: "Brown Girl Dreaming", author: "Jacqueline Woodson", year: 2014, description: "A memoir in verse about growing up African American in the 1960s and 1970s." },
        { title: "The Hate U Give", author: "Angie Thomas", year: 2017, description: "A teenager witnesses police brutality and must find her voice." },
        { title: "Ghost", author: "Jason Reynolds", year: 2016, description: "A boy with a troubled past discovers track and field." },
        { title: "The Crossover", author: "Kwame Alexander", year: 2014, description: "A novel in verse about twin brothers and basketball." },
        { title: "Front Desk", author: "Kelly Yang", year: 2018, description: "A Chinese immigrant girl helps her family run a motel." }
    ],

    "Philosophy": [
        // Ancient Philosophy
        { title: "The Republic", author: "Plato", year: "380 BCE", description: "A dialogue about justice, the ideal state, and the nature of reality." },
        { title: "Nicomachean Ethics", author: "Aristotle", year: "350 BCE", description: "A treatise on virtue, happiness, and the good life." },
        { title: "Meditations", author: "Marcus Aurelius", year: "180 CE", description: "Personal reflections on Stoic philosophy and leadership." },
        { title: "The Art of War", author: "Sun Tzu", year: "5th century BCE", description: "Ancient Chinese military treatise on strategy and tactics." },
        { title: "Tao Te Ching", author: "Lao Tzu", year: "6th century BCE", description: "The fundamental text of Taoism about the way of nature." },
        
        // Modern Philosophy
        { title: "Critique of Pure Reason", author: "Immanuel Kant", year: 1781, description: "A foundational work of modern philosophy about knowledge and reason." },
        { title: "Beyond Good and Evil", author: "Friedrich Nietzsche", year: 1886, description: "A critique of traditional morality and the will to power." },
        { title: "Being and Time", author: "Martin Heidegger", year: 1927, description: "A fundamental work of existentialist philosophy." },
        { title: "The Second Sex", author: "Simone de Beauvoir", year: 1949, description: "A foundational work of feminist philosophy." },
        { title: "The Phenomenology of Spirit", author: "Georg Wilhelm Friedrich Hegel", year: 1807, description: "A systematic account of the development of consciousness." },
        
        // Contemporary Philosophy
        { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", year: 1962, description: "A groundbreaking work on the nature of scientific progress." },
        { title: "The Order of Things", author: "Michel Foucault", year: 1966, description: "An archaeology of the human sciences." },
        { title: "A Theory of Justice", author: "John Rawls", year: 1971, description: "A work of political philosophy about justice and fairness." },
        { title: "The Ethics of Ambiguity", author: "Simone de Beauvoir", year: 1947, description: "An existentialist ethics of freedom and responsibility." },
        { title: "The Human Condition", author: "Hannah Arendt", year: 1958, description: "A philosophical analysis of human activities and their meaning." },
        
        // Eastern Philosophy
        { title: "The Bhagavad Gita", author: "Vyasa", year: "2nd century BCE", description: "A Hindu scripture about duty, righteousness, and the path to liberation." },
        { title: "The Analects", author: "Confucius", year: "5th century BCE", description: "A collection of sayings and ideas attributed to Confucius." },
        { title: "The Dhammapada", author: "Buddha", year: "3rd century BCE", description: "A collection of verses containing the essence of Buddhist teachings." },
        { title: "The Upanishads", author: "Various", year: "800-200 BCE", description: "Ancient Hindu texts about the nature of reality and the self." },
        { title: "Zen Mind, Beginner's Mind", author: "Shunryu Suzuki", year: 1970, description: "An introduction to Zen Buddhism and meditation." },
        
        // Philosophy of Mind & Science
        { title: "The Conscious Mind", author: "David Chalmers", year: 1996, description: "A work on the hard problem of consciousness." },
        { title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, description: "A book about evolution and the gene-centered view of life." },
        { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", year: 1979, description: "An exploration of consciousness, intelligence, and self-reference." },
        { title: "The Blind Watchmaker", author: "Richard Dawkins", year: 1986, description: "A defense of evolution and natural selection." },
        { title: "The Fabric of Reality", author: "David Deutsch", year: 1997, description: "A theory of everything based on four strands of knowledge." }
    ],

    "Travel & Adventure": [
        // Classic Travel Literature
        { title: "On the Road", author: "Jack Kerouac", year: 1957, description: "A Beat Generation novel about cross-country road trips and freedom." },
        { title: "Travels with Charley", author: "John Steinbeck", year: 1962, description: "A journey across America with a poodle named Charley." },
        { title: "The Great Railway Bazaar", author: "Paul Theroux", year: 1975, description: "A journey by train from London to Asia and back." },
        { title: "In Patagonia", author: "Bruce Chatwin", year: 1977, description: "A journey to the remote region of Patagonia in South America." },
        { title: "A Walk in the Woods", author: "Bill Bryson", year: 1998, description: "A humorous account of hiking the Appalachian Trail." },
        
        // Adventure & Exploration
        { title: "Into the Wild", author: "Jon Krakauer", year: 1996, description: "The story of Christopher McCandless and his journey into the Alaskan wilderness." },
        { title: "Into Thin Air", author: "Jon Krakauer", year: 1997, description: "A personal account of the Mount Everest disaster." },
        { title: "Touching the Void", author: "Joe Simpson", year: 1988, description: "A mountaineering disaster and survival story in the Peruvian Andes." },
        { title: "Endurance", author: "Alfred Lansing", year: 1959, description: "The incredible story of Ernest Shackleton's Antarctic expedition." },
        { title: "The Lost City of Z", author: "David Grann", year: 2009, description: "The search for a legendary city in the Amazon jungle." },
        
        // Cultural & Historical Travel
        { title: "Eat, Pray, Love", author: "Elizabeth Gilbert", year: 2006, description: "One woman\'s search for everything across Italy, India, and Indonesia." },
        { title: "Under the Tuscan Sun", author: "Frances Mayes", year: 1996, description: "A memoir about buying and renovating a house in Tuscany." },
        { title: "A Year in Provence", author: "Peter Mayle", year: 1989, description: "A humorous account of living in the French countryside." },
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988, description: "A fable about following your dreams and listening to your heart." },
        { title: "Wild", author: "Cheryl Strayed", year: 2012, description: "From lost to found on the Pacific Crest Trail." },
        
        // Solo Travel & Self-Discovery
        { title: "The Art of Travel", author: "Alain de Botton", year: 2002, description: "A philosophical exploration of why we travel and what we seek." },
        { title: "Vagabonding", author: "Rolf Potts", year: 2003, description: "An uncommon guide to the art of long-term world travel." },
        { title: "The Geography of Bliss", author: "Eric Weiner", year: 2008, description: "One grump's search for the happiest places in the world." },
        { title: "The Lost Girls", author: "Jennifer Baggett", year: 2010, description: "Three friends quit their jobs to travel around the world." },
        { title: "What I Was Doing While You Were Breeding", author: "Kristin Newman", year: 2014, description: "A memoir about solo travel and avoiding commitment." },
        
        // Food & Culinary Travel
        { title: "Kitchen Confidential", author: "Anthony Bourdain", year: 2000, description: "Adventures in the culinary underbelly." },
        { title: "A Cook's Tour", author: "Anthony Bourdain", year: 2001, description: "In search of the perfect meal around the world." },
        { title: "Heat", author: "Bill Buford", year: 2006, description: "An amateur's adventures as a kitchen slave, line cook, and apprentice." },
        { title: "The Omnivore's Dilemma", author: "Michael Pollan", year: 2006, description: "A natural history of four meals." },
        { title: "Salt, Fat, Acid, Heat", author: "Samin Nosrat", year: 2017, description: "Mastering the elements of good cooking." },
        
        // Nature & Environmental Travel
        { title: "Desert Solitaire", author: "Edward Abbey", year: 1968, description: "A season in the wilderness of the American Southwest." },
        { title: "Pilgrim at Tinker Creek", author: "Annie Dillard", year: 1974, description: "A year of observation and reflection in the Virginia countryside." },
        { title: "The Snow Leopard", author: "Peter Matthiessen", year: 1978, description: "A journey to the Himalayas in search of the elusive snow leopard." },
        { title: "The Wild Places", author: "Robert Macfarlane", year: 2007, description: "A journey through Britain's remaining wilderness." },
        { title: "The Old Ways", author: "Robert Macfarlane", year: 2012, description: "A journey on foot through ancient paths and modern landscapes." }
    ]
};

// Function to get all books as a flat array
function getAllBooks() {
    const allBooks = [];
    for (const [category, books] of Object.entries(comprehensiveBookDatabase)) {
        books.forEach(book => {
            allBooks.push({
                ...book,
                category: category,
                id: `${category.toLowerCase().replace(/\s+/g, '-')}-${book.title.toLowerCase().replace(/\s+/g, '-')}`
            });
        });
    }
    return allBooks;
}

// Function to get books by category
function getBooksByCategory(category) {
    return comprehensiveBookDatabase[category] || [];
}

// Function to search books
function searchBooks(query) {
    const allBooks = getAllBooks();
    const lowercaseQuery = query.toLowerCase();
    return allBooks.filter(book => 
        book.title.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery) ||
        book.description.toLowerCase().includes(lowercaseQuery)
    );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        comprehensiveBookDatabase,
        getAllBooks,
        getBooksByCategory,
        searchBooks
    };
}
