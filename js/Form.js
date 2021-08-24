class Form {
  constructor() {
   this.input = createInput("Name");
   this.button = createButton('Play');
   this.greeting = createElement('h3');
   this.title = createElement('h2');
  }

  hide(){
 this.input.hide();
 this.button.hide();
 this.greeting.hide();
  }

  display(){
    //var title = createElement('h2')
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2, 50);
    
   // var input = createInput("Name");
   // var button = createButton('Play');
    
   this.input.position(displayWidth/2,displayHeight/2-80 );
   this.button.position(displayWidth/2, displayHeight/2);

   this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.update()
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
