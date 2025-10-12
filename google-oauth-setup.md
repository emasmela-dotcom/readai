# Google OAuth Setup for ReadAI

## 🔧 **To Enable Google Sign-In:**

### **1. Google Cloud Console Setup:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
5. Set **Application type** to "Web application"
6. Add **Authorized redirect URIs**:
   - `https://dhgadfghpsomwwjcigla.supabase.co/auth/v1/callback`
   - `http://localhost:3001` (for local development)

### **2. Supabase Configuration:**
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your ReadAI project
3. Go to **Authentication** → **Providers**
4. Enable **Google** provider
5. Add your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console

### **3. Update ReadAI Code:**
Once configured, remove the "(Coming Soon)" text from the Google button in `index.html`:

```html
<button id="googleBtn" class="auth-btn google-btn">
    <span class="google-icon">🔍</span>
    Continue with Google
</button>
```

### **4. Test Google OAuth:**
- Click "Continue with Google" button
- Should redirect to Google sign-in
- After authentication, redirect back to ReadAI
- User should be automatically logged in

## 🚀 **Current Status:**
- ✅ Google OAuth function implemented
- ✅ Error handling for unconfigured OAuth
- ✅ User-friendly fallback message
- ⏳ **Pending**: Google Cloud Console setup
- ⏳ **Pending**: Supabase OAuth configuration

## 📝 **Alternative:**
For now, users can sign up with email/password, which is fully functional!
