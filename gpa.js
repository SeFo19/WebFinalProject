/**
 * This function returns the GPA of the student based on grades and point scales of courses.
 * @returns {string} The calculated GPA with two decimal places.
 */
function getStudentGPA() {
    // Create an instance of CoursesDatabase to access course information
    const courses = new CoursesDatabase();
    
    // Initialize variables to store total weighted grade and total acts
    const totalWeightedGrade = 0;
    const totalActs = 0;

    // Iterate through the taken courses of the student
    for (let i = 0; i < this.takenCourses.length; i++) {
        // Get information about the current course
        const course = courses.getCourseById(this.takenCourses[i]);

        // Calculate the point by scale for the current course
        const grade = this.calculatePointByScale(course.courseId);

        // Determine the weighted grade based on the calculated point and acts of the course
        if (grade === 'AA') {
            totalWeightedGrade += 4.0 * course.acts;
        } else if (grade === 'BA') {
            totalWeightedGrade += 3.5 * course.acts;
        } else if (grade === 'BB') {
            totalWeightedGrade += 3.0 * course.acts;
        } else if (grade === 'CB') {
            totalWeightedGrade += 2.5 * course.acts;
        } else if (grade === 'CC') {
            totalWeightedGrade += 2.0 * course.acts;
        } else if (grade === 'CD') {
            totalWeightedGrade += 1.5 * course.acts;
        } else if (grade === 'DD') {
            totalWeightedGrade += 1.0 * course.acts;
        } else {
            totalWeightedGrade += 0.0 * course.acts;
        }

        // Accumulate the total acts for normalization
        totalActs += course.acts;
    }

    // Calculate the GPA by dividing total weighted grade by total acts and round to two decimal places
    var GPA = totalWeightedGrade / totalActs;

    // Return the calculated GPA with two decimal places
    return GPA.toFixed(2);
}
