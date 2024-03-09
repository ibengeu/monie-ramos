// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  console.log("here");

  const text = new SplitType(".split");
  const text2 = new SplitType(".split2");
  const text3 = new SplitType(".split3");
  const shapeFuture = new SplitType(".shapeFuture");

  const tl = gsap.timeline();

  tl.to(text.chars, {
    y: 0,
    stagger: 0.1,
    opacity:1
    
  })
    .to(text2.words, {
      y: 0,
      stagger: 0.1,
      
    })
    // .to(text3.chars, {
    //   y: 0,
    //   stagger: 0.1,
      
    // })
    .to(shapeFuture.chars, {
      y: 0,
      stagger: 0.1,
      
    })
    .to("#graph-icon", {
      scale: 1,
    })
    .to("#comp-image", {
      scale: 1,
    })
    .to("#music-icon", {
      scale: 1,
    });

  tl.play();

  // ScrollTrigger.create({
  //   animation: tl,
  //   trigger: ".section-1",
  //   start: "top center",
  //   scrub: 1,
  // });
});
