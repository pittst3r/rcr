(function( $ ) {
  $.fn.reduceExcessPopulation = function() {
    
    this.html(function(i, t) {
      var s = t.split(' ');
      var l = s.splice(-2, 2).join('&nbsp;');
      s.push(l);
      return s.join(' ');
    });
    
  };
})( jQuery );
