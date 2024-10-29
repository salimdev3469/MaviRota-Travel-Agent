window.addEventListener('scroll', function() {
    const visionMission = document.getElementById('vision-mission');
    const bounding = visionMission.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        visionMission.classList.add('slideInLeft');
    }
});

const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".collapsebar");
const sidebarclose = document.querySelector(".close-themenu");

bars.addEventListener("click", (event) => {
    event.preventDefault();
    bars.style.display = "none";
    sidebar.style.display = "block";
    sidebarclose.style.display = "block";
});

sidebarclose.addEventListener("click", (event) => {
    event.preventDefault();
    sidebar.style.display = "none";
    if (window.innerWidth <= 690) {
        bars.style.display = "block";
    } 
});



