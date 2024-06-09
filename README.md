
# User Management App

This is a simple user management application built with Node.js, Express.js, and EJS. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on user data stored in a MongoDB database.


## Features

- Add a new user with a name, email, and profile picture.
- View all users.
- Edit user details.
- Delete a user.


## Demo
![Screenshot (142)](https://github.com/UMARSYED22/Profiles/assets/91256810/095b5e6f-9ffe-4067-87f1-6e07df8201de)
![Screenshot (143)](https://github.com/UMARSYED22/Profiles/assets/91256810/fb2ed329-4510-4644-99cb-a1951197a593)
![Screenshot (144)](https://github.com/UMARSYED22/Profiles/assets/91256810/1e524bdf-9573-4d31-bdb9-0f705c60baac)






## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running on your local machine or a MongoDB Atlas account.
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/UMARSYED22/Profiles.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Profiles
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Set up MongoDB:
    Ensure MongoDB is running on your local machine. If you are using MongoDB Atlas, update the connection string in the `user.js` model file.
## Usage
1. Start the server:
    ```sh
    node app.js
    ```

2. Open your web browser and go to 
`http://localhost:3000`.
## Project Structure

```plaintext
Profiles/
├── models/
│   └── user.js          # Mongoose schema and model for User
├── public/              # Static files (CSS, JS, images)
├── views/
│   ├── index.ejs        # Home page
│   ├── read.ejs         # View all users
│   └── edit.ejs         # Edit user page
├── app.js               # Main application file
└── package.json         # Project metadata and dependencies
```
## Routes

`GET /` - Render the home page.   
`GET /read` - Display all users.   
`POST /create` - Create a new user.   
`GET /delete/:id` - Delete a user by ID.  
`GET /edit/:userid` - Render the edit user page.   
`POST /update/:userUpdateid` - Update a user by ID.

## Authors

- [@UMARSYED22](https://github.com/UMARSYED22)

