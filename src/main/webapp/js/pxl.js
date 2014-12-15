/*
$('body').append('<div id="pxl-canvas">');
for (var i=0; i<1000; i++){
  var hex = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
  //hex = '#000';
  $('body').append('<div class="square" style="background-color:'+hex+';">'+''+i+'</div>');
}
$('body').append('</div>');

var cols = 20;

function fitgrid() {
  var browserwidth = $('pxl-canvas').width();
  var px = 'px';
  var newwidth = Math.max( 20, Math.floor(browserwidth / cols) );
  newwidth = newwidth + px;
  $('.square').css('width',newwidth);
  $('.square').css('height',newwidth);
}

fitgrid();

$(window).resize(function() {
  fitgrid();
});

*/

var c = $('#canvas');
for( var y = 0; y < 63; y++ ) {
  var row = $( '<div class="row"></div>' );
  c.append( row );
  for( var x = 0; x < 63; x++ ) {
    row.append('<div class="cell"></div>');
  }
}

$('.cell').on("click", function() {
  var hex = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
  //alert($(this).css("background-color"));
  if ($(this).css("background-color") != 'rgb(0, 0, 0)') { hex = '#000000'; }
  $(this).css("background-color",hex);
});
