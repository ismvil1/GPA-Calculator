let courseCount = 5;

function addCourse() {
    courseCount++;
    const courseContainer = document.getElementById('courseContainer');
    const newCourseDiv = document.createElement('div');
    newCourseDiv.className = 'input-group';
    newCourseDiv.innerHTML = `
        <label for="course${courseCount}">Course ${courseCount} Grade:</label>
        <input type="text" id="course${courseCount}" name="course${courseCount}">
    `;
    courseContainer.appendChild(newCourseDiv);
}

function calculateGPA() {
    const grades = [];
    for (let i = 1; i <= courseCount; i++) {
        const grade = document.getElementById(`course${i}`).value;
        grades.push(grade);
    }

    const gradePoints = {
        'A': 4.0,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };

    let totalPoints = 0;
    let validGrades = 0;

    grades.forEach(grade => {
        if (grade in gradePoints) {
            totalPoints += gradePoints[grade];
            validGrades += 1;
        }
    });

    const gpa = validGrades > 0 ? (totalPoints / validGrades).toFixed(2) : 0;

    document.getElementById('result').textContent = `Your GPA is: ${gpa}`;
}
