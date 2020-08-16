var dogIMG, dogIMG2, dog, foodS, foodStock, dataBase, Exercise;
var lastFed,fedTime,foodObj;
var food;
var feed,addfood;

function preload() {
  dogIMG = loadImage("images/dogImg.png");
  dogIMG2 = loadImage("images/dogImg1.png");

  //db = firebase.database().ref();
}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  dog = createSprite(120, 250, 10, 10);
  dog.addImage(dogIMG);
  dog.scale = .2;
 
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  

}


function draw() {
  background(46, 139, 87);
  drawSprites();
 

  fedTime = database.ref("Feedtime");
  fedTime.on("value",function(data){
    lastFed = data.val();
  })
 var color1 = random(0,255);
 var color2 = random(0,255);
 var color3 = random(0,255);
 


 fill(color1,color2,color3);
 textSize(50)
 
 
 text("Virtual Pet v1", 350,50);
 text("___________", 350,60);

 
textSize(20);
  fill('white');
 text("Press Up arrow to Feed! (Press One at a Time)",310,100); 

  


  fill(255,255,254);
  textSize(25);

  if(lastFed >= 12){
    text("Last fed : " + lastFed%12 + " PM", 720,490);
  }else if(lastFed == 0){
    text("Last Fed : 12 AM",720,490);
  }else{
    text("Last Fed : " + lastFed + " AM", 720,490);
  }
  console.log(foodS);
  
  text("food Avalible: " + foodS, 5, 490);
  //Exercise = datBase.ref("Exercise");

  if(keyDown(UP_ARROW)){
   
    writeStock(foodS);
  dog.addImage(dogIMG2);
  }

}

function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {

  if (x <= 0) {

    x = 0

  }
  else {

    x = x - 1
  }
  firebase.database().ref('/').update({
 Food: x,
  })

}

function writeStock2(x) {
      x = x + 1
  
  firebase.database().ref('/').update({
     Food: x
  })

}







