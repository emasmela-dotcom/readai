// API endpoint to fetch reading challenges from Neon database
const { neon } = require('@neondatabase/serverless')

const sql = neon(process.env.DATABASE_URL)

module.exports = async (req, res) => {
  try {
    const challenges = await sql`SELECT * FROM reading_challenges ORDER BY title`
    
    return res.json({
      success: true,
      data: challenges || [],
      count: challenges?.length || 0
    })

  } catch (error) {
    console.error('Error fetching challenges:', error)
    return res.status(500).json({
      success: false,
      error: error.message,
      data: []
    })
  }
}

