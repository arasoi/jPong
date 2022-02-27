class jPong {
    
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
    }

    init(){
        this.ball = new Ball(this.canvas)
        this.paddle1 = new Paddle(this.canvas,25,200)
        this.paddle2 = new Paddle(this.canvas,755,200)
        this.scoreBoard1 = new ScoreBoard(this.canvas,350)
        this.scoreBoard2 = new ScoreBoard(this.canvas,420)
        window.requestAnimationFrame(this.draw.bind(this)) // with this we ask that the browser call this function everytime it renders an animation frame. (60 times a second or every 1/16 of a second.)
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

        this.ball.draw()
        this.paddle1.draw()
        this.paddle2.draw()
        this.scoreBoard1.draw()
        this.scoreBoard2.draw()

        //Rememebr to make the call back at the end of the draw cycle as well or you can fall out of sync and will stop rendering
        window.requestAnimationFrame(this.draw.bind(this)) 
    }
}
