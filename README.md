# OIBSIP Web Development Internship - Level 2

This repository contains the projects completed as part of my **OIBSIP Web Development Internship - Level 2**.

## Projects

| Task   | Project                     | Technologies          |
| ------ | --------------------------- | --------------------- |
| Task 1 | Calculator                  | HTML, CSS, JavaScript |
| Task 2 | Tribute Page                | HTML, CSS             |
| Task 3 | To-Do Web App               | HTML, CSS, JavaScript |
| Task 4 | Login Authentication System | HTML, CSS, JavaScript |



# TASK 1 - Calculator

## Objective

Build a fully functional browser-based calculator capable of performing basic arithmetic operations with a user-friendly button interface.

## Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)

## Features

* Display screen showing current input and result
* Numeric buttons from 0-9
* Decimal point
* Addition, subtraction, multiplication and division
* Equals button to calculate the result
* Clear button to reset the calculator
* Backspace button to remove the last character
* Division-by-zero error handling
* Operator chaining
* CSS Grid for button layout
* JavaScript event listeners for button interactions
* No inline `onclick` attributes

## Project Structure

Sravani_Task1/
├── index.html
├── style.css
└── app.js


## How It Works

The user enters numbers and operators using the calculator buttons. JavaScript handles the button events and processes the entered expression.

The calculator evaluates the expression step-by-step without using `eval()`. Division by zero is handled by displaying an error message instead of causing the application to crash.

## What I Learned

* DOM manipulation
* JavaScript event handling
* CSS Grid
* Expression processing
* Error handling
* Creating interactive web applications


# TASK 2 - Tribute Page

## Objective

Design and build a visually engaging tribute page dedicated to a public figure.

## Tech Stack

* HTML5
* CSS3
* JavaScript

## Features

* Page title with the subject's name
* One-line tagline
* Prominent image
* Biography section
* Timeline of important achievements
* Quote section
* Multiple background colours
* Different font styles
* Responsive design

## Project Structure

Sravani_Task2/
├── index.html
├── style.css
└── images/

## How It Works

The page presents information about the selected personality through different sections. HTML is used to structure the content and CSS is used to create the visual design, layout and responsive behaviour.

## What I Learned

* HTML semantic structure
* CSS styling
* Responsive web design
* Typography
* Section-based webpage design
* Creating visually appealing layouts

# TASK 3 - To-Do Web App

## Objective

Develop an interactive to-do list application that allows users to add, complete, edit and delete tasks.

## Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* localStorage

## Features

* Add new tasks
* Pending Tasks list
* Completed Tasks list
* Mark tasks as complete
* Edit tasks
* Delete tasks
* Pending task count
* Completed task count
* Empty-state messages
* Task persistence using localStorage
* Responsive design

## Project Structure

Sravani_Task3/
├── index.html
├── style.css
└── script.js


## How It Works

Users enter a task and click the Add Task button. The task is initially placed in the Pending Tasks section.

A task can be marked as completed, edited or deleted. Completed tasks are moved to the Completed Tasks section.

The application uses localStorage so that tasks remain available even after refreshing the page.

## What I Learned

* DOM manipulation
* JavaScript event handling
* Arrays and objects
* localStorage
* Dynamic HTML elements
* CRUD operations
* Managing application state


# TASK 4 - Login Authentication System

## Objective

Build a simple client-side authentication system featuring user registration, login validation and access to a protected dashboard.

## Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* localStorage
* sessionStorage
* Web Crypto API

## Features

* User registration
* Username and email fields
* Password validation
* Minimum 8-character password
* At least 1 number required
* Duplicate username/email checking
* Login using username or email
* Generic incorrect credential error
* Protected dashboard
* Login session management
* Logout functionality
* Redirect to login when accessing dashboard without a session
* SHA-256 password hashing
* Empty field validation
* Responsive design

## Project Structure

Sravani_Task4/
├── index.html
├── register.html
├── dashboard.html
├── style.css
└── auth.js


## How It Works

The user first creates an account using the registration page. JavaScript validates the entered information and checks whether the username or email already exists.

The password is converted into a SHA-256 hash before it is stored. The actual password is therefore not stored as plain text.

During login, the entered password is hashed again and compared with the stored password hash. After successful authentication, a session is created using sessionStorage and the user is redirected to the protected dashboard.

If the dashboard is accessed without an active session, the user is redirected to the login page.

The Logout button removes the active session and redirects the user back to the login page.

## Authentication Flow

Register
   ↓
Validate Details
   ↓
Check Duplicate User
   ↓
Hash Password
   ↓
Save User
   ↓
Login
   ↓
Validate Credentials
   ↓
Create Session
   ↓
Protected Dashboard
   ↓
Logout
   ↓
Login Page
```

## What I Learned

* Creating registration and login forms
* Form validation
* Password hashing
* localStorage
* sessionStorage
* Authentication concepts
* Protected page access
* JavaScript event handling
* DOM manipulation
* Responsive web design

# Technologies Used

The projects were developed using:

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* DOM Manipulation
* localStorage
* sessionStorage
* Web Crypto API


# Internship

These projects are part of the **OIBSIP Web Development Internship - Level 2**.

## Tasks Completed

* **Task 1:** Calculator
* **Task 2:** Tribute Page
* **Task 3:** To-Do Web App
* **Task 4:** Login Authentication System


# Author

**Sravani**

[LinkedIn](https://www.linkedin.com/in/sravanipalasamudram) | [GitHub](https://github.com/PalasamudramSravani)

