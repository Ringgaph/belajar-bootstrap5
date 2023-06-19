// Get the button
var btn = $("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

// When the user clicks on the button, scroll to the top of the document
btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
});

// nav link active
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.addEventListener("click", (e) => {
            links.forEach((link) => {
                link.classList.remove("active");
            });
            e.preventDefault();
            link.classList.add("active");
        });
    }
});
