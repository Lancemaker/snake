var game;
game = new Phaser.Game(512, 512, Phaser.AUTO,'gameWindow');
game.state.add('Start', Start);
game.state.add('Main', Main);
game.state.start('Start');