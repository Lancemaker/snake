function Board(width,height,image) {   
    this.width = width;
    this.height = height;
    this.image = image;       
    this.tileSize =32;
};
//creates the board using the given image;
Board.prototype.build=function(){    
    for (var i = 0; i < this.width; i++) {        
        for (var j = 0; j < this.width; j++) {
            game.add.image(i*this.tileSize,j*this.tileSize,this.image);
        }
    }    
};

Board.prototype.checkBounds=function(x,y){
    if(x<0||x>512||y<0||y>512){
        return false;        
    }
    else{
        return true;
    }    
};

 

