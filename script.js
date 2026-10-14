
document.getElementById("grade-form").addEventListener("submit", function (event) {
    // Stop the page from refreshing when the form is submitted.
    event.preventDefault();

    // Get the student's name and remove extra spaces.
    let studentName = document.getElementById("student-name").value.trim();

    // Check whether the name is empty.
    if (studentName === "") {
        document.getElementById("results").innerText =
            "Error: Please enter your name.";
        return;
    }

    // Get the five subject scores as text.
    let mathInput = document.getElementById("math").value;
    let englishInput = document.getElementById("english").value;
    let scienceInput = document.getElementById("science").value;
    let computerInput = document.getElementById("computer").value;
    let socialStudiesInput = document.getElementById("social-studies").value;

    // Check that all five scores have been entered.
    if (
        mathInput === "" ||
        englishInput === "" ||
        scienceInput === "" ||
        computerInput === "" ||
        socialStudiesInput === ""
    ) {
        document.getElementById("results").innerText =
            "Error: Please enter all five subject scores.";
        return;
    }

    // Convert the score values from text to numbers.
    let math = Number(mathInput);
    let english = Number(englishInput);
    let science = Number(scienceInput);
    let computer = Number(computerInput);
    let socialStudies = Number(socialStudiesInput);

    // Store all five scores in an array.
    let scores = [math, english, science, computer, socialStudies];

    // Check that every score is a valid number between 0 and 100.
    for (let score of scores) {
        if (!Number.isFinite(score) || score < 0 || score > 100) {
            document.getElementById("results").innerText =
                "Error: Each score must be between 0 and 100.";
            return;
        }
    }

    // Calculate the total and average.
    let total = math + english + science + computer + socialStudies;
    let average = total / 5;

    // Find the highest and lowest scores.
    let highest = Math.max(...scores);
    let lowest = Math.min(...scores);

    // Assign a letter grade and feedback message.
    let grade;
    let message;

    if (average >= 80) {
        grade = "A";
        message = "Excellent work! Keep it up!";
    } else if (average >= 70) {
        grade = "B";
        message = "Very good! Keep improving!";
    } else if (average >= 60) {
        grade = "C";
        message = "Good effort! You can do even better!";
    } else if (average >= 50) {
        grade = "D";
        message = "Keep practicing. You can improve!";
    } else {
        grade = "F";
        message = "Keep studying and don't give up!";
    }

    // Decide whether the student passes or fails.
    let status = average >= 50 ? "Pass" : "Fail";

    // Create the result paragraphs.
    document.getElementById("results").innerHTML =
        '<p id="result-name"></p>' +
        '<p id="result-total"></p>' +
        '<p id="result-average"></p>' +
        '<p id="result-highest"></p>' +
        '<p id="result-lowest"></p>' +
        '<p id="result-grade"></p>' +
        '<p id="result-status"></p>' +
        '<p id="result-message"></p>';

    // Display the calculated results.
    document.getElementById("result-name").innerText =
        "Student Name: " + studentName;

    document.getElementById("result-total").innerText =
        "Total Score: " + total + " / 500";

    document.getElementById("result-average").innerText =
        "Average Score: " + average.toFixed(2) + " / 100";

    document.getElementById("result-highest").innerText =
        "Highest Score: " + highest;

    document.getElementById("result-lowest").innerText =
        "Lowest Score: " + lowest;

    document.getElementById("result-grade").innerText =
        "Letter Grade: " + grade;

    document.getElementById("result-status").innerText =
        "Pass/Fail: " + status;

    document.getElementById("result-message").innerText =
        "Message: " + message;
});

// Reset the results when the Reset button is used.
document.getElementById("grade-form").addEventListener("reset", function () {
    document.getElementById("results").innerHTML =
        '<p id="result-name">Student Name: </p>' +
        '<p id="result-total">Total Score: </p>' +
        '<p id="result-average">Average Score: </p>' +
        '<p id="result-highest">Highest Score: </p>' +
        '<p id="result-lowest">Lowest Score: </p>' +
        '<p id="result-grade">Letter Grade: </p>' +
        '<p id="result-status">Pass/Fail: </p>' +
        '<p id="result-message">Message: </p>';
});

// Get the Dark Mode button.
const themeToggle = document.getElementById("theme-toggle");

// Switch between Dark Mode and Light Mode when clicked.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerText = "☀️ Light Mode";
    } else {
        themeToggle.innerText = "🌙 Dark Mode";
    }
});
