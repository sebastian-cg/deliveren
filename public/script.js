document.addEventListener("DOMContentLoaded", () => { 
    const categoryLinks = document.querySelectorAll('.category-btn');
    const sections = document.querySelectorAll("#menu .flex-1 > div");

    if (categoryLinks.length === 0 || sections.length === 0) {
      console.error("No category buttons or sections found. Check your HTML structure.");
      return;
    }

    categoryLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        // Get the target section's ID
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (!targetSection) {
          console.error(`No section found with ID: ${targetId}`);
          return;
        }

        // Show the target section and hide others
        sections.forEach(section => {
          if (section === targetSection) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        });

        // Remove active class from all buttons
        categoryLinks.forEach(btn => btn.classList.remove('active', 'focus'));

        // Add active and focus classes to the clicked button
        link.classList.add('active', 'focus');

        // Optionally scroll the selected section into view
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Initially hide all sections except the active one
    const defaultActiveId = "pizza-section"; // Default section ID
    const defaultActiveSection = document.getElementById(defaultActiveId);

    sections.forEach(section => {
      if (section === defaultActiveSection) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });

    // Set default active button
    const defaultActiveButton = document.querySelector(`.category-btn[href="#${defaultActiveId}"]`);
    if (defaultActiveButton) {
      defaultActiveButton.classList.add('active', 'focus');
    } else {
      console.error(`Default active button not found for ID: ${defaultActiveId}`);
    }
  });

  function redirectToFacebook() {
    window.location.href = "https://www.facebook.com/dongpadilla001";
}
