Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }

});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';

    });
}
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
console.log("Model is Loaded");
}
function check(){
img = document.getElementById("capture");
classifier.classify(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }  else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
    }  
}