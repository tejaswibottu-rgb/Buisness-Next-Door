# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Project Specific Setup

This workspace includes a React front-end and a simple Express/MongoDB backend for authentication and reviews.

### Backend Installation

```sh
cd server
npm install
```

Create a `.env` based on `.env.example` and supply your MongoDB URI and a JWT secret. The provided connection string is:

```
mongodb+srv://<db_username>:<db_password>@buisnessnextdoor.zcpajy0.mongodb.net/?appName=BuisnessNextDoor
```

Start the server:

```sh
npm run dev # from the /server directory
```

You can also run both frontend and backend together if you install `concurrently` (e.g. `npm install -D concurrently`) and then execute:

```sh
npm run dev:all
```

By default it listens on port 5000 and offers endpoints under `/api` for:

- `POST /api/auth/register` – create account
- `POST /api/auth/login` – get JWT
- `POST /api/reviews` – submit review (requires Authorization header)
- `GET /api/reviews/:businessId` – fetch reviews

### Front-end

From workspace root:

```sh
npm install
npm run dev
```

The React application will save the JWT in localStorage and include it automatically when posting reviews.

### Notes

Only registered users can submit reviews; existing business information is currently hard-coded but can later be moved to the database as well.
