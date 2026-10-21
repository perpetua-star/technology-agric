

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-active");
        navButtons.classList.toggle("mobile-active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("mobile-active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("mobile-active");
        navButtons.classList.remove("mobile-active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   ANIMATED STATISTICS
===================================================== */

const counters = document.querySelectorAll(".stat-box h2");

let countersStarted = false;

function animateCounters() {

    if (countersStarted) {
        return;
    }

    const statisticsSection = document.querySelector(".statistics");

    if (!statisticsSection) {
        return;
    }

    const sectionPosition =
        statisticsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;

    if (sectionPosition < screenPosition) {

        countersStarted = true;

        counters.forEach(function (counter) {

            const originalText = counter.innerText;

            const number = parseInt(
                originalText.replace(/[^0-9]/g, "")
            );

            const suffix =
                originalText.replace(/[0-9]/g, "");

            let current = 0;

            const increment =
                Math.max(Math.ceil(number / 80), 1);

            const timer = setInterval(function () {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(timer);

                }

                counter.innerText =
                    current.toLocaleString() + suffix;

            }, 20);

        });

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".solution-card, .step, .crop-card, .news-card, .testimonial, .product-card"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION WHILE SCROLLING
===================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   DASHBOARD LIVE TIME
===================================================== */

function updateDashboardDate() {

    const dateElement =
        document.querySelector(".dashboard-header span");

    if (!dateElement) {
        return;
    }

    const now = new Date();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const formattedDate =
        now.toLocaleDateString("en-US", options);

    dateElement.innerText =
        "Today, " + formattedDate;

}

updateDashboardDate();


/* =====================================================
   DASHBOARD STATUS
===================================================== */

const farmStatusItems =
    document.querySelectorAll(".farm-status p");

if (farmStatusItems.length > 0) {

    setInterval(function () {

        const statuses = [
            "Irrigation: ON",
            "Weather: Normal",
            "Disease Risk: Low"
        ];

        farmStatusItems.forEach(function (item, index) {

            const icon = item.querySelector("i");

            if (icon) {
                icon.style.color = "#16863b";
            }

            const textNode =
                Array.from(item.childNodes)
                    .find(node => node.nodeType === Node.TEXT_NODE);

            if (textNode) {

                textNode.textContent =
                    " " + statuses[index];

            }

        });

    }, 10000);

}


/* =====================================================
   PRODUCT BUTTONS
===================================================== */

const productButtons =
    document.querySelectorAll(".product-info button");

productButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard =
            button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").innerText;

        const productPrice =
            productCard.querySelector("strong").innerText;

        alert(
            productName +
            "\nPrice: " +
            productPrice +
            "\n\nProduct page coming soon."
        );

    });

});


/* =====================================================
   NEWS READ MORE BUTTONS
===================================================== */

const newsLinks =
    document.querySelectorAll(".news-content a");

newsLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const article =
            link.closest(".news-card");

        const title =
            article.querySelector("h3").innerText;

        alert(
            "Opening article:\n\n" +
            title +
            "\n\nFull article page coming soon."
        );

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            contactForm.querySelector(
                'input[type="text"]'
            ).value.trim();

        const email =
            contactForm.querySelector(
                'input[type="email"]'
            ).value.trim();

        const subject =
            contactForm.querySelectorAll(
                'input[type="text"]'
            )[1].value.trim();

        const message =
            contactForm.querySelector("textarea")
                .value.trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "!\n\n" +
            "Your message has been received."
        );


        contactForm.reset();

    });

}


/* =====================================================
   LOGIN BUTTON
===================================================== */

const loginButton =
    document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", function (event) {

        event.preventDefault();

    
window.location.href = "login.html";
    });

}


/* =====================================================
   SIGN UP BUTTON
===================================================== */

const signupButton =
    document.querySelector(".signup-btn");

if (signupButton) {

    signupButton.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Registration page coming soon."
        );

    });

}


/* =====================================================
   SMOOTH SCROLL FOR BUTTONS
===================================================== */

const smoothLinks =
    document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID =
            link.getAttribute("href");

        if (
            targetID === "#" ||
            targetID === ""
        ) {

            return;

        }

        const target =
            document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   WEATHER DEMO
===================================================== */

const weatherTemperature =
    document.querySelector(".weather-main h2");

const weatherDescription =
    document.querySelector(".weather-main p");

