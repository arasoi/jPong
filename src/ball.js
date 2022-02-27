class Ball {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        this.dx = 2;
        this.dy = -2;
        this.x = this.canvas.width/2-10;
        this.y = this.canvas.height/2;
    }

    draw () {
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(this.x, this.y, 20, 20);

        this.x += this.dx;
        this.y += this.dy;
    }


}