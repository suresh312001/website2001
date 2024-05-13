document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active'); // Toggle the 'active' class on the navigation links
    });
  });
