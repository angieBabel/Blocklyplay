'use strict';

goog.provide('Blockly.JavaScript.hardware');

goog.require('Blockly.JavaScript');
//Bloques de hardware

Blockly.JavaScript['led'] = function(block) {
  var text_pin = block.getFieldValue('PIN');
  var dropdown_turn = block.getFieldValue('turn');
  // TODO: Assemble JavaScript into code variable.
  var pin= parseInt(text_pin);
  var code = '...';
   return code= "led("+pin+","+dropdown_turn+");\n";
};

Blockly.JavaScript['motor'] = function(block) {
  var text_steps = block.getFieldValue('steps');
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_speed = block.getFieldValue('speed');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  var pasos = parseInt(text_steps);
  var speed= parseInt(dropdown_speed);
  return code= "motor("+pasos+",'"+dropdown_direction+"',"+speed+");\n";
};

Blockly.JavaScript['buzzer'] = function(block) {
  var text_pin = block.getFieldValue('PIN');
  var dropdown_tone = block.getFieldValue('tone');
  var text_secs = block.getFieldValue('secs');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  var pin= parseInt(text_pin);
  var secs= parseInt(text_secs);

  return code= "buzzer("+pin+",'"+dropdown_tone+"',"+secs+");\n";
};