

function updateLocation() {

    let location = document.getElementById("locationInput").value;

    if (location.trim() === "") {
        alert("Please enter your location.");
        return;
    }

    document.getElementById("locationName").textContent =
        location + ", Kenya";
}


/* =========================
   CROP WEATHER ADVISOR
========================= */

function showCropAdvice(crop) {

    let advice = document.getElementById("cropAdvice");

    let recommendations = {

        "Maize":
            "🌽 Current conditions are suitable for maize monitoring. Check soil moisture and watch for excessive rainfall.",

        "Beans":
            "🫘 Monitor beans for excess moisture after rainfall. Good drainage can help reduce crop problems.",

        "Potatoes":
            "🥔 Monitor soil moisture carefully and avoid excessive watering when rainfall is expected.",

        "Tomatoes":
            "🍅 Monitor tomato plants after rainfall and check for signs of disease. Good ventilation and drainage are important.",

        "Coffee":
            "☕ Monitor soil moisture and rainfall patterns. Regular field inspection can help identify crop problems early.",

        "Avocado":
            "🥑 Ensure good drainage around avocado trees and monitor soil moisture during wet periods."
    };


    advice.innerHTML = `
        <h3>🌱 ${crop} Weather Advisory</h3>
        <p>${recommendations[crop]}</p>
    `;
}
function logout() {

    const answer = confirm("Are you sure you want to logout?");

    if (answer) {

        sessionStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";

    }

}