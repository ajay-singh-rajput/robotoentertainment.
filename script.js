var menu = document.querySelector(".menuDiv");
var checkMenu = 1;
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
// var tl = 

menu.addEventListener("click", function(){
    if(checkMenu === 1){
        nav.style.animation = "none"
        nav.style.height = "100%"
        navRightHolder.style.animation = "srink 0.5s linear 1 forwards";
        equal.style.animation = "equalT 0.3s linear 1 forwards";
        closeI.style.animation = "closeT 0.3s linear 1 forwards";
        navLeft.style.animation = "navLeftA 0.3s linear 1 0.3s forwards";
        navRightHolderBefore.style.animation = "navLeftA 0.3s linear 1 0.5s forwards";
        navRightHolderBefore.style.border = "2px solid #93928F";
        menuSpan.innerHTML = "CLOSE"
        h1Spn1.style.animation = "menuH 0.5s linear 1 0.8s forwards"
        h1Spn2.style.animation = "menuH 0.3s linear 1 0.81s forwards"
        h1Spn3.style.animation = "menuH 0.3s linear 1 0.81s forwards"
        h1Spn4.style.animation = "menuH 0.3s linear 1 0.81s forwards"
        h1Spn5.style.animation = "menuH 0.3s linear 1 0.81s forwards"
        checkMenu = 2;
    }
    else if(checkMenu === 2){
        navRightHolder.style.width = "50%";
        navRightHolder.style.animation = "srink2 0.5s linear 1 0.3s forwards";
        equal.style.animation = "equalT1 0.3s linear 1 forwards";
        closeI.style.animation = "closeT1 0.3s linear 1 forwards";
        navLeft.style.animation = "navLeftB 0.3s linear 1 forwards";
        menuSpan.innerHTML = "MENU"
        navRightHolderBefore.style.animation = "navLeftB 0.3s linear 1 forwards";
        navRightHolderBefore.style.border = "none";
        checkMenu = 1;
        nav.style.animation = "navA 0.1s linear 1 forwards 0.7s"
        h1Spn1.style.animation = "menuH1 0.3s linear 1 forwards"
        h1Spn2.style.animation = "menuH1 0.3s linear 1 forwards"
        h1Spn3.style.animation = "menuH1 0.3s linear 1 forwards"
        h1Spn4.style.animation = "menuH1 0.3s linear 1 forwards"
        h1Spn5.style.animation = "menuH1 0.3s linear 1 forwards"
        
    }
})

gsap.to(".p2White .box",{
    height:"10%",
    duration:0.3,
    stagger:0.1,
    scrollTigger:{
        trigger:".p2White .box",
        scroller:"body",
        markers:true,
        start:"top 10%",
        end:"top 100%",
        scrub:true
    }
})