# Google Sheets Email Capture Setup

## Quick Setup (5 minutes)

### Option 1: Sheet.best (Easiest - Recommended)

1. Go to [https://sheet.best](https://sheet.best)
2. Sign up for a free account
3. Click "Create Connection"
4. Connect your Google account and select/create a Google Sheet
5. Copy the API endpoint URL (looks like: `https://sheet.best/api/sheets/xxxxx`)
6. Create a `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=https://sheet.best/api/sheets/YOUR_ID_HERE
   ```
7. Restart your development server

### Option 2: Google Apps Script (Free, More Control)

1. Create a new Google Sheet
2. Add column headers in Row 1: `timestamp`, `email`, `websiteUrl`, `hasWebsite`, `hasProfiles`, `asksForReviews`, `onlinePresenceCare`, `goal`, `solution`
3. Go to Extensions → Apps Script
4. Replace the code with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.email,
      data.websiteUrl,
      data.hasWebsite,
      data.hasProfiles,
      data.asksForReviews,
      data.onlinePresenceCare,
      data.goal,
      data.solution
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click "Deploy" → "New deployment"
6. Select type: "Web app"
7. Execute as: "Me"
8. Who has access: "Anyone"
9. Click "Deploy" and copy the Web App URL
10. Create `.env.local` file:
    ```
    NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=YOUR_WEB_APP_URL_HERE
    ```

## Data Captured

When a user completes the quiz, the following data is saved:

- **timestamp**: When the quiz was completed
- **email**: User's email address
- **websiteUrl**: The URL they entered on the homepage
- **hasWebsite**: Answer to "Do you have a website?"
- **hasProfiles**: Answer to "Do you have profiles on Google Business, Yelp, or BBB?"
- **asksForReviews**: Answer to "Do you ask customers to leave reviews?"
- **onlinePresenceCare**: Answer to "How much do you care about online presence?" (1-10)
- **goal**: Answer to "What do you want to achieve in the next 90 days?"
- **solution**: Answer to "Which solution would suit you best?"

## Testing

1. Complete the quiz on your website
2. Check your Google Sheet - a new row should appear
3. If nothing appears, check the browser console for errors

