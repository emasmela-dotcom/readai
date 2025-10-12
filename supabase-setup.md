# ReadAI Supabase Setup Guide

## 🚀 **Quick Setup Steps**

### 1. **Create Supabase Project**
- Go to [supabase.com](https://supabase.com)
- Click "New Project"
- Name: "ReadAI Book Club"
- Choose your organization
- Set a strong database password
- Choose region closest to your users

### 2. **Get Project Credentials**
After project creation, go to:
- **Settings** → **API**
- Copy these values:
  - `Project URL` (e.g., `https://your-project.supabase.co`)
  - `anon public` key
  - `service_role` key (keep secret!)

### 3. **Run Database Schema**
- Go to **SQL Editor** in Supabase dashboard
- Copy and paste the contents of `database-setup.sql`
- Click "Run" to create all tables and sample data

### 4. **Configure Row Level Security (RLS)**
Run these SQL commands in the SQL Editor:

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

-- Create policies for public access to books and forums
CREATE POLICY "Books are viewable by everyone" ON books FOR SELECT USING (true);
CREATE POLICY "Forums are viewable by everyone" ON forums FOR SELECT USING (true);
CREATE POLICY "Forum posts are viewable by everyone" ON forum_posts FOR SELECT USING (true);
CREATE POLICY "Forum replies are viewable by everyone" ON forum_replies FOR SELECT USING (true);
CREATE POLICY "Reading challenges are viewable by everyone" ON reading_challenges FOR SELECT USING (true);

-- Create policies for user-specific data
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own data" ON users FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can manage own reading sessions" ON reading_sessions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own reading progress" ON reading_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own forum posts" ON forum_posts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own forum replies" ON forum_replies FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own challenges" ON user_challenges FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own recommendations" ON book_recommendations FOR ALL USING (auth.uid() = user_id);
```

### 5. **Configure Authentication**
- Go to **Authentication** → **Settings**
- Enable **Email** authentication
- Enable **Google** OAuth (optional)
- Set **Site URL** to your Vercel domain
- Add **Redirect URLs** for your domain

### 6. **Update Frontend Configuration**
Add these environment variables to your Vercel project:
- `SUPABASE_URL` = your project URL
- `SUPABASE_ANON_KEY` = your anon public key

## 🔧 **Next Steps After Setup**

1. **Test Database Connection** - Verify tables are created
2. **Add Authentication** - Implement login/signup
3. **Connect Frontend** - Update JavaScript to use Supabase
4. **Test Features** - Ensure everything works

## 📊 **Database Structure Overview**

- **users** - Member profiles and preferences
- **books** - Book catalog with metadata
- **reading_sessions** - Timed reading sessions
- **reading_progress** - User progress tracking
- **forums** - Discussion categories
- **forum_posts** - Discussion threads
- **forum_replies** - Thread responses
- **reading_challenges** - Monthly/yearly goals
- **user_challenges** - Challenge participation
- **book_recommendations** - AI recommendations

## 🚨 **Important Notes**

- Keep your `service_role` key secret
- Only use `anon` key in frontend code
- Test RLS policies thoroughly
- Monitor database usage in Supabase dashboard
- Set up database backups

---

**Ready to proceed?** Let me know when you've completed the Supabase setup and I'll help you connect the frontend!
