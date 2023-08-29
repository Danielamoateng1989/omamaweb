let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove 'active' class from all links
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        
        // Add 'active' class to clicked link
        this.classList.add("active");
    });
});
