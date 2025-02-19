document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const menuItems = document.querySelectorAll(".dropdown-menu li");

    // Get the current page filename (e.g., "index.html")
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through all menu items and check which one matches the current page
    menuItems.forEach((item) => {
        if (item.getAttribute("data-page") === currentPage) {
            item.classList.add("active"); // Add active class to show blue circle
        }
    });

    // Dropdown toggle functionality
    dropdownBtn.addEventListener("click", function () {
        dropdown.classList.toggle("show");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Initial call to set background immediately
    changeBackgroundGradient();
});




