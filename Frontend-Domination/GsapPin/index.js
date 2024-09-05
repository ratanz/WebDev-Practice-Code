

gsap.to(".page2 h1", {
    transform: "translateX(-135%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 4,
        pin: true,
    }
})
