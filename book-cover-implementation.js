// ========================================
// BOOK COVER IMPLEMENTATION FOR READAI
// ========================================
// Add this code to your index.html <script> section

// Cache for book covers to avoid repeated API calls
const bookCoverCache = {};

/**
 * Fetch book cover from Google Books API
 * @param {string} title - Book title
 * @param {string} author - Book author
 * @param {string} fallbackGradient - CSS gradient to use if no cover found
 * @returns {Promise<string>} - URL or gradient
 */
async function getBookCover(title, author, fallbackGradient) {
    const cacheKey = `${title}-${author}`;
    
    // Check cache first
    if (bookCoverCache[cacheKey]) {
        return bookCoverCache[cacheKey];
    }
    
    try {
        const query = encodeURIComponent(`${title} ${author}`);
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`);
        const data = await response.json();
        
        if (data.items && data.items[0]?.volumeInfo?.imageLinks) {
            // Get larger image if available
            const coverUrl = data.items[0].volumeInfo.imageLinks.large ||
                           data.items[0].volumeInfo.imageLinks.medium ||
                           data.items[0].volumeInfo.imageLinks.thumbnail ||
                           data.items[0].volumeInfo.imageLinks.smallThumbnail;
            
            bookCoverCache[cacheKey] = coverUrl;
            return coverUrl;
        }
    } catch (error) {
        console.log(`Could not fetch cover for ${title}, using fallback`);
    }
    
    // Use gradient fallback
    bookCoverCache[cacheKey] = fallbackGradient;
    return fallbackGradient;
}

/**
 * Generate CSS style for book cover
 * @param {string} coverSource - URL or gradient
 * @returns {string} - CSS style string
 */
function getCoverStyle(coverSource) {
    if (coverSource.startsWith('linear-gradient') || coverSource.startsWith('radial-gradient')) {
        return `background-image: ${coverSource}`;
    } else {
        return `background-image: url('${coverSource}'); background-size: cover; background-position: center;`;
    }
}

// ========================================
// USAGE EXAMPLE
// ========================================

/*
// Example 1: Display book with cover
const book = { 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald',
    cover: 'linear-gradient(135deg, #f59e0b 0%, #c2410c 100%)' 
};

// Get the book cover (async)
const coverSource = await getBookCover(book.title, book.author, book.cover);
const coverStyle = getCoverStyle(coverSource);

// Apply to element
bookElement.style.cssText = coverStyle;

// Example 2: Update all books on page
async function updateAllBookCovers() {
    const bookElements = document.querySelectorAll('.book-cover-preview');
    
    for (const element of bookElements) {
        const title = element.dataset.title;
        const author = element.dataset.author;
        const fallback = element.dataset.gradient;
        
        const coverSource = await getBookCover(title, author, fallback);
        element.style.cssText = getCoverStyle(coverSource);
    }
}
*/

console.log('✅ Book cover implementation loaded');
console.log('Usage: const cover = await getBookCover(title, author, gradient);');
