class Bob{
    constructor(x,y,diameter){ 

        var options = {
            restitution: 0,
            friction: 1,
            density: 0.5
        };
        this.body=Bodies.circle(x,y,diameter)

World.add(world,this.body)
this.diameter=diameter

    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);

        ellipseMode(CENTER);

        fill(255)
        ellipse(0,0,this.diameter);
        pop();
    }
}