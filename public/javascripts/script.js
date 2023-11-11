let tl = gsap.timeline();

tl.from("#left", {
    x: -100,
    duration: 1,
    opacity: 0,
})

gsap.from("#slide", {
    scrollTrigger: {
        trigger: "#slide",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 30%",
        scrub: 1
    },
    y: -50,
    opacity: 0,
    duration: 0.3

})
// 
gsap.from("#page1", {
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "top 50%",
        scrub: 1,
        pin:true
    },
    y: -50,
    opacity: 0,
    duration: 0.3

})

gsap.from("#page2", {
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        end: "top 70%",
        scrub: 1,
        pin:true
    },
    y: -50,
    opacity: 0,
    duration: 0.3

})
// 

gsap.from("#right>img", {
    x: 100,
    duration: 1,
    opacity: 0,
})


gsap.from("nav>img", {
    y: -50,
    duration: 1,
    opacity: 0,
})

gsap.from("#part", {
    y: -50,
    duration: 1,
    opacity: 0,
})



// gsap code




