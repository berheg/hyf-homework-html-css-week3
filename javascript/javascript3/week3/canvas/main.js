const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
//c.clearRect(0, 0, innerWidth, innerHeight);   
//Draw Arc or Circle
function drawCircle(){
    let x =Math.random()*window.innerWidth;
    let y = Math.random()* window.innerHeight;
    c.beginPath(); 
    c.fillStyle = "#3370d4"; //blue
    c.arc(x, y, 30, 0, Math.PI*2, false);
    c.fill();
    c.strokeStyle = 'blue';
    c.stroke();
}
class Circle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;               
    }
    draw(){        
        c.beginPath();
        c.fillStyle = "#3370d4";
        c.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
        c.fill();
        c.strokeStyle = this.fillColor;
        c.stroke();
    }   
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#3370d4');
c1.draw();
let myC1 = window.setInterval(c1.draw(),500);
let x =Math.random()*window.innerWidth;
let y = Math.random()* window.innerHeight;
const c2 = new Circle(x, y, 20, 0,2 * Math.PI, '#3370d4');
c2.draw();
window.setInterval(c2.draw(),500);