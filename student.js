document.addEventListener('DOMContentLoaded', function () {
    // Code to be executed when the page is loaded goes here
    fetch('students.json')  // Fetch data from students.json file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("students",JSON.stringify(data));
        })
        .catch(error => console.error('Failed to fetch data:', error.message));
});
displayStudents(JSON.parse(localStorage.getItem("students")))


// Add student data to the HTML table
function displayStudents(students) {
    // Get the table body element
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML="";

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
const deleteButton = document.getElementById("studentDelete");
deleteButton.addEventListener("click",function(event){
    event.preventDefault();
    const input = document.getElementById("searchInput").value;
    deleteStudent(parseInt(input))

})

function deleteStudent(studentId) {
    // Find Student
    const currentStudens = JSON.parse(localStorage.getItem("students"));
    const studentIndex =currentStudens.findIndex(student => student.studentId === studentId);
    console.log(currentStudens);
    console.log(typeof currentStudens);
    // Delete The Student
    if (studentIndex !== -1) {
        currentStudens.splice(studentIndex, 1);

        // Update localStorage with the modified students array
        localStorage.setItem("students", JSON.stringify(currentStudens));

        // Remove the student from the table
        removeStudentFromTable(studentId);
    }
    displayStudents(currentStudens);
}


function removeStudentFromTable(studentId) {
    // Remove the student from table
    const tableBody = document.getElementById('studentTableBody');
    const rowToRemove = document.querySelector(`[data-student-id="${studentId}"]`);

    if (tableBody && rowToRemove) {
        tableBody.removeChild(rowToRemove);
    }
}
