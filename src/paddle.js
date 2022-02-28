class Paddle {
    constructor(canvas,x,y){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 150
    }

    draw () {
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }


}