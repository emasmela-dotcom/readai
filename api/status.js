// Status check endpoint - verify daily book addition is working
const { neon } = require('@neondatabase/serverless')

const sql = neon(process.env.DATABASE_URL)

module.exports = async (req, res) => {
  try {
    // Get total book count
    const totalBooksResult = await sql`SELECT COUNT(*) as count FROM books`
    const totalBooks = parseInt(totalBooksResult[0]?.count || 0)
    
    // Get recent daily logs (last 7 days)
    const recentLogs = await sql`
      SELECT date, books_added, total_books, execution_time, status 
      FROM daily_logs 
      ORDER BY date DESC 
      LIMIT 7
    `
    
    // Get today's status
    const today = new Date().toISOString().split('T')[0]
    const todayLog = recentLogs.find(log => log.date === today)
    
    // Calculate growth
    const lastWeekLogs = recentLogs.slice(0, 7)
    const booksAddedThisWeek = lastWeekLogs.reduce((sum, log) => sum + (parseInt(log.books_added) || 0), 0)
    
    return res.json({
      success: true,
      status: 'operational',
      database: {
        totalBooks,
        booksAddedThisWeek,
        lastUpdated: recentLogs[0]?.execution_time || null
      },
      dailyAddition: {
        scheduled: '6:00 AM UTC daily',
        target: 200,
        today: {
          date: today,
          added: todayLog ? parseInt(todayLog.books_added) : 0,
          status: todayLog ? todayLog.status : 'pending'
        }
      },
      recentActivity: recentLogs.map(log => ({
        date: log.date,
        booksAdded: parseInt(log.books_added) || 0,
        totalBooks: parseInt(log.total_books) || 0,
        status: log.status
      })),
      projection: {
        weekly: '1,400 books',
        monthly: '6,000 books',
        sixMonths: '36,000 books'
      }
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      status: 'error'
    })
  }
}

