/**
 * Seven Swaras — demo booking backend.
 *
 * Receives "Book Your Free Demo Class" popup submissions and appends them to
 * the "Demo Bookings" tab of the spreadsheet this script is bound to.
 * Setup steps are in the project README.
 */

const SHEET_NAME = 'Demo Bookings';
const TIME_ZONE = 'Asia/Kolkata';

// [payload key, column header]. Keys without a payload value are filled in here.
const COLUMNS = [
  ['bookingId', 'Booking ID'],
  ['receivedAt', 'Received At (IST)'],
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

const REQUIRED = ['name', 'mobile', 'instrument', 'preferredSlot', 'preferredSlotIST', 'timeZone'];
const MAX_LENGTH = 300;
const DUPLICATE_WINDOW_MINUTES = 10;
const DUPLICATE_SCAN_ROWS = 50;

/** Run once from the editor: creates the tab and formats the header row. */
function setup() {
  getSheet_();
}

/** Health check: open the web app URL in a browser to confirm the deployment. */
function doGet() {
  return json_({ ok: true, service: 'seven-swaras-demo-bookings' });
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'Invalid request.' });
  }

  // Honeypot: real visitors never see or fill this field. Bots get a fake success.
  if (data.website) return json_({ ok: true, bookingId: 'SS-IGNORED' });

  const error = validate_(data);
  if (error) return json_({ ok: false, error: error });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) return json_({ ok: false, error: 'Busy, please try again.' });
  try {
    const sheet = getSheet_();

    // A double-click or retry resubmits the same booking: answer with the existing ID
    const existingId = findRecentDuplicate_(sheet, data);
    if (existingId) return json_({ ok: true, bookingId: existingId, duplicate: true });

    const now = new Date();
    const row = Object.assign({}, data, {
      bookingId: 'SS-' + Utilities.formatDate(now, TIME_ZONE, 'yyMMdd') + '-' + randomCode_(4),
      receivedAt: Utilities.formatDate(now, TIME_ZONE, 'yyyy-MM-dd HH:mm:ss'),
    });
    const values = COLUMNS.map(function (col) { return safeText_(row[col[0]]); });

    // Plain-text format so Sheets never turns phone numbers or dates into something else
    sheet.getRange(sheet.getLastRow() + 1, 1, 1, values.length)
      .setNumberFormat('@')
      .setValues([values]);

    return json_({ ok: true, bookingId: row.bookingId });
  } finally {
    lock.releaseLock();
  }
}

function validate_(data) {
  for (let i = 0; i < REQUIRED.length; i++) {
    if (!String(data[REQUIRED[i]] || '').trim()) return 'Missing ' + REQUIRED[i] + '.';
  }
  for (let i = 0; i < COLUMNS.length; i++) {
    if (String(data[COLUMNS[i][0]] || '').length > MAX_LENGTH) return 'A field is too long.';
  }
  if (!/^\+?[\d\s-]{7,16}$/.test(String(data.mobile).trim())) return 'Invalid phone number.';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email).trim())) return 'Invalid email.';
  return '';
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, COLUMNS.length)
      .setValues([COLUMNS.map(function (col) { return col[1]; })])
      .setFontWeight('bold')
      .setBackground('#312E81')
      .setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, COLUMNS.length, 180);
  }
  return sheet;
}

function findRecentDuplicate_(sheet, data) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return '';
  const count = Math.min(DUPLICATE_SCAN_ROWS, lastRow - 1);
  const rows = sheet.getRange(lastRow - count + 1, 1, count, COLUMNS.length).getDisplayValues();
  const col = function (key) { return COLUMNS.findIndex(function (c) { return c[0] === key; }); };
  const cutoff = Utilities.formatDate(
    new Date(Date.now() - DUPLICATE_WINDOW_MINUTES * 60000), TIME_ZONE, 'yyyy-MM-dd HH:mm:ss');

  for (let i = rows.length - 1; i >= 0; i--) {
    const r = rows[i];
    if (r[col('receivedAt')] < cutoff) break;
    if (r[col('mobile')] === safeText_(data.mobile) && r[col('preferredSlotIST')] === safeText_(data.preferredSlotIST)) {
      return r[col('bookingId')];
    }
  }
  return '';
}

// Trims the value and stops anything that looks like a formula from being run
function safeText_(value) {
  const text = String(value == null ? '' : value).trim();
  return /^[=@]/.test(text) ? "'" + text : text;
}

function randomCode_(length) {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < length; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  return code;
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
