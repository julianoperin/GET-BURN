import "./scss/app.scss";
// import home from "./components/home";
import animateSlides from "./components/hero-two"; // first 3 slides
import detailAnimation from "./components/yoga"; // second 3 slides

// home();
animateSlides();
detailAnimation();

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
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "#d1d5da" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "#d1d5da" });
    gsap.to("#logo", 1, { color: "#d1d5da" });
    gsap.to(".social-media li", 1, { color: "#d1d5da" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 52% -10%)" });
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
//       namespace: "pilates",
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
//       namespace: "yoga",
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
//           0.5,
//           { x: "-100%" },
//           { x: "0%", onComplete: done },
//           "-=0.5"
//         );
//       },
//       enter({ current, next }) {
//         let done = this.async();
//         window.scrollTo(0, 0); // move the next page to the top
//         //An Animation
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(
//           ".swipe",
//           0.5,
//           { x: "0%" },

//           { x: "100%", stagger: 0.5, onComplete: done }
//         );
//         tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//       },
//     },
//   ],
// });
