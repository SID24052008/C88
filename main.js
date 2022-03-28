var canvas=new fabric.Canvas('my_Canvas');

block_img_width= 30;
block_img_height= 30;

player_x= 10;
player_y= 10;

var player_object="";
var square_block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y , 
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img){
    fabric.Image.fromURL(get_img , function(Img){
        square_block_img_object=Img;

        square_block_img_object.scaleToWidth(block_img_width);
        square_block_img_object.scaleToHeight(block_img_height);
        square_block_img_object.set({
            top:player_y ,
            left:player_x
        });
        canvas.add(square_block_img_object);
    });
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    key_press = e.keyCode;
    console.log(key_press);

    if(e.shiftKey == true && key_press == '80'){
        console.log("p and shiftkey are pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;

        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(e.shiftKey == true && key_press == '77'){
        console.log("m and shiftkey are pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;

        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(key_press == '38'){
        console.log("up arrow key is pressed");
        up();
    }

    if(key_press == '40'){
        console.log("down arrow key is pressed");
        down();
    }

    if(key_press == '37'){
        console.log("left arrow key is pressed");
        left();
    }

    if(key_press == '39'){
        console.log("right arrow key is pressed");
        right();
    }

    if(key_press == '84'){
        new_img("trunk.jpg");
        console.log("t");
    }

    if(key_press == '68'){
        new_img("dark_green.png");
        console.log("d");
    }

    if(key_press == '76'){
        new_img("light_green.png");
        console.log("l");
    }

    if(key_press == '71'){
        new_img("ground.png");
        console.log("g");
    }

    if(key_press == '87'){
        new_img("wall.jpg");
        console.log("w");
    }

    if(key_press == '89'){
        new_img("yellow_wall.png");
        console.log("y");
    }

    if(key_press == '82'){
        new_img("roof.jpg");
        console.log("r");
    }

    if(key_press == '67'){
        new_img("cloud.jpg");
        console.log("c");
    }

    if(key_press == '85'){
        new_img("unique.png");
        console.log("u");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_img_height;
        console.log("block img height = "+ block_img_height);
        console.log("when up arrow key is pressed , x = "+ player_x + " and y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_img_height;
        console.log("block img height = "+ block_img_height);
        console.log("when down arrow key is pressed , x = "+ player_x + "and y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x > 0){
        player_x = player_x - block_img_width;
        console.log("block img width = "+ block_img_width);
        console.log("when left arrow key is pressed , x = "+ player_x + "and y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_img_width;
        console.log("block img width = "+block_img_width);
        console.log("when right arrow key is pressed , x = "+ player_x + "and y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}