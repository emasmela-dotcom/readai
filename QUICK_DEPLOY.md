# 🚀 Quick Deploy - 5 Minutes

## Step 1: Go to Vercel
👉 [vercel.com](https://vercel.com) → Sign in (or create account)

## Step 2: Import Your Project
1. Click **"Add New Project"** (big button)
2. Click **"Import Git Repository"**
3. Find and select: **`emasmela-dotcom/readai`**
4. Click **"Import"**

## Step 3: Configure (IMPORTANT!)
Before clicking Deploy:

1. **Framework Preset**: Select **"Other"**
2. **Root Directory**: Leave as `.` (default)
3. **Build Command**: Leave empty
4. **Output Directory**: Leave empty

## Step 4: Add Environment Variables ⚠️ CRITICAL!

**Click "Environment Variables"** (before deploying) and add:

### Variable 1: DATABASE_URL
- **Name**: `DATABASE_URL`
- **Value**: Your Neon connection string
  - Go to [neon.tech](https://neon.tech) → Your database → Copy connection string
  - Looks like: `postgresql://user:pass@host/dbname?sslmode=require`

### Variable 2: CRON_SECRET
- **Name**: `CRON_SECRET`
- **Value**: `[Generated below - copy it]`

## Step 5: Deploy!
1. Click **"Deploy"** button
2. Wait 2-3 minutes
3. Copy your URL (e.g., `readai-xyz.vercel.app`)

## Step 6: Verify It Works
Test these URLs:
- Status: `https://your-url.vercel.app/api/status`
- Books: `https://your-url.vercel.app/api/neon/books`

## ✅ Done!
- ✅ Site is live
- ✅ Cron job runs daily at 6 AM UTC
- ✅ 200 books added automatically every day
- ✅ Check status anytime at `/api/status`

---

## 🔑 Your CRON_SECRET (copy this):
```
29a2c305780b25d13aec45d408c67efaabf1d18b72779bf6d81c253361ddec73
```

## 📍 Where to Get DATABASE_URL:
1. Go to [neon.tech](https://neon.tech)
2. Sign in
3. Select your ReadAI database
4. Click "Connection Details" or "Connection String"
5. Copy the full connection string

---

**That's it! Once deployed, it runs automatically forever.** 🎉

