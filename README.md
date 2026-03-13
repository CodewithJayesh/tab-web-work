# web_top

Frontend and backend project built with Vite, React, and Express.

## Scripts

- `npm run dev` starts the Vite frontend
- `npm run dev:server` starts the Express backend on port `4000`
- `npm run build` builds the frontend
- `npm run lint` runs ESLint
- `npm run start` runs the backend without file watching

## API

- `GET /api/health` returns backend status
- `GET /api/contact` returns in-memory contact submissions
- `POST /api/contact` accepts contact form submissions

## Local development

Run these in separate terminals:

```bash
npm run dev:server
npm run dev
```

The Vite dev server proxies `/api/*` requests to `http://localhost:4000`.
