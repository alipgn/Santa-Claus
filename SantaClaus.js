var babbonatale
function preload() {
    babbonatale = loadImage("assets/Babbo.png")
    }


function setup() {
    createCanvas(windowWidth, windowHeight);
   mic = new p5.AudioIn();
   mic.start();
}

function draw() {
    
    background(10,50,10);

    imageMode(CENTER);
    image(babbonatale,width/2, height/2,400,400);
    
  var volume = mic.getLevel();
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);
  push();
  var size = map(volume,0,1,width/40,width/20);
  fill(10,10,10);
  ellipse(width/2+45, height/2+70,size);
  pop(); 
    
    
    
  var size = map(volume,0,1,width/40,width/20);
    textFont('Indie Flower');
    textSize(size);
    fill(10);
    text("Merry Christmas",width/2-50,height/1-50,500);
    
    push();
    noStroke();
    fill(255);
    var size = map(volume,0,4,width/90,width/20);
    rect(width/3+100, size+290,60,20);
    rect(width/3+210, size+290,60,20);
    pop(); 
    
  var volume = mic.getLevel();
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);
  
  push();
  var size = map(volume,0,1,width/20,width/20);
  noStroke();
  colorMode(HSB);
  var MySat = map(volume,0,1,28,60)
  c = color(351, MySat, 96);
  fill(c);
  ellipse(width/3+100, height/2+30,size);
  ellipse(width/3+280, height/2+30,size);
  pop(); 
    
  function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
      

    
}    
}