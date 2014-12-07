(function() {
  var $g = $GRAPHICS.create("myCanvas");

  var n=40;
  var gridSize = $g.canvas().width/n;
  var wallOffset = 1;
  var rw = 30;
  var rh = 20;

  var $grid = $GRID.create(gridSize, $g);

  function frame() {
    //clear all
    $grid.background(255, 255, 255);

    //set line color
    $grid.lineWidth(1);
    $grid.strokeStyle('rgb(250, 242, 242)');

    //draw grid
    for (var i=0; i <= n; i++) {
        $grid.line(0, i, n, i);
        $grid.line(i,0, i, n);
    }

    //draw wall
    $grid.save();
    $grid.translate(wallOffset, wallOffset);
    $grid.lineWidth(2);

    $grid.line(0,0,38,0, 'black');

    //draw rectangle
    $grid.save();
    $grid.translate(2*wallOffset, 0);

    $grid.line(0,0,0,rh, 'grey');
    $grid.line(0,rh,rw,rh, 'red');
    $grid.line(rw,rh,rw,0, 'blue');

    $grid.restore();
    $grid.restore();
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
  });

  window.addEventListener('mousedown', function(evt) {
    rw += 2;
    rh -= 1;
  });

  $g.animate(frame);
})();

