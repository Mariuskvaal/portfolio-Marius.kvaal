document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    // Loop through each accordion item
    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");

        // Toggle accordion
        header.addEventListener("click", () => {
            // Close all other accordion items
            accordionItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });

            // Toggle the clicked accordion item
            item.classList.toggle("active");
        });

        // **Setup carousel inside this accordion-item**
        const carouselContainer = item.querySelector('.carousel-container');
        if (!carouselContainer) return; // Skip if no carousel exists in this item

        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        const nextButton = item.querySelector('.next');
        const prevButton = item.querySelector('.prev');
        let currentIndex = 0;

        function showSlide(index) {
            carouselItems.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        }

        if (nextButton) nextButton.addEventListener("click", nextSlide);
        if (prevButton) prevButton.addEventListener("click", prevSlide);

        // Initialize the first slide
        showSlide(currentIndex);
    });
});


