document.addEventListener('DOMContentLoaded', function () {
    // Code to be executed when the page is loaded goes here
    fetch('students.json')  // Fetch data from students.json file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayStudents(data))
        .catch(error => console.error('Failed to fetch data:', error.message));
});

// Add student data to the HTML table
function displayStudents(students) {
    // Get the table body element
    const tableBody = document.getElementById('studentTableBody');

    // If students is null or undefined, define it as an empty array
    students = students || [];

    // Create a row for each student
    students.forEach(student => {
        // Create a new table row
        const row = document.createElement('tr');

        // Add student information to cells
        const studentIdCell = document.createElement('td');
        studentIdCell.textContent = student.studentId;
        row.appendChild(studentIdCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        const surnameCell = document.createElement('td');
        surnameCell.textContent = student.surname;
        row.appendChild(surnameCell);

        const gpaCell = document.createElement('td');
        gpaCell.textContent = student.gpa;
        row.appendChild(gpaCell);

        // Append the row to the table
        tableBody.appendChild(row);
    });
}


function deleteStudent(studentId) {
    // Find Student
    const studentIndex = students.findIndex(student => student.studentId === studentId);

    // Delete The Student
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        removeStudentFromTable(studentId);
    }
}

function removeStudentFromTable(studentId) {
    // Remove the student from table
    const tableBody = document.getElementById('studentTableBody');
    const rowToRemove = document.querySelector(`[data-student-id="${studentId}"]`);

    if (tableBody && rowToRemove) {
        tableBody.removeChild(rowToRemove);
    }
}
