let next = document.querySelector('.buttons .next');
let prev = document.querySelector('.buttons .prev');

// Adding event listener for the next button
next.addEventListener('click', function() {
    // Check if any video is currently playing
    let videos = document.querySelectorAll('.item video');
    let isVideoPlaying = false;
    videos.forEach(function(video) {
        if (!video.paused) {
            isVideoPlaying = true;
        }
    });
    // If no video is playing, proceed with moving to the next slide
    if (!isVideoPlaying) {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slider').appendChild(items[0]);
    }
});

// Adding event listener for the previous button
prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let lastItem = items[items.length - 1];
    document.querySelector('.slider').prepend(lastItem);
});
