

    

nosex = 0;
nosey = 0;
difference = 0;
leftWristx = 0;
rightWristx = 0;

function setup(){


    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoded);
poseNet.on('pose',gotPoses);

}
function modelLoded(){

console.log("POSENET IS INITIALIZED!")

}

function gotPoses(results){
    if(results.length>0){
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log(nosex , nosey);
leftWristx = results[0].pose.leftWrist.x;
rightWristx = results[0].pose.rightWrist.x;
difference = floor(leftWristx - rightWristx);
console.log(leftWristx,rightWristx,difference);

}
}
function draw(){

    background("#ff0000");
fill("#5500ff")

stroke("#ff9100");
square(nosex,nosey,difference);
document.getElementById("square_sides").innerHTML = "Square's Px:"+difference;
}