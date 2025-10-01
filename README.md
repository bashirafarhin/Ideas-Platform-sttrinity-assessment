# Ideas Platform

A RESTful API for managing and upvoting ideas. Users can create ideas (up to 300 characters), view paginated lists of ideas, and upvote their favorites.

## 🚀 Tech Stack

- **Frontend**: NextJs
- **Backend**: Node.js and Express.js
- **Database**: PostgreSQL
- **Database Client**: node-postgres (pg)


## 🔧 Environment Variables

Create a `.env` file in client directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Create a `.env` file in server directory:

```env
PORT=8000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=
```

## 📚 API Documentation

For detailed API documentation, including request/response formats and examples, see [API_DOCS.md](./API_DOCS.md)
