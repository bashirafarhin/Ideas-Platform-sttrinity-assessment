# API Documentation

Base URL: `http://localhost:3000/api`

---

## `/ideas` Routes

### Fetch All Ideas

Retrieve a paginated list of ideas, sorted by creation date (newest first).

**Endpoint:** `GET /api/ideas`

**Query Parameters:**
```
pageNumber: number (optional, default: 1)
pageSize: number (optional, default: 10)
```

**Request Body:** None

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "text": "Build a mobile app for local farmers",
        "upvotes": 15,
        "created_at": "2025-10-01T10:30:00.000Z"
      },
      {
        "id": 2,
        "text": "Create an AI-powered study assistant",
        "upvotes": 8,
        "created_at": "2025-10-01T09:15:00.000Z"
      }
    ],
    "totalPages": 5,
    "pageNumber": 1,
    "pageSize": 10
  }
}
```

---

### Create New Idea

Add a new idea to the platform.

**Endpoint:** `POST /api/ideas`

**Query Parameters:** None

**Request Body:**
```json
{
  "text": "Build a carbon footprint tracking app"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "text": "Build a carbon footprint tracking app",
    "upvotes": 0,
    "created_at": "2025-10-01T12:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Idea text is required and must be under 300 chars"
}
```

---

### Upvote Idea

Increment the upvote count for a specific idea.

**Endpoint:** `POST /api/ideas/:id/upvote`

**URL Parameters:**
```
id: number (required) - The unique ID of the idea
```

**Query Parameters:** None

**Request Body:** None

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "text": "Build a carbon footprint tracking app",
    "upvotes": 1,
    "created_at": "2025-10-01T12:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Idea not found"
}
```