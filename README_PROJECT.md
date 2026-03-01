# Business Next Door

Business Next Door is a small full-stack demo that pairs a React + Vite front-end with an Express + MongoDB backend to allow users to browse businesses and submit reviews (authentication via JWT).

## Features

- User registration and login (JWT)
- Add and view reviews for businesses
- Simple REST API under `/api` for auth, businesses, and reviews
- Development-ready: Vite dev server and nodemon-based backend

## Tech stack

- Frontend: React, Vite, CSS
- Backend: Node.js, Express
- Database: MongoDB (Atlas or local)

## Repo structure (important files)

- `server/` — Express API and Mongoose models
- `src/` — React app (components, assets)
- `package.json` — workspace scripts (frontend)
- `server/package.json` — backend scripts
- `README.md` — this file

## Requirements

- Node.js (16+ recommended)
- npm (or yarn)
- MongoDB connection (Atlas URI or local instance)

## Setup and run

1. Install dependencies (root + server):

```bash
npm install
cd server
npm install
cd ..
```

2. Provide environment variables

Create a `.env` file in `server/` (or set env vars) including at least:

- `MONGODB_URI` — your MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- Optional: `PORT` (default 5000)

3. Start backend (from `server/`):

```bash
npm run dev
```

4. Start frontend (from workspace root):

```bash
npm run dev
```

Tip: you can run both concurrently if you add a script using `concurrently`.

## API (quick reference)

- `POST /api/auth/register` — body: `{ name, email, password }` — registers a user
- `POST /api/auth/login` — body: `{ email, password }` — returns `{ token }`
- `GET /api/businesses` — list businesses
- `GET /api/businesses/:id` — get business details
- `GET /api/reviews/:businessId` — list reviews for a business
- `POST /api/reviews` — create review (requires `Authorization: Bearer <token>`)

See `server/routes/` for full route implementations.

## Development notes

- JWT is stored client-side in `localStorage` by the React app.
- Models are in `server/models/` (`Business.js`, `Review.js`, `User.js`).

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a PR with clear description

## License

This repository does not include a license file. Add one if you plan to open-source the code.

---

If you'd like, I can also:

- add a minimal `.env.example` to `server/`
- add a `dev:all` script to run both servers concurrently

Requested file created: `README_PROJECT.md`
