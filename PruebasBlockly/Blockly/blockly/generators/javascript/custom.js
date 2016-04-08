'use strict';

goog.provide('Blockly.JavaScript.custom');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['mover'] = function(block) {
  var text_nosteps = block.getFieldValue('nosteps');
  var dropdown_direction = block.getFieldValue('direction');
  var code = '';
  // TODO: Assemble JavaScript into code variable.
 var nosteps = parseInt(text_nosteps);
  if (dropdown_direction=="front") {
    return code=  "forward ("+nosteps+");";
  }
  if (dropdown_direction=="back") {
    return code= "backward ("+nosteps+");";
  }
  if (dropdown_direction=="up") {
    return code=  "upward ("+nosteps+");";
  }
  if (dropdown_direction=="down") {
    return code= "downward ("+nosteps+");";
  }
};

Blockly.JavaScript['mover_pintando'] = function(block) {
  var text_pasos = block.getFieldValue('pasos');
  var dropdown_directio = block.getFieldValue('directio');
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  var pasos = parseInt(text_pasos);
  if (dropdown_directio=="front") {
    return code= "forwardPaint ("+pasos+",'"+colour_color+"');";
  }
  if (dropdown_directio=="back") {
    return code= "backwardPaint ("+pasos+",'"+colour_color+"');";
  }
};

Blockly.JavaScript['girar'] = function(block) {
  var angle_grades = block.getFieldValue('grades');
  var dropdown_side = block.getFieldValue('side');
  var code = '';
  var angulo=parseInt(angle_grades);
  return  code= "rotar(" + angulo +",'"+dropdown_side+"');\n";
};

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

Blockly.JavaScript['blinker'] = function(block) {
  var dropdown_directional = block.getFieldValue('directional');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
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
