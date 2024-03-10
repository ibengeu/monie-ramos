// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);


  const text = new SplitType(".split");
  const helpsYou = new SplitType(".helpsYou");
  const text3 = new SplitType(".split3");
  const shapeFuture = new SplitType(".shapeFuture");


  gsap.fromTo(
    text.chars,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: text.chars,
        start: "300px 500px",
        toggleActions: "restart pause resume restart",
        markers: true,
        ease: "power1.inOut",
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
    }
  )
    gsap.fromTo(
      helpsYou.chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: text.chars,
          start: "300px 500px",
          toggleActions: "restart pause resume restart",
          markers: true,
          ease: "power1.inOut",
        },
        opacity: 1,
        stagger: 0.1,
        y: 0,
      }
    )
    gsap.fromTo(
      text3.chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: text.chars,
          start: "300px 500px",
          toggleActions: "restart pause resume restart",
          ease: "power1.inOut",
        },
        opacity: 1,
        stagger: 0.1,
        y: 0,
      }
    )
    gsap.fromTo(
      shapeFuture.chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: text.chars,
          start: "300px 500px",
          toggleActions: "restart pause resume restart",
          ease: "power1.inOut",
        },
        opacity: 1,
        stagger: 0.1,
        y: 0,
      }
    );


  gsap.fromTo(
    "#graph-icon",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: text.chars,
        start: "300px 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      scale: 1,
      duration: ".7",
    },
    "-=.7"
  );

  gsap.fromTo(
    "#comp-image",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: text.chars,
        start: "300px 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      scale: 1,
      duration: ".7",
    },
    "-=.7"
  );

  gsap.fromTo(
    "#music-icon",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: text.chars,
        start: "300px 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      scale: 1,
    }
  );

  gsap.fromTo(
    "#strategic-success",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: "#strategic-success",
        start: "top center",
        toggleActions: "restart pause resume restart",
        markers: true,
        ease: "power1.inOut",
      },
      scale: 1,
    }
  );


  function createScrollTriggerAnimation(element, trigger, start) {
    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: trigger,
          start: start,
          toggleActions: "play pause resume reset",
          // markers: true,
          ease: "power1.inOut",
        },
        y: 0,
        opacity: 1,
        duration: 1.5,
      }
    );
  }
  
  // Section 2 Animations
  createScrollTriggerAnimation("#strategic-success", shapeFuture.words, "center center");
  createScrollTriggerAnimation("#setting-reports", "#strategic-success", "top bottom");
  
});
