# Node Music Microservice

>A simple RESTful API microservice for managing songs built with Node.js and Express.

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
Start the server with automatic restart on file changes:
```bash
npm run dev
```

### Production
Start the server:
```bash
npm start
```

### Docker
Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t node-music-microservice .

# Run the container
docker run -p 3000:3000 node-music-microservice
```

The server will run on `http://localhost:3000`

View container logs:
```bash
docker logs <container-id>
```

Access container shell:
```bash
docker exec -it <container-id> sh
```


## API Endpoints


| Method   | Endpoint         | Description               |
| -------- | ---------------- | ------------------------- |
| `GET`    | `/api/songs`     | Get all songs             |
| `GET`    | `/api/songs/:id` | Get a specific song by ID |
| `POST`   | `/api/songs`     | Create a new song         |
| `PUT`    | `/api/songs/:id` | Update a song by ID       |
| `DELETE` | `/api/songs/:id` | Delete a song by ID       |

### Example Requests

#### Get all songs
```bash
curl http://localhost:3000/api/songs
```

#### Get a specific song
```bash
curl http://localhost:3000/api/songs/1
```

#### Create a new song
```bash
curl -X POST http://localhost:3000/api/songs \
  -H "Content-Type: application/json" \
  -d '{"name": "New Song", "artist": ["Artist Name"]}'
```

#### Update a song
```bash
curl -X PUT http://localhost:3000/api/songs/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Song Name"}'
```



#### Delete a song
```bash
curl -X DELETE http://localhost:3000/api/songs/1
```

## Dependencies

- **Express**: ^5.0.0-beta.1 - Web framework
- **Nodemon**: ^3.1.10 - Development server with auto-restart

## Sample Data

The service comes with sample songs including:
- Bohemian Rhapsody (Queen)
- Hotel California (Eagles)
- Imagine (John Lennon)
- Billie Jean (Michael Jackson)
- - And more...