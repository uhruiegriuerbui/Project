canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
car1_width=100;
car1_height=90;
car1X=10;
car1Y=10;
car2_width=100;
car2_height=90;
car2X=10;
car2Y=100;
background_image="racingGIF..jpg";
car1_image="RACINGCAR.png";
car2_image="RACINGCAR2.png";
function add(){
image_background=new Image();
image_background.onload=upload_background;
image_background.src=background_image;
image_car1=new Image();
image_car1.onload=upload_car1;
image_car1.src=car1_image;
image_car2=new Image();
image_car2.onload=upload_car2;
image_car2.src=car2_image;
}
function upload_background(){
ctx.drawImage(image_background,0,0,canvas.width,canvas.height);
}
function upload_car1(){
ctx.drawImage(image_car1,car1X,car1Y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(image_car2,car2X,car2Y,car2_width,car2_height);
}
window.addEventListener("keydown" ,my_keydown);
function my_keydown(e){
keypress=e.keycode;
if (keypress=="37"){
console.log("left");
}
if (keypress=="38"){
console.log("up");
}
if (keypress=="39"){
console.log("down");
}
if (keypress=="40"){
    console.log("right");
}
if (keypress=="65"){
    console.log("a");
    }
    if (keypress=="87"){
    console.log("ww");
    }
    if (keypress=="83"){
    console.log("s");
    }
    if (keypress=="68"){
        console.log("d");
    }  
}


