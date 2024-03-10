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
  );
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
        // markers: true,
        ease: "power4.inOut",
      },
      y: 0,
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
        // markers: true
      },
      scale: 1, // Updated to scaleX
      duration: 1,
      ease: "power4.inOut",
    }
  );

  // section-3===============================

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
      y: 10, // Updated to scaleX
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
      y: 10, // Updated to scaleX
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
        trigger: maximize2.words,
        start: "bottom center",
        toggleActions: "play pause resume reset",
        // markers: true
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
        start: "bottom center",
        toggleActions: "play pause resume reset",
        // markers: true
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
    },
    {
      scrollTrigger: {
        trigger: maximize2.words,
        start: "bottom center",
        toggleActions: "play pause resume reset",
        // markers: true
      },
      scale: 1, // Updated to scaleX
      duration: 1,
      ease: "power1.inOut",
    }
  );

  // Swection 4

  var tls4 = gsap.timeline();

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
        markers: true,
      },
      y: 0, // Updated to scaleX
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
        // markers: true
      },
      y: 0, // Updated to scaleX
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
        // markers: true
      },
      y: 0, // Updated to scaleX
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
        // markers: true
      },
      y: 0, // Updated to scaleX
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
      stagger: .1,
      ease: "power1.inOut",
      yoyo: true,
      duration:2
    }
  );
});
