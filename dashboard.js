document.addEventListener("DOMContentLoaded", function () {

    const dateElement = document.getElementById("currentDate");

    if (dateElement) {
        const today = new Date();

        dateElement.textContent = today.toLocaleDateString("en-KE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

});


function logout() {

    const answer = confirm("Are you sure you want to logout?");

    if (answer) {
        window.location.href = "login.html";
    }

}


function addActivity() {

    const activity = prompt("Enter your farm activity:");

    if (activity && activity.trim() !== "") {

        alert(
            "Activity added successfully!\n\n" +
            activity
        );

    }

}


function showRecommendation() {

    alert(
        "AI Farming Recommendation:\n\n" +
        "Monitor your soil moisture and check your maize " +
        "field regularly. Consider irrigation if the soil " +
        "becomes dry."
    );

}