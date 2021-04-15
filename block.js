class Block{
//constructor(hieght,width,x,y,angle){ zspelling and wrong way to put values
    constructor(x,y,width,height){
var option = {
restitution:0.7,
friction:0.6,
//isStactic:false, wrong spelling

}

//this.body=Bodies.rectangle(x,y,height,width,option)
this.body = Matter.Bodies.rectangle(x, y, width, height, option);
this.width=width;
this.height=height;
Matter.World.add(world,this.body)
}
display(){
var angle=this.body.angle;
push()
//translate(this.body.postion.x,this.body.postion.y) spelling error
translate (this.body.position.x,this.body.position.y);
// retote(angle);
rotate(angle);

//rectmode(CENTRE)
rectMode(CENTER);
rect(0,0,width,height);
pop()



}





}