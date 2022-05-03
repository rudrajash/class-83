canvas = document.getElementById("MyCanvas");
canvas.getContext("2d")
color = "black";
width_of_the_line = 1;


var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
var mouseEvents = "empty";

var last_position_of_x;
var last_position_of_y;



canvas.addEventListener("mousedown", my_mousedown);
function mouse_down(e)
{
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    mouseEvents = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvents = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvents = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x  = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y  = e.clientY - canvas.offsetTop;
    
    if (mouseEvents = "mousedown"); {
        canvas.getContext("2d").beginpath();
    canvas.getContext("2d").strokeStyle = color;
    canvas.getContext("2d").lineWidth = width_of_the_line;

    console.log("last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y=" + last_position_of_y);
    canvas.getContext("2d").moveTo(last_position_of_x, last_position_of_y);

    console.log("current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    canvas.getContext("2d").lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    canvas.getContext("2d").stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove")

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    canvas.getContext("2d").beginpath();
    canvas.getContext("2d").strokeStyle = color;
    canvas.getContext("2d").lineWidth = width_of_the_line;
    
    console.log("Last position of X and Y Coordinates = ");
    console.log("x = " + last_position_of_x + " y = " + last_position_of_y);
    canvas.getContext("2d").moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of X and Y Coordinates = ")
     console.log("x = " + current_position_of_touch_x + " y = " + current_position_of_touch_y);
     canvas.getContext("2d").lineTo(current_position_of_touch_x, current_position_of_touch_y);
     canvas.getContext("2d").stroke();

     last_position_of_x = current_position_of_touch_x;
     last_position_of_y = current_position_of_touch_y;
}
