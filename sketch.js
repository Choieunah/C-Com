/*  눈 내려 쌓임 */
var cx = []; 
var cy = []; 
var N, i;
var size = [];
function setup() { 
    createCanvas(windowWidth, windowHeight);
    initCircles();

}

function initCircles(){
    N = 40;
    for(i=0; i<N; i++) { 
        cx[i] = random(0, width); //each position save0
        cy[i] = random(0, height); //position
        size[i] = random(5,15);
    } 
}
function draw() {
    background(180,180,180);
    var c = color(255,0,0); 
    drawCircles(c);
    c = color(0,0,255);
    drawCircles(c); 
    noStroke();

}

function drawCircles( c ) {
    for(i=0; i<N; i++) {
        cy[i] = cy[i] + random(0,2);
        if(cy[i]>height){
            cy[i]=0;
    }
        
        ellipse(cx[i], cy[i], size[i], size[i]);
        print(i,"\n");
    }
}
