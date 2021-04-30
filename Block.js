class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png");
      this.Visibility = 255;
      
    }
    display(){
      
      if(this.body.speed < 3){
        //super.display();
      }else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         
         pop();
       }
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y);
    }
}