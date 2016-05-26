//para detener el intervalo del paso
function stopTimer(){
    clearInterval(interval);
}
//Funciones para que las reconozca el interprete
var myInterpreter=null;
function initAlert(interpreter, scope) {
  var wrapper = function(text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(alert(text));
  };
  interpreter.setProperty(scope, 'alert',
      interpreter.createNativeFunction(wrapper));
  // Add an API function for the prompt() block.
  var wrapper = function(text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(prompt(text));
  };
  interpreter.setProperty(scope, 'prompt',
      interpreter.createNativeFunction(wrapper));

  // Add an API function for highlighting blocks.
  var wrapper = function(id) {
    id = id ? id.toString() : '';
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(scope, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));

  //Moves Funcitons
    //Move forward
    var wrapper = function(nosteps) {
      return interpreter.createPrimitive(forward(nosteps));
    }
    interpreter.setProperty(scope, 'forward',
        interpreter.createNativeFunction(wrapper));

    //Move backward
    var wrapper = function(nosteps) {
      return interpreter.createPrimitive(backward(nosteps));
    }
    interpreter.setProperty(scope, 'backward',
        interpreter.createNativeFunction(wrapper));

    //Move upward
    var wrapper = function(nosteps) {
      return interpreter.createPrimitive(upward(nosteps));
    }
    interpreter.setProperty(scope, 'upward',
        interpreter.createNativeFunction(wrapper));

    //Move downward
    var wrapper = function(nosteps) {
      return interpreter.createPrimitive(downward(nosteps));
    }
    interpreter.setProperty(scope, 'downward',
        interpreter.createNativeFunction(wrapper));

    //Move forwardPainting

    var wrapper = function(nosteps,color) {
      return interpreter.createPrimitive(forwardPaint(nosteps,color));
    }
    interpreter.setProperty(scope, 'forwardPaint',
        interpreter.createNativeFunction(wrapper));

    //Move backwardPainting
    var wrapper = function(nosteps,color) {
      return interpreter.createPrimitive(backwardPaint(nosteps,color));
    }
    interpreter.setProperty(scope, 'backwardPaint',
        interpreter.createNativeFunction(wrapper));
    //turn left-right
    var wrapper = function(angulo, side) {
      return interpreter.createPrimitive(rotar(angulo, side));
    }
    interpreter.setProperty(scope, 'rotar',
        interpreter.createNativeFunction(wrapper));

    //play sound
    var wrapper = function(sonido) {
      return interpreter.createPrimitive(sound(sonido));
    }
    interpreter.setProperty(scope, 'sound',
        interpreter.createNativeFunction(wrapper));

    //wait X secs
    var wrapper = function(secs) {
      return interpreter.createPrimitive(wait(secs));
    }
    interpreter.setProperty(scope, 'wait',
        interpreter.createNativeFunction(wrapper));
    //cambiar valor de las luces
    var wrapper = function(lu,luzTraser,lightsid) {
      return interpreter.createPrimitive(lights(lu,luzTraser,lightsid));
    }
    interpreter.setProperty(scope, 'lights',
        interpreter.createNativeFunction(wrapper));
    //funcion para prender las direccionales
    var wrapper = function(side) {
      return interpreter.createPrimitive(blinker(side));
    }
    interpreter.setProperty(scope, 'blinker',
        interpreter.createNativeFunction(wrapper));
    //Para habilitar la lectura de evento
    var wrapper = function() {
      return interpreter.createPrimitive(listener());
    }
    interpreter.setProperty(scope, 'listener',
        interpreter.createNativeFunction(wrapper));
    //Prueba para leer evento
    var wrapper = function(ev) {
      return interpreter.createPrimitive(getPosition(ev));
    }
    interpreter.setProperty(scope, 'getPosition',
        interpreter.createNativeFunction(wrapper));
    //Para obtener el valor del piso
    var wrapper = function() {
      return interpreter.createPrimitive(getFloor());
    }
    interpreter.setProperty(scope, 'getFloor',
        interpreter.createNativeFunction(wrapper));
    // funciones de hardware
    var wrapper = function(nosteps,side,speed) {
      return interpreter.createPrimitive(motor(nosteps,side,speed));
    }
    interpreter.setProperty(scope, 'motor',
        interpreter.createNativeFunction(wrapper));

}
//Funcion para que pueda sobresaltar los bloques
var highlightPause = false;
function highlightBlock(id) {
  workspace.highlightBlock(id);
  highlightPause = true;
}

//Funcion para mostrar el código
function showCode() {
  // Generate JavaScript code and display it.
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  alert(code);
}
//Funcion para crear el interprete
function parseCode(){
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    //permite que funcione el resaltar bloque
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    //lee lo que hay en el workspaces y lo guarda como codigo
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    //se crea un interprete con el codigo obtenido
    myInterpreter = new Interpreter(code, initAlert);
    //se pone en pausa la funcion de resaltar el bloque
    highlightPause = false;
    //se habilita la funcion para rastrear el workspace
    workspace.traceOn(true);
    workspace.highlightBlock(null);
}
//Funcion para guardar el XML
function saveXML(){
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var mappingData = window.localStorage.getItem('mappingBlock');
  var conditionData = window.localStorage.getItem('conditionBlock');
  var data = Blockly.Xml.domToPrettyText(xml);
  console.log(data);
  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS');

   var name = prompt("Name of this file", "blocks");
   //downloadFile(data,name)
 if (isSafari) {
  var downloadPage = window.open('data:"text/plain;charset=utf-8",' + encodeURI(data),name + '.xml');
  dP=setInterval(function(){
    downloadPage.close();
    clearInterval(dP);
  },100);
 }else{
  if (name) {
    var blob = new Blob([data], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, name + '.xml');
  }
 }
}