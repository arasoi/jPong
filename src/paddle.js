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

    update(dir){
             
        if(dir === "down"){
            // Here we set the amount to move the paddle, this is effetivle the speed at which it moves.
            this.y += 7;  
            
            // Here is a simple collision check to make sure we are not moving the paddle outside the bounds of the court
            if (this.y + this.height > this.canvas.height){
                this.y = this.canvas.height - this.height;
            }

        }else if (dir === "up"){
            // this is the same as above but in reverse. 
            this.y -= 7;

            // Here is a simple collision check to make sure we are not moving the paddle outside the bounds of the court
            if (this.y < 0){
                this.y = 0;
            }
        }
        this.draw();
    }
    
}