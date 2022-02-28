class Ball {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        
        
        // The dx value sets the speed that the ball will travel in the x-axis.
        this.dx = 1;
        // The dy value sets the speed in which the ball will travel in the y-axis.
        this.dy = -1;
        // The starting position of the ball. in this case dead center in teh court.
        this.x = this.canvas.width/2-10;
        this.y = this.canvas.height/2;
        // Setting the size of the ball in pixels 
        this.ballWidth = 20;
        this.ballHeight = 20;
        //We need to define what goal the has hit in order to update the score
        this.ballGoal = "none"
        this.player1PaddleX = 0
        this.player2PaddleX = 0
        this.player1PaddleY = 0
        this.player2PaddleY = 0
    }

    draw () {
        // like we have done before we will set the color to white 
        this.ctx.fillStyle = "#FFFFFF";
        // Then we will draw the rectangle. Now using the dynamic values for the x,y position.
        this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);

        //Time to add the checks to the ball to see if it is coliding with something. Lets start with just the walls of the court for now. 
        this.checkGoal();
        this.checkWalls();
        this.checkPaddle();
        // Lets keep this ball rolling :) this will update the position of the ball until something interferes. Be it the walls of the court or the paddles or the goal.
        this.x += this.dx;
        this.y += this.dy;
    }

    update(player1PaddleY,player1PaddleX,player2PaddleY, player2PaddleX){
        this.player1PaddleY = player1PaddleY;
        this.player2PaddleY = player2PaddleY;
        this.player1PaddleX = player1PaddleX;
        this.player2PaddleX = player2PaddleX;

        this.draw();
    }

    resetBall(){
        this.ballGoal = "none";
        this.dx = 0;
        this.dy = 0;
        this.x = this.canvas.width/2-10;
        this.y = this.canvas.height/2;
    }

    // Check to see if the ball has hit the upper or lower edge of the court.
    checkWalls(){
        
        if(this.y + this.dy > this.canvas.height-(this.ballHeight/2) || this.y + this.dy < 0){
            this.dy = -this.dy; 
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);
        }

    }

    //Check to see if the ball has collided with a paddle.
    checkPaddle(){
        //console.log("Ball Y Pos: " + this.y)
        console.log("Paddle Y Pos: " + this.player2PaddleY)
        console.log("Paddle X Pos: " + this.player2PaddleX)

        if (this.y < this.player1PaddleX + 150 && this.x < this.player1PaddleY){
            this.dx = -this.dx;
        }else if(this.y < this.player2PaddleX + 150 && this.x > this.player2PaddleY){
            this.dx = -this.dx;
        }else{
            this.dx = this.dx;
        }

    }

    checkGoal(){
        // We need see if the ball has reached one of the bounds. First being the maximum width of the playfield - half the width of the ball to keep it from "sinking" into the right side.
        if(this.x + this.dx < 0){
            console.log("first true")
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);
            this.ballGoal = "left";
        }else if (this.x + this.dx > this.canvas.width-this.ballWidth){
            console.log("second true")
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);
            this.ballGoal = "right";
        }
    }



}