let control;
let detailScene;

const detailAnimation = () => {
  control = new ScrollMagic.Controller();

  const slides = document.querySelectorAll(".detail-slide");
  slides.forEach((slide) => {
    //   create a timeline
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    let text = slide.querySelector(".fashion-text h1");
    let p = slide.querySelector(".fashion-text p");
    let img = slide.querySelector(".fashion-img");
    let number = slide.querySelector(".fashion-nr");

    slideTl.fromTo(img, { x: "150%", opacity: "0" }, { x: "0%", opacity: "1" });
    slideTl.fromTo(
      text,
      { y: "-200%", opacity: "0" },
      { y: "0%", opacity: "1" },
      "-=1"
    );
    slideTl.fromTo(
      p,
      { x: "-150%", opacity: "0" },
      { x: "0%", opacity: "1" },
      "-=.75"
    );
    slideTl.fromTo(
      number,
      { y: "50%", opacity: "0" },
      { y: "0%", opacity: "1" },
      "-=.75"
    );

    // slideTl.fromTo(slide, { opacity: 1 }, { opacity: 0 });
    // slideTl.fromTo(nextSlide, { opacity: 0 }, { opacity: 1 }, "-=1");
    // slideTl.fromTo(nextImg, { x: "50%" }, { x: "0%" });

    // Scene Scroll Magic
    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      //   .setPin(slide, { pushFollowers: false })
      .setTween(slideTl)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "detailScene",
      })
      .addTo(control);
  });
};

export default detailAnimation;
