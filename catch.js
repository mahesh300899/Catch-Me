/*var move=document.getElementById('div1');
move.addEventListener("click",function(){
  console.log("inside");
 let randomwidth=`${Math.floor(Math.random()+(move.style.left+100))}px`;
 console.log(randomwidth);
 console.log(move.style.left);
 let randomheight=`${Math.floor(Math.random()+(move.style.top+100))}px`;
 move.style.left=`${randomwidth}`;
 move.style.top=`${randomheight}`;
});

/*
var ball1=document.getElementById('div1');
ball1.style.top=ball1.offsetTop+"px";
ball1.style.left=ball1.offsetLeft+"px";
var ballheight=ball1.offsetHeight;
var ballwidth=ball1.offsetWidth;
function setvalue(value){
  return value+"px";
}
ball1.addEventListener("click",function(){
  var top=parseInt(ball1.style.top);
  var left=parseInt(ball1.style.left);
  console.log("enter");
  console.log(top);
  if(top>5 && left>5){
    ball1.style.top=`${setvalue(top-15)}`;
    ball1.style.left=`${setvalue(left-15)}`;
  }
  else if((top<(window.innerHeight-ballheight)-5) && (left<(window.innerWidth-ballwidth)-5))
 {  
  ball1.style.top=setvalue(top+5);
  ball1.style.left=setvalue(left+5);
 }
  
});
var ball1 = document.getElementById('div1');
//var move = 10;
ball1.style.top=ball1.offsetTop+"px";
ball1.style.left=ball1.offsetLeft+"px";
var ballheight=ball1.offsetHeight;
var ballwidth=ball1.offsetWidth;
function setvalue(value){
  return value+"px";
}
    function keyCode() {
      var top=parseInt(ball1.style.top);
      var left=parseInt(ball1.style.left);
    console.log("enter");
      
        if(top>5){
          ball1.style.top=setvalue(top-5);
        }
       // ball1.style.left = parseInt(ball1.style.left) - move + "px";
        //setvalue(ball1.style.left);
      
      
       else if(left>5){
        ball1.style.left = setvalue(left-5);
        }


  else if(top<(window.innerHeight-ballheight)-5){
  ball1.style.top = setvalue(top+5);
  }

else if(left<(window.innerWidth-ballwidth)-5){
ball1.style.left = setvalue(left+5);
}

    }
 ball1.addEventListener("click",function(){
  keyCode();
 });
 var 
 move=document.getElementById('div1');
move.addEventListener("click",function(){
  console.log("inside");
 let randomwidth=`${Math.floor(Math.random()+(move.style.left+100))}px`;
 console.log(randomwidth);
 console.log(move.style.left);
 let randomheight=`${Math.floor(Math.random()+(move.style.top+100))}px`;
 move.style.left=`${randomwidth}`;
 move.style.top=`${randomheight}`;
});*/
var box = document.getElementById("div1");

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


// Updates the viewport height and width dynamically
/*window.addEventListener("resize", function(event) {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});*/



box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});



function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}