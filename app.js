const users = document.querySelectorAll('.name-list li');
const usersList = document.querySelector('.name-list');
const addUserForm = document.querySelector('.add-user-container');
const addUserInput = document.querySelector('.add-user-input')
const addUserButton = document.querySelector('.add-user-button');

addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
})

for (const user of users) {
    const editUserButton = user.querySelector('.edit-user-button');
    const deleteUserButton = user.querySelector('.delete-user-button');
    const userName = user.querySelector('.user-name');

    // Edit Button
    editUserButton.addEventListener('click', function() {
        const newUserName = prompt('Edit user: ', userName.innerText);

        if (newUserName !== null) {
            if (newUserName == '') {
                return alert('Input cannot be empty.');
            }

            if (newUserName !== userName.innerText) {
                userName.innerText = ucwords(newUserName);
                alert('User changed successfully.');
            }
        }
    });

    // Delete Button
    deleteUserButton.addEventListener('click', function() {
        const deleteAction = confirm('Do you want to delete ' + userName.innerText + '?');

        if (deleteAction == true) {
            user.remove();
            alert('User deleted successfully.');
        }
    });
}

addUserButton.addEventListener('click', function() {

    if (addUserInput.value == '') {
        return alert('Input cannot be empty.');
    }

    const newUserElement = document.createElement('LI');

    const newUserContainerElement = document.createElement('DIV');
    newUserContainerElement.className = 'user-container';

    const newUserNameElement = document.createElement('DIV');
    newUserNameElement.className = 'user-name';

    const newUserElementNode = document.createTextNode(ucwords(addUserInput.value));

    const actionsElement = document.createElement('DIV');
    actionsElement.className = 'actions';

    const editButtonElement = document.createElement('BUTTON');
    editButtonElement.className = 'edit-user-button';
    const editButtonTextElement = document.createTextNode('Edit');
    editButtonElement.appendChild(editButtonTextElement);

    const deleteButtonElement = document.createElement('BUTTON');
    deleteButtonElement.className = 'delete-user-button';
    const deleteButtonTextElement = document.createTextNode('Delete');
    deleteButtonElement.appendChild(deleteButtonTextElement);

    actionsElement.appendChild(editButtonElement);
    actionsElement.appendChild(deleteButtonElement);

    newUserNameElement.appendChild(newUserElementNode);

    newUserContainerElement.appendChild(newUserNameElement);
    newUserContainerElement.appendChild(actionsElement);

    newUserElement.appendChild(newUserContainerElement);

    usersList.appendChild(newUserElement);

    alert('User added successfully.');

    addUserInput.value = '';
});

/**
 * Capitalize every word
 * @param  {string} str
 * @return {string}
 */
function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
        return $1.toUpperCase();
    });
}