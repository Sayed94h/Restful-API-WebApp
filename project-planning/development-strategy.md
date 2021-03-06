# RESTFul API Web App

Refactoring the project RESTFull API with NodeJS and Express in a functional web application.

## WIREFRAME

![wireframe](../images/wireframe.PNG)

---

## 0. Setup

> Assigned to _Sayed Kazimi_

- Create the project repo from the project template repo
- Turn on GitHub page
- Invite collaborators
- Create Group issue
- Write a simple backlog
- Write the start of development strategy

## 1. initial-application

> Assigned to _Sayed kazimi_

**As a user when I visit a website I want to see what the website is about and what I can do with**

This part is create in a branch called `initial-app` and merged in the `master` when it was completed.

### Task A: HTML

- Added two buttons for display courses and create courses

### Task B: CSS

- Added style for the added HTML elements

### Task C:

---

## 2. Get-and-display the courses

> Assigned to _Sayed kazimi_

**As a user I want to be able to list all courses and also a specific course by its ID**

This part is create in a branch called `get-and-display` and merged in the `master` when it was completed.

### Task A: HTML

- Added a form with two inputs, one for enter the course ID and another for to submit the input
- Added many elements for rendering the data on website

### Task B: CSS

- Added style for the added HTML elements

### Task C: JS

- Added two routes
- Added two handlers
- Created two functions for fetching data

---

## 3. create courses

> Assigned to _Sayed kazimi_

**As a user I want to be able to create course with a specific course name**

This part is create in a branch called `create-course` and merged in the `master` when it was completed.

### Task A: HTML

- Added a form with two inputs, one for enter the course name and another for to submit the input

### Task B: CSS

- Added style for the added HTML elements

### Task C: JS

- Added one route
- Added one handlers

  - Read the entire file
  - Validate the user input
  - push the user input if it is valid to the file content container
  - write the final changes to the database

- Created two functions for creating the form and fetching the data
- Alert to user if it is done with success or failure

---

## 4. Edit or update courses

> Assigned to _Sayed kazimi_

**As a user I want to be able to edit the course name with a specific course id**

This part is create in a branch called `update-course` and merged in the `master` when it was completed.

### Task A: HTML

- Added a form with three inputs and one label, one for enter the course name, one for entering course ID and another for to submit the input
- Added an h2 as a button for edit course
- Added a section element for controlling the form position

### Task B: CSS

- Added style for the added HTML elements

### Task C: JS

- Added one route with put method
- Added one handlers

  - Read the entire file
  - Validate the user input
  - Change the course name with the new course name
  - push the changes if these are valid to the file content container
  - write the final changes to the database

- Created two functions for displaying the form and fetching the data
- Alert to user if it is done with success or failure

---

## 5. delete courses

> Assigned to _Sayed kazimi_

**As a user I want to be able to delete a course with a specific course id**

This part is create in a branch called `delete-course` and merged in the `master` when it was completed.

### Task A: HTML

- Added a form with two inputs and one label, one for enter the course id and another for to submit the input
- Added an h2 as a button for Displaying the delete form
- Added a section element for controlling the form position

### Task B: CSS

- Added style for the added HTML elements
- Changed some styles from the previous branch

### Task C: JS

- Added one route with delete method
- Added one handler

  - Read the entire file
  - Check if there is a course with the given ID
  - Delete the course with the given ID
  - push the changes if these are valid to the file container(virtual copy of courses.json or the variable 'parsedData')
  - write the final changes to the database(courses.json)

- Created two functions for displaying the form and fetching the data
- Alert to user if it is done with success or failure

### Task D: fixing

- fixing a bug(duplicate ID)
- Changing the logging messages to better messages

---

## 6. deployment

> Assigned to _Sayed kazimi_

**As a website owner I want that my website is accessible to all people around the world**

This part is create in a branch called `deployment` and merged in the `master` when it was completed.

### Task A: HTML

- Nothing

### Task B: CSS

- Nothing

### Task C: Package.json

- Brought some changes to the package.json file so that the repo can be deployed to Heroku

---

## 7. final-touch

> Assigned to _Sayed kazimi_

**As a website owner I want that my website is as user friendly and attractive as possible**

This part is create in a branch called `final-touch` and merged in the `master` when it was completed.

### Task A: HTML

- Brought some changes on some elements
- Added footer

### Task B: CSS

- Changed many of the website's style

### Task C: JS

- Added a simple `setInterval` to change the color of the text in the placeholder each 700 ms to show the user where he/she should create a new course

- Brought also another changes to the code layout
- Added more comments to document the code
- Fixed a bug

---
