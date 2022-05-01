Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

cookies=document.getElementById("random");

Webcam.attach('#random');

function brownie(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("random2.0").innerHTML='<img id="random3.0" src="'+data_uri+'"/>';
        }
    );
}

console.log('This is ml5',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8Di17p2uP/model.json',modelLoaded);

function modelLoaded(){
 console.log('Coding');
}

function cakepop(){
    myimg=document.getElementById('random3.0');
    classifier.classify(myimg,gotresult);
}

function gotresult(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("object_name").innerHTML=results[0].label;
         document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
     }
}