function preload(){

}

function setup(){

canvas = createCanvas(720,480);
canvas.center();
video = createCapture(VIDEO);
video.size(720,480);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

classifier = ml5.imageClassifier('mobileNet',modelLoaded);

function  modelLoaded(){
    console.log('poseNet initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('nose x = ' + results[0].pose.nose.x);
        console.log('nose y = ' + results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,720,480);
}

function take_Snapshot(){
    save('naren.png');
}