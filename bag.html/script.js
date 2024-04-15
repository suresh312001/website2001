// Navbar/Sidebar
const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

// Toggle sidebar open/close
menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    // Animation delay
    let delay = 100;
    // Toggle open class
    menu.classList.toggle('menu-open');
    // Sidebar link slide animation
    setTimeout(() => {
        resetAnimation();
    }, delay * (links.length + 1));

    links.forEach(link => {
        link.style.opacity = "0";
        link.style.animation = "slideIn 400ms ease-in-out forwards";
        link.style.animationDelay = delay + "ms";
        delay += 100;
    });

    function resetAnimation() {
        links.forEach(link => {
            link.style.animation = "none";
            link.style.opacity = "1";
        });
    }
}

const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile li');
const title = document.querySelector('title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id = 0;

const images = [
    'product1.avif',
    'product2.avif',
    'product3.avif',
];

const progresswidth = [
    '100%',
    '100%',
    '100%',
];

const text = [
    'work',
    'active',
    'travel',
];

for (let i = 0; i < cntrl.length; i++) {
    cntrl[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide();
    });

    cntrlMob[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide();
    });
}

function slider(i) {
    img.src = images[i];
    progress.style.width = progresswidth[i];
    title.innerText = text[i] + " Collection";
    subTitle.forEach(sub => {
        sub.innerText = text[i] + " collection";
    });
    count.innerHTML = "/0" + (i + 1);
    for (let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

function nextSlide() {
    id++;
    if (id > cntrl.length - 1) {
        id = 0;
    }
    slider(id);
}

let autoSlide = setInterval(nextSlide, 10000);

function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}
