let b=[];

let n,w;

function setup(){
  n=5;
  createCanvas(800,800,WEBGL);
  w=300/5;
  for(let j=0;j<n;j++){
    b[j]=[];
    for(let k=0;k<n;k++){
      b[j][k]= new boxes(w*(j+1),100,w*(k+1),100,w-5,0.001*k);
    }
  }

}



function draw(){


  background(0);
  //gives the axes at the top left for refrence W=x;R=y;G=z
  push();
  box(100);
  translate(-300,-100,-100);
  rotateX(PI);
  stroke(255);
  background(0);
  strokeWeight(4);
  line(0,0,0,100,0,0);
  stroke(0,255,0);
  line(0,0,0,0,0,100);
  stroke(255,0,0);
  line(0,0,0,0,100,0);
  pop();

  rotateX(PI);
  rotateX(-PI/6)
  translate(-100,-200,-100);
  for(let i=0;i<n;i++){
    for(let m=0;m<n;m++){
      b[i][m].show();
      b[i][m].update();
      b[i][m].wave();
    }
  }
}



class boxes{

  constructor(x,y,z,height,side,offset){
    this.x=x;
    this.y=y;
    this.z=z;
    this.side=side;
    this.height=height;
    this.angle=0;
    this.offset=offset;
  }

  show(){
    push();
    strokeWeight(3);
    fill(0,150,0);
    stroke(0);
    translate(this.x,this.y,this.z);
    box(this.side,this.height,this.side);
    pop();
  }

  update(){
    this.angle+=0.05;
    this.angle+=this.offset;
  }

  wave(){
    let b = map(sin(this.angle),-1,1,50,300);
    this.height=b;
  }

}
