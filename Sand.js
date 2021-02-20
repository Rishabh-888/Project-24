class Sand{
    constructor(x, y, radius) {
        var options = {
            'restitution':1.3,
            //'friction':0.1,
            //'density':0.1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
    
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        strokeWeight(2);
        stroke("black")
        fill("#90EE90");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
      }
}