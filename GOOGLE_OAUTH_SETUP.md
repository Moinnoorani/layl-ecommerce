# Google OAuth Setup Guide

## Step-by-Step Instructions to Get Google Client ID & Secret

### Step 1: Go to Google Cloud Console
Visit: https://console.cloud.google.com/

### Step 2: Create a New Project (or Select Existing)
1. Click on the project dropdown at the top
2. Click **"New Project"**
3. Name it: `LAYL Ecommerce` (or any name)
4. Click **"Create"**
5. Wait for the project to be created, then select it

### Step 3: Enable Google+ API
1. In the left sidebar, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google+ API"** or **"Google Identity"**
3. Click on it and click **"Enable"**

### Step 4: Configure OAuth Consent Screen
1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** (unless you have a Google Workspace)
3. Click **"Create"**
4. Fill in the required fields:
   - **App name:** LAYL
   - **User support email:** Your email
   - **Developer contact email:** Your email
5. Click **"Save and Continue"**
6. **Scopes:** Click "Save and Continue" (default scopes are fine)
7. **Test users:** Add your email address (optional for testing)
8. Click **"Save and Continue"**
9. Review and click **"Back to Dashboard"**

### Step 5: Create OAuth 2.0 Credentials
1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ Create Credentials"** at the top
3. Select **"OAuth client ID"**
4. Choose **"Application type"**: **Web application**
5. Give it a name: `LAYL Web Client`

### Step 6: Configure Redirect URIs
**IMPORTANT:** You need to add BOTH localhost and your Vercel URL

In **"Authorized JavaScript origins"**, add:
```
http://localhost:3000
https://your-vercel-url.vercel.app
```

In **"Authorized redirect URIs"**, add:
```
http://localhost:3000/api/auth/callback/google
https://your-vercel-url.vercel.app/api/auth/callback/google
```

Replace `your-vercel-url.vercel.app` with your actual Vercel deployment URL!

### Step 7: Get Your Credentials
1. Click **"Create"**
2. A popup will show your credentials:
   - **Client ID**: Something like `123456789-abc123xyz.apps.googleusercontent.com`
   - **Client Secret**: Something like `GOCSPX-abcd1234xyz`
3. **Copy both values**

### Step 8: Add to Your Project

#### For Local Development (.env file):
Add to your `.env` file (already exists):
```
GOOGLE_CLIENT_ID="paste-your-client-id-here"
GOOGLE_CLIENT_SECRET="paste-your-client-secret-here"
```

#### For Vercel Production:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these two variables:
   - Name: `GOOGLE_CLIENT_ID`, Value: (your client ID)
   - Name: `GOOGLE_CLIENT_SECRET`, Value: (your client secret)
3. Make sure they're set for **Production, Preview, and Development** environments
4. Save changes
5. **Redeploy** your site (Vercel should auto-redeploy)

### Step 9: Test
1. Go to your website (localhost or Vercel)
2. Navigate to the Sign In page
3. Click **"Sign in with Google"**
4. You should see the Google OAuth consent screen
5. Sign in with your Google account
6. You'll be redirected back to your site

---

## Quick Summary

**What you need:**
1. Google Client ID (looks like: `123456-abc.apps.googleusercontent.com`)
2. Google Client Secret (looks like: `GOCSPX-abc123`)

**Where to add them:**
- **Local:** `.env` file in your project
- **Production:** Vercel Dashboard → Settings → Environment Variables

**Important Redirect URI:**
```
https://your-vercel-url.vercel.app/api/auth/callback/google
```

---

## Troubleshooting

**Error: "Redirect URI mismatch"**
- Make sure you added the exact callback URL in Google Cloud Console
- The URL must match perfectly (including https://)

**Error: "Access blocked"**
- Your app is in testing mode
- Go to OAuth consent screen → Publishing status → "Publish App"
- OR add your email to "Test users"

**Google sign-in button not working:**
- Check that environment variables are set in Vercel
- Redeploy after adding environment variables
- Check browser console for errors

---

## Optional: Make App Public
By default, your OAuth app is in "Testing" mode (max 100 users).

To make it public:
1. Go to **OAuth consent screen**
2. Click **"Publish App"**
3. Submit for verification (if needed)

For a small e-commerce site, "Testing" mode is usually fine!
