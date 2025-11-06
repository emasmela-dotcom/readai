// API endpoint to fetch books from Neon database for ReadAI readers
// This makes all books added by daily-books.js available to readers
const { neon } = require('@neondatabase/serverless')

const sql = neon(process.env.DATABASE_URL)

module.exports = async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const limit = url.searchParams.get('limit')
    const category = url.searchParams.get('category')

    let books
    
    // Simple query - get all books, optionally filtered by category
    if (category) {
      books = await sql`SELECT * FROM books WHERE category = ${category} ORDER BY title`
    } else {
      books = await sql`SELECT * FROM books ORDER BY title`
    }
    
    // Apply limit if specified
    if (limit) {
      books = books.slice(0, parseInt(limit))
    }

    return res.json({
      success: true,
      data: books || [],
      count: books?.length || 0
    })

  } catch (error) {
    console.error('Error fetching books:', error)
    return res.status(500).json({
      success: false,
      error: error.message,
      data: []
    })
  }
}
