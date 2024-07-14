# Task Management REST API

This REST API allows users to manage their tasks, which can be organized into categories for easier management. The API supports user authentication through basic HTTP authentication (username and password).

## Features

- Basic user information (name, email, password) is stored in the database.
- Users own multiple categories that can be named.
- Categories contain multiple tasks.
- Tasks can be shared (visible to all users and unauthenticated viewers) or private (visible only to the creator).
- Tasks can be of two different types:
  - Text task: has a text body.
  - List task: has list items that contain a text body.
- Supports CRUD actions for all categories.
- Supports CRUD actions for all tasks.
- Pagination, filtering, and sorting functionalities.

## Endpoints

### User Routes

- **POST /login**: User login with validation.
- **POST /signup**: User signup with validation.

### Task Routes

- **GET /tasks**: Get all tasks with pagination.
- **POST /tasks**: Add a new task (authentication required).
- **PUT /tasks/:taskId**: Update a task (authentication and task ownership required).
- **DELETE /tasks/:taskId**: Delete a task (authentication and task ownership required).
- **GET /tasks/filter**: Filter tasks by shared option (Public/Private) (authentication required).
- **GET /tasks/sort**: Sort tasks by shared option (Public/Private) (authentication required).

### Category Routes

- **GET /categories**: Get all categories (authentication required).
- **POST /categories**: Add a new category (authentication and validation required).
- **PUT /categories/:categoryId**: Update a category (authentication, category ownership, and validation required).
- **DELETE /categories/:categoryId**: Delete a category (authentication and category ownership required).
- **GET /categories/filter**: Filter categories by name (authentication required).
- **GET /categories/sort**: Sort categories by name (authentication required).

## Implementation Details

- **User Authentication**: Implemented through basic HTTP authentication.
- **CRUD Operations**: Supported for both categories and tasks.
- **Pagination, Filtering, and Sorting**: Implemented for tasks and categories.
