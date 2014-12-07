(function() {
  $g.init("myCanvas");

  var n=40;
  var gridSize = $g.canvas().width/n;
  var wallOffset = 1;
  var rw = 30;
  var rh = 20;

  function frame() {
    var ctx = $g.context();
    //clear all
    $g.background(255, 255, 255);

    //set line color
    ctx.strokeStyle = 'rgb(250, 242, 242)';
    ctx.lineWidth = 1;

    //draw grid
    for (var i=0; i < 400; i+=gridSize) {
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(400, i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i, 400);
        ctx.stroke();
    }

    //draw wall
    ctx.save();
    ctx.translate(wallOffset*gridSize, wallOffset*gridSize);
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.moveTo(0,0);
    ctx.lineTo(38*gridSize, 0);
    ctx.stroke();

    //draw rectangle
    ctx.save();
    ctx.translate(2*wallOffset*gridSize, 0);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(200, 200, 200)';
    ctx.moveTo(0,0);
    ctx.lineTo(0, rh*gridSize);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255, 0, 0)';
    ctx.moveTo(0, rh*gridSize);
    ctx.lineTo(rw*gridSize, rh*gridSize);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0, 0, 255)';
    ctx.moveTo(rw*gridSize, rh*gridSize);
    ctx.lineTo(rw*gridSize, 0);
    ctx.stroke();

    ctx.restore();
    ctx.restore();
  }

  window.addEventListener('keydown', function(evt) {
    switch (evt.keyCode) {
        case 37: //Left key
          rw -= 2;
          rh += 1;
          break;
        case 38: //Up key
          rh -= 1;
          rw += 2;
          break;
        case 39: //Right key
          rw += 2;
          rh -= 1;
          break;
        case 40: //Down key
          rh += 1;
          rw -= 2;
          break;
    }
  }, false);

  $g.animate(frame);
})();

