import { google } from 'googleapis';
import { NextResponse } from 'next/server';


// Load credentials from the service account JSON file
const SERVICE_ACCOUNT_EMAIL = 'save-emails@lundquistwebsite.iam.gserviceaccount.com';
const PRIVATE_KEY = process.env.PRIVATE_KEY

const SHEET_ID = '1CHU3t1OQqYyihvarPIQdicVIrkrtjod3CC5sOZpLeso'; // Get this from the Google Sheets URL



export async function POST(request: Request) {
  try {
    const body = await request.json();

    

    const auth = new google.auth.JWT(
      SERVICE_ACCOUNT_EMAIL,
      undefined,
      PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );
    

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1:C1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.email, body.message, new Date().toISOString()]],
      },
    });

    // Send success response
    return NextResponse.json({ message: 'Thank you for your interest! I will reply as soon as I can!' });
  } catch (error) {
    console.error('Error in API route:', error);

    // Return error response
    return NextResponse.json(
      { error: 'Failed to add data to Google Sheets' },
      { status: 500 } // Set status code to 500 for server errors
    );
  }
}
