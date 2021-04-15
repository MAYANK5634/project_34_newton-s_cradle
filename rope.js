class ROPE {

    constructor(bodyA,pointB){
   
     var options = {

        bodyA:bodyA,
        pointB:pointB,
      
     }
      this.pointB = pointB;
     this.rope= Matter.Constraint.create(options);
     World.add(world,this.rope);
    }
    display(){

 var point1 = this.rope.bodyA.position;
 var point2  = this.pointB;

 strokeWeight(2);

 line(point1.x,point1.y,point2.x,point2.y);
    }
}