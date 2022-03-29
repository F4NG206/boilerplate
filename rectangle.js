class Rectangle{
    constructor(x,y,height,width){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.body)
        this.w = width
        this.h = height 
}
    visibility(){
        push ()                                                                                                                 
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, this.w,this.h)
        pop ()
    }
}