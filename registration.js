/* =====================================
   VARIABLES
===================================== */

let currentStep = 1;

let selectedRole = "";


/* =====================================
   SELECT ROLE
===================================== */

const roleInputs = document.querySelectorAll(
    'input[name="role"]'
);


roleInputs.forEach(function(input) {

    input.addEventListener("change", function() {

        selectedRole = this.value;

        showRoleDetails();

    });

});


/* =====================================
   SHOW ROLE DETAILS
===================================== */

function showRoleDetails() {

    // Hide all role details

    document.querySelectorAll(".role-details")
        .forEach(function(section) {

            section.classList.remove("active");

        });


    // Hide all interest sections

    document.querySelectorAll(".interest-section")
        .forEach(function(section) {

            section.classList.remove("active");

        });


    // Farmer

    if (selectedRole === "farmer") {

        document
            .getElementById("farmerDetails")
            .classList.add("active");

        document
            .getElementById("farmerInterests")
            .classList.add("active");

        document
            .getElementById("detailsTitle")
            .textContent = "Tell Us About Your Farm";

        document
            .getElementById("detailsDescription")
            .textContent =
            "Provide information about your farming activities.";

    }


    // Buyer

    else if (selectedRole === "buyer") {

        document
            .getElementById("buyerDetails")
            .classList.add("active");

        document
            .getElementById("buyerInterests")
            .classList.add("active");

        document
            .getElementById("detailsTitle")
            .textContent = "Tell Us About Your Business";

        document
            .getElementById("detailsDescription")
            .textContent =
            "Provide information about your purchasing needs.";

    }


    // Supplier

    else if (selectedRole === "supplier") {

        document
            .getElementById("supplierDetails")
            .classList.add("active");

        document
            .getElementById("supplierInterests")
            .classList.add("active");

        document
            .getElementById("detailsTitle")
            .textContent = "Tell Us About Your Business";

        document
            .getElementById("detailsDescription")
            .textContent =
            "Tell us about the products and services you supply.";

    }

}


/* =====================================
   NEXT STEP
===================================== */

function nextStep(step) {

    // STEP 1

    if (step === 1) {

        const role = document.querySelector(
            'input[name="role"]:checked'
        );


        if (!role) {

            alert(
                "Please select whether you are a Farmer, Buyer or Supplier."
            );

            return;
        }

    }


    // STEP 2

    if (step === 2) {

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }

    }


    // STEP 3

    if (step === 3) {

        if (!selectedRole) {

            alert("Please select your account type.");

            return;
        }

    }


    // Move to next step

    document
        .getElementById("step" + step)
        .classList.remove("active-step");


    currentStep = step + 1;


    document
        .getElementById("step" + currentStep)
        .classList.add("active-step");


    updateProgress();


    // Create summary before step 5

    if (currentStep === 5) {

        createSummary();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   PREVIOUS STEP
===================================== */

function previousStep(step) {

    document
        .getElementById("step" + step)
        .classList.remove("active-step");


    currentStep = step - 1;


    document
        .getElementById("step" + currentStep)
        .classList.add("active-step");


    updateProgress();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   UPDATE PROGRESS BAR
===================================== */

function updateProgress() {

    const progressSteps =
        document.querySelectorAll(".progress-step");


    progressSteps.forEach(function(step, index) {

        step.classList.remove("active");


        if (index < currentStep) {

            step.classList.add("active");

        }

    });

}


/* =====================================
   CREATE SUMMARY
===================================== */

function createSummary() {

    const fullName =
        document.getElementById("fullName").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const location =
        document.getElementById("location").value;


    let roleText = "";


    if (selectedRole === "farmer") {

        roleText = "👨‍🌾 Farmer";

    }

    else if (selectedRole === "buyer") {

        roleText = "🛒 Buyer";

    }

    else if (selectedRole === "supplier") {

        roleText = "📦 Supplier";

    }


    document.getElementById("summaryRole")
        .textContent = roleText;


    document.getElementById("summaryName")
        .textContent = fullName || "—";


    document.getElementById("summaryPhone")
        .textContent = phone || "—";


    document.getElementById("summaryEmail")
        .textContent = email || "—";


    document.getElementById("summaryLocation")
        .textContent = location || "—";

}


/* =====================================
   FORM SUBMISSION
===================================== */

document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const terms =
            document.getElementById("terms");


        if (!terms.checked) {

            alert(
                "Please agree to the Terms of Service and Privacy Policy."
            );

            return;
        }


        alert(
            "Registration successful! Welcome to AgriTech."
        );


        // In the future, this is where
        // the form can be connected to PHP/MySQL.

    });