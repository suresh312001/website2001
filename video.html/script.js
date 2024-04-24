document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('bg-video');
    var audioToggle = document.getElementById('audio-toggle');
    
    audioToggle.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            audioToggle.textContent = 'Audio On';
        } else {
            video.muted = true;
            audioToggle.textContent = 'Audio Off';
        }
    });
});
