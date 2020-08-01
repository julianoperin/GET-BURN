const heroOne = () => {
  TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeIn,
  });

  TweenMax.to(".overlay span", 2, {
    delay: -0.3,
    opacity: 0,
    y: -60,
    ease: Expo.easeIn,
  });

  TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-120%",
    ease: Expo.easeInOut,
  });

  TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    ".menu-links ul li",
    1,
    {
      delay: 2.2,
      opacity: 0,
      x: -250,
      ease: Expo.easeIn,
    },
    0.08
  );

  TweenMax.from(".scroll-down", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".text .title-header", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".text p", 1, {
    delay: 3.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".contact-now", 1, {
    delay: 3.4,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    ".media ul li",
    1,
    {
      delay: 3,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut,
    },
    0.08
  );
};

export default heroOne;
