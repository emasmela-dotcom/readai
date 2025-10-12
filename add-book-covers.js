// Helper script to add Open Library Cover API URLs to books
// Open Library provides free book covers using ISBN

function generateCoverUrl(isbn) {
    if (!isbn) return null;
    // Clean ISBN (remove hyphens)
    const cleanIsbn = isbn.replace(/-/g, '');
    // Return Open Library cover URL
    return `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-L.jpg`;
}

// Example usage:
// For ISBN: 9780743273565 (The Great Gatsby)
// Cover URL: https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg

console.log('Sample cover URLs:');
console.log('The Great Gatsby:', generateCoverUrl('9780743273565'));
console.log('To Kill a Mockingbird:', generateCoverUrl('9780061120084'));
console.log('1984:', generateCoverUrl('9780451524935'));

module.exports = { generateCoverUrl };
