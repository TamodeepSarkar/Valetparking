//Create a reference for canvas 
canvas = document.getElementById(myCanvas);
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;
//Give specific height and width to the car image
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
//Set initial position for a car image.
greencar_x = 5;
greencar_y = 255;
function add() {
	background_imgTag = new Image;
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	background_imgTag = new Image;
	background_imgTag.onload = uploadgreencar;
	background_imgTag.src = greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
    ctx.draw_imgTag, 0, 0, canvas.width, canvas.greencar_height; 
	//Define function ‘uploadBackground’
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (rover_y >= 0)
  {
	greencar_y = greencar_y-10;
      console.log("when up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y );
       uploadbackground();
       uploadgreencar();
  }
	//Define function to move the car upward
}

function down() {
	{
		if (greencar_y <= 500)
		{
			greencar_y = greencar_y+10;
			console.log("when down arrow is pressed, x = " + greencar_x + " | y = " +greencar_y );
			 uploadbackground();
			 uploadgreencar();
		}
	//Define function to move the car downward
}

function left() {
	if (greencar_x >= 0)
	{
		greencar_x = greencar_x-10;
		console.log("when left arrow is pressed, x = " +greencar_x + " | y = " + greencar_y );
		 uploadbackground();
		 uploadgreencar();
	}
	//Define function to move the car left side
}

function right() {
	if (greencar_x <= 700)
  {
	greencar_x = greencar_x+10;
      console.log("when right arrow is pressed, x = " + greencar_x + " | y = " + greencar_y );
       uploadbackground();
       uploadgreencar();
  }
	//Define function to move the car right side 
}
