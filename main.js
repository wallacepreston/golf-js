var INTRO = 0;
var DIRECTIONS = 1;
var PLAYING = 2;
var OUTTRO = 3;

var level = 0;

var gameState = INTRO;

var ballImg;
var ball;

var titleImg;

var bgImg;

var font;

var playButton;
var playButtonImg;

var againButton;

var shotDemoImg;
var holeDemoImg;
var obstacleDemoImg;

var controlsButton;
var controlsButtonImg;

var backButton;
var backButtonImg;

var resetButton;
var resetButtonImg;

var hole;
var holeImg;

var wallImg;
var walls;

var sand;
var sandImg;
var sands;

var meterLength = 0;
var onBall = false;

var nx = 0;
var ny = 0;

var strokes = 0;

var grass;
var grasses;
var grassImgD;
var grassImgL;

var hole1 = ["1111111111111111111",
             "1                 1",
             "1                 1",
             "1                 1",
             "1        h        1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1        b        1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1111111111111111111"];
             
var hole2 = ["11111111111111111111111111",
             "1                        1",
             "1                        1",
             "1                        1",
             "1                    h   1",
             "1                        1",
             "1                        1",
             "1                        1",
             "1             111111111111",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1      b      1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "1             1xxxxxxxxxxx",
             "111111111111111xxxxxxxxxxx"];
             
var hole3 = ["1111111111111111111111111111111111111",
             "1                                   1",
             "1                                   1",
             "1                                   1",
             "1                                   1",
             "1                                   1",
             "1                                   1",
             "1                                   1",
             "1           1111111111111           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1     b     1xxxxxxxxxxx1     h     1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1111111111111xxxxxxxxxxx1111111111111"];
             
var hole4 = ["1111111111111111111",
             "1                 1",
             "1   1        1    1",
             "1                 1",
             "1        h        1",
             "1             1   1",
             "1    1            1",
             "1                 1",
             "1           1     1",
             "1                 1",
             "1      1          1",
             "1                 1",
             "1            1    1",
             "1   1             1",
             "1                 1",
             "1          1      1",
             "1                 1",
             "1     1           1",
             "1                 1",
             "1                 1",
             "1        1    1   1",
             "1                 1",
             "1  1              1",
             "1        b        1",
             "1                 1",
             "1           1     1",
             "1                 1",
             "1111111111111111111"];
             
var hole5 = ["1111111111111111111",
             "1                 1",
             "1                 1",
             "1                 1",
             "1        h        1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1      sssss      1",
             "1      sssss      1",
             "1      sssss      1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1   sssssssssss   1",
             "1   sssssssssss   1",
             "1   sssssssssss   1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1        b        1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1111111111111111111"];
             
