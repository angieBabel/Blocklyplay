var myInterpreter=null;
function initAlert(interpreter, scope) {
    // funciones de hardware
    var wrapper = function(nosteps,side,speed) {
      return interpreter.createPrimitive(motor(nosteps,side,speed));
    }
    interpreter.setProperty(scope, 'motor',
        interpreter.createNativeFunction(wrapper));


    var wrapper = function(nopin,sate) {
      return interpreter.createPrimitive(led(nopin,sate));
    }
    interpreter.setProperty(scope, 'led',
        interpreter.createNativeFunction(wrapper));

}

function parseCode(funcion){
    //Aqui iria lo que recibe del soket para generar el objeto tipo interprete
    //se crea un interprete con el codigo obtenido
    myInterpreter = new Interpreter(funcion, initAlert);
    intervalo= setInterval(function(){finish();},15)
    //myInterpreter.run();
}
function nextStep() {
    
    if (!myInterpreter.step()) {
      /*window.setTimeout(finish, 15);*/
      clearInterval(intervalo);
    }
  }
  function finish(){
    if(acabo==1){
          nextStep();
        }
  }