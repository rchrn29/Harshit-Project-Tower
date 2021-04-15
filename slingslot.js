


//WRONG


// class Player{
//     constructor(x,y,width,height){
//         var options = {
//             'restitution':0.8,
//             'friction':1.0,
//             'density':1.0,
//             'isStatic' : true
//         }
//         this.body = Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height;
//         //this.image = loadImage("hexagon (1).png"); no such image in file, slingshot is a lind

//         World.add(world,this.body);
//     }
// //no fly function created?
// fly(){
//     this.body.bodyA =null;
// }
//     display(){
//         if(this.body.bodyA){
//         var angle = this.body.angle;
//         translate(this.body.position.x, this.body.position.y);
//         rotate(angle);
//         imageMode(CENTER);
//        // image(this.image ,this.body.position.x,this.body.position.y,40,40);WRONG, if you are translating the object initial values are kept 0.0, and width & height values arent given in constructor
   
//         image(this.image ,0,0,width,height);
//      }
// }
// }



//Correct way to do it, or else open class activity
class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Matter.Constraint.create(options);
        this.pointB=pointB;
        Matter.World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}

///also blocks are supposed to be on stand, so js file is missing