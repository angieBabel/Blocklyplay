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
    var wrapper = function(side,secs) {
      return interpreter.createPrimitive(blinker(side,secs));
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
    //funcion para mover el motor
    var wrapper = function(nosteps,side,speed) {
      return interpreter.createPrimitive(motor(nosteps,side,speed));
    }
    interpreter.setProperty(scope, 'motor',
        interpreter.createNativeFunction(wrapper));
    //funcion para manejar los leds
    var wrapper = function(nopin,sate) {
      return interpreter.createPrimitive(led(nopin,sate));
    }
    interpreter.setProperty(scope, 'led',
        interpreter.createNativeFunction(wrapper));
    //funcion para escribir en pantalla y cambiar de color
    var wrapper = function(texto,color) {
      return interpreter.createPrimitive(pantalla(texto,color));
    }
    interpreter.setProperty(scope, 'pantalla',
        interpreter.createNativeFunction(wrapper));
    //funcion para manipular el buzzer, ocupa pin, tono y segundos
    var wrapper = function(nopin,tone,secs) {
      return interpreter.createPrimitive(buzzer(nopin,tone,secs));
    }
    interpreter.setProperty(scope, 'buzzer',
        interpreter.createNativeFunction(wrapper));

}
//Funcion para que pueda sobresaltar los bloques
var highlightPause = false;
function highlightBlock(id) {
  workspace.highlightBlock(id);
  highlightPause = true;
}

/*$scope.showWrong = function(ev) {

        };
*/


//Funcion para mostrar el código
function showCode() {
  //Generate JavaScript code and display it.
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  /*$mdDialog.show({
              clickOutsideToClose: true,
              scope: $scope,        // use parent scope in template
              preserveScope: true,  // do not forget this if use parent scope
              // Since GreetingController is instantiated with ControllerAs syntax
              // AND we are passing the parent '$scope' to the dialog, we MUST
              // use 'vm.<xxx>' in the template markup
              template: 
              '<div flex="50">'+
                '<md-dialog aria-label="correct answer" id="correct answer">'+
                  '<md-dialog-content >'+
                  code+
                  '</md-dialog-content>'+
                '</md-dialog>'+
              '</div>',
              controller: function wrongController($scope, $mdDialog) {
                $scope.nuevointento = function() {
                  location.reload();
                };
              }
           });*/
  alert(code);
}
function loadCode(){
      /*var program;
      switch(currentpanel) {
            case 1:
                program = window.localStorage.getItem("turbina1");
                break;
            case 2:
                program = window.localStorage.getItem("turbina2");
                break;
            case 3:
                program = window.localStorage.getItem("turbina3");
            case 4:
                program = window.localStorage.getItem("turbina4");
            default:
                program = window.localStorage.getItem("turbina1");
          }*/
      Blockly.mainWorkspace.clear();
      var textToDom = Blockly.Xml.textToDom(program);
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, textToDom);
    }

/*function runCode() {
      //funcion para convertir el codigo al interprete, esta en el archivo controlFunctions.js
      parseCode();
      //se crea un intervalo que estara leyendo el siguiente paso cada que haya terminado la instruccion en curso
      intervalo= setInterval(function(){finish();},15)
      //se guarda lo que hay en el workspaces en el almcaneamiento local
      var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      domToPretty = Blockly.Xml.domToPrettyText(xml);
      switch(currentpanel) {
          case 1:
              window.localStorage.setItem("turbina1", domToPretty);
              break;
          case 2:
              window.localStorage.setItem("turbina2", domToPretty);
              break;
          case 3:
              window.localStorage.setItem("turbina3", domToPretty);
          case 4:
              window.localStorage.setItem("turbina4", domToPretty);
          default:
              window.localStorage.setItem("turbina1", domToPretty);
        }
      //window.localStorage.setItem("panel5l2", domToPretty);
    }*/
function finish(){
  if(acabo==1){
        nextStep();
      }
}

