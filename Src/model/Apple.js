//spawns the apple randomly.
function Apple(image,snake){
    this.snake=snake;
    this.x= 512-parseInt(Math.random()*16)*32-16; 
    this.y= 512-parseInt(Math.random()*16)*32-16;
    
    while(this.CheckObstruction(snake)){
        this.x= 512-parseInt(Math.random()*16)*32-16; 
        this.y= 512-parseInt(Math.random()*16)*32-16;
        console.log("obstructed");
    }
    this.sprite=game.add.sprite(this.x,this.y,image)
    this.sprite.anchor.setTo(0.5,0.5); 

 
}

Apple.prototype.CheckObstruction=function(snake){    
    if(this.x==snake.head.x&&this.y==snake.head.y){
        return true;
    }    
    for (let i = 0; i < snake.body.length; i++) {
        if(snake.body[i].x==this.x&&snake.body[i].y==this.y){
            return true;
        }       
    }
    return false;
    
};