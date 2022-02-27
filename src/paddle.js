class Paddle {
    constructor(canvas,x,y){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        this.dy = -2;
        this.x = x;
        this.y = y;
    }

    draw () {
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(this.x, this.y, 20, 150);
        this.y += this.dy;
    }


}