var Start = {    
    preload : function() {            
        game.load.image('bg','Src/view/bg.png');
    },

    create: function () {            
        var sprite = this.add.sprite(0, 0,'bg');        
        var style = { font: "64px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: sprite.width, align: "center", backgroundColor: "#fff" };
        var text = game.add.text(100, 128, "- SNAKE! -", style);
        var style2 ={ font: "25px Arial" , wordWrap: true, wordWrapWidth: sprite.width, align: "center"}
        var text2 = game.add.text(100, 205, "- Press Space To start! -\n-(arrows to control the snake)-", style2);    
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);        
    },
    update: function(){
        if(this.spaceKey.isDown){
            game.state.start('Main');
        }
    }       
    
};