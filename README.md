# ToDo Application

*Author: Frederick Roegiers*

This is a simple ToDo application that allows you to add, remove, and list tasks.
It will be possible in the future to mark tasks as done and to categorize them.

## Getting Started

### .env file

After cloning the repository, **you need to create an .env file** in the root of the project.  
You could also just rename .env-default to .env and fill in the values.

### Installation

After that, you can run the following commands to install the application:

```bash
npm install
```

Now, start the application with the following command:

```bash
npm start
```

## Usage

Follow the instructions in the terminal to use the application.
(e.g. https://localhost:4000/ in your browser)

## Architecture

This application is built with Node.js and Express.js.
For live reloading purposes, Nodemon is used and livereload to refresh the browser.

## Dependencies

- **express** (to create the server)
- **nodemon** (to restart the server on file changes)
- **livereload** (to refresh the browser)
- **dotenv** (to load environment variables from the .env file)
- **path** (to resolve paths in the application)