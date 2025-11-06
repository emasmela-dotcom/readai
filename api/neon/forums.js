// API endpoint to fetch forums from Neon database
const { neon } = require('@neondatabase/serverless')

const sql = neon(process.env.DATABASE_URL)

module.exports = async (req, res) => {
  try {
    const forums = await sql`SELECT * FROM forums ORDER BY title`
    
    return res.json({
      success: true,
      data: forums || [],
      count: forums?.length || 0
    })

  } catch (error) {
    console.error('Error fetching forums:', error)
    return res.status(500).json({
      success: false,
      error: error.message,
      data: []
    })
  }
}

