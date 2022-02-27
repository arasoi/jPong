class jPong {
    
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
    }

    init(){
        setInterval(this.draw(this.ctx, this.canvas), 10); // Here we setup the Game Loop. We will call the draw function at a set interval of 10 milliseconds. 
    }

    /* Draw
        This is the main game loop. it is here that we will check all inputs, calc updates and render the next frame of the game
    */
    draw (ctx, canvas) {
        ctx.clearRect(0,0, this.canvas.width, this.canvas.height);  //This is our blanking frame. It is heare that we clear the last image set to the canvas in preperation for the new one to be painted. 
        ctx.fillStyle = 'black';
        ctx.fillRect(10, 10, 150, 100);

        // Draw the net
        ctx.fillStyle = "white"
        ctx.fillRect(400, 0, 2, 600);
    }

}