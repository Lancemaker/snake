//Classic snake game:
//food must be random gen. it cannot spawn over the snake.
//once the snake collides its game over.
//game by Gil, lancemaker@gmail.com,https://github.com/Lancemaker
var message;
var input;
var head,body,apple,snake;
var upKey,downKey,leftKey,rightKey;
var board;
var buffer;
var button;
var Main ={       
    
    preload : function() {
        //loads scripts and images
        game.load.image('ground', 'Src/view/ground.jpg');
        game.load.script('Snake.js','Src/model/Snake.js');
        game.load.script('Board.js','Src/model/Board.js');
        game.load.script('Apple.js','Src/model/Apple.js');
        game.load.script('Inputs.js','Src/controller/Inputs.js')
        game.load.image('head','Src/view/head.png');
        game.load.image('body','Src/view/body.png')
        game.load.image('apple','Src/view/apple.png')       
    },  

    create : function  () {
        //fills the background.        
        board= new Board(16,16,'ground');
        board.build(game); 
        //initiates snake apple inputs and the tick update.
        snake = new Snake(240,240,'head','body'); 
        apple=new Apple('apple',snake);
        input = game.input.keyboard.createCursorKeys();
        game.time.events.loop(125, tick, this);
        
    },
    //all the game logic.    

    update : function (){
        //key buffer since update is faster than tick.
        buffer =  Direction(input);
    }
    //slower update to handle logic. 
        
};
function tick () {   
    if(snake.isAlive){
        if(board.checkBounds(snake.head.x,snake.head.y)){                     
            snake.Move(snake.body);
            snake.head.angle =  buffer;   
        } 
        else{
            snake.isAlive=false;
        }
        if(snake.CollidesWithSelf()){
            snake.isAlive=false;
        } 
        // if eats the apple grow in lenght.           
        if(snake.CollidesWith(apple)){
            console.log("collision");
            snake.AddTail();
            apple.sprite.destroy();
            apple=new Apple('apple',snake);
        }    
    }
    else{
        game.state.start('Start');
    }              
}