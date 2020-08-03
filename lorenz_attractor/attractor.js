// TODO - set up sliders for sigma, rho, and beta

var x, y, z;
var sigma, rho, beta;
let points = new Array();

var plotted_points;
var easycam;

function setup() {
    createCanvas(800,600,WEBGL);
    Dw.EasyCam.prototype.apply = function(n) {
        var o = this.cam;
        n = n || o.renderer,
        n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
      };
    easycam = createEasyCam();

    colorMode(HSB);
    x = 0.01;
    y = 0;
    z = 0;
    sigma = 10; // 10
    rho = 28; // 28
    beta = 8.0/3.0; // 8/3
    plotted_points = [];
}

function draw() {
    background(0);

    let dt = 0.01;
    // let dx = (sigma * (y - x)) * dt;
    // let dy = (x * (rho - z) - y) * dt;
    // let dz = (x * y - beta * z) * dt;
    dx = (sigma * (y - x)) * dt;
    dy = (x * (rho - z) - y) * dt;
    dz = (x * y - beta * z) * dt;
    x = x + dx;
    y = y + dy;
    z = z + dz;

    // points.push(new p5.Vector(x,y,z));
    plotted_points.push(createVector([x], [y], [z]));


    // translate(width/2,height/2);
    translate(0,0,-80);

    // let camx = map(mouseX, 0, width, -200, 200);
    // let camy = map(mouseY, 0, height, -200, 200);
    // camera(camx, camy, height/2/tan((PI*30)/180), 0, 0, 0, 0, 1, 0);

    // draw coordinate axes
    let origin = createVector(0, 0, 0);
    let x_point = createVector(50, 0, 0);
    let y_point = createVector(0, 50, 0);
    let z_point = createVector(0, 0, 50);
    drawArrow(origin, x_point, 'red');
    drawArrow(origin, y_point, 'green');
    drawArrow(origin, z_point, 'blue');


    scale(5);
    stroke(255);
    // point(x,y,z);
    noFill();

    let hue = 0;
    beginShape();
    for (let v of plotted_points) {

        stroke(hue, 255, 255); 
        // point(v.x, v.y, v.z); // make jiggly dots
        // var offset = p5.Vector.random3D();
        // offset.mult(0.1);
        // v.add(offset);

        // vertex(v.x, v.y, v.z); // to draw a curve that changes color with time
        point(v.x, v.y, v.z); // to draw points along the line


        hue += 0.1;
        if (hue > 255) {
            hue = 0;
        }

    }
    }
    endShape();


// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(2);
    fill(myColor);
    translate(base.x, base.y, base.z);
    line(0, 0, 0, vec.x, vec.y, vec.z);
    pop();
}


// let x = 0.01;
// let y = 0;
// let z = 0;

// let a = 10;
// let b = 28;
// let c = 8.0 / 3.0;

// let points = new Array();

// function setup() {
//   createCanvas(800, 600, WEBGL);
//   colorMode(HSB);
// }

// function draw() {
//   background(0);

//   let dt = 0.01; // must be sufficiently small or will go to infinity
//   let dx = a * (y - x) * dt;
//   let dy = (x * (b - z) - y) * dt;
//   let dz = (x * y - c * z) * dt;
//   x = x + dx;
//   y = y + dy;
//   z = z + dz;

//   points.push(new p5.Vector(x, y, z));

//   translate(0, 0, -80);
//   let camX = map(mouseX, 0, width, -200, 200);
//   let camY = map(mouseY, 0, height, -200, 200);
//   camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
//   //translate(width/2, height/2);
//   scale(5);
//   stroke(255);
//   noFill();

//   let hu = 0;
//   beginShape();

//   for (let v of points) {
//     stroke(hu, 255, 255); 
//     // point(v.x, v.y, v.z); // make jiggly dots
//     // var offset = p5.Vector.random3D();
//     // offset.mult(0.1);
//     // v.add(offset);

//     // point(v.x, v.y, v.z); // to draw points along the line
 
//     // vertex(v.x, v.y, v.z); // to draw a curve that changes color with time

//     vertex(v.x, v.y, v.z); // to draw a curve that changes color with as it extends


//     hu += 1;
//     if (hu > 255) {
//       hu = 0;
//     }
//   }
//   endShape();

//   //println(x,y,z);
// }


// var x;
// var y;
// var z;

// var sigma;
// var beta;
// var gama;

// var vectorHistory;
// function setup() {
//   createCanvas(800, 600, WEBGL);
// //   createCanvas(800, 600);
//   colorMode(HSB);
//   x = 0.01;
//   y = 0;
//   z = 0;
//   sigma = 10;
//   beta = 8/3;
//   gama = 28;
//   vectorHistory = [];
// }

// function draw() {
//   background(0);
//   let dt = 0.01;
//   dx = (sigma * (y-x))*dt;
//   dy = (x * (gama - z) - y)*dt;
//   dz = (x*y - beta*z)*dt;
//   x = x + dx;
//   y = y + dy;
//   z = z + dz;
//   vectorHistory.push(createVector([x], [y], [z]));
// //   translate(width/2, height/2);
//   translate(0, 0, -80);


//   scale(5);
//   stroke(255);
//   beginShape();
//   let hu = 0;
//   for (var i = 0; i < vectorHistory.length; i++) {
//     stroke(hu, 255, 255);
//     point(vectorHistory[i].x, vectorHistory[i].y,vectorHistory[i].z);
//     hu += 0.1;
//     if (hu > 255) {
//      hu = 0;
//     }
//   }
//   endShape();
// }