class Ball {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        
        
        // The dx value sets the speed that the ball will travel in the x-axis.
        this.dx = 0;
        // The dy value sets the speed in which the ball will travel in the y-axis.
        this.dy = 0;
        // The starting position of the ball. in this case dead center in teh court.
        this.x = this.canvas.width/2-10;
        this.y = this.canvas.height/2;
        // Setting the size of the ball in pixels 
        this.ballWidth = 20;
        this.ballHeight = 20;
        //We need to define what goal the has hit in order to update the score
        this.ballGoal = "none"
        this.player1 = null;
        this.player2 = null;
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

    update(){
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

        if (this.y  > this.player1.paddle.y && this.y  < this.player1.paddle.y + this.player1.paddle.height && this.x < this.player1.paddle.x){
             this.dx = -this.dx;
             this.ctx.fillStyle = "#FF0000";
             this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);             
        }else if (this.y  > this.player2.paddle.y  && this.y < this.player2.paddle.y + this.player2.paddle.height && this.x > this.player2.paddle.x){
            this.dx = -this.dx;
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);
        }

    }

    checkGoal(){             
        // We need see if the ball has reached one of the bounds. First being the maximum width of the playfield - half the width of the ball to keep it from "sinking" into the right side.
        if(this.x + this.dx < 0){
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);
            this.ballGoal = "left";
        }else if (this.x + this.dx > this.canvas.width-this.ballWidth){
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(this.x, this.y, this.ballWidth, this.ballHeight);
            this.ballGoal = "right";
        }
    }



}