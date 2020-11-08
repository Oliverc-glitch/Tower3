class Polygon extends BaseClass {
    constructor(x,y,width,height){
      super(x,y,25,25);
    }
  
    display() {
      super.display();
      rect(this.body.position.x,this.body.position.y,25,25);

    }
  }