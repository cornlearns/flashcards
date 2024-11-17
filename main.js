// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
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









