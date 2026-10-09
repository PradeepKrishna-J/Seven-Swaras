# React + Vite

## Google Sheets demo bookings

The “Book Your Free Demo Class” popup sends each booking to a Google Apps
Script web app as a JSON string. Every value is a plain string. Copy
`.env.example` to `.env.local` and set `VITE_GOOGLE_SHEETS_WEB_APP_URL` to the
deployed web app URL.

Visitors choose any date and time plus their own time zone. The browser's zone
is selected by default. Each row stores the slot in the visitor's zone and the
same moment converted to IST.

Create a Google Sheet, then add this Apps Script (`Extensions` → `Apps Script`).
The `Demo Bookings` tab and its header row are created on the first booking:

```js
const SHEET_NAME = 'Demo Bookings';
const COLUMNS = [
  ['receivedAt', 'Received At'],
  ['name', 'Name'],
  ['mobile', 'Mobile'],
  ['email', 'Email'],
  ['instrument', 'Instrument'],
  ['preferredSlot', 'Preferred Slot (visitor time zone)'],
  ['preferredSlotIST', 'Preferred Slot (IST)'],
  ['timeZone', 'Visitor Time Zone'],
  ['source', 'Page'],
  ['submittedAt', 'Submitted At (UTC)'],
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map(([, label]) => label));
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse(e.postData.contents);
    data.receivedAt = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss') + ' IST';

    // Write as plain text so Sheets never reformats phone numbers or dates
    const row = COLUMNS.map(([key]) => String(data[key] ?? ''));
    const range = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
    range.setNumberFormat('@').setValues([row]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

Deploy it as a web app (`Deploy` → `New deployment` → `Web app`) with
“Execute as: Me” and “Who has access: Anyone”. The sheet owner is asked to
authorize the script once. After any change to the script, deploy a new version
for the change to take effect.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
