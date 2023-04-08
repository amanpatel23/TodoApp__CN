
// Get all the checkboxes and attach a click event listener to each one
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (event) => {
        // Redirect the user to the update-todo route with the ID of the clicked checkbox
        window.location.href = `/update-todo/?id=${event.target.id}`;
    })
})

// Get the delete button and attach a click event listener to it
const deleteButton = document.getElementById('delete__btn').firstElementChild;
deleteButton.addEventListener('click', (event) => {
    // Redirect the user to the delete-todo route when the button is clicked
    window.location.href = '/delete-todo'
})