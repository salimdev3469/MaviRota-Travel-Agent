window.addEventListener('scroll', function() {
    const visionMission = document.getElementById('vision-mission');
    const bounding = visionMission.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        visionMission.classList.add('slideInLeft');
    }
});

const bars=document.querySelector(".bars");
const sidebar=document.querySelector(".collapsebar");
const sidebarclose=document.querySelector(".close-themenu");

bars.addEventListener("click",()=>{
    bars.style.display="none";
    event.preventDefault();
    sidebar.style.display="block";
    sidebarclose.style.display="block";
    
});

sidebarclose.addEventListener("click",()=>{
    sidebar.style.display="none";
    if(window.innerWidth<=690){
        bars.style.display="block";
    }
    else{
        bars.style.display="none";
    }
    event.preventDefault();
});

function checkScreenSize() {
    if (window.innerWidth <= 690) {
        bars.style.display = 'block';  
    } else {
        bars.style.display = 'none';   
    }
}


window.addEventListener('resize', checkScreenSize);
checkScreenSize();