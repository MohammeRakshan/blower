class Ball{

constructor(x,y,r)
{
 



this.body = Bodies.circle(x,y,r)
this.r=r


World.add(world,this.body)
}

show() {
ellipseMode(CENTER)
 ellipse(this.body.position.x,this.body.position.y,this.r,this.r)

}
}