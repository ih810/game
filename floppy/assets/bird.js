class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.width = 20;
        this.height = 20;
    }
    update(){
        if(this.y > canvas.height - this.height){
            this.y = canvas.height - this.height;
        } 

        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
        }

        if(spacePressed){
            this.flop();
        }
        
        this.y ++;
    }

    draw(){
        ctx.fillstyle = '#000';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    flop(){
        this.y -= 2;
    }
}
const bird = new Bird();