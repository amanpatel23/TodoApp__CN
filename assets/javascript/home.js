
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const deleteButton = document.getElementById('delete__btn').firstElementChild;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (event) => {
        console.log(event.target.id);
        window.location.href = `/update-todo/?id=${event.target.id}`;
    })
})

deleteButton.addEventListener('click', (event) => {
    window.location.href = '/delete-todo'
    console.log('clicked')
})