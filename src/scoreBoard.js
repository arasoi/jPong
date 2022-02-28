class ScoreBoard {
    constructor(canvas,x){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        this.x = x
        this.y = this.canvas.height-550;
        this.score = 0
    }

    draw () {
        this.ctx.font = '48px consolas';        //Define the Font and Size
        this.ctx.fillText(this.score, this.x, this.y); // Render the font at the postion specified. 
    }


}