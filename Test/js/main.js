var logo;

var cursors;
function preload(){
    this.load.image("logo", "assets/phaser2.png");
}

function create() {
    logo =this.add.image(400, 300, "logo");

    cursors = this.input.keyboard.createCursorKeys();
}

function update(){
    // move the logo
    
        if(logo.x>800){
            logo.x = 0;
        }
    if(cursors.right.isDown){
        logo.x++;
    }

    if(cursors.left.isDown){
        logo.x--;
    }

    if(cursors.up.isDown){
        logo.y--;
    }

    if(cursors.down.isDown){
        logo.y++;
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config)