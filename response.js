let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height =sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top>= offset && top < offset + height){
        navlinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
       }
    })
    
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('active');
    navbar.classList.toggle('bx-x');
}









let menuIcon= document.querySelector("#menu-icon");
let navbar= document.querySelector(".navbar");

menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin: 'top'});

ScrollReveal().reveal('.home-img,.education-container, .port-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .abt-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .abt-content',{origin: 'right'});




const typed = new Typed('.multiple-text',{
    strings:['Engineer','Developer','Data Scientist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});