class jPong {
    
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        this.newGame = true;
        this.goal = true; 
    }

    init(){
         
        // We are starting our first run at creating player objects. Up until this point we did not care much about who was updating the screen 
        // Now that we need to handle input we have a strong need to know who is updating the screen and what they can update. 
        // So we  will create a Player class to handle all updates and functions unique to the player. 
        //
        // With that in place we can define a Player 1 and a Player 2 setting upo our Epic Battle! :)  
        this.player1 = new Player(this.canvas, 350,25,200, "w", "s");
        this.player2 = new Player(this.canvas, 420,755,200, "ArrowUp", "ArrowDown");

        //Lets create the ball .
        this.ball = new Ball(this.canvas);
        this.ball.player1 = this.player1;
        this.ball.player2 = this.player2;

        // Lets listen for Key events at the game level vs the player
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false); 
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);

        // With this we ask that the browser call this function everytime it renders an animation frame. (60 times a second or every 1/16 of a second.) Letting the browser habdle the Timing for the render for us.
        window.requestAnimationFrame(this.draw.bind(this)); 
    }

    /* Draw
        This is the main game loop. it is here that we will check all inputs, calc updates and render the next frame of the game
    */
    draw () {
        //This is our blanking frame. It is here that we clear the last image set to the canvas in preperation for the new one to be painted. 
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);  
        
        //Draw the court
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.width);

        // Draw the net
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(400, 0, 2, 600);
        
        // Update the balls state 
        this.ball.update()

        // If the balls state has been set to goal add to the scoring players score and reset the ball
        if (this.ball.ballGoal === "right"){
            this.player1.score += 1;
            this.player1.scored = true;
            this.ball.resetBall();
        }else if (this.ball.ballGoal === "left"){
            this.player2.score += 1;
            this.player2.scored = true;
            this.ball.resetBall();
        }

        this.player1.update();
        this.player2.update();

        //Rememebr to make the call back at the end of the draw cycle as well or you can fall out of sync and will stop rendering
        window.requestAnimationFrame(this.draw.bind(this)) 
    }

    keyDownHandler(e){
        if(e.key === " " && this.player1.scored){
            this.ball.dx = 2;
            this.ball.dy = -2;
            this.player1.scored = false;
        }else if (e.key === " " && this.player2.scored){
            this.ball.dx = -2;
            this.ball.dy = 2;
            this.player2.scored = false;
        }else if (e.key === " ") {
            this.ball.dx = -2;
            this.ball.dy = 2;
        }
    }

    keyUpHandler(e){

    }
}
