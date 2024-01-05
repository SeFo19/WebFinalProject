document.addEventListener('DOMContentLoaded', function () {
    // Fetch course data and populate the table
    fetch('courses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("courses",JSON.stringify(data));
        })
        .catch(error => console.error('Failed to fetch data:', error.message));
});
displayCourses(JSON.parse(localStorage.getItem("courses")))

// Display the course data in the table
function displayCourses(courses) {
    // Get the table body element
    const tableBody = document.getElementById('courseTableBody');
    tableBody.innerHTML=""

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
const deleteButton = document.getElementById("courseDelete");
deleteButton.addEventListener("click",function(event){
    event.preventDefault();
    const input = document.getElementById("searchInput").value;
    deleteCourse(parseInt(input))

})

function deleteCourse(courseId) {
    // Find Course
    const currentCourses = JSON.parse(localStorage.getItem("courses"));
    const courseIndex =currentCourses.findIndex(course => course.courseId === courseId);
    console.log(currentCourses);
    console.log(typeof currentCourses);
    // Delete The Course
    if (courseIndex !== -1) {
        currentCourses.splice(courseIndex, 1);

        // Update localStorage with the modified course array
        localStorage.setItem("courses", JSON.stringify(currentCourses));

        // Remove the Course from the table
        removeCourseFromTable(courseId);
    }
    displayCourses(currentCourses);
}

function removeCourseFromTable(courseId) {
    // Remove the Course from table
    const tableBody = document.getElementById('courseTableBody');
    const rowToRemove = document.querySelector(`[data-course-id="${courseId}"]`);

    if (tableBody && rowToRemove) {
        tableBody.removeChild(rowToRemove);
    }
}

