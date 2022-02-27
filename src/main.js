class jPong {
    
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
    }

    init(){
        this.ball = new Ball(this.canvas)
        this.draw()
    }

    /* Draw
        This is the main game loop. it is here that we will check all inputs, calc updates and render the next frame of the game
    */
    draw () {
        //This is our blanking frame. It is here that we clear the last image set to the canvas in preperation for the new one to be painted. 
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);  
        
        //Draw the court
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(10, 10, 150, 100);

        // Draw the net
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(400, 0, 2, 600);

        this.ball.draw()
    }
}
