function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// loco();
document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = new SmoothScroll(0.02);
});


var menu = document.querySelector(".menuDiv");
var checkMenu = 2;
var navRightHolder = document.querySelector(".navRightHolder");
var navLeft = document.querySelector(".navLeft");
var equal = document.querySelector(".equal");
var closeI = document.querySelector(".close");
var menuSpan = document.querySelector(".menuSpan");
var navRightHolderBefore = document.querySelector(".navRightHolderBefore");
var nav = document.querySelector("nav");
var h1Spn1 = document.querySelector(".h1spn1");
var h1Spn2 = document.querySelector(".h1spn2");
var h1Spn3 = document.querySelector(".h1spn3");
var h1Spn4 = document.querySelector(".h1spn4");
var h1Spn5 = document.querySelector(".h1spn5");
var tl = gsap.timeline();
var tl1 = gsap.timeline();

var animNav1 = function(){
    tl.to(".navRightHolder",{
        width:"50%",
        height:"100vh",
        border:"1vmax solid #151515",
        duration:0.3
    })
    tl.to(".nlUp, .nlDown",{
        opacity:1,
        duration:0.1
    })
    tl.to(".nOption",{
        height:"fit-content"
    })
    tl.to(".h1spn",{
        y:"0vmax",
        duration:0.3
        // delay:0.2
        // stagger:1
    })
    tl.to(".navRightHolderBefore",{
        height:"100%",
        duration:0.2,
        border:"2px solid #93928F"
    })
    tl1.to(".navLeft",{
        width:"50%",
        duration:0.3
    })
}
var animNav2 = function(){
    tl.to(".navRightHolderBefore",{
        height:"0%",
        duration:0.2,
        border:"none"
    })
    tl.to(".h1spn",{
        y:"5vmax",
        duration:0.3
        // stagger:1
    })
    tl.to(".nlUp, .nlDown",{
        opacity:0,
        duration:0.1
    })
    gsap.to(".nOption",{
        height:0,
        delay:0.5
    })
    tl.to(".navRightHolder",{
        width:"100%",
        height:"fit-content",
        border:"none",
        duration:0.3
    })
    tl1.to(".navLeft",{
        width:"0%",
        duration:0.3,
        delay:0.6
    })
}

menu.addEventListener("click", function(){
    if(checkMenu === 2){
        gsap.to(".equal",{
            rotate:"30deg",
            width:"70%",
            duration:0.3
        })
        gsap.to(".close",{
            rotate:"-30deg",
            width:"70%",
            duration:0.3
        })
        menuSpan.innerHTML = "CLOSE";
        animNav1();
        checkMenu = 1;
    } else if(checkMenu === 1) {
        gsap.to(".equal",{
            rotate:"0deg",
            width:"100%",
            duration:0.3
        })
        gsap.to(".close",{
            rotate:"0deg",
            width:"100%",
            duration:0.3
        })
        menuSpan.innerHTML = "MENU";
        animNav2();
        checkMenu = 2;
    }
})



// page 2 entry
tl1.to(".p2White .bb", {
    height:"10%",
    // backgroundColor:"red",
    scrollTrigger:{
        trigger:".p2White .bb",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        end:"top 98%",
        scrub:true
    }
})
tl1.to(".bb .box",{
    height:"100%",
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".p2White .box",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 30%",
        scrub:true
    }
})
tl1.to(".page2",{
    // backgroundColor:"red",
    opacity:"100",
    zIndex:"100",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        // markers: {startColor: "transparent", endColor: "transparent", fontSize: "12px"},
        start:"top 30%",
        end:"top 31%",
        scrub:true 
    }
})

tl.to(".page2h, .page2p2",{
 y:"0vmax",
 duration:0.1,
 stagger:0.005,
scrollTrigger:{
    trigger:".page2h, .page2p2",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 9%",
    scrub:true
}
})

tl.to("nav",{
    top:"-20%",
    duration:0.3,
    scrollTrigger:{
        trigger:".navRightHolder",
        scroller:"body",
        start:"top -20%",
        // end:"top 10%",
        // markers:true,
        scrub:2
        
    }
})
// var ss = 
// console.log(tl.to({
//     scrollTrigger
// }));



let svgTl = gsap.timeline();
let svgFlag = 1;

svgTl.to(".p3SvgContain1 img",{
    x:"-0.5vmax",
    opacity:0,
    duration:0.4,
    stagger:0.2,
    repeat:-1,
    delay:1,
   yoyo:true,
   scrub:2
})

// let flotObj = document.querySelector(".flotObj");
gsap.to(".flotObj",{
    transform:"perspective(1000px) rotateY(250deg)",
    duration:20,
    animation:"animate 60s linear infinite",
    scrollTrigger:{
        trigger:".flotObj",
        scroller:"body",
        start:"top 100%",
        end:"top -200%",
        // markers:true,
        scrub:2
    },
})




// page 4

gsap.to(".comment",{
    y:"0vmax",
    duration:20,
    stagger:0.5,
    scrollTrigger:{
        trigger:".comment",
        scroller:"body",
        start:"top 80%",
        end:"top 40%",
        // markers:true,
        scrub:2
    },
})


// page 6
