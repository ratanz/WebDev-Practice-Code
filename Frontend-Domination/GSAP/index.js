// gsap.to(".box", {
//     x: 540,
//     y: 200,
//     duration: 2,
//     rotate: 360,
//     backgroundColor: "rgb(55, 231, 40)",
//     delay : 1,
//     ease: "power1.inOut",
// })

// gsap.from(".box", {
//     x: 420,
//     y: 200,
//     duration: 2,
//     rotate: 360,
//     backgroundColor: "rgb(55, 231, 40)",
//     delay : 1,
//     ease: "power1.inOut",
// })

// let tl = gsap.timeline();

// tl.from(".box1", {
//     y:40,
//     x:110,
//     duration : 1.5,
//     ease: "power2.inOut",
//     scale: 1,
//     delay : 1.3,
//     repeat : -1,
//     yoyo: true,
//     rotate: 180,
//     backgroundColor: "rgb(155, 131, 240)",
// })

// tl.to(".box2", {
//     y:70,
//     x:140,
//     duration : 3,
//     ease: "power4.inOut",
//     delay : 2,
//     repeat : -1,
//     scale: 1.1,
//     yoyo: true,
//     rotate: 180,
//     backgroundColor: "rgb(209, 146, 105)", 
// })

// tl.from(".box3", {
//     y:100,
//     x:170,
//     duration : 3,
//     ease: "power4.inOut",
//     repeat : -1,
//     // delay : 3,
//     scale: 0.7,
//     yoyo: true,
//     rotate: 180,
//     backgroundColor: "rgb(38, 206, 117)", 
// })

// --------------------------------------------------------------------------------

let tl = gsap.timeline();

tl.from(".nav h3", {
    y: -50,
    opacity : 0,
    delay : 0.4,
    duration: 1,
    stagger:0.3,
    ease: "power1.inOut",
})

tl.from(".main h1",{
    x:-500,
    opacity : 0,
    duration: 0.8,
    delay : 0.4,
    stagger:0.4,
})

tl.from("img", {
    x:100,
    rotate: 45,
    duration: 0.8,
    opacity : 0,
    delay : 0.4,
    stagger:0.8,
})
