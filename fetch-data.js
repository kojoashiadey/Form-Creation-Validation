// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using await
        const response = await fetch(apiUrl);

        // Step 5: Convert response to JSON
        const users = await response.json();

        // Step 6: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 7: Create and populate the user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle fetch errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 10: Invoke the function after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
