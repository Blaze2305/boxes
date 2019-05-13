let b=[];

let n,w;

function setup(){
  n=20;
  createCanvas(1100,1100,WEBGL);
  w=950/n;
  for(let j=0;j<n;j++){
    b[j]=[];
    for(let k=0;k<n;k++){
      b[j][k]= new boxes(w*(j+1),100,w*(k+1),100,w-5,j,k);
    }
  }

}



function draw(){


  background(0);

  //below code gives the axes at the top left for refrence W=x;R=y;G=z
  // push();
  // box(100);
  // translate(-300,-100,-100);
  // rotateX(PI);
  // stroke(255);
  // background(0);
  // strokeWeight(4);
  // line(0,0,0,100,0,0);
  // stroke(0,255,0);
  // line(0,0,0,0,0,100);
  // stroke(255,0,0);
  // line(0,0,0,0,100,0);
  // pop();

  rotateX(PI);
  rotateX(-PI/6)
  translate(-540,-200,-100);
  for(let i=0;i<n;i++){
    for(let m=0;m<n;m++){
      b[i][m].show();
      b[i][m].update();
      b[i][m].wave();
    }
  }
}



class boxes{

  constructor(x,y,z,height,side,px,py){
    this.x=x;
    this.y=y;
    this.z=z;
    this.side=side;
    this.height=height;
    this.px=map(px,0,n-1,-3,3);
    this.py=map(py,0,n-1,-3,3);
    //uncomment for ocean like wave
    this.angle=this.px*0.1+this.py*0.25;         // change the values by which you multiply px and py to change the wave type

     // uncomment for wave from center out
     //this.angle=-(abs(this.px)+abs(this.py))/5



    // useless code>>>>
    //this.offset=(px-3)*0.01 + (py-3)*0.01;
    // this.px=px-2;
    // this.py=px-2;
}

  show(){
    push();
    strokeWeight(3);
    fill(95, 151, 239);
    stroke(0);
    translate(this.x,this.y,this.z);
    box(this.side,this.height,this.side);
    pop();
  }

  update(){
   this.angle+=0.05;
  }

  wave(){
    let b = map(sin(this.angle),-1,1,30,400);
    this.height=b;
  }

}
