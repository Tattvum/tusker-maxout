//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//  GRAPHICS CLASS
//------------------------------------------------------------------------------
var $GRAPHICS = (function() {
  return {
    create : function(canvasId) {
      return (function() {
//------------------------------------------------------------------------------
        var _canvas = document.getElementById(canvasId);
        var _context = _canvas.getContext('2d');

        var _rAF = function(callback) {
          window.requestAnimationFrame(callback);
        };

        var _clear = function() {
          _context.clearRect(0, 0, _canvas.width, _canvas.height);
        };

        return {
//------------------------------------------------------------------------------

          canvas : function() {
            return _canvas;
          },

          context : function() {
            return _context;
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
            _clear();
          },

          background : function(r, g, b) {
            _context.fillStyle = 'rgb('+r+','+g+','+b+')';
            _clear();
          },

          line : function(x1, y1, x2, y2, clr) {
            _context.beginPath();
            if(typeof clr !== "undefined") {
              _context.strokeStyle = clr;
            }
            _context.moveTo(x1, y1);
            _context.lineTo(x2, y2);
            _context.stroke();
          },

          animate : function(render) {
            var animLoop = function() {
                render();
                _rAF(function() {
                  animLoop();
                });
            };
            // wait one second before starting animation
            //setTimeout(function() {
              animLoop();
            //}, 1);
          }

//------------------------------------------------------------------------------
        };
      })();
//------------------------------------------------------------------------------
    }
  };
})();

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//  GRID CLASS
//------------------------------------------------------------------------------


var $GRID = (function() {
  return {
    create : function(gridSize, graphics) {
      return (function() {
//------------------------------------------------------------------------------
          var context = graphics.context();
        return {
//------------------------------------------------------------------------------

          translate : function(x, y) {
            context.translate(x * gridSize, y * gridSize);
          },

          save : function() {
            context.save();
          },

          restore : function() {
            context.restore();
          },

          pixel : function(n) {
            return n * gridSize;
          },

          background : function(r, g, b) {
            graphics.background(r, g, b);
          },

          lineWidth : function(n) {
            context.lineWidth = n;
          },

          strokeStyle : function(clr) {
            context.strokeStyle = clr;
          },

          line : function(x1, y1, x2, y2, clr) {
            graphics.line(x1*gridSize, y1*gridSize, x2*gridSize, y2*gridSize, clr);
          }

//------------------------------------------------------------------------------
        };
      })();
//------------------------------------------------------------------------------
    }
  };
})();

