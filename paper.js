class Paper{
  constructor(x,y,r) {
      var options = {
          restitution:0,
          friction:0,
          density:1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.image = loadImage("sprites/tempsnip.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      fill("white");
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
}