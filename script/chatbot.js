// Get modal element
const modal = document.getElementById("chatbotModal");

// Get button that opens the modal
const btn = document.getElementById("openChatbotBtn");

// Get the <span> element that closes the modal
const closeSpan = document.getElementById("closeModal");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
