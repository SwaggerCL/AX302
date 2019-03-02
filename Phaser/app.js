var game = new Phaser.Game(800, 600, Phaser.AUTO,
{preload: preload, create: create, update: update});
function preload(){
	game.load.image("sky", "assets/sky.png");
	game.load.image("star", "assets/star.png");
	game.load.image("platform", "assets/platform.png");
	game.load.image("firstaid", "assets/firstaid.png");
	game.load.spritesheet("dude", "assets/dude.png",32, 48);
	game.load.spritesheet("baddie", "assets/baddie.png",32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, 0, "sky");
	platforms = game.add.physicsGroup();
	platforms.enablebody = true;
	var ground = platforms.create(0, 550, "platform");
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	ledge1 = platforms.create(400, 400, "platform");
	ledge1.body.immovable = true;
	ledge2 = platforms.create(-100, 250, "platform");
	ledge2.body.immovable = true;
	var style = {font:"bold 32px Arial", fill : "#fff"};
	scorelabel = game.add.text(300,560, "Score:", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3, 3, "rgba(0,0,0,0,5)", 2);
	scorelabel.setShadow(3, 3, "rgba(0,0,0,0,5)", 2);
	liveslabel = game.add.text(300,560, "Lives:", style);
	livestext = game.add.text(420, 560, lives, style);
	liveslabel.setShadow(3, 3, "rgba(0,0,0,0,5)", 2);
	liveslabel.setShadow(3, 3, "rgba(0,0,0,0,5)", 2);
	player = game.add.sprite(10, 300, "dude");
	player animations.add("left", [0,1,2,3], 10, true);
	player animations.add("right", [5,6,7,8], 10, true);
	player.body.gravity.y = 300;
	player.body.bounce.y = 0.2;
	player.body.collide
}
function update(){}