if (weatherTemperature) {

    const temperatures = [
        "24°C",
        "25°C",
        "23°C",
        "26°C"
    ];

    let weatherIndex = 0;

    setInterval(function () {

        weatherIndex++;

        if (
            weatherIndex >= temperatures.length
        ) {

            weatherIndex = 0;

        }

        weatherTemperature.innerText =
            temperatures[weatherIndex];

    }, 15000);

}


/* =====================================================
   AI ASSISTANT DEMO
===================================================== */

const aiButton =
    document.querySelector(".ai-content .primary-btn");

if (aiButton) {

    aiButton.addEventListener("click", function (event) {

        event.preventDefault();

        const question =
            prompt(
                "AgriTech AI Assistant\n\n" +
                "Ask a farming question:"
            );

        if (!question) {
            return;
        }

        alert(
            "AI Assistant Demo\n\n" +
            "Your question:\n" +
            question +
            "\n\n" +
            "The AI farming assistant will be connected " +
            "to an AI API in the next development stage."
        );

    });

}


/* =====================================================
   COMMUNITY BUTTON
===================================================== */

const communityButton =
    document.querySelector(".community-content .primary-btn");

if (communityButton) {

    communityButton.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Welcome to the AgriTech Farmer Community!\n\n" +
            "Community registration will be available soon."
        );

    });

}


/* =====================================================
   SCROLL TO DASHBOARD
===================================================== */

const dashboardButton =
    document.querySelector(".dashboard-intro .primary-btn");

