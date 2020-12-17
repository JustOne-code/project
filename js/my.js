var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
);

if (window.innerWidth>991.97)
  wow.init();

let d=document.getElementById("d");
let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");


setInterval(tic,1000);


function tic(){
  let d1=new Date();
  let d2=new Date(d1.getFullYear(), 11, 31, 24);
  let ms=d2.getTime()-d1.getTime();
  let sec=ms/1000;
  let min=sec/60;
  let hours=min/60;
  let days=hours/24;

  hours=23-d1.getHours();
  if (hours<10){
    hours="0"+hours;
  }
  min=59-d1.getMinutes();
  if (min<10){
    min="0"+min;
  }
  sec=59-d1.getSeconds();
  if (sec<10){
    sec="0"+sec;
  }
  d.innerHTML=Math.floor(days)+"дн. ";
  h.innerHTML=hours+"ч. ";
  m.innerHTML=min+"мин. ";
  s.innerHTML=sec+"сек. ";
}
function toggleMenu(event){
  console.log(event.target.tagName);
  document.body.classList.toggle("activemenu");
}
function toggleMenu2(event){
  console.log(event.target.tagName);
  if (event.target.tagName=="A")
    document.body.classList.toggle("activemenu");
}
document.getElementsByClassName("menu-block")[0].addEventListener("click", toggleMenu2);
document.getElementsByClassName("btnmenu")[0].addEventListener("click", toggleMenu);
document.getElementsByClassName("closeblock")[0].addEventListener("click", toggleMenu);
