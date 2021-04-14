//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dogimg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(200,200,50,50);
  dog.addImage("dogimg",happyDog);
//scale dog
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background("black");
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

drawSprites();

textSize(20);
fill("blue");
text("Press Spce To Feed the dog milk",100,100);
text("food remaining: "+foodS,150,200)
textSize(20)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1

  }
  database.ref('/').update({
    Food:x
  })
}



