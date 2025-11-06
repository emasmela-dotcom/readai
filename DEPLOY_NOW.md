# 🚀 DEPLOY READAI TO VERCEL - STEP BY STEP

## ⚠️ IMPORTANT: You must deploy to Vercel first!

The 404 error means the project isn't deployed yet. Follow these steps:

## Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository: `emasmela-dotcom/readai`
4. Click **"Import"**

## Step 2: Configure Project

1. **Framework Preset**: Select **"Other"** (this is a static site with serverless functions)
2. **Root Directory**: Leave as `.` (root)
3. **Build Command**: Leave empty (or use: `echo "No build needed"`)
4. **Output Directory**: Leave empty (or use: `.`)

## Step 3: Set Environment Variables ⚠️ CRITICAL

**BEFORE DEPLOYING**, click **"Environment Variables"** and add:

```
DATABASE_URL = your-neon-database-connection-string
CRON_SECRET = generate-with: openssl rand -hex 32
```

**To get your Neon connection string:**
- Go to [neon.tech](https://neon.tech)
- Select your database
- Copy the connection string (starts with `postgresql://...`)

**To generate CRON_SECRET:**
```bash
openssl rand -hex 32
```

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait for deployment to complete (2-3 minutes)
3. Copy your deployment URL (e.g., `readai-xyz.vercel.app`)

## Step 5: Verify It Works

After deployment, test these URLs:

1. **Status Check**: `https://your-deployment-url.vercel.app/api/status`
2. **Books API**: `https://your-deployment-url.vercel.app/api/neon/books`

## Step 6: Verify Cron Job

1. In Vercel Dashboard → Your Project → **Settings** → **Cron Jobs**
2. You should see: `daily-books` scheduled for `0 6 * * *`
3. Status should be **"Active"**

## ✅ Once Deployed

- ✅ API endpoints will work
- ✅ Cron job will run daily at 6 AM UTC
- ✅ 200 books added automatically every day
- ✅ Status endpoint available at `/api/status`

## 🔍 Troubleshooting

**If you still get 404:**
- Make sure you deployed the project (not just connected the repo)
- Check that the deployment succeeded (green checkmark)
- Wait 1-2 minutes after deployment for DNS to propagate

**If API routes don't work:**
- Make sure `@neondatabase/serverless` is in `package.json` (it is ✅)
- Check that `DATABASE_URL` environment variable is set
- Check Vercel Function Logs for errors

**If cron job doesn't run:**
- Verify `vercel.json` has the cron configuration (it does ✅)
- Check that `CRON_SECRET` is set (optional but recommended)
- Wait until 6 AM UTC to see first run, or trigger manually

## 🎯 Quick Test After Deployment

```bash
# Test status endpoint
curl https://your-deployment-url.vercel.app/api/status

# Should return JSON with book counts and status
```

---

**Once deployed, you can forget about it - it will run automatically!** 🚀

