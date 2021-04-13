class Snow2 
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8,
            friction:1,
            density:5,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.height = height;
        this.width = width;
        this.image=loadImage("snow5.webp");
        World.add(world,this.body)
    }

    display()
        {
var pos = this.body.position;
var angle = this.body.angle;

push()
translate(pos.x, pos.y)
imageMode(CENTER);
image(this.image, 0,0,this.height, this.width)
//rect(0,0,this.width,this.height)
pop()
        }
    
}
