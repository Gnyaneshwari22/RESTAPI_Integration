let allNotes = []; // To store all notes for filtering and displaying.

function HandleFormSubmit(event) {
  event.preventDefault();

  const NotesDetails = {
    notestitle: event.target.title.value,
    notecontent: event.target.description.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/4e0d879ec1124b48a803aa7a60f446e9/notes",
      NotesDetails
    )
    .then((res) => {
      allNotes.push(res.data); // Add the new note to the list.
      displayNotesOnDScreen(res.data);
      updateCounts(allNotes.length, allNotes.length);
    })
    .catch((e) => console.log(e.message));
}

function displayNotesOnDScreen(NotesDetails) {
  const notesContainer = document.getElementById("NotesCards");

  const noteCard = document.createElement("div");
  noteCard.className = "note-card";
  noteCard.setAttribute("data-id", NotesDetails._id);

  const title = document.createElement("h3");
  title.textContent = NotesDetails.notestitle;

  const content = document.createElement("p");
  content.textContent = NotesDetails.notecontent;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteNote(NotesDetails._id, noteCard);
  });

  noteCard.appendChild(title);
  noteCard.appendChild(content);
  noteCard.appendChild(deleteButton);
  notesContainer.appendChild(noteCard);
}

function deleteNote(noteId, noteCard) {
  axios
    .delete(
      `https://crudcrud.com/api/4e0d879ec1124b48a803aa7a60f446e9/notes/${noteId}`
    )
    .then(() => {
      console.log("Note deleted successfully.");
      allNotes = allNotes.filter((note) => note._id !== noteId); // Remove the note from the list.
      noteCard.remove();
      updateCounts(allNotes.length, allNotes.length);
    })
    .catch((e) => console.log(e.message));
}

function searchNotes(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredNotes = allNotes.filter(
    (note) =>
      note.notestitle.toLowerCase().includes(searchTerm) ||
      note.notecontent.toLowerCase().includes(searchTerm)
  );

  const notesContainer = document.getElementById("NotesCards");
  notesContainer.innerHTML = ""; // Clear current notes.

  filteredNotes.forEach((note) => displayNotesOnDScreen(note)); // Display only filtered notes.
  updateCounts(allNotes.length, filteredNotes.length);
}

function updateCounts(total, searchResults) {
  document.getElementById("totalNotes").textContent = total;
  document.getElementById("searchResults").textContent = searchResults;
}

// Fetch all notes initially and display them.
window.onload = function () {
  axios
    .get("https://crudcrud.com/api/4e0d879ec1124b48a803aa7a60f446e9/notes")
    .then((res) => {
      allNotes = res.data; // Store all notes.
      allNotes.forEach((note) => displayNotesOnDScreen(note)); // Display notes.
      updateCounts(allNotes.length, allNotes.length);
    })
    .catch((e) => console.log(e.message));
};
