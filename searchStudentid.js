document.addEventListener('DOMContentLoaded', function () {
    // Code to be executed when the page is loaded goes here

    // Select input, button, and result display elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResult = document.getElementById('searchResult');

    // Add click event to the button
    searchButton.addEventListener('click', function () {
        // Get the value from the input field
        const searchTerm = searchInput.value;

        // Call the student search functionality
        searchStudentById(searchTerm);
    });
});

// Add student search functionality as a separate function

// searchStudentById.js
function searchStudentById(id) {
    fetch('students.json')  // Fetch data from students.json file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Find the student with the specified ID
            const student = data.find(student => student.studentId === id);

            // Display the search result
            if (student) {
                displaySearchResult(`ID: ${student.studentId}, Name: ${student.name}, Surname: ${student.surname}, GPA: ${student.gpa}`);
            } else {
                displaySearchResult('Student not found');
            }
        })
        .catch(error => console.error('Failed to fetch data:', error.message));
}

// Add display result functionality as a separate function

// displaySearchResult.js
function displaySearchResult(result) {
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = result;
}
