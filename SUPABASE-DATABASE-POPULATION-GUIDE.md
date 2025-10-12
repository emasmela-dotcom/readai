# 🗄️ Supabase Database Population Guide - ReadAI

## 📊 Current Status
✅ Database schema ready (`database-setup-postgres.sql`)
✅ **271 books** ready to populate
✅ Book covers will use Google Books API (no upload needed!)

---

## 🚀 Step-by-Step Guide

### **Step 1: Create/Access Supabase Project** (5 minutes)

1. **Go to** [supabase.com](https://supabase.com)
2. **Sign in** or create account
3. **Create New Project** (if you haven't already)
   - Project Name: `ReadAI` or `ReadAI-Book-Club`
   - Database Password: Choose a strong password (save it!)
   - Region: Choose closest to you
   - Click **"Create new project"**
   - Wait 2-3 minutes for project to provision

### **Step 2: Navigate to SQL Editor** (1 minute)

1. In your Supabase project dashboard
2. Click **"SQL Editor"** in the left sidebar
3. Click **"New Query"** button

### **Step 3: Copy Database Schema** (2 minutes)

1. **Open** the file: `database-setup-postgres.sql`
2. **Select All** (Cmd+A on Mac, Ctrl+A on Windows)
3. **Copy** (Cmd+C / Ctrl+C)
4. **Paste** into Supabase SQL Editor
5. Click **"Run"** button (or press Cmd+Enter / Ctrl+Enter)
6. Wait for success message: **"Success. No rows returned"**

### **Step 4: Verify Database Population** (2 minutes)

#### Check Tables Created:
1. Click **"Table Editor"** in left sidebar
2. You should see these tables:
   - ✅ `users`
   - ✅ `books` ← **Should have 271 rows**
   - ✅ `reading_sessions`
   - ✅ `reading_progress`
   - ✅ `forums` ← **Should have 5 rows**
   - ✅ `forum_posts`
   - ✅ `forum_replies`
   - ✅ `reading_challenges` ← **Should have 4 rows**
   - ✅ `user_challenges`
   - ✅ `book_recommendations`

#### Verify Books:
1. Click on **"books"** table
2. You should see **271 books** with:
   - Title, Author, Genre
   - Reading time, Difficulty level
   - Descriptions
   - is_featured flags

---

## 🔑 Step 5: Get API Keys (3 minutes)

### You'll Need These for Vercel Deployment:

1. In Supabase, go to **"Settings"** → **"API"**
2. Copy these values:

#### **Project URL:**
```
https://your-project-id.supabase.co
```

#### **anon (public) key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### **service_role key** (keep secret!):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**💾 Save these somewhere safe - you'll need them for deployment!**

---

## 🔐 Step 6: Configure Security (Optional but Recommended)

### Enable Row Level Security (RLS):

Run this in SQL Editor to secure your data:

```sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE forums ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_recommendations ENABLE ROW LEVEL SECURITY;

-- Allow public read access to books, forums, and challenges
CREATE POLICY "Books are viewable by everyone" ON books FOR SELECT USING (true);
CREATE POLICY "Forums are viewable by everyone" ON forums FOR SELECT USING (true);
CREATE POLICY "Forum posts are viewable by everyone" ON forum_posts FOR SELECT USING (true);
CREATE POLICY "Forum replies are viewable by everyone" ON forum_replies FOR SELECT USING (true);
CREATE POLICY "Reading challenges are viewable by everyone" ON reading_challenges FOR SELECT USING (true);
```

---

## ✅ Verification Checklist

Before moving to deployment, verify:

- [ ] Supabase project created
- [ ] Database schema executed successfully
- [ ] **271 books** visible in books table
- [ ] **5 forums** created
- [ ] **4 reading challenges** created
- [ ] Project URL copied
- [ ] anon key copied
- [ ] service_role key copied (and kept secret!)

---

## 🎯 What's Next?

Once database is populated:
1. ✅ Books populated with 271 titles
2. ⏳ **Next: Deploy to Vercel** (connect database)
3. ⏳ Test Gumroad payment integration
4. ⏳ Final testing and launch

---

## 🆘 Troubleshooting

### **"ERROR: relation already exists"**
- Tables already created - you can skip or DROP them first
- Run: `DROP TABLE IF EXISTS [table_name] CASCADE;`

### **"ERROR: syntax error"**
- Make sure you copied the ENTIRE SQL file
- Check for any missing or extra characters

### **Books table is empty**
- Make sure the INSERT INTO books statement ran
- Check SQL Editor history for errors
- Re-run just the INSERT statement

### **Can't find API keys**
- Go to **Settings** → **API** in Supabase
- Keys are in the "Project API keys" section

---

## 📝 Notes

- Database is PostgreSQL (Supabase uses Postgres)
- Free tier includes: 500MB database, 2GB file storage, 50MB file uploads
- Upgrade if you need more (but 271 books + users should be fine)
- Book covers will be fetched from Google Books API (no storage needed!)

---

## ✨ Ready to Continue?

Once you've completed these steps, you'll be ready to:
1. Deploy ReadAI to Vercel
2. Connect the database
3. Test the full platform
4. **LAUNCH!** 🚀

---

**Estimated Time to Complete**: 10-15 minutes

**Status After Completion**: Database 100% ready, ReadAI 95% complete! 

