import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Load credentials from the service account JSON file
const SERVICE_ACCOUNT_EMAIL = 'save-emails@lundquistwebsite.iam.gserviceaccount.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCRKu9pV4olp6/L\nRCiE+zsOMcXj1bUm5tfRUu4gaZQ+lnoEUmWFALfV/x8r7LUHlyaI7VNKEhSN5W/6\nuQe0U3o1MySV776ouUkr4EWc00yZQuBlOiiQe+vAe5plfc+03n9hUj3g0lVstj1v\nNDK3PKfF6FPvERYOJu53qGhocDVMh4EBjyuyiWeHf1l8Y1RLlXdrhUnAoIe1OG1p\nkznlrGGAzqIeTYnArx6/oYjEd9tFJL1/qupogIiUBMJGxAdtfK3mTAnQGWs90jVs\nLvI1lE97iykP/wDHVLwzKYvuEtSQHngTJsH8Oyxazk6YOoswPgZfFios1Rh/rEQe\nU/F58i8dAgMBAAECggEAGq5vCYgW8pvTAkO5RNPeQ1ofmqQlYwyLv0QEU33ESwqi\nS5gPY7ZBk7oL8ylTDp2X7hPcuqD/GSOCBO2sPlcXf56yS0Kg4ucHTWKvuMbXbdXu\nY3yghwnXx22Qb7YDjqVUeUFB8UgHfm8ydHV+GtKxrXzprGeSC7DZJLIV2phBG5sH\nQ28si877hgPAnNEOizwRlLqjJs9X/9pqSuMtZVXGBRfLiDQ1wE4q4Jae7h+PFyBU\nNrZ0rGhp704u7frbtdTBE5bsG7F1ccwAQyv5Y5awqiBPR0LlehfOeGu3dG6OxUOz\nKR38vv6tyhe3r3HhskF17FTxq3mWy+gY1SW8VnYRcQKBgQDLHdVSXcQJW08rRSaO\nJp0DoMpp5s7X4oITHi6XQGSkmDOO5ZHseNlgImNY6PlRc+PuiEkaW/uNw/Bq/mQU\nv5hYiqtTsPSvpZ+0xO4dSO+ocj3G7rDGSSnKnACKGMBuxonkYljGDyyf1RtwtGpE\n/KCgcUGETIGvlGPgOFFcq+aWSQKBgQC29q9MINQhp8yIyGwFlptIv689tvmti3xM\nOAAoLSf1H/6OehnnNT2SLg8neoditVmaawPC1STAKUOc2aGX+qhZeUEPKFgxgo1x\nGnApCpudXA+f9qXI5amhSDk3DAlsB2UGheyPH3hOo5yerkbGzJFKeZH/0dNw9pzd\nZS9h48SCNQKBgEUTkEjCuriz5OjCS6psV1m0hSIe7Jle3v3BdfbaX1/aoy4lxMq3\nDrYy+7ZxBNk+oHWuw63DOnmr+Udp3H9x6U2zWzDLLWvO19GSZ6ht9ZNDxt6wrk3A\n9AWDqGtOn6MMwjh5eddhsbtprjtWIA32HGp0GeP0YOZlgNHwVTs++tyBAoGAVZ1r\ne/kkqrcFa8A1ZAwMj+c6jmtvvDi4KkZONH6k4vxctrkGI/3y2NN6veOFNLhdvHd1\nJBdvAgiNHflst1xQqMWnnvsnAcvwecuAToQrO2BX42ecPjzRuqm8NDkKs6VmLb4/\nat20A0BmSo6MifwxxKLMoePCyGpuDt+JY4ocaz0CgYBeCS/r3uTnqqk0MbnRsPn1\nKy1QiBbw/nIUrh10WZkOVWhH5jKcXkPR3EifWOr4E0BorpMwWEMJTswVZpHstLQx\nsePKygfM6pm26zEYGszcV5pLY1mtj6wJ+sNUgNX7qhcGEWNY4isRnlUC+TYe35qu\nU9GY/AvEnwBHliWbc7rgiA==\n-----END PRIVATE KEY-----\n";

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
