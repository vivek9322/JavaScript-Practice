# Make a Rectangle and when we move mouse on that rectangle, on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right side we want to change the color to blue.

- Basic Rectangle : 

``` 
#center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 500px;
    height: 230px;
    border: 1px , solid black;
}
```

- Sabse pahle ye pata karo ke mouse rectangle par aaya hai and move hua ✅

``` 
var rect = document.querySelector("#center");

rect.addEventListener("mousemove" , function(){
    console.log("hey");
}); 
```

> Use *details* parameter to get mouse location when it is move in Rectangle.

- ab ye calculate karo ke hum center se left par hai ya center se right par hai ✅

``` 
rect.addEventListener("mousemove" , function(details){
    var rectloaction = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectloaction.left;

    if(insiderectval < (rectloaction.width / 2)){
        console.log("left");
    }
    else{
        console.log("right");
    }
}); 
```

- ab ye calculate karo ke hum center se kinta left par hai, jitna left par hai utni intensity se color red lagao [same for the rightside ]✅

``` 
var redcol = gsap.utils.mapRange(0, rectloaction.width/2, 255, 1, insiderectval); 
        gsap.to(rect, {
            backgroundColor: `rgb(${redcol}, 0, 0)`,
            ease: Power4
        }) 
```