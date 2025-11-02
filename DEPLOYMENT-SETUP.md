# 🚀 Deployment Setup Guide - Web3Forms Integration

## ⚠️ CRITICAL: Complete This Before Pushing to GitHub

Your site uses **GitHub Pages** for deployment. To ensure the quiz email capture works in production, you **MUST** add your Web3Forms API key as a GitHub Secret.

---

## 📋 Step-by-Step Instructions

### Step 1: Add GitHub Secret (REQUIRED)

1. **Go to your GitHub repository**:
   - Navigate to: https://github.com/YG4PRESIDENT/TrueInsightsAI

2. **Access Settings**:
   - Click on **Settings** (top navigation)
   - In the left sidebar, click **Secrets and variables** → **Actions**

3. **Create New Secret**:
   - Click **New repository secret**
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: `81c3796c-1049-4d2b-8848-6ea98d4d14b6`
   - Click **Add secret**

### Step 2: Push Your Changes

Once the secret is added, you can safely push your code:

```bash
git add .
git commit -m "Add Web3Forms integration and fix quiz submission"
git push origin master
```

### Step 3: Verify Deployment

1. **Wait for GitHub Actions to complete** (2-3 minutes)
   - Go to: https://github.com/YG4PRESIDENT/TrueInsightsAI/actions
   - Watch the deployment workflow

2. **Test the live site**:
   - Visit: https://trueinsightsai.com/quiz
   - Complete the quiz with a test email
   - Check if you receive the submission email

---

## ✅ What We Fixed

### Files Modified:
1. **`.github/workflows/deploy.yml`** - Added environment variable injection during build
2. **`.env.local`** - Created with your API key (for local development only)
3. **`lib/quizSubmission.ts`** - Improved error handling

### How It Works:

**Local Development:**
- Uses `.env.local` file (not committed to git)
- Environment variable loaded by Next.js dev server

**Production Deployment:**
- GitHub Actions reads the secret: `NEXT_PUBLIC_WEB3FORMS_KEY`
- Injects it during the build process
- API key gets baked into the static JavaScript files
- Deployed to GitHub Pages with the key embedded

---

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` - your key won't be committed
- ✅ GitHub Secrets are encrypted and secure
- ✅ The key is only exposed in the built JavaScript (which is necessary for client-side API calls)
- ⚠️ Anyone can view the API key in the browser's source code, but Web3Forms keys are domain-restricted

---

## 🐛 Troubleshooting

### If submissions still don't work after deployment:

1. **Check GitHub Actions logs**:
   - Ensure the build completed successfully
   - Look for any environment variable errors

2. **Verify the secret was added correctly**:
   - Go to Settings → Secrets and variables → Actions
   - Confirm `NEXT_PUBLIC_WEB3FORMS_KEY` exists

3. **Check Web3Forms dashboard**:
   - Login to https://web3forms.com/
   - Verify the form is active
   - Check if domain restrictions are set correctly
   - Ensure you haven't hit submission limits

4. **Browser Console**:
   - Open DevTools (F12)
   - Look for any error messages during quiz submission
   - Should NOT see "Configuration error"

---

## 📧 Where Do Emails Go?

Quiz submissions are sent to the email address configured in your **Web3Forms dashboard**:
- Login to https://web3forms.com/
- Check your form settings
- Update the notification email if needed

---

## 🎯 Quick Checklist Before Pushing

- [ ] GitHub Secret `NEXT_PUBLIC_WEB3FORMS_KEY` added
- [ ] `.github/workflows/deploy.yml` updated (already done ✅)
- [ ] `.env.local` exists locally (already done ✅)
- [ ] Tested locally and it works
- [ ] Ready to push to GitHub

---

**You're all set!** Once you add the GitHub Secret, you can push without any issues. 🚀

