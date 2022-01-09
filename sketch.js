
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

let engine;
let world;

var cutting_sound
var button_Img
var button
var person;
var character;
var blender;

var fruit_watermelon;
var food_watermelon;

var food_apple;
var fruit_apple;

var fruit_banana;
var food_banana;

var food_orange;
var fruit_orange;

var bg_Img;

var score = 0

var animation;
var cheer;
var press;

var cut_sound;
var drop_sound;
var bg_music;

var rope;
var rope2;
var rope3;
var rope4;
var rope5;
var rope6;
var rope7;


var fruit_con;
var fruit_con_2;
var fruit_con_3;
var fruit_con_4;
var fruit_con_5;
var fruit_con_6;
var fruit_con_7;
var fruit_con_8;

function preload(){
  

  bg_Img = loadImage('background.png')
  blender_Img = loadImage('blender.png')
 

 bg_music = loadSound('background_music.mp3.mp3')
 food_watermelon = loadImage('watermelon.png')
 food_apple = loadImage('apple.png')
 food_banana= loadImage('banana.png')
 food_orange= loadImage('orange.png')
 
 cutting_sound = loadSound('rope_cut.mp3')
 person = loadAnimation('person_animation1.png','person_animation2.png')
button_Img = loadImage('cut_button.png')

cheer = loadAnimation('person_cheer.png')
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  bg_music.play();
  bg_music.setVolume(0.5);
 

  rope = new Rope(12,{x:570,y:90});
  rope2 = new Rope(7,{x:1000,y:90});
  rope3 = new Rope(7,{x:820,y:80});
  rope4 = new Rope(7,{x:110,y:100});
  rope5 = new Rope(7,{x:500,y:100});
  rope6 = new Rope(5,{x:500,y:-10});
  rope7 = new Rope(8,{x:500,y:300});

  
 fruit_watermelon = Bodies.circle(300,300,20);
 Matter.Composite.add(rope.body,fruit_watermelon);
 fruit_con = new Link(rope,fruit_watermelon);
  fruit_con_2 = new Link(rope2,fruit_watermelon);

  fruit_apple = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit_apple)
  fruit_con_3 = new Link(rope2,fruit_apple)
  fruit_con_4 = new Link(rope3,fruit_apple)

  fruit_banana = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit_banana)
  fruit_con_5 = new Link(rope4,fruit_banana)
  fruit_con_6 = new Link(rope5,fruit_banana)

  fruit_orange = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit_orange)
  fruit_con_7 = new Link(rope6,fruit_orange)
  fruit_con_8 = new Link(rope7,fruit_orange)

  character = createSprite(200,height-80,100,100);
  character.scale = 0.2;
  blender = createSprite(600,height-80,20,20)
  blender.addImage(blender_Img)
  blender.scale= 0.5;


  button = createImg('cut_button.png');
  button.position(580,100);
  button.size(50,50);
  button.mouseClicked(drop);

  button2 = createImg('cut_button.png');
  button2.position(950,100);
  button2.size(50,50);
  button2.mouseClicked(drop2);

  button3 = createImg('cut_button.png');
  button3.position(800,100);
  button3.size(50,50);
  button3.mouseClicked(drop3);

  button4 = createImg('cut_button.png');
  button4.position(100,100);
  button4.size(50,50);
  button4.mouseClicked(drop4);

  button5 = createImg('cut_button.png');
  button5.position(450,100);
  button5.size(50,50);
  button5.mouseClicked(drop5);

  button6 = createImg('cut_button.png');
  button6.position(460,10);
  button6.size(50,50);
  button6.mouseClicked(drop6);

  button7 = createImg('cut_button.png');
  button7.position(460,300);
  button7.size(50,50);
  button7.mouseClicked(drop7);

 
   character.addAnimation('animating',person);
   character.addAnimation('cheering', cheer);
   character.changeAnimation('animating')
  

}


function draw() 
{

  background(51);
  image(bg_Img,0,0,width,height);
 
  Engine.update(engine);
  
  

  push();
  imageMode(CENTER);

 if(fruit_watermelon!=null){
   image(food_watermelon,fruit_watermelon.position.x,fruit_watermelon.position.y,70,70);
  }
 

  if(fruit_apple!=null){
    image(food_apple,fruit_apple.position.x,fruit_apple.position.y,70,70);
  }

  if(fruit_banana!=null){
    image(food_banana,fruit_banana.position.x,fruit_banana.position.y,70,70)
  }

  if(fruit_orange!=null){
    image(food_orange,fruit_orange.position.x,fruit_orange.position.y,70,70)
  }

  pop();
  drawSprites();

  textAlign("center");
  textSize(30);
  text("𝓕𝓻𝓾𝓲𝓽 𝓑𝓵𝓮𝓷𝓭𝓮𝓭: " + score, width - 1050, 50);

  rope.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();
  rope6.show();
  rope7.show();

  if(collide_watermelon(fruit_watermelon,blender,20)==true)
  {
   // World.remove(engine.world,fruit_watermelon);
    fruit_watermelon = null;
    score+=1
    
    //character.changeAnimation('cheering');
    //eating_sound.play();
  }
  if(collide_apple(fruit_apple,blender,20)==true){
   // World.remove(engine.world,fruit_apple);
    fruit_apple = null;
    score+=1
    
    //character.changeAnimation('cheering');
    //eating_sound.play();
  }
  if (collide_banana(fruit_banana,blender,20)==true){
   // World.remove(engine.world,fruit_banana);
    fruit_banana = null;
    score+=1
    
    //character.changeAnimation('cheering');
    //eating_sound.play();
  }
  if (collide_orange(fruit_orange,blender,20)==true){
   // World.remove(engine.world,fruit_orange);
    fruit_orange = null;
    score+=1
    
    //character.changeAnimation('cheering');
    //eating_sound.play();
  }

  if(fruit_watermelon!=null && fruit_watermelon.position.y>=650)
  {
    
  
    fruit_watermelon=null;
   }

   if(fruit_apple!=null && fruit_apple.position.y>=650)
  {
  
    fruit_apple=null;
   }

   if(fruit_banana!=null && fruit_banana.position.y>=650)
  {
   
    fruit_banana=null;
   }

   if(fruit_orange!=null && fruit_orange.position.y>=650)
  {
   
    fruit_orange=null;
   }

   if (score === 4){
     character.changeAnimation('cheering')
   }

   
   drawSprites()



}

function drop()
{
  cutting_sound.play();
 
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}
function drop2()
{
  cutting_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null; 
}
function drop3()
{
  cutting_sound.play();
  rope3.break();
  fruit_con_3.dettach();
  fruit_con_3 = null; 
}
function drop4()
{
  cutting_sound.play();
  rope4.break();
  fruit_con_4.dettach();
  fruit_con_4 = null; 
}
function drop5()
{
  cutting_sound.play();
  rope5.break();
  fruit_con_5.dettach();
  fruit_con_5 = null; 
}
function drop6()
{
  cutting_sound.play();
  rope6.break();
  fruit_con_6.dettach();
  fruit_con_6 = null; 
}
function drop7()
{
  cutting_sound.play();
  rope7.break();
  fruit_con_7.dettach();
  fruit_con_7 = null; 
}
function collide_watermelon(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit_watermelon);
               fruit_watermelon = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
function collide_apple(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit_apple);
               fruit_apple = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
function collide_banana(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit_banana);
               fruit_banana = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
function collide_orange(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit_orange);
               fruit_orange = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
