class DropSeed{
    constructor(x,y){
        var options = {
            friction : 0.001,
            restitution : 0.01,
        }
this.seed = Bodies.rectangle(x,y,10,10,options);
this.width = 10;
this.height = 10;
this.image = loadImage("seed.png");
World.add(world,this.seed)
}
display(){
 push();
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
 pop();

}

}