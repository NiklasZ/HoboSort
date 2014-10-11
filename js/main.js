
game = {};

function generateCustomer(level, employees)
{
	var types = ["email","facebook","twitter","phone"];
	var randT = Math.floor(Math.random() * 3); //Any type from 0-3
	var randR = Math.floor(Math.random() + 1 ) * level; //Any rage value from 1-level
	var randVal = Math.floor(Math.random() + 5) * level * employees; //Any cash value from 5-level
	
	var Customer = {type:types[randT], rage:randR, value:randVal};

	return Customer;
}

$(document).ready(function () 
{
    game.scene = sjs.Scene({w:640, h:480,parent:$("#canvas-container")[0]});
    game.layer = game.scene.Layer("Front",{useCanvas:true});
    game.ticker = game.scene.Ticker(draw);
    game.input = game.scene.Input();
    game.ticker.run();

    var enemy = game.scene.Sprite('img/employee1.png', game.layer);
    enemy.move(200, 200);
    enemy.size(50,50);
    enemy.update();
});

function paintCustomer(targetY, Customer)
{
	var canvas = document.getElementById("canvas");
	canvas.addEventListener("keydown",doKeyDown,true);
    input.keyPressed("A");

}

function draw()
{
	if(game.input.keyboard.right)
        console.log("YoMomma");
}


/*
var ctx = document.getElementById("canvas").getContext("2d"),
    x = 10,
    y = 0,
    targetY = 300,
    velX = 0,
    velY = 10,
    thrust = 5;


function draw(){   
    var 
        ty = targetY - y,

    velY = (ty/dist)*thrust;

    // stop the box if its too close so it doesn't just rotate and bounce

    ctx.fillStyle = "#fff";
    ctx.clearRect(0,0,400,400);
    ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#ff0";
    ctx.beginPath();
    ctx.rect(targetX, targetY, 10, 10);
    ctx.closePath();
    ctx.fill();

    setTimeout(function(){draw()}, 30);   
}

draw();

*/