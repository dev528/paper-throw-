class Dustbin{
constructor(x,y,width,height){
    var option={


    }
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width=width;
    this.height=height;
}
display(){
    var pos =this.body.position
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
}

}