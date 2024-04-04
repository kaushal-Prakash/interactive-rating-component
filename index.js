const ratingBtn = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit");
const thanksContainer = document.querySelector(".thanks-wrapper");
const submitContainer = document.querySelector(".rating-wrapper");

// Submit button functionality
submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    submitContainer.classList.add("hidden");
});


//rating funtionality
ratingBtn.forEach(function(button) {
    button.addEventListener('click', function() {
        const btnClicked = button.innerHTML;
        console.log(btnClicked);
        document.querySelector(".span").innerHTML=btnClicked;
    });
});