var codeHW; //variable para enviar el codigo limpio al hardware
function runCode(){//antes era parsecode
    puntaje[currentpanel-1]+=1;
    codeHW = Blockly.JavaScript.workspaceToCode(workspace);
    /*window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';*/
    //permite que funcione el resaltar bloque
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    //Blockly.JavaScript.addReservedWords('highlightBlock');
    //lee lo que hay en el workspaces y lo guarda como codigo
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    //se crea un interprete con el codigo obtenido
    myInterpreter = new Interpreter(code, initAlert);
    //se pone en pausa la funcion de resaltar el bloque
    highlightPause = false;
    //se habilita la funcion para rastrear el workspace
    workspace.traceOn(true);
    workspace.highlightBlock(null);
    //la funcion de runcode se cambio a hacer el parsing tambien
    intervalo= setInterval(function(){finish();},15)
}
//funcion para ir recorriendo el interprete, y verificar la respuesta al terminar
function nextStep() {
      if (!myInterpreter.step()) {
        /*window.setTimeout(finish, 15);*/
        clearInterval(intervalo);
        myInterpreter=null;
        setTimeout(function(){ 
           switch(currentpanel) {
              case 1:
                  check1();
                  break;
              case 2:
                  check2();
                  break;
              case 3:
                  check3();
                  break;
              case 4:
                  check4();
                  break;
              default:
                  check1();
           }
        }, 750);
       
      }
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
//funcion para detener
function stop(){
    count=0;//contador para el de painting
    acabo=1;
    codeHW=null;
    code=null;
    stopTimer();
    myInterpreter=null;
    clearInterval(intervalo);
    switch(currentpanel) {
            case 1:
                begin1();
                break;
            case 2:
                begin2();
                break;
            case 3:
                begin3();
            case 4:
                begin4();
            default:
                begin1();
          }
}

//para sacar el thumbnail
function generate() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  domToPretty = Blockly.Xml.domToPrettyText(xml);
  var newSVG = document.getElementById('blocklyDiv').cloneNode(true);
  var trash = newSVG.querySelector('g.blocklyTrash');
  trash.remove();
  var scrolV = newSVG.querySelector('g.blocklyScrollbarVertical');
  scrolV.remove();
  var scrolH = newSVG.querySelector('g.blocklyScrollbarHorizontal');
  scrolH.remove();
  var zoom = newSVG.querySelector('g.blocklyZoom');
  zoom.remove();
  //console.log(newSVG);
  newSVG.style.cssText="zoom: 0.6;/* For Firefox */-moz-transform: scale(0.6);-moz-transform-origin: 0 0; background-color:#fff;"
  window.localStorage.setItem("preview", newSVG.outerHTML); 
}

//para cargar el thumbnail en el preview
function loadThumbnail(){
  previa = window.localStorage.getItem("preview");
  var thumb = document.getElementById('thumbnail');
  thumb.innerHTML=previa;
  thumb.style.cssText="zoom: 0.5;/* For Firefox */-moz-transform: scale(0.5);-moz-transform-origin: 0 0; background-color:#fff;"
}
//funcion que habilita el file input
function showFileInput(){
  var openfile =document.getElementById('your-files').click()
}
function loadXML() {
  //se define la funcion Reader, de tipo FileReader
  var reader = new FileReader();
  reader.onload = function(event) {
      var contents = event.target.result;//se almacena el resultado en una variable llamada content
      Blockly.mainWorkspace.clear();//se limpia el workspace para cargar el nuevo XML
      var textToDom = Blockly.Xml.textToDom(contents);//se carga el resultado de la lectura del archivo y se pasa como parametro a la funcion textToDom para que se almacene en el DOM
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, textToDom);//se convierte el Dom a workspace
  };
  //en caso de haber error, lo lanza
  reader.onerror = function(event) {
      console.error("File could not be read! Code " + event.target.error.code);
  };
  //esta función manda llamar al reader como texto, y se pasa como parametro el archivo que almacenamos en la cariable control, como es un arreglo, se pasa el primer (unico) elemento
  reader.readAsText(control.files[0]);
}
//para enviar el codigo al hardware
var SC=0;//contador de sockets, sirve para saber cuantos sockets se crearon
var CF=false;//connection flag, sirve para en cuanto alguien detecto un error de conexion, los demas no emitan la alerta
function pasoHW(){
  var correct =document.getElementById('SelEdison').click()
}
function pasoHWE(edison){
  //alert(edison);
  if (codeHW!=null) {

    var socket = null;
    socket = io.connect('http://'+edison+':3000',{'forceNew':true });
    socket.connect();
    //var codeHW = Blockly.JavaScript.workspaceToCode(workspace);
    codeHW = codeHW.replace(/[']/gi, "");
    codeHW = codeHW.replace(/\n{2,}/,"\n");
    codeHW = codeHW.replace(/\s{3,}/gi,"\n");
    codeHW = codeHW.replace(/highlightBlock[(].*[);]\n/gi,"");
    socket.io.on('connect_error', function(err) {
      if (!CF) {
        var HWConnection =document.getElementById('HWConnect').click()
      };
      CF=true;
      SC-=1;
      if (SC<=0) {
        CF=false;
        SC=0;
      };
      socket.disconnect()
    });
    //socket.emit('changefunction',codeHW);
    socket.on('connect', function() {
      SC+=1;
      socket.emit('changefunction',codeHW);
    });

  }else{
    var correct =document.getElementById('HWError').click()
  };
} 