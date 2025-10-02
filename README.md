# Ideas Platform

A RESTful API for managing and upvoting ideas. Users can create ideas (up to 280 characters), view paginated lists of ideas, and upvote their favorites.

## 🚀 Tech Stack

- **Frontend**: NextJs
- **Backend**: Node.js and Express.js
- **Database**: PostgreSQL
- **Database Client**: node-postgres (pg)

## 📚 API Documentation

For detailed API documentation, including request/response formats and examples, see [API_DOCS.md](./API_DOCS.md)

## Running the Application Locally with Docker Compose

1. Clone the repository
```
git clone https://github.com/bashirafarhin/Ideas-Platform-sttrinity-assessment.git
cd ./Ideas-Platform-sttrinity-assessment
```

2. Ensure Docker is installed and running
```
Make sure Docker Desktop (or Docker Engine) is running on your machine.
```

4. Start the application

Run the following command to build and start all services:
```
docker-compose up --build
```

This will start:

PostgreSQL with your database and tables initialized.

pgAdmin accessible at ```http://localhost:8080```

Backend API at ```http://localhost:8000```

Frontend at ```http://localhost:3000```