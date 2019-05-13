let b;

function setup(){

createCanvas(800,800,WEBGL);
b = new boxes(100,100,100,100,50);
}



function draw(){

background(0);
b.show();
b.update();
b.wave();

}



class boxes{

  constructor(x,y,z,height,side){
      this.x=x;
      this.y=y;
      this.z=z;
      this.side=side;
      this.height=height;
      this.angle=0;
  }

  show(){
    push();
    stroke(255,0,0);
    translate(this.x,this.y,this.z);
    box(this.side,this.height,this.side);
    pop();
  }

  update(){
    this.angle+=0.05;
  }

  wave(){
    let b = map(sin(this.angle),-1,1,50,300);
    this.height=b;
  }

}
