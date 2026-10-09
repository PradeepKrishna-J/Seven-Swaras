# React + Vite

## Google Sheets demo bookings

The “Book Your Free Demo Class” popup posts each booking as JSON to a Google
Apps Script web app, which appends a row to the `Demo Bookings` tab of a Google
Sheet. The script lives in [`apps-script/Code.gs`](apps-script/Code.gs).

The script checks required fields and phone/email format, ignores bots that fill
the hidden `website` field, and returns the existing booking ID instead of a
duplicate row when the same phone and slot arrive twice within 10 minutes. It
replies with `{ ok, bookingId }` or `{ ok: false, error }`, and the popup shows
“You're booked!” only after a successful reply.

Each row stores: Booking ID, Received At (IST), Name, Mobile, Email, Instrument,
the slot in the visitor's time zone and in IST, the visitor's time zone, the
page and the submission time (UTC). Every cell is plain text.

### Setup

1. Create a new Google Sheet (for example “Seven Swaras – Demo Bookings”).
2. In the sheet, open `Extensions` → `Apps Script`. Replace the contents of
   `Code.gs` with [`apps-script/Code.gs`](apps-script/Code.gs) and save.
3. Select the `setup` function and click `Run`. Approve the permission prompt
   (choose your account → `Advanced` → `Go to … (unsafe)` → `Allow`). This
   creates the `Demo Bookings` tab and its header row.
4. Click `Deploy` → `New deployment` → gear icon → `Web app`. Set
   “Execute as: **Me**” and “Who has access: **Anyone**”, then `Deploy`.
5. Copy the web app URL (ending in `/exec`). Opening it in a browser should
   show `{"ok":true,"service":"seven-swaras-demo-bookings"}`.
6. Set `VITE_GOOGLE_SHEETS_WEB_APP_URL` to that URL in `.env.local` for local
   development and in Vercel (`Settings` → `Environment Variables`) for
   production, then redeploy the site.

After changing the script, use `Deploy` → `Manage deployments` → edit (pencil)
→ Version: `New version` → `Deploy`. This keeps the same URL; creating a new
deployment instead gives a new URL that must be updated in the env variable.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
