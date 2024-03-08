document.querySelector("#enterButton").addEventListener( "click", function() {
    user = document.querySelector("#username").value;
    pass = document.querySelector("#password").value;
    message = document.querySelector(".message");

    if (user != "raphael.azambuja" || pass != "12345678") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});