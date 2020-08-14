class paper{
    constructor(x, y, radius ) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius=radius
        
    }
    display(){
        var pos =this.body.position;
        circleMode(CENTER)
        circle(pos.x, pos.y, this.radius)

}
}