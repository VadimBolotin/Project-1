$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

  $('.staff-slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.58578 5.51733C6.63816 5.57249 6.67972 5.63801 6.70808 5.71014C6.73644 5.78228 6.75103 5.85961 6.75103 5.93771C6.75103 6.01581 6.73644 6.09314 6.70808 6.16527C6.67972 6.23741 6.63816 6.30293 6.58578 6.35808L3.6079 9.50021L6.58578 12.6423C6.63808 12.6975 6.67956 12.7631 6.70787 12.8352C6.73617 12.9073 6.75074 12.9846 6.75074 13.0627C6.75074 13.1408 6.73617 13.2181 6.70787 13.2902C6.67956 13.3623 6.63808 13.4279 6.58578 13.4831C6.53348 13.5383 6.47139 13.5821 6.40306 13.612C6.33473 13.6418 6.26149 13.6572 6.18753 13.6572C6.11357 13.6572 6.04033 13.6418 5.972 13.612C5.90367 13.5821 5.84158 13.5383 5.78928 13.4831L2.41428 9.92058C2.3619 9.86543 2.32033 9.79991 2.29198 9.72777C2.26362 9.65564 2.24902 9.57831 2.24902 9.50021C2.24902 9.42211 2.26362 9.34478 2.29198 9.27264C2.32033 9.20051 2.3619 9.13499 2.41428 9.07983L5.78928 5.51733C5.84153 5.46204 5.9036 5.41817 5.97194 5.38824C6.04028 5.3583 6.11354 5.3429 6.18753 5.3429C6.26152 5.3429 6.33478 5.3583 6.40312 5.38824C6.47146 5.41817 6.53353 5.46204 6.58578 5.51733Z" fill="#F78CB6" fill-opacity="0.6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 9.50024C2.8125 9.34277 2.87176 9.19175 2.97725 9.0804C3.08274 8.96905 3.22582 8.90649 3.375 8.90649H15.1875C15.3367 8.90649 15.4798 8.96905 15.5852 9.0804C15.6907 9.19175 15.75 9.34277 15.75 9.50024C15.75 9.65772 15.6907 9.80874 15.5852 9.92009C15.4798 10.0314 15.3367 10.094 15.1875 10.094H3.375C3.22582 10.094 3.08274 10.0314 2.97725 9.92009C2.87176 9.80874 2.8125 9.65772 2.8125 9.50024Z" fill="#F78CB6" fill-opacity="0.6"/></svg></button>',

    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="19" height="19" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8531 7.25955C15.9256 7.1868 16.0118 7.12907 16.1068 7.08969C16.2017 7.0503 16.3034 7.03003 16.4062 7.03003C16.5089 7.03003 16.6107 7.0503 16.7056 7.08969C16.8005 7.12907 16.8867 7.1868 16.9593 7.25955L21.6468 11.9471C21.7196 12.0196 21.7773 12.1058 21.8167 12.2007C21.8561 12.2957 21.8763 12.3974 21.8763 12.5002C21.8763 12.6029 21.8561 12.7047 21.8167 12.7996C21.7773 12.8945 21.7196 12.9807 21.6468 13.0533L16.9593 17.7408C16.8126 17.8875 16.6136 17.9699 16.4062 17.9699C16.1987 17.9699 15.9998 17.8875 15.8531 17.7408C15.7064 17.5941 15.6239 17.3951 15.6239 17.1877C15.6239 16.9802 15.7064 16.7812 15.8531 16.6346L19.989 12.5002L15.8531 8.3658C15.7803 8.29323 15.7226 8.20702 15.6832 8.1121C15.6438 8.01719 15.6235 7.91544 15.6235 7.81268C15.6235 7.70991 15.6438 7.60816 15.6832 7.51325C15.7226 7.41833 15.7803 7.33212 15.8531 7.25955Z" fill="#F78CB6" fill-opacity="0.6" /><path fill-rule="evenodd" clip-rule="evenodd" d="M3.125 12.5002C3.125 12.293 3.20731 12.0943 3.35382 11.9478C3.50034 11.8013 3.69905 11.719 3.90625 11.719H20.3125C20.5197 11.719 20.7184 11.8013 20.8649 11.9478C21.0114 12.0943 21.0938 12.293 21.0938 12.5002C21.0938 12.7074 21.0114 12.9062 20.8649 13.0527C20.7184 13.1992 20.5197 13.2815 20.3125 13.2815H3.90625C3.69905 13.2815 3.50034 13.1992 3.35382 13.0527C3.20731 12.9062 3.125 12.7074 3.125 12.5002Z" fill="#F78CB6" fill-opacity="0.6" /></svg></button>',
    infinite:false,

  });

  // $('.toggle').on('click', function(event){
  //   $(this).toggleClass('active');
  //   $('body').toggleClass('night');
  // });
});


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// let switchMode = document.getElementById("switchMode");
// switchMode.onclick = function(){
//   let theme = document.getElementById("theme");

//   if(theme.getAttribute("href") === "styles.css"){
//     theme.href = "dark-mode.css";
//   } else {
//     theme.href = "styles.css";
//   }
// }


// push

const notifElem = document.querySelector('.notification');
const notif = {
  open: (color = 'pink') => notifElem.classList.add('go', color),
  close: () => notifElem.classList.remove('go')
}

setTimeout(() => {
  notif.open('pink')
  setTimeout(() => {
    notif.close();
  }, 15000)
}, 5000);

