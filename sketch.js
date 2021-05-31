const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    fill("lime");
    if(hour>12 || hour === 0){
        var pm = hour-12
        text("Time: " + pm + " PM",800,200);
    } else {
        text("Time: " + hour + " AM",800,200);
    }


}

async function getBackgroundImg(){

    // write code to fetch time from API
var responce = await fetch("https://worldtimeapi.org/api/timezone/America/New_York")
    //change the data in JSON format
var responceJSON = await responce.json();
var datetime = responceJSON.datetime;
    // write code slice the datetime
hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour>=5 && hour<=6){
bg = "sunrise1.png";
} else if(hour>6 && hour<=7){
    bg = "sunrise2.png";
}else if(hour>7 && hour<=8){
    bg = "sunrise3.png";
}else if(hour>8 && hour<=10){
    bg = "sunrise4.png";
}else if(hour>10 && hour<=12){
    bg = "sunrise5.png";
}else if(hour>12 && hour<=14){
    bg = "sunrise6.png";
}else if(hour>14 && hour<=15){
    bg = "sunset7.png";
}else if(hour>15 && hour<=16){
    bg = "sunset8.png";
}else if(hour>16 && hour<=17){
    bg = "sunset9.png";
}else if(hour>17 && hour<=18){
    bg = "sunset10.png";
}else if(hour>18 && hour<=19){
    bg = "sunset11.png";
}else if(hour>19 && hour<=24 || hour>=0 && hour<5){
    bg = "sunset12.png";
}

    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg)
}
