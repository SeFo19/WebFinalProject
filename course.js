document.addEventListener('DOMContentLoaded', function () {
    // Fetch course data and populate the table
    fetch('courses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayCourses(data))
        .catch(error => console.error('Failed to fetch data:', error.message));
});

// Display the course data in the table
function displayCourses(courses) {
    // Get the table body element
    const tableBody = document.getElementById('courseTableBody');

    // Ensure courses is not null or undefined
    courses = courses || [];

    // Loop through each course and add a row to the table
    courses.forEach(course => {
        // Create a new table row
        const row = document.createElement('tr');

        // Create cells for course ID, course name, and credit
        const courseIdCell = document.createElement('td');
        courseIdCell.textContent = course.courseId;
        row.appendChild(courseIdCell);

        const courseNameCell = document.createElement('td');
        courseNameCell.textContent = course.courseName;
        row.appendChild(courseNameCell);

        const creditCell = document.createElement('td');
        creditCell.textContent = course.credit;
        row.appendChild(creditCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}