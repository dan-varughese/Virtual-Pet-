//Create variables here
var database;
var dog;
var happyDog, normalDog;
var foodStock;
var foodS;


function preload()
{
  happyDog = loadImage("happydog.png");
  normalDog = loadImage("Dog.png");

  
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(200,200,20,20);
  dog.addImage(normalDog);
  dog.scale = 0.3;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(20);
  fill("black");
  stroke("black");
  text("Press UP_ARROW Key to Feed Drago Milk!",150,50);

  //add styles here

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  database.ref('/').update({
    Food:x
  })
}


