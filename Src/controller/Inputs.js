
//changes the direction based on the keys.
var direction =0;
Direction=function(key){    
    if(key.up.isDown && direction!=270){
        direction =90;
    }
    else if(key.right.isDown && direction!=0){
        direction=-180;
    }
    else if(key.down.isDown && direction!=90){
        direction=-90;
    }
    else if(key.left.isDown && direction!=180){
        direction =0;
    }
    return direction;
}
