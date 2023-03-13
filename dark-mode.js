// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

  // Get the dark mode toggle switch
  var darkModeToggle = document.querySelector("#dark-mode-toggle");

  // Get the <body> element
  var body = document.querySelector("body");

  // Check if the user has a preferred color scheme
  var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // If the user has a preferred color scheme, enable dark mode by default
  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Listen for the toggle switch to change
  darkModeToggle.addEventListener("change", function() {

    // Toggle the "dark-mode" class on the <body> element
    body.classList.toggle("dark-mode");

    // Store the user's preference in localStorage
    if (darkModeToggle.checked) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Load the user's preferred color scheme on page load
  var darkModeSetting = localStorage.getItem("darkMode");
  if (darkModeSetting === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  } else {
    body.classList.remove("dark-mode");
    darkModeToggle.checked = false;
  }
});
