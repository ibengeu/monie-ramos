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
        trigger: text.chars[0],
        start: "top 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
    }
  );

  gsap.fromTo(
    helpsYou.chars,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: helpsYou.chars[0],
        start: "top 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      opacity: 1,
      stagger: 0.1,
      y: 0,
    }
  );

  gsap.fromTo(
    text3.chars,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: text3.chars[0],
        start: "top 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      opacity: 1,
      stagger: 0.1,
      y: 0,
    }
  );

  gsap.fromTo(
    shapeFuture.chars,
    {
      opacity: 0,
      y: 50,
    },
    {
      scrollTrigger: {
        trigger: shapeFuture.chars[0],
        start: "top 500px",
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
        trigger: "#graph-icon",
        start: "top 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      scale: 1,
      duration: 0.7,
    },
    "-=0.7"
  );

  gsap.fromTo(
    "#comp-image",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: "#comp-image",
        start: "top 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      scale: 1,
      duration: 0.7,
    },
    "-=0.7"
  );

  gsap.fromTo(
    "#music-icon",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: "#music-icon",
        start: "top 500px",
        toggleActions: "restart pause resume restart",
        ease: "power1.inOut",
      },
      scale: 1,
    }
  );

  // Section 2 =================================

  const strategic = new SplitType("#strategic-success");

  gsap.fromTo(
    strategic.lines,
    {
      y: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".section-1",
        start: "top center",
        end: "bottom 1000px",
        toggleActions: "restart pause resume reset",
        ease: "power4.inOut",
      },
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );

  gsap.fromTo(
    ".setting-report",
    {
      scale: 0.5,
    },
    {
      scrollTrigger: {
        trigger: ".section-1",
        start: "top center",
        toggleActions: "restart pause resume restart",
      },
      scaleX: 1, // Updated to scaleX
      duration: 1,
      ease: "power4.inOut",
    }
  );
  gsap.fromTo(
    "#visitors-range",
    {
      scaleX: 0.5,
    },
    {
      scrollTrigger: {
        trigger: ".section-1",
        start: "top center",
        toggleActions: "restart pause resume restart",
      },
      scaleX: 1.5, // Updated to scaleX
      duration: 1,
      ease: "power4.inOut",
    }
  );

  // Section 3 =================================

  const maximize = new SplitType(".maximize");
  const maximize2 = new SplitType(".maximize2");

  gsap.fromTo(
    maximize.chars,
    {
      y: 200,
    },
    {
      scrollTrigger: {
        trigger: "#maximize-sec",
        start: "top 500px",
        toggleActions: "play pause resume reset",
      },
      y: 10, // Updated to y
      duration: 1,
      stagger: 0.04,
      ease: "power4.inOut",
    }
  );

  gsap.fromTo(
    maximize2.chars,
    {
      y: 200,
    },
    {
      scrollTrigger: {
        trigger: "#maximize-sec",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      y: 10, // Updated to y
      duration: 1,
      stagger: 0.04,
      ease: "power4.inOut",
    }
  );

  gsap.fromTo(
    "#sys-growth",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: maximize.words,
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      scale: 1, // Updated to scaleX
      duration: 1,
      stagger: 0.04,
      ease: "power4.inOut",
    }
  );

  gsap.fromTo(
    "#heartbeat",
    {
      scale: 0,
    },
    {
      scrollTrigger: {
        trigger: maximize2.words,
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      scale: 1, // Updated to scaleX
      duration: 1.5,
      stagger: 0.04,
      ease: "power4.inOut",
    }
  );

  gsap.fromTo(
    "#marquee",
    {
      scale: 0,
      x:-5
    },
    {
      scrollTrigger: {
        trigger: maximize2.words,
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      x:0,
      scale: 1, // Updated to scaleX
      duration: 1,
      ease: "power1.inOut",
    }
  );

  // Section 4 =================================

  gsap.fromTo(
    "#turning-1",
    {
      y: 200,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#section-4",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      y: 0, // Updated to y
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    "#turning-2",
    {
      y: 200,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#section-4",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      y: 0, // Updated to y
      duration: 1,
      opacity: 1,
      delay: 1,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    "#insights-desk",
    {
      y: 200,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#section-4",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      y: 0, // Updated to y
      duration: 1,
      opacity: 1,
      delay: 1.5,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    "#insights-mob",
    {
      y: 300,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#section-4",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      y: 0, // Updated to y
      duration: 1,
      opacity: 1,
      delay: 2,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    ".bar-insights",
    {
      scaleY: 1,
      transformOrigin: "bottom",
    },
    {
      scaleY: 1.2,
      repeat: -1,
      stagger: {
        each: 0.1,
        grid: "auto",
      },
      ease: "power1.inOut",
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".bar-insights-mob",
    {
      scaleY: 1,
      transformOrigin: "bottom",
    },
    {
      scaleY: 1.2,
      repeat: -1,
      stagger: 0.1,
      ease: "power1.inOut",
      yoyo: true,
      duration: 2,
    }
  );

  // Section 5 =================================

  gsap.fromTo(
    "#getstarted-icon",
    {
      scale: 5,
      opacity: 0,
      transformOrigin: "bottom",
    },
    {
      scrollTrigger: {
        trigger: "#section-5",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "elastic.inOut(0.5,1.5)",
    }
  );

  const getStarted = new SplitType("#get-started");

  gsap.fromTo(
    getStarted.chars,
    {
      y: 200,
      opacity: 0,
      transformOrigin: "bottom",
    },
    {
      scrollTrigger: {
        trigger: "#section-5",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      y: 10,
      opacity: 1,
      stagger: 0.08,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    ".demo-btn",
    {
      scale: 0,
      transformOrigin: "bottom",
    },
    {
      scrollTrigger: {
        trigger: "#section-5",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      scale: 1,
      stagger: 0.08,
      ease: "power1.inOut",
    }
  );

  // Footer =================================

  gsap.fromTo(
    "#qr-code",
    {
      scale: 0,
      transformOrigin: "bottom",
    },
    {
      scrollTrigger: {
        trigger: "#footer",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
      scale: 1,
      stagger: 0.08,
      ease: "power1.inOut",
    }
  );
});
