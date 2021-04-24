class Brick{
    constructor(x,y,strength,img1,img2,img3){
       // console.log(img1)
        this.body=createSprite(x,y,25,90);
        this.color=strength;
        this.body.shapeColor=this.color;
        this.body.addImage('img1',img1);
      //  this.body.addImage('img2',img2);
       //this.body.addImage('img3',img3);
    
        this.body.scale=0.6;
        this.body.debug=true;
        this.body.setCollider('rectangle',10,10,10,40);
      
        
    }
    display(){
        
        drawSprites();
    }
    destroy(){
        this.body.destroy();
    }
    changeImage(strImg,Img){
        console.log("in change")
        this.body.addImage(strImg,Img);

    }

}