//injectar blockly

var myWidth = 0, myHeight = 0;
  function alertSize() {
    if( typeof( window.innerWidth ) == 'number' ) {
      //No-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    /*window.alert( 'Width = ' + myWidth );
    window.alert( 'Height = ' + myHeight ); */
  }
  alertSize();
'use strict';
  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var blocklyCanvas = document.getElementById('divCanvas');
  var workspace = Blockly.inject(blocklyDiv,
      { media: '/media/',
        zoom:
         {controls: true,
          wheel: true,
          startScale: 1,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2},
        toolbox: document.getElementById('toolbox')});
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  //alert(blocklyArea.offsetWidth)
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  //blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = (myWidth*.4) + 'px';
  blocklyDiv.style.height = (myHeight*.88)+ 'px';
  //blocklyCanvas.style.height= (myHeight*.80)+ 'px';
  };
window.addEventListener('resize', onresize, false);
onresize();

var control = document.getElementById("your-files");//se hace referencia al input de tipo file
  //se agrega un EventListener, para saber que se ha acceido a el
  control.addEventListener("change", function(event) {
       loadXML();
  }, false);
