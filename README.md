# Instagram Backend API

A simple Instagram-style backend built with Node.js, Express.js, MongoDB, Multer, and ImageKit.

## Features

* Create Post API
* Upload Images using Multer
* Store Images on ImageKit
* Save Post Data in MongoDB
* Get All Posts
* Get Single Post
* Delete Post
* REST API Architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* ImageKit
* dotenv

## Project Structure

```
project_1
│
├── config
│   ├── db.js
│   └── imagekit.js
│
├── middlewares
│   └── multer.js
│
├── models
│   └── postmodel.js
│
├── src
│   └── app.js
│
├── uploads
│
├── .env
├── server.js
└── package.json
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
IMAGEKEY_PUBLIC_KEY=your_public_key
IMAGEKEY_PRIVATE_KEY=your_private_key
IMAGEKEY_URL_ENDPOINT=your_url_endpoint
```

Start the server:

```bash
npm start
```

## API Endpoints

### Create Post

```http
POST /create-post
```

Form Data:

* image (file)
* caption (text)

### Get All Posts

```http
GET /posts
```

### Get Single Post

```http
GET /posts/:id
```

### Delete Post

```http
DELETE /posts/:id
```

## Learning Objectives

This project was built to learn:

* File Upload Handling
* Cloud Image Storage
* MongoDB CRUD Operations
* Express Routing
* Backend Project Structure
* REST API Development

## Author

Abhishek Panwar
