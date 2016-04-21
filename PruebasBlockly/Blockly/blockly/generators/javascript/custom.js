'use strict';

goog.provide('Blockly.JavaScript.custom');

goog.require('Blockly.JavaScript');

//codigo que envia el valor del numero de pasos y hacia donde debe moverse
Blockly.JavaScript['mover'] = function(block) {
  var text_nosteps = block.getFieldValue('nosteps');
  var dropdown_direction = block.getFieldValue('direction');
  var code = '';
  // TODO: Assemble JavaScript into code variable.
 var nosteps = parseInt(text_nosteps);//si la opcion fue forward, llama la funcion forward
  if (dropdown_direction=="front") {
    return code=  "forward ("+nosteps+");";
  }
  if (dropdown_direction=="back") {//si la opcion fue backward, llama la funcion backward
    return code= "backward ("+nosteps+");";
  }
  if (dropdown_direction=="up") {//si la opcion fue upward, llama la funcion upward
    return code=  "upward ("+nosteps+");";
  }
  if (dropdown_direction=="down") {//si la opcion fue downward, llama la funcion downward
    return code= "downward ("+nosteps+");";
  }
};
//codigo que envia el numero de pasos y hacia donde se moverá, además del color que el ninio haya elegido
Blockly.JavaScript['mover_pintando'] = function(block) {
  var text_pasos = block.getFieldValue('pasos');
  var dropdown_directio = block.getFieldValue('directio');
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  var pasos = parseInt(text_pasos);
  if (dropdown_directio=="front") {//si la opcion fue hacia adelante, manda llamar la funcion de forwardPaint
    return code= "forwardPaint ("+pasos+",'"+colour_color+"');";
  }
  if (dropdown_directio=="back") {//si la opcion fue hacia atras, manda llamar la funcion de backwardPaint
    return code= "backwardPaint ("+pasos+",'"+colour_color+"');";
  }
};

//obtiene los angulos que el niño desea girar y hacia donde lo girará
Blockly.JavaScript['girar'] = function(block) {
  var angle_grades = block.getFieldValue('grades');
  var dropdown_side = block.getFieldValue('side');
  var code = '';
  var angulo=parseInt(angle_grades);
  //alert(angulo);
  return  code= "rotar(" + angulo +",'"+dropdown_side+"');\n";
};

//recibe la cantidad de segundos que el niño desea esperar
Blockly.JavaScript['wait'] = function(block) {
  var text_secs = block.getFieldValue('secs');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  var sec=parseInt(text_secs);
  return  code= "wait("+sec+");\n";
};

Blockly.JavaScript['stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
//prede las direccionales de hacia donde se dirigirá
Blockly.JavaScript['blinker'] = function(block) {
  var dropdown_directional = block.getFieldValue('directional');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return  code= "blinker('"+dropdown_directional+"');\n";
};

Blockly.JavaScript['lights'] = function(block) {
  var checkbox_frontlight = block.getFieldValue('frontlight') == 'TRUE';
  var checkbox_backtlight = block.getFieldValue('backtlight') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['sonido'] = function(block) {
  var dropdown_sonido = block.getFieldValue('sonido');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  /*return code= "downward ("+nosteps+");";*/
  return  code= "sound('"+dropdown_sonido+"');\n";
};

Blockly.JavaScript['eventos'] = function(block) {
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'codigo');
  // TODO: Assemble JavaScript into code variable.
  var code = "listener();\n"+statements_codigo;
  return code;
};
//bloque para que el niño use la variable de piso
Blockly.JavaScript['floor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "getFloor()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
