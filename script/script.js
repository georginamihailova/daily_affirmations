function displayPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    var body = document.body;
    body.classList.add("popup-open");

}

// Function to close the popup window
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    var body = document.body;
    body.classList.remove("popup-open");
}

// Call the displayPopup function when the website is opened
window.onload = displayPopup;
    function refreshCards() {
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
    var mainText = card.querySelector(".main-text");
    var hiddenText = card.querySelector(".hidden-text");

    var mainTextDisplay = getComputedStyle(mainText).display;

    if (mainTextDisplay === "none" || mainTextDisplay === "") {
    mainText.style.display = "block";
    hiddenText.style.display = "none";
} else {
    mainText.style.display = "none";
    hiddenText.style.display = "block";
}

    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 500); // Remove the class after the animation duration (in milliseconds)
});

    var refreshBtn = document.querySelector(".refresh-btn");
    refreshBtn.classList.add("rotate"); // Add the rotate class to trigger the
    setTimeout(() => refreshBtn.classList.remove("rotate"), 500); // Remove the class after the animation duration (in milliseconds)
}

