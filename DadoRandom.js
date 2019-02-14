var numeroaleatorio;

function setup() {
  createCanvas(400, 400);
	 background(255);
	uno();
}

function draw() {
	if(mouseIsPressed == true)
		numeroaleatorio = int(random(1,6));
		switch(numeroaleatorio){
				case 1:
				uno();
				break;
				case 2:
				dos();
				break;
				case 3:
				tres();
				break;
				case 4:
				cuatro();
				break;
				case 5:
				cinco();
				break;
				case 6:
				seis();
				break;
		}
	
	
}

function uno(){
	fill(100,50,50);
	rect(100,100,200,200);
	fill(0);
	ellipse(200,200,10,10);
}


function dos(){
	fill(100,50,50);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,10,10);
	fill(0);
	ellipse(250,250,10,10);
}

function tres(){
	fill(100,50,50);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,10,10);
	fill(0);
	ellipse(250,250,10,10);
	fill(0);
	ellipse(200,200,10,10);
}

function cuatro(){
	fill(100,50,50);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,10,10);
	fill(0);
	ellipse(250,250,10,10);
	fill(0);
	ellipse(250,150,10,10);
	fill(0);
	ellipse(150,250,10,10);
}

function cinco(){
	fill(100,50,50);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,10,10);
	fill(0);
	ellipse(250,250,10,10);
	fill(0);
	ellipse(250,150,10,10);
	fill(0);
	ellipse(150,250,10,10);
	fill(0);
	ellipse(200,200,10,10);
}

function seis(){
	fill(100,50,50);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,10,10);
	fill(0);
	ellipse(250,250,10,10);
	fill(0);
	ellipse(250,150,10,10);
	fill(0);
	ellipse(150,250,10,10);
	fill(0);
	ellipse(250,200,10,10);
	fill(0);
	ellipse(150,200,10,10);
}
