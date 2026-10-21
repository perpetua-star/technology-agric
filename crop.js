const cropData = {

    maize: {
        name: "🌽 Maize",
        category: "CEREAL",
        description:
            "Maize is an important staple crop used for food, animal feed and various processed products.",
        period: "3–6 Months",
        water: "Medium",
        soil: "Fertile, well-drained soil",
        use: "Food, animal feed and processing"
    },

    beans: {
        name: "🫘 Beans",
        category: "LEGUME",
        description:
            "Beans are an important food crop and provide a valuable source of plant-based protein.",
        period: "2–4 Months",
        water: "Medium",
        soil: "Well-drained fertile soil",
        use: "Food and protein"
    },

    potatoes: {
        name: "🥔 Potatoes",
        category: "TUBER",
        description:
            "Potatoes are an important food crop that perform well under suitable soil and climate conditions.",
        period: "3–4 Months",
        water: "Medium",
        soil: "Loose, fertile and well-drained soil",
        use: "Food and processing"
    },

    tomatoes: {
        name: "🍅 Tomatoes",
        category: "VEGETABLE",
        description:
            "Tomatoes are a high-value horticultural crop commonly produced for fresh markets and processing.",
        period: "3–4 Months",
        water: "High",
        soil: "Fertile, well-drained soil",
        use: "Fresh market and processing"
    },

    wheat: {
        name: "🌾 Wheat",
        category: "CEREAL",
        description:
            "Wheat is an important cereal crop used mainly for flour and a wide range of food products.",
        period: "4–6 Months",
        water: "Medium",
        soil: "Fertile, well-drained soil",
        use: "Flour and food products"
    },

    coffee: {
        name: "☕ Coffee",
        category: "CASH CROP",
        description:
            "Coffee is an important commercial crop grown for local consumption and international markets.",
        period: "Long Term",
        water: "Medium",
        soil: "Deep, fertile and well-drained soil",
        use: "Commercial production"
    },

    avocado: {
        name: "🥑 Avocado",
        category: "FRUIT",
        description:
            "Avocado is a commercially valuable fruit crop with demand in local and export markets.",
        period: "Long Term",
        water: "Medium",
        soil: "Deep, fertile and well-drained soil",
        use: "Fresh market and export"
    }

};


/* ==========================================
   SEARCH
========================================== */

const searchInput =
    document.getElementById("searchInput");

const cropCards =
    document.querySelectorAll(".crop-card");

const noResults =
    document.getElementById("noResults");


searchInput.addEventListener("input", function () {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let visibleCards = 0;


    cropCards.forEach(function (card) {

        const cropName =
            card.dataset.name.toLowerCase();

        if (cropName.includes(searchValue)) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


/* ==========================================
   CATEGORY FILTER
========================================== */

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const selectedCategory =
            button.dataset.filter;


        let visibleCards = 0;


        cropCards.forEach(function (card) {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "block";

                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });


        if (visibleCards === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    });

});

