$(document).ready(function() {

// Parallax Images effect
  const controller = new ScrollMagic.Controller();

  const timeline = new TimelineMax();
  timeline
  .to('#sixth', 6, {
    y: -800
})
.to('#fifth', 6, {
    y: -800
}, '-=6')
.to('#forth', 6, {
    y: -550,
}, '-=6')
.to('#third', 6, {
    y: -550,
   
}, '-=6')
.to('#second', 6, {
    y: -500
}, '-=6')
.to('#first', 6, {
    y: -500
}, '-=6')
.to('.blur', 6, {
    top: '0%'
}, '-=6')
.to('.title', 6, {
    y: -1200,
}, '-=6')

  new ScrollMagic.Scene({
    triggerElement: 'header',
    duration: '180%', 
    triggerHook: 0,

  })
  .setTween(timeline)
  .setPin('header')
  .addTo(controller)

// Grid section images fadeOut effect
  document.querySelectorAll('.grid-image').forEach((image, index) => {
    const fadeInTimeline = new TimelineMax();
    let percentageMove; //Images postion percentage

    // Images position state
    if(index === 0){
        percentageMove = 50;
    } else if (index === 1){
        percentageMove = 75;
    } else if (index === 2) {
        percentageMove = 100;
    } else if (index === 3){
        percentageMove = 25;
    }

    fadeInTimeline
        .fromTo(image, 6, {
            opacity: 0,
            x: `-${percentageMove}%`,  
            scale: 0.1
        }, {
            opacity: 1,
            x: `${percentageMove}%`,
            scale: 1,
            ease: Power2.easeOut
        })
        .to(image, 3, {
            ease: Power2.easeOut
        });

    new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 1,
        duration: '200%'
    })
        .setTween(fadeInTimeline)
        .addTo(controller);

});


// Navigation bar sticky effect
let navigationBar = new ScrollMagic.Controller();

 new ScrollMagic.Scene({
    triggerElement: ".title",
    triggerHook: 0,

})
.setClassToggle(".navigation", "sticky")
.addTo(navigationBar)


// Typewriter

     	let i = 0;
        const tag = $("#text");
        const html = tag.html();
        tag.attr("data", html);
        const txt = tag.attr("data");
		const speed = 100;

        function typeWriter() {
            if (i == 0) {
               $('#text').innerHTML = '';  
               $('#text').addClass("active"); 
            }
        
            if (i <= txt.length) {
                document.getElementById("text").innerHTML = txt.slice(0, i + 1);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        const typeWriterController = new ScrollMagic.Controller();
        
        new ScrollMagic.Scene({
            triggerElement: ".typewriter-section",
            triggerHook: 0.5,  
        })
        .on("start", function () {
            i = 0;
            typeWriter();
        })
        .on("leave", function() { 
            $('#text').removeClass("active"); 
        })
        .addTo(typeWriterController)

// Scroll Triggered
TweenLite.defaultEase = Linear.easeNone;
const scrollTrigger = new ScrollMagic.Controller();
const timeLine = new TimelineMax();
timeLine.staggerFrom(".div-triggered", 1.5, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  stagger: {
    from: "center",
    amount: 0.1
  }
});

 new ScrollMagic.Scene({
  triggerElement: ".scroll-triggered",
  duration: "100%",
  triggerHook: 1
})
  .setTween(timeLine)
  .addTo(scrollTrigger);

// 3D cube images

let rotation = 0;

new ScrollMagic.Scene({
    triggerElement: ".cube-section",
    duration: 1000, 
    triggerHook: 0.5,
})
.on("progress", function (event) {
    rotation = 360 * event.progress;
    $(".cube").css("transform", `rotateX(${rotation}deg) rotateY(${rotation}deg)`);
})
.addTo(controller);

});

