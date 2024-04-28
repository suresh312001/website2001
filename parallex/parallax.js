document.addEventListener('DOMContentLoaded', function() {
  const dishes = document.querySelectorAll('.ramen-dish');

  setInterval(() => {
      dishes.forEach(dish => {
          const rotation = Math.random() * 360;
          dish.style.transform = `rotate(${rotation}deg)`;
      });
  }, 3000); // Rotate every 3 seconds
});
