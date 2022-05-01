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