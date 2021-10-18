
## Description
A simple redit application with client and api side. The client side is written with ReactJS framework and the api is with KoaJS.

The project allows users to brows through different threads and create new once if signup/loged in.
Each thread has comments where users can coment, like or dislike comments.
## Installation

```bash
$ cd client
$ npm install
```

```bash
$ cd api
$ npm install
```

## Running the app

Two consoles must be open, one for the client and one for the api.

```bash
# development
$ cd client
$ npm run start

# watch mode
$ cd client
$ npm run start:dev

```

Before running the api open file *env.dev.js* and provide credentials for connecting to MongoDB

```bash
# development
$ cd api
$ npm run start

# watch mode
$ cd api
$ npm run start:dev

```

Project will run on *http://localhost:4000*

## Endpoints

### Frontend
- get all threads
  *http://localhost:4000/home*

- get specific thread
  *http://localhost:4000/r/threadId*

### Backend

- get all threads
  *http://localhost:4000/r* <- GET request

- get specific thread
  *http://localhost:4000/r/threadId* <- GET request

- post new thread
  *http://localhost:4000/r* <- POST request
  
  example request body:
  {
    "name": "New topic",
    "comments_total": 0,
    "likes": 0,
    "dislikes": 0,
    }

- post new comment in thread
  *http://localhost:4000/r/threadId/comments* <- POST request
  
  example request body:
  {
    "author": "redditUser",
    "body": "I like this thread",
    "likes": 0,
    "dislikes": 0
    }

- update comment in thread
  *http://localhost:4000/r/threadId/comments/commentId* <- PUT request
  
  example request body:
  {
    "likes": 5
    }

- login
  *http://localhost:4000/login* <- POST request
  
  example request body:
  {
    "username": "redditUser"
    "password": "Passowrd123"
    }

- signup
  *http://localhost:4000/signup* <- POST request
  
  example request body:
  {
    "username": "redditUser"
    "password": "Passowrd123"
    }

## License

Nest is [MIT licensed](LICENSE).
