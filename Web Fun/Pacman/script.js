var world = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,0],
    [0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],
    [0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0],
    [0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0],
    [0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0],
    [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0],
    [0,2,1,1,1,0,0,0,1,3,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0],
    [0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0],
    [0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0],
    [0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0],
    [0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

var pacman = {
    "x": 1,
    "y": 8,
    "facing": "right",
    "lives": 3
};

var ghosts = {
    "bluey": [18,2],
    "pinky": [18,3]
};

var score = 0;

function displayWorld() {
    var output = '';
    for (var i=0; i<world.length; i++){
        output += "<div class='row'>";
        for (var j=0; j<world[i].length; j++) {
            if (world[i][j] == 0) {
                output += "<div class='brick'></div>";
            }
            else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            else if (world[i][j] == 2) {
                output += "<div class='empty'></div>";
            }
            else if (world[i][j] == 3) {
                output += "<div class='cherry'></div>";
            }
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}
displayWorld();

function drawGhosts() {
    var ghost_list = document.querySelectorAll('.ghost');
    var ghost_key = [];
    for (var i=0; i<ghost_list.length; i++) {
        ghost_key.push(ghost_list[i].id)
    }
    for (var i=0; i<ghost_key.length; i++) {
        document.getElementById(ghost_key[i]).style.left = (ghosts[ghost_key[i]][0]*20) + "px";
        document.getElementById(ghost_key[i]).style.top = (ghosts[ghost_key[i]][1]*20) + "px";
        if (pacman.x == ghosts[ghost_key[i]][0] && pacman.y == ghosts[ghost_key[i]][1]) {
            pacman.x = 1;
            pacman.y = 8;
            pacman.lives--;
            console.log(pacman.lives);
            drawPacman();
        }
    }
}
drawGhosts();

function moveGhosts() {
    var ghost_list = document.querySelectorAll('.ghost');
    var ghost_key = [];
    for (var i=0; i<ghost_list.length; i++) {
        ghost_key.push(ghost_list[i].id)
    }
    for (var i=0; i<ghost_key.length; i++) {
        var direction = Math.floor((Math.random()*4) + 1);
        // console.log (direction);    
        if (direction == 1 && world[ghosts[ghost_key[i]][1]][ghosts[ghost_key[i]][0]-1] != 0) {  //left
            ghosts[ghost_key[i]][0]--;
        }
        else if (direction == 3 && world[ghosts[ghost_key[i]][1]][ghosts[ghost_key[i]][0]+1] != 0) {  //right
            ghosts[ghost_key[i]][0]++;
        }
        else if (direction == 2 && world[ghosts[ghost_key[i]][1]-1][ghosts[ghost_key[i]][0]] != 0) {  //up
            ghosts[ghost_key[i]][1]--;
        }
        else if (direction == 4 && world[ghosts[ghost_key[i]][1]+1][ghosts[ghost_key[i]][0]] != 0) {  //down
            ghosts[ghost_key[i]][1]++;
        }
    }
}

function drawPacman() {
    if (pacman.facing == "right") {
        document.getElementById('pacman').style.transform = "rotate(0deg)";
    }
    else if (pacman.facing == "left") {
        document.getElementById('pacman').style.transform = "scaleX(-1)";
    }
    else if (pacman.facing == "up") {
        document.getElementById('pacman').style.transform = "rotate(270deg)";
    }
    else if (pacman.facing == "down") {
        document.getElementById('pacman').style.transform = "rotate(90deg)";
    }
    document.getElementById('pacman').style.left = (pacman.x * 20) + "px";
    document.getElementById('pacman').style.top = (pacman.y * 20) + "px";
}

function displayScore() {
    document.getElementById('points').innerText = score;
}

document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 0) {  //left
        pacman.x--;
        pacman.facing = "left";
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 0) {   //right
        pacman.x++;
        pacman.facing = "right";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 0) {   //up
        pacman.y--;  
        pacman.facing = "up";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 0) {    //down
        pacman.y++;
        pacman.facing = "down";
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 2;
        score+=10;
    }
    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 2;
        score+=50;
    }
    drawPacman();
    displayWorld();
    displayScore();
}

setInterval (function() {
    displayWorld();
    moveGhosts();
    drawGhosts();
}, 100);
