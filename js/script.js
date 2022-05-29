let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// document.querySelector('#login-btn').onclick = () =>{
//   document.querySelector('.login-form-container').classList.toggle('active');
//   window.location.href("login.html")
// }

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="rgb(12, 132, 189)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="rgb(12, 132, 189)";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fe").value ="";
        }