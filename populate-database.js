// ReadAI Database Population Script
// This script will populate your Supabase database with thousands of books

// Import the book database
const { comprehensiveBookDatabase, getAllBooks } = require('./book-database.js');

// Security: API keys moved to environment variables
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://dhgadfghpsomwwjcigla.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'PLACEHOLDER_KEY_REMOVED_FOR_SECURITY';

// Initialize Supabase client
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to populate the database
async function populateDatabase() {
    console.log('🚀 Starting ReadAI database population...');
    
    try {
        // Get all books from the database
        const allBooks = getAllBooks();
        console.log(`📚 Found ${allBooks.length} books to add to the database`);
        
        // Process books in batches to avoid overwhelming the database
        const batchSize = 50;
        let successCount = 0;
        let errorCount = 0;
        
        for (let i = 0; i < allBooks.length; i += batchSize) {
            const batch = allBooks.slice(i, i + batchSize);
            console.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allBooks.length / batchSize)} (${batch.length} books)`);
            
            try {
                const { data, error } = await supabase
                    .from('books')
                    .insert(batch);
                
                if (error) {
                    console.error(`❌ Error in batch ${Math.floor(i / batchSize) + 1}:`, error);
                    errorCount += batch.length;
                } else {
                    console.log(`✅ Successfully added batch ${Math.floor(i / batchSize) + 1}`);
                    successCount += batch.length;
                }
            } catch (err) {
                console.error(`❌ Exception in batch ${Math.floor(i / batchSize) + 1}:`, err);
                errorCount += batch.length;
            }
            
            // Add a small delay between batches to be nice to the database
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        console.log('\n🎉 Database population complete!');
        console.log(`✅ Successfully added: ${successCount} books`);
        console.log(`❌ Errors: ${errorCount} books`);
        console.log(`📊 Total processed: ${successCount + errorCount} books`);
        
    } catch (error) {
        console.error('💥 Fatal error during database population:', error);
    }
}

// Function to get database statistics
async function getDatabaseStats() {
    try {
        const { data, error } = await supabase
            .from('books')
            .select('category', { count: 'exact' });
        
        if (error) {
            console.error('❌ Error getting database stats:', error);
            return;
        }
        
        console.log('\n📊 Current Database Statistics:');
        const categoryCounts = {};
        data.forEach(book => {
            categoryCounts[book.category] = (categoryCounts[book.category] || 0) + 1;
        });
        
        Object.entries(categoryCounts).forEach(([category, count]) => {
            console.log(`📚 ${category}: ${count} books`);
        });
        
        const totalBooks = data.length;
        console.log(`\n📈 Total books in database: ${totalBooks}`);
        
    } catch (error) {
        console.error('💥 Error getting database stats:', error);
    }
}

// Function to clear the database (use with caution!)
async function clearDatabase() {
    console.log('⚠️  WARNING: This will delete ALL books from the database!');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...');
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    try {
        const { error } = await supabase
            .from('books')
            .delete()
            .neq('id', 0); // Delete all records
        
        if (error) {
            console.error('❌ Error clearing database:', error);
        } else {
            console.log('✅ Database cleared successfully');
        }
    } catch (error) {
        console.error('💥 Error clearing database:', error);
    }
}

// Main execution
async function main() {
    const command = process.argv[2];
    
    switch (command) {
        case 'populate':
            await populateDatabase();
            break;
        case 'stats':
            await getDatabaseStats();
            break;
        case 'clear':
            await clearDatabase();
            break;
        default:
            console.log('📚 ReadAI Database Management Tool');
            console.log('');
            console.log('Usage:');
            console.log('  node populate-database.js populate  - Add all books to database');
            console.log('  node populate-database.js stats     - Show database statistics');
            console.log('  node populate-database.js clear     - Clear all books (DANGER!)');
            console.log('');
            console.log('Examples:');
            console.log('  node populate-database.js populate');
            console.log('  node populate-database.js stats');
    }
}

// Run the main function
main().catch(console.error);

// Export functions for use in other scripts
module.exports = {
    populateDatabase,
    getDatabaseStats,
    clearDatabase
};
