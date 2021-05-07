window.onload = function(){
    var image = document.getElementById("image");
    var overlay = document.getElementById("overlay");
    var height = window.innerHeight;
    var width = window.innerWidth;
    image.style.height = height + "px";  
    image.style.width = width + "px";
    overlay.style.height = height + "px";
    overlay.style.width = width + "px";
}

window.onresize = function(){
    image = document.getElementById("image");
    overlay = document.getElementById("overlay");
    height = window.innerHeight;
    width = window.innerWidth;
    image.style.height = height + "px";  
    image.style.width = width + "px";
    overlay.style.height = height + "px";
    overlay.style.width = width + "px";
}

$(window).scroll(function(){
    $(".header").css("opacity", 1 - $(window).scrollTop() / 900);
});

const navigation = document.querySelector(".navigation");
const sectionOne = document.querySelector(".header");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(
    function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                navigation.classList.add("nav-scrolled")
            } else {
                navigation.classList.remove("nav-scrolled")
            }
        })
    }, sectionOneOptions
);

sectionOneObserver.observe(sectionOne);



const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.edu');
const headers = document.querySelectorAll('.skill-header')

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
}

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

headers.forEach(header => {
    appearOnScroll.observe(header);
})

const fillersHTML =  document.querySelectorAll('.html')

const fillOnScrollHTML = new IntersectionObserver
(function(
    entries,
    fillOnScrollHTML
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('bar-fill-html');
            fillOnScrollHTML.unobserve(entry.target);
        }
    })
}, appearOptions);

fillersHTML.forEach(filler =>{
    fillOnScrollHTML.observe(filler);
})

const fillersJS =  document.querySelectorAll('.js')

const fillOnScrollJS = new IntersectionObserver
(function(
    entries,
    fillOnScrollJS
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('bar-fill-js');
            fillOnScrollJS.unobserve(entry.target);
        }
    })
}, appearOptions);

fillersJS.forEach(filler =>{
    fillOnScrollJS.observe(filler);
})

const fillersJQ =  document.querySelectorAll('.jq')

const fillOnScrollJQ = new IntersectionObserver
(function(
    entries,
    fillOnScrollJQ
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('bar-fill-jq');
            fillOnScrollJQ.unobserve(entry.target);
        }
    })
}, appearOptions);

fillersJQ.forEach(filler =>{
    fillOnScrollJQ.observe(filler);
})

const fillersCPP =  document.querySelectorAll('.cpp')

const fillOnScrollCPP = new IntersectionObserver
(function(
    entries,
    fillOnScrollCPP
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('bar-fill-cpp');
            fillOnScrollCPP.unobserve(entry.target);
        }
    })
}, appearOptions);

fillersCPP.forEach(filler =>{
    fillOnScrollCPP.observe(filler);
})

const fillersPhp =  document.querySelectorAll('.php')

const fillOnScrollPhp = new IntersectionObserver
(function(
    entries,
    fillOnScrollPhp
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('bar-fill-php');
            fillOnScrollPhp.unobserve(entry.target);
        }
    })
}, appearOptions);

fillersPhp.forEach(filler =>{
    fillOnScrollPhp.observe(filler);
})

const popers = document.querySelectorAll('.service');

const PopOnScroll = new IntersectionObserver
(function(
    entries,
    PopOnScroll
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('s-animation');
            PopOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);


popers.forEach(poper =>{
    PopOnScroll.observe(poper);
})

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
	    perPage: 3,
	    focus  : 'center',
    }).mount();
} );

window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");
    
    var status = document.getElementById("status");

    function success() {
      form.reset();
      status.innerHTML = "Message sent successfully!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
