Notes Application

Overview

This is a simple Notes Application that allows users to create, view, search, and delete notes. It utilizes HTML, CSS, JavaScript, and Axios to interact with a REST API for persistent data storage.

Features

Add Notes: Users can add a note by providing a title and description.

View Notes: Notes are displayed in a clean, card-based UI.

Search Notes: Users can search for notes by title or content.

Delete Notes: Users can delete a note, which removes it from the UI and the database.

Live Counts: Displays the total number of notes and the count of search results.

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: CRUD API from CrudCrud

HTTP Client: Axios

REST API Endpoint

The application uses a REST API provided by CrudCrud  : https://crudcrud.com/api/4e0d879ec1124b48a803aa7a60f446e9/notes

Features in Detail

1. Add Notes

The form accepts a note title and description.

Submitting the form sends a POST request to the API.

2. View Notes

On page load, a GET request fetches all notes from the API and displays them.

3. Search Notes

A search bar allows users to filter notes based on their title or content.

ScreeenShots of the Demo

1.![Screenshot 2024-12-26 130958](https://github.com/user-attachments/assets/b302d857-d58d-4d71-abab-cb0138aa3d8e)

2.![Screenshot 2024-12-26 131121](https://github.com/user-attachments/assets/91bb3962-4272-484a-b864-a32e76c0118e)

