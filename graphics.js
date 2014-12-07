requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var $g = (function() {
  var _canvas = null;
  var _context = null;

  var _rAF = function(callback) {
    window.requestAnimationFrame(callback);
  };

  return {
//------------------------------------------------------------------------------

    canvas : function() {
      return _canvas;
    },

    context : function() {
      return _context;
    },

    init : function(canvasId) {
      _canvas = document.getElementById(canvasId);
      _context = _canvas.getContext('2d');
    },

    rect : function(rec) {
      _context.beginPath();
      _context.rect(rec.x, rec.y, rec.width, rec.height);
      _context.fillStyle = '#8E5500';
      _context.fill();
      _context.lineWidth = rec.borderWidth;
      _context.strokeStyle = 'black';
      _context.stroke();
    },

    clear : function() {
      _context.clearRect(0, 0, _canvas.width, _canvas.height);
    },

    background : function(r, g, b) {
      _context.fillStyle = 'rgb('+r+','+g+','+b+')';
      _context.clearRect(0, 0, _canvas.width, _canvas.height);
    },

    animate : function(render) {
      var animLoop = function() {
          render();
          _rAF(function() {
            animLoop();
          });
      };
      //render once immediately
      render();
      // wait one second before starting animation
      //setTimeout(function() {
        animLoop();
      //}, 1);
    }

//------------------------------------------------------------------------------
  };

})();

