class Ball {
    constructor(x,y,width) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }


      this.x=x;
      this.y=y;
      this.r=width
      this.image=loadImage("paper.png")
      this.body=Bodies.circle(x, y, width/2, options)
      World.add(world, this.body);

      
    }
    display(){
      var pos =this.body.position;
     var angle=this,body.angle
      
       push()
       rectMode(CENTER);
       fill("red");
       strokeWeight(3);
       rotate(angle)
       //translate(pos.x,pos.y)
       imageMode(CENTER)
       image(this.image,pos.x,pos.y,33,33)
       //ellipse(0, 0,this.r,this.r);
       pop()


     

    }
  };