const flashcards = [
    { word: "Good Morning", translation: "Akkam bulte", image: "img/1.jpg" },
    { word: "Hi", translation: "Akkam", image: "img/2.jpg" },
    { word: "Bye", translation: "Nagaatti", image: "img/3.jpg" },
    { word: "Morning", translation: "Ganama", image: "img/4.jpg" },
    { word: "Night", translation: "Halkan", image: "img/5.jpg" },
    { word: "Clothes", translation: "Uffannaa", image: "img/6.jpg" },
    { word: "How many?", translation: "Meeqa?", image: "img/7.jpg" },
    { word: "I", translation: "An", image: "img/8.jpg" },
    { word: "Day", translation: "Guyyaa", image: "img/9.jpg" },
    { word: "Tree", translation: "Muka", image: "img/10.jpg" },
    { word: "Flower", translation: "Abaaboo", image: "img/11.jpg" },
    { word: "Red", translation: "Diimaa", image: "img/12.jpg" },
    { word: "Blue", translation: "Cuquliisa", image: "img/13.jpg" },
    { word: "Yes", translation: "Eeyyee", image: "img/14.jpg" },
    { word: "No", translation: "Lakki", image: "img/15.jpg" },
    { word: "Please", translation: "Maaloo", image: "img/16.jpg" },
    { word: "Always", translation: "Yeroo hunda", image: "img/17.jpg" },
    { word: "Never", translation: "Gonkumaa", image: "img/18.jpg" },
    { word: "Sorry", translation: "Dhiifama", image: "img/19.jpg" },
    { word: "Nothing", translation: "Homaa", image: "img/20.jpg" },
    { word: "Good", translation: "Gaarii", image: "img/21.jpg" },
    { word: "Bad", translation: "Badaa", image: "img/22.jpg" },
    { word: "Time", translation: "Yeroo", image: "img/23.jpg" },
    { word: "Love", translation: "Jaalala", image: "img/24.jpg" },
    { word: "Dead", translation: "Du'aa", image: "img/25.jpg" },
    { word: "Alive", translation: "Jiraataa", image: "img/26.jpg" },
    { word: "Before", translation: "Dura", image: "img/27.jpg" },
    { word: "After", translation: "Booda", image: "img/28.jpg" },
    { word: "Easy", translation: "Salphaa", image: "img/29.jpg" },
    { word: "Hard", translation: "Jabaa", image: "img/30.jpg" },
    { word: "Hot", translation: "Ho'aa", image: "img/31.jpg" },
    { word: "Cold", translation: "Diilallaa'aa", image: "img/32.jpg" },
    { word: "Sun", translation: "Aduu", image: "img/33.jpg" },
    { word: "Snow", translation: "Rooba cabbii", image: "img/34.jpg" },
    { word: "Rain", translation: "Rooba", image: "img/35.jpg" },
    { word: "Sound", translation: "Sagalee", image: "img/36.jpg" },
    { word: "Number", translation: "Lakkoofsa", image: "img/37.jpg" },
    { word: "High", translation: "Ol aanaa", image: "img/38.jpg" },
    { word: "Small", translation: "Xiqqoo", image: "img/39.jpg" },
    { word: "Beauty", translation: "Miidhagina", image: "img/40.jpg" },
    { word: "Face", translation: "Fuula", image: "img/41.jpg" },
    { word: "Body", translation: "Qaama", image: "img/42.jpg" },
    { word: "Because", translation: "Sababni isaas", image: "img/43.jpg" },
    { word: "Bread", translation: "Daabboo", image: "img/44.jpg" },
    { word: "Butter", translation: "Dhadhaa", image: "img/45.jpg" },
    { word: "Apple", translation: "Appilii", image: "img/46.jpg" },
    { word: "Banana", translation: "Muuzii", image: "img/47.jpg" },
    { word: "Monkey", translation: "Jaldeessa", image: "img/48.jpg" },
    { word: "Dog", translation: "Saree", image: "img/49.jpg" },
    { word: "Cat", translation: "Adurree", image: "img/50.jpg" },
    // Dodaj więcej fiszek według potrzeb
];

document.addEventListener("DOMContentLoaded", function() {
    const showAnswerButton = document.getElementById("show-answer");
    const nextCardButton = document.getElementById("next-card");
    const resetButton = document.getElementById("reset"); 
    const cardFront = document.getElementById("card-front");
    const cardBack = document.getElementById("card-back");
    const wordElement = document.getElementById("word");
    const translationElement = document.getElementById("translation");
    const imageElement = document.getElementById("image");

    let currentCardIndex = 0;

    function showNextFlashcard() {
        if (currentCardIndex >= flashcards.length) {
            currentCardIndex = 0; // Wróć do pierwszej fiszki po przejściu przez całą kolekcję
        }
        const currentFlashcard = flashcards[currentCardIndex];
        wordElement.textContent = currentFlashcard.word;
        translationElement.textContent = currentFlashcard.translation;
        imageElement.src = currentFlashcard.image;
        cardFront.style.display = "block";
        cardBack.style.display = "none";
        showAnswerButton.style.display = "block";
        nextCardButton.style.display = "none";
        translationElement.style.display = "none"; // Ukryj tłumaczenie na początku
    }

    showAnswerButton.addEventListener("click", function() {
        cardFront.style.display = "none";
        cardBack.style.display = "block";
        translationElement.style.display = "block"; // Pokaż tłumaczenie
        showAnswerButton.style.display = "none";
        nextCardButton.style.display = "block";
    });

    nextCardButton.addEventListener("click", function() {
        currentCardIndex++;
        showNextFlashcard();
    });

    resetButton.addEventListener("click", function() {
        currentCardIndex = 0;
        showNextFlashcard(); // Display the first flashcard again
    });

    showNextFlashcard(); // Pokaż pierwszą fiszkę przy ładowaniu strony
});

document.addEventListener("DOMContentLoaded", function() {
    const transitionOverlay = document.querySelector(".page-transition");
    const links = document.querySelectorAll(".transition-link");

    // Check if the page is being loaded for the first time
    if (!sessionStorage.getItem("loadedBefore")) {
        transitionOverlay.classList.add("hidden");
        sessionStorage.setItem("loadedBefore", true);
    } else {
        transitionOverlay.classList.remove("hidden");
    }

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetUrl = this.getAttribute("href");
            const targetBgColor = this.getAttribute("data-bg-color");

            // Set the overlay background color to match the target page
            transitionOverlay.style.backgroundColor = targetBgColor;

            // Activate the transition
            transitionOverlay.classList.add("active");

            // Redirect after the transition
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800); // Match the CSS transition duration
        });
    });

    // Reset the overlay on page load to ensure smooth transitions
    window.addEventListener("pageshow", () => {
        transitionOverlay.classList.remove("active");
    });
});

