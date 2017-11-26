
function initiate(){
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    
    canvas.beginPath();
    canvas.moveTo(200,200);
    canvas.lineTo(200,400);
    canvas.lineTo(400,400);
    canvas.closePath();
    // canvas.stroke();
    // canvas.fill();

    //  #1
    // canvas.strokeStyle = '#ff0000';
    // canvas.fillStyle = '#0000ff';

    // canvas.strokeRect(100,100,120,120);
    // canvas.fillRect(110,110,100,100);
    // canvas.clearRect(140,140,40,40);

    //  #2
    // var gradient = canvas.createLinearGradient(0, 0, 10, 100);

    // gradient.addColorStop(0.7, '#456578');
    // gradient.addColorStop(1, '#ff5600');
    // canvas.fillStyle  = gradient;

    // canvas.fillRect(50,20,100,100);
    // canvas.fillRect(160,20,100,100);
    // canvas.fillRect(50,130,100,100);
    // canvas.fillRect(160,130,100,100);

    //  #3
    // canvas.clip();
    
    //     canvas.beginPath();
    
    //     for(var i=0 ; i<400; i = i+5){
    //         canvas.moveTo(0,i);
    //         canvas.lineTo(500,i);
    //     }
    
    // canvas.stroke();    

    //  #4
    // canvas.beginPath();
    // canvas.arc(200,200,75,0,Math.PI*2,false);
    // canvas.fill();
    // var radiansFromDegrees = Math.PI / 180 * 60;
    // canvas.beginPath();
    // canvas.arc(200,200,75,0,radiansFromDegrees,false);
    // canvas.stroke();


}

addEventListener("load", initiate);