import "./scss/app.scss";
import home from "./components/home";
import animateSlides from "./components/hero-two"; // first 3 slides
import detailAnimation from "./components/yoga"; // second 3 slides
import contactForm from "./components/contact";

animateSlides();
detailAnimation();
contactForm();
// home();

// NAV TOGGLE
const burger = document.querySelector(".wrap-burger");
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".social-media li", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 52% -10%)" });
    gsap.to(".nav-header", 1, { boxShadow: "none" });
    gsap.to(".product-img", 0.5, { visibility: "hidden" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "#d1d5da" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "#d1d5da" });
    gsap.to("#logo", 1, { color: "#d1d5da" });
    gsap.to(".social-media li", 1, { color: "#d1d5da" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 52% -10%)" });
    gsap.to(
      ".nav-header",
      1,
      {
        delay: 0.5,
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      },
      "-=1"
    );
    gsap.to(".product-img", 1, { delay: 0.5, visibility: "visible" });
    document.body.classList.remove("hide");
  }
}

// CURSOR
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function activeCursor(e) {
  const item = e.target;
  // Select LOGO, burger
  if (
    item.id === "logo" ||
    item.classList.contains("wrap-burger") ||
    item.classList.contains("fa")
  ) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }

  // Explore btn
  if (item.classList.contains("explore")) {
    mouse.classList.add("explore-active");
    gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "Tap";
  } else {
    mouse.classList.remove("explore-active");
    mouseTxt.innerText = "";
    gsap.to(".title-swipe", 1, { y: "100%" });
  }
}

//EventListeners
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

//Barba Page Transitions
// const logo = document.querySelector("#logo");
// barba.init({
//   views: [
//     {
//       namespace: "home",
//       beforeEnter() {
//         animateSlides();
//         logo.href = "./index.html";
//       },
//       beforeLeave() {
//         slideScene.destroy();
//         pageScene.destroy(); //! delete
//         controller.destroy();
//       },
//     },
//     {
//       namespace: "programs",
//       beforeEnter() {
//         logo.href = "../index.html"; //! verify
//         detailAnimation();
//       },
//       beforeLeave() {
//         controller.destroy();
//         detailScene.destroy();
//       },
//     },
//   ],
//   transitions: [
//     {
//       leave({ current, next }) {
//         let done = this.async();
//         //An Animation
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
//         tl.fromTo(
//           ".swipe",
//           0.75,
//           { x: "-100%" },
//           { x: "0%", onComplete: done },
//           "-=0.5"
//         );
//       },
//       enter({ current, next }) {
//         let done = this.async();
//         //Scroll to the top
//         window.scrollTo(0, 0);
//         //An Animation
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(
//           ".swipe",
//           1,
//           { x: "0%" },

//           { x: "100%", stagger: 0.2, onComplete: done }
//         );
//         tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//         tl.fromTo(
//           ".nav-header",
//           1,
//           { y: "-100%" },
//           { y: "0%", ease: "power2.inOut" },
//           "-=1.5"
//         );
//       },
//     },
//   ],
// });

//! Code for home section

TweenMax.from(".nav-header", 1.6, {
  delay: 1.6,
  y: "-50px",
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.to(".product-img", 1.6, {
  delay: 1.6,
  opacity: 1,
  visibility: "visible",
  ease: Expo.easeInOut,
});

TweenMax.to(".ellipse-container", 1.6, {
  delay: 1.9,
  opacity: 1,
  visibility: "visible",
  ease: Expo.easeInOut,
});

TweenMax.from(".left", 1.6, {
  delay: 0.6,
  width: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".right", 1.6, {
  delay: 0.6,
  width: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".product-title", 1.6, {
  delay: 1.6,
  opacity: 0,
  x: 80,
  ease: Expo.easeInOut,
});

TweenMax.from(".scroll-down", 1.6, {
  delay: 1.8,
  opacity: 0,
  x: 80,
  ease: Expo.easeInOut,
});

TweenMax.from(".line span", 1.6, {
  delay: 1.6,
  y: 80,
  duration: 0.8,
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.4,
  },
});

TweenMax.from(".btn-row", 1.6, {
  delay: 2,
  opacity: 0,
  y: 80,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle1", 1, {
  delay: 2.4,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".circle2", 1, {
  delay: 2.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".watchnow", 1, {
  delay: 2.7,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

//! Features
const featuresContentTitle = document.querySelector(".features-content h3");
const featuresContentP = document.querySelector(".features-content p");
const featuresContentButton = document.querySelector(
  ".features-content .btn-row"
);
const featuresList = document.querySelectorAll(".features-list li");

const featuresTl = gsap.timeline();

featuresTl
  .from([featuresContentTitle, featuresContentP, featuresContentButton], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from(featuresList, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4,
    },
  });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".circle2",
  triggerHook: 0,
  reverse: false,
})
  .addIndicators({
    colorStart: "red",
    colorTrigger: "orange",
    name: "GATILHO",
  })
  .setTween(featuresTl)
  .addTo(controller);
