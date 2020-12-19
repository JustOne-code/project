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


//setInterval(tic,1000);


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
  document.body.classList.toggle("activemenu");
}
function toggleMenu2(event){
  if (event.target.tagName=="A")
    document.body.classList.toggle("activemenu");
}
document.getElementsByClassName("menu-block")[0].addEventListener("click", toggleMenu2);
document.getElementsByClassName("btnmenu")[0].addEventListener("click", toggleMenu);
document.getElementsByClassName("closeblock")[0].addEventListener("click", toggleMenu);

document.querySelector(".login a[href='#signin']").addEventListener("click", toggleModalSigIn);
function toggleModalSigIn(event){
  toggleModal('signin');
  return false;
}

document.querySelector(".login a[href='#register']").addEventListener("click", toggleModalRegister);
function toggleModalRegister(event){
  toggleModal('register');
  return false;
}

btnarenda=document.getElementById("btnarenda");
if (btnarenda) btnarenda.addEventListener("click", toggleModalArenda);
function toggleModalArenda(event){
  toggleModal('arenda');
  return false;
}

document.getElementsByClassName("closeblock2")[0].addEventListener("click", closeModals);
document.querySelector("#arenda .btn").addEventListener("click", closeModals);
function closeModals(event){
  toggleModal();
  return false;
}

function toggleModal(idModal=null){
  document.body.classList.toggle("openmodal");
  if (idModal)
    document.body.classList.toggle('open'+idModal);
  else {
    if (document.body.classList.contains('opensignin'))
      document.body.classList.remove('opensignin');
    if (document.body.classList.contains('openregister'))
      document.body.classList.remove('openregister');
      if (document.body.classList.contains('openarenda'))
        document.body.classList.remove('openarenda');
  }
}

document.querySelector("#signin .btn").addEventListener("click", authUser);
document.querySelector("#register .btn").addEventListener("click", authUser);
function authUser(event){
  form=event.target.closest("form");
  login=form.querySelector("input[name='login']").value;
  pass=form.querySelector("input[name='pass']").value;
  passObj=form.querySelector("input[name='pass2']");
  if (passObj)
    pass2=passObj.value;
  else pass2="notreg";
  if (login && pass && pass2){
    form.classList.remove('showerror');
    toggleModal();
    document.cookie = "login="+login+"; path=/";
    setAuth(login);
  } else{
    form.classList.add('showerror');
  }
  return false;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setAuth(login=null){
  loginuser=document.getElementById("loginuser");
  if (!login){
    login=getCookie('login');
    if (!login){
      login='';
      document.body.classList.remove('auth');
    }
  }
  if (login!=''){
    document.body.classList.add('auth');
  }
  loginuser.innerHTML=login;
}

document.querySelector("a[href='#logout']").addEventListener("click", logout);
function logout(event){
  document.cookie = "login=; path=/";
  setAuth();
  return false;
}

setAuth();

slider=$(".slides").slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});

$(".btnprev").click(function(){
  slider.slick("slickPrev");
});

$(".btnnext").click(function(){
  slider.slick("slickNext");
});