var hole6 = ["1111111111111xxxxxxxxxxx1111111111111",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1     h     1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1     b     1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1111111111111xxxxxxxxxxx1111111111111"];
             
var hole62 = ["1111111111111xxxxxxxxxxx1111111111111",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1     b     1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1     h     1",
             "1           1xxxxxxxxxxx1           1",
             "1           1xxxxxxxxxxx1           1",
             "1111111111111xxxxxxxxxxx1111111111111"];
             
var hole7 = ["1111111111111111111111111111111111111",
             "1sssss                              1",
             "1ssss                               1",
             "1sss                                1",
             "1ss            ssssss               1",
             "1s            ssssssss              1",
             "1     1111111111111111111111111s   s1",
             "1     1xxxxxxxxxxxxxxxxxxxxxxx1s   s1",
             "1     1xxxxxxxxxxxxxxxxxxxxxxx1s   s1",
             "1     1xxxxxxxxxxxxxxxxxxxxxxx1s   s1",
             "1     1xxxxx1111111111111xxxxx1s   s1",
             "1     1xxxxx1ss         1xxxxx1s   s1",
             "1     1xxxxx1s          1xxxxx1s   s1",
             "1     1xxxxx1       h   1xxxxx1s   s1",
             "1     1xxxxx1           1xxxxx1s   s1",
             "1     1xxxxx1    ss     1xxxxx1s   s1",
             "1     1xxxxx1    s1111111xxxxx1s   s1",
             "1     1xxxxx1    s1xxxxxxxxxxx1s   s1",
             "1     1xxxxx1    s1xxxxxxxxxxx1s   s1",
             "1     1xxxxx1    s1111111111111s   s1",
             "1     1xxxxx1    ss       ssssss    1",
             "1  b  1xxxxx1              ssss     1",
             "1     1xxxxx1s                      1",
             "1     1xxxxx1ss                     1",
             "1     1xxxxx1sss                    1",
             "1111111xxxxx1111111111111111111111111"];
             
var hole8 = ["1111111111111111111111111111111111111",
             "1          ss                       1",
             "1          ss                       1",
             "1          ss           ss          1",
             "1   b      ss           ss      h   1",
             "1          ss           ss          1",
             "1                       ss          1",
             "1                       ss          1",
             "1111111111111111111111111111111111111",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "1111111111111111111111111111111111111",
             "1        1        1        1        1",
             "1        1        1                 1",
             "1        1                          1",
             "1        1                 1        1",
             "1                          1        1",
             "1                 1        1        1",
             "1        1        1        1        1",
             "1111111111111111111111111111111111111"];
             
var hole82 = ["1111111111111111111111111111111111111",
             "1          ss                       1",
             "1          ss                       1",
             "1          ss           ss          1",
             "1          ss           ss          1",
             "1          ss           ss          1",
             "1                       ss          1",
             "1                       ss          1",
             "1111111111111111111111111111111111111",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
             "1111111111111111111111111111111111111",
             "1        1        1        1        1",
             "1        1        1                 1",
             "1        1                          1",
             "1   h    1                 1    b   1",
             "1                          1        1",
             "1                 1        1        1",
             "1        1        1        1        1",
             "1111111111111111111111111111111111111"];
             
var hole9 = ["1111111111111111111",
             "1                 1",
             "1                 1",
             "1                 1",
             "1        h        1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1        b        1",
             "1                 1",
             "1                 1",
             "1                 1",
             "1111111111111111111"];

var levels = [hole1,hole2,hole3,hole4,hole5,hole6,hole62,hole7,hole8,hole82,hole9];
var pars = [1,2,3,3,3,2,2,9,7,7,1];
var parScore = 31;
var currentHole = [];

function preload() {
    bgImg = loadImage("images/bg.jpg");
    playButtonImg = loadImage("images/playButton.jpg");
    controlsButtonImg = loadImage("images/controlsButton.jpg");
    backButtonImg = loadImage("images/backButton.jpg");
    resetButtonImg = loadImage("images/resetButton.jpg");
    ballImg = loadImage("images/ball.png");
    titleImg = loadImage("images/golfBg.jpg");
    holeImg = loadImage("images/hole.png");
    wallImg = loadImage("images/wall.jpg");
    sandImg = loadImage("images/sand.jpg");
    grassImgD = loadImage("images/grassD.jpg");
    grassImgL = loadImage("images/grassL.jpg");
    font = loadFont("images/pixelFont.otf");
    shotDemoImg = loadImage("images/shotDemo.jpg");
    holeDemoImg = loadImage("images/holeDemo.jpg");
    obstacleDemoImg = loadImage("images/obstacleDemo.jpg");

}

function setup() {
    createCanvas(windowWidth - 18, windowHeight - 18);
    playButton = new Button(width/2-width/12,height*.55,width/6,height/8,playButtonImg);
    controlsButton = new Button(width/2-width/12,height*.7,width/6,height/8,controlsButtonImg);
    backButton = new Button(width*.05,height*.05,width/9,height/11,backButtonImg);
    againButton = new Button(width/2 - width/18,height*.7,width/9,height/11,playButtonImg);
    resetButton = new Button(width/2-width/16,25,width/8,height/16,resetButtonImg);
    walls = new Group();
    grasses = new Group();
    sands = new Group();
    startNewGame();
}

function createHole(){
    for(var r = 0;r<currentHole[0].length;r++){
       for(var c = 0;c<currentHole[0][r].length;c++){
            if(currentHole[0][r].charAt(c) == " " || currentHole[0][r].charAt(c) == "h" || currentHole[0][r].charAt(c) == "b"){
            if (r % 2 == 0){
                if (c % 2 == 0){
                    grass = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                    grassImgD.resize(26,26);
                    grass.addImage(grassImgD);
                    grasses.add(grass);
                }
                else if (c % 2 == 1){
                    grass = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                    grassImgL.resize(26,26);
                    grass.addImage(grassImgL);
                    grasses.add(grass);
                }
            }
            else if (r % 2 == 1){
                if (c % 2 == 0){
                    grass = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                    grassImgL.resize(26,26);
                    grass.addImage(grassImgL);
                    grasses.add(grass);
                }
                else if (c % 2 == 1){
                    grass = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                    grassImgD.resize(26,26);
                    grass.addImage(grassImgD);
                    grasses.add(grass);
                }
            }
            }
            if(currentHole[0][r].charAt(c) == "1"){
                var wall = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                wallImg.resize(26,26);
                wall.addImage(wallImg);
                wall.setCollider("rectangle");
                wall.immovable = true;
                walls.add(wall);
            }
            if(currentHole[0][r].charAt(c) == "h"){
                hole = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                holeImg.resize(25,25);
                hole.addImage(holeImg);
                hole.setCollider("circle",0,0,12.5,12.5);
            }
            if(currentHole[0][r].charAt(c) == "b"){
                ball = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                ballImg.resize(25,25);
                ball.addImage(ballImg);
                ball.setCollider("circle",0,0,12.5,12.5);
                ball.friction = 0.15;
            }
            if(currentHole[0][r].charAt(c) == "s"){
                sand = createSprite((width/2 - (currentHole[0][r].length*25)/2) + 12.5 + c*25,(height/2 - (currentHole[0].length*25)/2) + 12.5 + r*25,25,25);
                sandImg.resize(26,26);
                sand.addImage(sandImg);
                sand.setCollider("rectangle");
                sands.add(sand);
            }
        }
    } 
}

function removeHole(){
    walls.removeSprites();
    grasses.removeSprites();
    sands.removeSprites();
    ball.remove();
    hole.remove();
    currentHole.pop(0);
    if(level < 11){
       currentHole.push(levels[level]); 
    }
}


function startNewGame(){
    //set up first run code
    level = 0;
    strokes = 0;
    currentHole.push(hole1);
    createHole();
}

function resetHole(){
    strokes++;
    walls.removeSprites();
    grasses.removeSprites();
    sands.removeSprites();
    ball.remove();
    hole.remove();
    createHole();
}

function meter(){
    if(mouseIsPressed && ball.overlapPoint(mouseX,mouseY)){
        onBall = true;
    }
    if(mouseIsPressed && onBall){
        if(Math.abs(ball.velocity.x) < .05 && Math.abs(ball.velocity.y) < .05){
            meterLength = dist(ball.position.x,ball.position.y,mouseX,mouseY);
            var cx = (mouseX - ball.position.x);
            var cy = (mouseY - ball.position.y);
            if(meterLength<=160){
                nx = cx;
                ny = cy;
            }
            else{
                nx = 160*cx/meterLength;
                ny = 160*cy/meterLength;
            }
            strokeWeight(20);
    
            if(meterLength < 160*.25){
                stroke('green');
            }
            else if(meterLength < 160*.5){
                stroke('yellow');
            }
            else if(meterLength < 160*.75){
                stroke('orangered');
            }
            else{
                stroke('red');
            }
            line(ball.position.x,ball.position.y,ball.position.x + nx,ball.position.y + ny);
        }
    }
}

function shot(){
    onBall = false;
    meterLength = 0;
    strokes++;
    var tx = -nx * .75;
    var ty = -ny * .75;
    ball.setVelocity(tx,ty);
}

function draw() {
    background(bgImg);

    if (gameState == INTRO) {
        image(titleImg,0,0,width,height);
        playButton.draw();
        controlsButton.draw();
    }
    else if (gameState == DIRECTIONS) {
        backButton.draw();
        textSize(50);
        textFont(font);
        fill('white');
        
        text("Click and drag", width*.5 + 25,height*.15);
        text("on ball to shoot", width*.5,height*.15 + 50);
        image(shotDemoImg,width*.35-100,height*.15-100,200,200);
        
        text("Avoid the obstacles",200,height*.525);
        image(obstacleDemoImg,width*.85-100,height*.5-100,200,200);
        
        text("Finish the course in as",350,height*.8);
        text("few strokes as possible",350,height*.8 + 50);
        image(holeDemoImg,75,height*.8-100,200,200);
    }
    else if (gameState == PLAYING) {
        fill('White');
        textSize(50);
        textFont(font);
        if(level < 6){
            text("Hole " + (level+1),25, 50);
        }
        else if(level >= 6 && level < 9){
            text("Hole " + level,25, 50);
        }
        else{
            text("Hole " + (level-1),25, 50);
        }
        text("Strokes: " + strokes,width-395, 50);
        drawSprites();
        if(level == 10){
            hole.bounce(walls);
            if(frameCount % 60 == 0){
                hole.setVelocity(random(-10,10),random(-10,10));
            }
        }
        text("Par " + pars[level],25, 112);
        meter();
        drawSprite(ball);
        drawSprite(hole);
        ball.bounce(walls);
        if(ball.overlap(sands)){
            ball.friction = .65;
        }
        else{
            ball.friction = .15;
        }
        if(ball.overlap(hole)){
            level++;
            removeHole();
            if(level == 11){
                gameState = OUTTRO;
            }
            else{
              createHole();  
            }
        }
        resetButton.draw();
    }

    else if (gameState == OUTTRO) {
        textSize(75);
        textFont(font);
        fill('white');
        text("Congratulations!", width*.5 - 450,height*.15);
        textSize(40);
        text("You finished the course",width*.5 - 340,height*.25);
        text("in "+strokes+" strokes", width*.5 - 175,height*.3);
        var score = strokes - parScore;
        textSize(50);
        if(score > 0){
            text("Score: +" + score, width*.5 - 150,height*.4);
        }
        else{
            text("Score: " + score, width*.5 - 150,height*.4);
        }
        text("Play Again?",width*.5 - 200,height*.685);
        againButton.draw();
    }
}

function mouseClicked() {
    if (gameState == INTRO) {
        if(playButton.isClicked(mouseX,mouseY)){
          gameState = PLAYING;
        }
        if(controlsButton.isClicked(mouseX,mouseY)){
          gameState = DIRECTIONS;
        }
    }
    else if (gameState == DIRECTIONS) {
        if(backButton.isClicked(mouseX,mouseY)){
          gameState = INTRO;
        }
    }
    else if (gameState == PLAYING) {
      if(resetButton.isClicked(mouseX,mouseY)){
          resetHole();
        }
    }
    else if (gameState == OUTTRO) {
        if(againButton.isClicked(mouseX,mouseY)){
          startNewGame();
          gameState = PLAYING;
        }
    }
}

function touchStarted() {
    if (gameState == INTRO) {
        if(playButton.isClicked(mouseX,mouseY)){
          gameState = PLAYING;
        }
        if(controlsButton.isClicked(mouseX,mouseY)){
          gameState = DIRECTIONS;
        }
    }
    else if (gameState == DIRECTIONS) {
        if(backButton.isClicked(mouseX,mouseY)){
          gameState = INTRO;
        }
    }
    else if (gameState == PLAYING) {
      if(resetButton.isClicked(mouseX,mouseY)){
          resetHole();
        }
    }
    else if (gameState == OUTTRO) {
        if(againButton.isClicked(mouseX,mouseY)){
          startNewGame();
          gameState = PLAYING;
        }
    }
}


function mouseReleased(){
    if(gameState == PLAYING && onBall){
        shot();
    }    
}

function touchEnded(){
    if(gameState == PLAYING && onBall){
        shot();
    }    
}