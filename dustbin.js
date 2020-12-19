class Dustbin {
constructor(x,y, width ,hieght){
   var options ={
      isStatic:true,
   }
   this.body = Bodies.rectangle(x , y ,this.width ,this.height , options );
   this.width;
   this.height;

   World.add(world,this.body);
}
display(){
var pos =this.body.position;
rectMode(CENTER)
fill(255);
rect(pos.x ,pos.y ,this.width ,this.height);
}
}