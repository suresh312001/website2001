function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

    function displayWelcomeMessage() {
        var messages = [
            "Welcome to Suresh Kumar's Web Development Portfolio! Get ready to be inspired.",
            "Hey there! Glad to see you here. Explore and enjoy!",
            "Welcome, curious mind! Dive into the world of Suresh Kumar's creations.",
            "Hello, fellow developer! Ready to embark on a journey of innovation?",
            "Greetings! Step into the universe of Suresh Kumar's frontend wonders.",
            "Welcome, visitor! Prepare to witness the magic of web development."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        alert(messages[randomIndex]);
    }

    // Call the function when the page loads
    window.onload = displayWelcomeMessage;

