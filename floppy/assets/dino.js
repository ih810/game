class Dino {
    constructor(){
        this.x = 100;
        this.y = 380;
        this.width = 20;
        this.height = 20;
        this.color = 'green';
    }
    update(){
        if(this.y > canvas.height - this.height){
            this.y = canvas.height - this.height;
        } 

        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
        }

        if(spacePressed){
            this.jump();
        }
        
        if(ctrlPressed){
            this.crouch();
        }

        this.y += 4 ;
    }

    draw(){
        ctx.fillstyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    jump(){
        this.y -= 10;
    }
    crouch(){
        this.y += this.height/2;
    }

}
const dino = new Dino();