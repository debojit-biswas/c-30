class Slingshot
{

    constructor(bdyA,bdyB)

    {
       var options = {
           bodyA:bdyA,
           bodyB:bdyB,
           stiffneqss:0.04,
           length:10

        
       }

       this.sling=Matter.Constraint.create(options)
       World.add(world,this.sling)
             
    }

    display()
    {
        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}