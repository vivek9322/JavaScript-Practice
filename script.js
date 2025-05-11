var rect = document.querySelector("#center");

rect.addEventListener("mousemove" , function(details){
    var rectloaction = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectloaction.left;

    if(insiderectval < (rectloaction.width / 2)){
        var redcol = gsap.utils.mapRange(0, rectloaction.width/2, 255, 1, insiderectval); 
        gsap.to(rect, {
            backgroundColor: `rgb(${redcol}, 0, 0)`,
            ease: Power4
        })
    }
    else{
        var redcol = gsap.utils.mapRange(rectloaction.width/2,rectloaction.width, 0, 255, insiderectval); 
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${redcol})`,
            ease: Power4
        })
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: `antiquewhite`
    })
});