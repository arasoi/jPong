class Player {

    constructor(canvas, scoreBoardPos, paddleX, paddleY, upKey, downKey){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d"); // Here we are setting the conext in which the canvas will function. In this case 2D or with an X,Y coordinate system.
        this.score = 0;
        this.scoreBoardPos = scoreBoardPos 
        this.paddleX = paddleX       
        this.paddleY = paddleY
        this.paddle = null;
        this.upKey = upKey;
        this.downKey = downKey;
        this.upPressed = false;
        this.downPressed = false;
        this.init();
    }

    init () {
        this.paddle = new Paddle(this.canvas,this.paddleX,this.paddleY)
        this.scoreBoard = new ScoreBoard(this.canvas,this.scoreBoardPos)
        // Let us set up the keyevent Listeners. Do not forget when using a call back you will have to .bind(this) to the call back if you want to touch anything outside of it
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false); 
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    }

    update() {
        
        // Here we will see which button if any have been pressed and update the x,y of the paddle accordingly
        if(this.downPressed) {
            this.paddle.update("down");
        }
        else if(this.upPressed) {
            this.paddle.update("up");
        }else {
            this.paddle.update("draw");
        }
        
        this.scoreBoard.score = this.score;
        this.scoreBoard.draw()
    }

    keyDownHandler(e){
       // Here we check if the keys being pressed are the same ones that we defined for our controls. If yes then we set the pressed value to true and allow the paddle to move.
        if(e.key === this.upKey ) {
            this.upPressed = true;
        }
        else if(e.key === this.downKey) {
            this.downPressed = true;      
        }
    }

    keyUpHandler(e){
       // And here we check to see if those same keys have been released and set the pressed vaules to false to stop the paddle moving.
        if(e.key === this.upKey ) {
            this.upPressed = false;
        }
        else if(e.key === this.downKey ) {
            this.downPressed = false;
        }

    }


}