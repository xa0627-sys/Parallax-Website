// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];

// Capture initial fish offsets to enable circular motion
const fish1BaseTop = parseFloat(getComputedStyle(fish1).top);
const fish2BaseTop = parseFloat(getComputedStyle(fish2).top);
const fish3BaseTop = parseFloat(getComputedStyle(fish3).top);
const fish4BaseTop = parseFloat(getComputedStyle(fish4).top);

const fish1BaseLeft = parseFloat(getComputedStyle(fish1).left);
const fish2BaseLeft = parseFloat(getComputedStyle(fish2).left);
const fish3BaseLeft = parseFloat(getComputedStyle(fish3).left);
const fish4BaseLeft = parseFloat(getComputedStyle(fish4).left);

const fishSwimConfigs = [
    { element: fish1, top: fish1BaseTop, left: fish1BaseLeft, radius: 35, speed: 0.012, phase: 0 },
    { element: fish2, top: fish2BaseTop, left: fish2BaseLeft, radius: 45, speed: 0.01, phase: 0.8 },
    { element: fish3, top: fish3BaseTop, left: fish3BaseLeft, radius: 40, speed: 0.009, phase: 1.6 },
    { element: fish4, top: fish4BaseTop, left: fish4BaseLeft, radius: 50, speed: 0.008, phase: 2.4 }
];

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')
}



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    // Move fishes in circular paths using their base offsets
    fishSwimConfigs.forEach((config) => {
        const angle = (value * config.speed) + config.phase;
        const verticalOffset = Math.sin(angle) * config.radius;
        const horizontalOffset = Math.cos(angle) * config.radius;

        config.element.style.top = config.top + verticalOffset + 'px';
        config.element.style.left = config.left + horizontalOffset + 'px';
    });
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}