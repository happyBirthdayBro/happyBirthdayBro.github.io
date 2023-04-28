gsap.registerPlugin(ScrollTrigger);

/* ------------- Loading Section ------------- */
const loadingTimeLine = gsap.timeline();

loadingTimeLine.from('.title', {
  delay: .2,
  duration: .5,
  opacity: 0,
  y: 10
})
.from('.bracket', {
  duration: .3,
  scale: 0,
  margin: 0
})
.from('#loader', {
  duration: .2,
  scale: 0
});


let id;
let i = 0;
function loader() {
  id = setInterval(frame, 45);
}
function frame() {
  if(i >= 100) {
    clearInterval(id);
    welcomeScreenTimeLine.play();
  } else {
    i++;
    document.querySelector('#loader').innerHTML = i + '%';
  }
}
window.onload = function() {
  setTimeout(() => {
    loader();
  }, 500);
  setTimeout(() => {
    document.querySelector('body').style.overflowY='auto';
  }, 5500);
};

/* ------------- Welcome Screen ------------- */
const welcomeScreenTimeLine = gsap.timeline({
  paused: 'true'
});

welcomeScreenTimeLine.to('.loading-section', {
  y: -10,
  opacity: 0
})
.to('.loading-screen', {
  duration: .8,
  y: -2000,
  ease: 'power2.out'
})
.from('.welcome-screen .welcome-text', {
  duration: .5,
  y: 200,
  opacity: 0,
  stagger: {
    amount: .25
  }
}, '-=0.3');


/* ------------- Wishes Content ------------- */
document.querySelector('.wishes-page-list').innerHTML = ' ';
wishes.forEach(item => {
  document.querySelector('.wishes-page-list').innerHTML += `<li class="wishes-page-list__item">${item}</li>`;
})


/* ------------- Main Screen ------------- */
ScrollTrigger.create({
  trigger: '.welcome-screen',
  start: 'top top',
  pin: true,
  pinSpacing: false,
  snap: 1,
});

const mainScreenTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-screen .wrapper',
    start: 'top top',
    end: 'top -100%',
    pined: true,
    scrub: 1,
    pin: '.main-screen'
  }
});

mainScreenTimeLine.from('.main-screen .garland', {
  y: -300,
  duration: 5
})
.from('.main-screen .clapperboard', {
  y: 380,
  duration: 5
})
.from('.main-screen .clapperboard-anim-1', {
  y: 100,
  scale: 0,
  duration: 5
})
.from('.main-screen .clapperboard-anim-2', {
  y: 100,
  scale: 0,
  duration: 5
}, '-=5')
.from('.main-screen .cake', {
  y: 900,
  duration: 10
})
.from('.main-screen .card', {
  scale: 0,
  rotate: -1000,
  duration: 10
})
.from('.main-screen .main-text', {
  y: 50,
  scale: 0,
  duration: 5
})
.to('.main-screen .main-text', {
  duration: 15
});


/* ------------- Text Screen ------------- */
const textScreenTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-section .wrapper',
    start: 'top 40%',
    end: 'top -100%',
    pined: true,
    scrub: 1,
    /* markers: true */
  }
});

textScreenTimeLine.from('.text-section .main-text', {
  y: 300,
  scale: 0,
  duration: 5
})
.from('.text-section .text-1', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-2', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-3', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-4', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-img', {
  scale: 0,
  duration: 10
})
.from('.text-section .additional-text', {
  scale: 0,
  duration: 5,
  delay: 15
})
.to('.text-section .additional-text', {
  duration: 15
});


/* ------------- Main Page ------------- */
ScrollTrigger.create({
  trigger: '.main-page__title',
  start: 'top top',
  pin: true,
  pinSpacing: false,
});

const mainPageTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-page .main-page-content',
    start: 'top top',
    end: 'top -200%',
    pined: true,
    scrub: 1,
    pin: '.main-page-content'
  }
});

mainPageTimeLine.from('.main-page .main-page__subtitle', {
  duration: 15,
  y: 200,
  opacity: 0
})
.from('.main-page .main-page__text p', {
  duration: 15,
  y: 100,
  opacity: 0,
  stagger: {
    amount: 7
  }
})
.from('.main-page .main-page__img', {
  duration: 15,
  y: 200,
})
.from('.main-page .main-page__video', {
  duration: 25,
  y: -1200,
})
.from('.main-page .main-page__video--text', {
  duration: 15,
  rotate: -1000,
  scale: 0
})
.to('.main-page .main-page__video--text', {
  duration: 20
})


/* ------------- wishes-page ------------- */
ScrollTrigger.create({
  trigger: '.wishes-page__title',
  start: 'top top',
  pin: true,
  pinSpacing: false,
});

const wishesPageTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.wishes-page .wishes-page-content',
    start: 'top top',
    end: 'top -10%',
    pined: true,
    scrub: 1,
    pin: '.wishes-page-content'
  }
});

document.querySelectorAll('.wishes-page-list__item').forEach((item, idx) => { 
  if (idx % 2 == 0) {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'bottom 90%',
        end: 'bottom 60%',
        scrub: 1,
      },
      duration: 4,
      x: -300,
      opacity: 0
    })
  } else {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'bottom 90%',
        end: 'bottom 60%',
        scrub: 1,
      },
      duration: 4,
      x: 300,
      opacity: 0
    })
  }
  
})



/* ------------- Gallary Page ------------- */

ScrollTrigger.create({
  trigger: '.gallary-page__title',
  start: 'top top',
  pin: true,
  pinSpacing: false,
});

const galleryPageTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.gallary-page .gallary-page-content',
    start: 'top top',
    end: 'top -10%',
    pined: true,
    scrub: 1,
    pin: '.gallary-page-content'
  }
});


const galleryItems = document.querySelectorAll(".gallary-page__item");

galleryItems.forEach((item, idx) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 60%',
      end: '30% 40%',
      scrub: 1,
    },
    duration: 4,
    y: 200,
    opacity: 0
  })
})
