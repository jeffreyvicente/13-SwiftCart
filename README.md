# 13-SwiftCart 🛒

## Description

SwiftCart is the back end for an e-commerce website built using Express.js and Sequelize. It provides an API to interact with a MySQL database, allowing you to manage categories, products, and tags. The backend allows the user to post, put, add and delete categories, products and tags.

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation

To run StaffTrack Pro, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Edit the `.env.DEMO` file in the root directory of the project and set the following environment variables with your MySQL database configuration
5. Rename `.env.DEMO` to `.env`
6. Create the specified database in your MySQL server.
7. Run `npm run seed` to create the tables and seed the initial data in the database.
8. Run `npm start` to start the server.


## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Preview

View backend demo hosted on [YouTube](https://www.youtube.com/watch?v=Sbzo1DV9F7Q)

GET routes to return all categories, all products, and all tags.
![alt text](/media/13-orm-homework-demo-01.gif)


GET routes to return a single category, a single product, and a single tag.
![alt text](/media/13-orm-homework-demo-02.gif)


POST, PUT, and DELETE routes for categories being tested.
![alt text](/media/13-orm-homework-demo-03.gif)


## Features
The StaffTrack Pro has the following features:

- View All 
    - Categories
    - Products
    - Tags
- Add
    - Categories
    - Products
    - Tags
- Update
    - Categories
    - Products
    - Tags


## Technologies Used
- Node.js
- MySQL
- Dotenv
- Express
- Javascript



