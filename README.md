# To-Do List Web Application

## Project Description
This project is a React-based To-Do list web application that allows users to add, delete, mark tasks as completed, and filter them by status. 
The application uses the browser's `localStorage`, so tasks remain saved even after refreshing the page.

## Main Features
- add new tasks
- delete tasks
- mark tasks as completed
- filter tasks by status:
  - all
  - active
  - completed
- statistics display:
  - total tasks
  - active tasks
  - completed tasks
- save tasks in `localStorage`

## Technologies Used
- React
- JavaScript
- Vite
- HTML
- CSS
- localStorage
- Node.js / npm

## Project Structure
```text
src/
  components/
    FilterButtons.jsx
    TaskForm.jsx
    TaskItem.jsx
    TaskList.jsx
  App.jsx
  App.css
  index.css
  main.jsx
  ```

## Installation and Running the Project
1. Clone or download the project
If the project is not yet on your computer, first clone it or copy the project folder.

2. Install dependencies
Run the following command inside the project folder:
```
npm install
```
3. Start the development server
```
npm run dev
```
Then open the ``` localhost ``` address shown in the terminal in your browser.

## How to Use
1. Type a new task into the input field.
2. Click the Add button.
3. The task will appear in the list.
4. Use the checkbox to mark it as completed.
5. Use the Delete button to remove it.
6. Use the filter buttons to switch between all, active, and completed tasks.

## Application Logic
The application is built with React components. State management is handled with ```useState```, while ```useEffect``` ensures that the task list is automatically saved to the browser's ```localStorage``` ecery time it changes.

## Purpose

The purpose of the project was to create a simple but functional web-based task management application that demonstrates:

component-based development
state management
event handling
client-side data storage

## Possible Future Improvements
task editing
due date support
categories or priority handling
search functionality
backend and database integration
user authentication

## Created By
Sándor Dávid - H9PNXH