if (dashboardButton) {

    dashboardButton.addEventListener("click", function (event) {

        event.preventDefault();

        const dashboard =
            document.querySelector(".dashboard");

        if (dashboard) {

            dashboard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


/* =====================================================
   PREVENT EMPTY LINKS
===================================================== */

const emptyLinks =
    document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


/* =====================================================
   PAGE LOADED MESSAGE
===================================================== */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});

const isLoggedIn = localStorage.getItem("isLoggedIn");



function logout() {

    const answer = confirm("Are you sure you want to logout?");

    if (answer) {

        sessionStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";

    }

}
function askAI() {

    const input = document.getElementById("userQuestion");
    const chatBox = document.getElementById("chatBox");

    const question = input.value.trim();

    if (question === "") {

        alert("Please enter a question.");

        return;
    }


    // Show user's question

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = question;

    chatBox.appendChild(userMessage);


    // Generate AI response

    let answer = getAIResponse(question);


    // Show AI response

    const aiMessage = document.createElement("div");

    aiMessage.className = "ai-message";

    aiMessage.textContent = answer;

    chatBox.appendChild(aiMessage);


    // Clear input

    input.value = "";


    // Scroll to latest message

    chatBox.scrollTop = chatBox.scrollHeight;

}


function getAIResponse(question) {

    const text = question.toLowerCase();


    if (
        text.includes("maize") ||
        text.includes("corn")
    ) {

        return "For maize farming, use quality certified seeds, prepare the soil properly, control weeds early, and monitor soil moisture. Fertilizer requirements depend on your soil condition, so soil testing is recommended.";

    }


    if (
        text.includes("irrigation") ||
        text.includes("water")
    ) {

        return "For irrigation, check soil moisture before watering. Drip irrigation can help reduce water wastage and deliver water directly to the crop roots.";

    }


    if (
        text.includes("fertilizer") ||
        text.includes("fertiliser")
    ) {

        return "The right fertilizer depends on the crop and soil nutrients. A soil test can help determine the appropriate fertilizer and application rate.";

    }


    if (
        text.includes("pest") ||
        text.includes("insect")
    ) {

        return "Regularly inspect your crops for signs of pests. Identify the pest before choosing a control method, and use integrated pest management where possible.";

    }


    if (
        text.includes("soil")
    ) {

        return "Healthy soil is important for good crop production. Consider soil testing, adding appropriate organic matter, controlling erosion, and maintaining suitable soil moisture.";

    }


    if (
        text.includes("weather") ||
        text.includes("rain")
    ) {

        return "Weather information can help farmers plan irrigation, planting, spraying and harvesting. Always check a reliable local weather forecast before making weather-sensitive decisions.";

    }


    if (
        text.includes("tomato") ||
        text.includes("tomatoes")
    ) {

        return "Tomatoes need adequate sunlight, well-drained soil and consistent moisture. Monitor regularly for pests and diseases and avoid keeping the leaves continuously wet.";

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 I am your AgriTech Assistant. Ask me about crops, soil, irrigation, fertilizer, pests or farming.";

    }


    return "I can help with basic agricultural questions about crops, soil, irrigation, fertilizer, pests and farming practices. Try asking me something like: 'How do I grow maize?'";

}







const answers = {

    maize:
        "🌽 <b>Maize:</b> Use quality seed, prepare the soil well, control weeds early, monitor pests and maintain good soil moisture.",

    tomato:
        "🍅 <b>Tomatoes:</b> Use fertile, well-drained soil, enough sunlight and consistent moisture. Monitor pests and diseases.",

    soil:
        "🌱 <b>Soil:</b> Consider soil testing, add suitable organic matter, control erosion and rotate crops where possible.",

    irrigation:
        "💧 <b>Irrigation:</b> Check soil moisture before watering. Drip irrigation can reduce water loss. Avoid waterlogging.",

    fertilizer:
        "🧪 <b>Fertilizer:</b> Soil testing can help determine nutrient needs. Use fertilizer according to the crop and local recommendations.",

    pest:
        "🐛 <b>Pests:</b> Inspect crops regularly and identify the pest before treatment. Integrated pest management can help.",

    disease:
        "🩺 <b>Disease:</b> Check symptoms, weather and soil conditions. Get advice from an agricultural expert when needed.",

    weather:
        "🌦️ <b>Weather:</b> Weather affects planting, irrigation, spraying and harvesting. Check a reliable local forecast."
};


function sendMessage(){

    const input = document.getElementById("userInput");

    const question = input.value.trim();

    if(!question) return;

    addMessage(question,"user");

    input.value = "";

    showTyping();

    setTimeout(function(){

        removeTyping();

        addMessage(
            getAnswer(question),
            "bot"
        );

    },700);
}


function askQuestion(question){

    document.getElementById("userInput").value = question;

    sendMessage();
}


function addMessage(text,type){

    const chat = document.getElementById("chatBox");

    const message = document.createElement("div");

    message.className = "message " + type;

    message.innerHTML = text;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}


function getAnswer(question){

    const q = question.toLowerCase();


    if(/hello|hi|hey/.test(q)){

        return `
        🤖 <b>Hello!</b> 👋<br>
        How can I help you with your farm today?
        `;

    }


    if(/profit|money|profitable/.test(q)){

        return `
        💰 <b>Farm profitability:</b><br>
        Consider seed, fertilizer, labour,
        irrigation, transport, expected yield
        and market price before investing.
        `;

    }


    if(/plant|planting/.test(q)){

        return `
        🌱 <b>Planting:</b><br>
        Planting time depends on your crop,
        location, soil moisture and rainfall.
        `;

    }


    if(/harvest|harvesting/.test(q)){

        return `
        🌾 <b>Harvesting:</b><br>
        Harvest when the crop reaches the
        appropriate maturity stage.
        `;

    }


    for(let key in answers){

        if(q.includes(key)){

            return answers[key];

        }

    }


    return `
    🤖 I can help you with:<br><br>
    🌽 Maize<br>
    🍅 Tomatoes<br>
    🌱 Soil<br>
    💧 Irrigation<br>
    🧪 Fertilizer<br>
    🐛 Pests<br>
    🩺 Diseases<br>
    🌦️ Weather<br>
    💰 Farm profitability
    `;
}


function showTyping(){

    const chat = document.getElementById("chatBox");

    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className = "message bot";

    typing.innerHTML = "🤖 Thinking...";

    chat.appendChild(typing);

    chat.scrollTop = chat.scrollHeight;
}


function removeTyping(){

    const typing = document.getElementById("typing");

    if(typing){
        typing.remove();
    }
}


function clearChat(){

    if(!confirm("Clear this conversation?")) return;

    document.getElementById("chatBox").innerHTML = `
        <div class="message bot">
            🤖 <b>AgriTech AI</b>
            <p>
                Chat cleared. 👋
                How can I help you today?
            </p>
        </div>
    `;
}


document
.getElementById("userInput")
.addEventListener("keydown",function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});


function startVoice(){

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        alert("Voice input is not supported by your browser.");

        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = function(event){

        document.getElementById("userInput").value =
            event.results[0][0].transcript;

    };

}
