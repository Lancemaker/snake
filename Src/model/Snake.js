var game = game;
function Snake(posX,posY,head,bodyimage){    
    this.head = game.add.sprite(posX,posY,head);   
    this.head.anchor.setTo(0.5,0.5);
    this.speed = 32;
    this.body = [];
    this.bodyimage = bodyimage;
    this.isAlive=true;
    for (var i = 0; i < 3; i++) {               
        this.body.push(game.add.sprite(this.head.x+(32*(i+1)),this.head.y,this.bodyimage));   
        this.body[i].anchor.setTo(0.5,0.5);       
    }   
}


//the tail follows the head swapping the last part of the tail with the first one. the head is allways in
//front of the array.
Snake.prototype.Move=function(o){
    var head=this.head;
    var last=o.pop();
    switch (head.angle) {
        case 90:
            head.y -=this.speed;            
            break;
        case -180:
            head.x +=this.speed;
            break;
        case -90:
            head.y +=this.speed;
            break;
        case 0:
            head.x -=this.speed;
            break; 
        default:
            break;
    }
    last.y=head.y+32*(Math.sin(head.angle*Math.PI/180));
    last.x=head.x+32*(Math.cos(head.angle*Math.PI/180));
    o.unshift(last);
}
//checks if the head is centered in a tile.
Snake.prototype.InPosition=function(){
 if((this.head.x+16)%32==0 && (this.head.y+16)%32==0){
    return true;
 }
 return false;
}
Snake.prototype.AddTail=function(){
    var newTail=this.body.push(game.add.sprite(this.body[this.body.length-1].x,this.body[this.body.length-1].y,this.bodyimage));
    this.body[this.body.length-1].anchor.setTo(0.5,)
}
Snake.prototype.CollidesWith=function(o){
    console.log("snake.js line 50");
    if(o.x==this.head.x && o.y==this.head.y){
        return true;
    }    
    return false;
}
Snake.prototype.CollidesWithSelf=function(){
    for (let i = 0; i < this.body.length; i++) {
        if(this.head.x==this.body[i].x&&this.head.y==this.body[i].y){
            return true;
        }        
    }
    return false;
}
