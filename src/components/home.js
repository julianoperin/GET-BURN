const home = () => {
  const bannerTL = gsap.timeline();

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
    .addIndicators()
    .setTween(featuresTl)
    .addTo(controller);
};

export default home;
