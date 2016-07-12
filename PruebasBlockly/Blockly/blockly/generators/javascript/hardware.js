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
   return code= "led("+pin+",'"+dropdown_turn+"');\n";
};

Blockly.JavaScript['ledDisplayed'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_NONE);
    var value_turn = Blockly.JavaScript.valueToCode(block, 'Turn', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var pin= parseInt(value_pin);
    var code = '...;\n';
    return code= "led("+pin+",'"+value_turn+"');\n";
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

Blockly.JavaScript['motorDisplayed'] = function(block) {
  var value_steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_NONE);
  var value_direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_NONE);
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  var pasos = parseFloat(value_steps);
  pasos=pasos*4096
  /*var speed= parseInt(value_speed);*/
  return code= "motor("+pasos+",'"+value_direction+"',"+value_speed+");\n";
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
Blockly.JavaScript['buzzerDisplayed'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_NONE);
  var value_tone = Blockly.JavaScript.valueToCode(block, 'Tone', Blockly.JavaScript.ORDER_NONE);
  var value_secs = Blockly.JavaScript.valueToCode(block, 'Secs', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  var pin= parseInt(value_pin);
  var secs= parseInt(value_secs);

  return code= "buzzer("+pin+",'"+value_tone+"',"+secs+");\n";
};

Blockly.JavaScript['pantalla'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code= "pantalla('"+text_text+"','"+colour_color+"');\n";
};
Blockly.JavaScript['pantallaDisplayed'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_NONE);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code= "pantalla('"+value_message+"','"+value_color+"');\n";
};
Blockly.JavaScript['boton'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_estado = block.getFieldValue('estado');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  var pin= parseInt(dropdown_pin);
  return code= "boton("+pin+",'"+dropdown_estado+"');\n";
};
Blockly.JavaScript['botonDisplayed'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_NONE);
  var value_status = Blockly.JavaScript.valueToCode(block, 'Status', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  var pin= parseInt(value_pin);
  return code= "boton("+pin+",'"+value_status+"');\n";
};
//Bloques de salida
//prender o apagar
Blockly.JavaScript['status'] = function(block) {
  var dropdown_on_off = block.getFieldValue('on/off');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_on_off;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//pin analogico
Blockly.JavaScript['pina'] = function(block) {
  var text_pin = block.getFieldValue('PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = text_pin;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//pin digital
Blockly.JavaScript['pind'] = function(block) {
  var text_pin = block.getFieldValue('PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = text_pin;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//direccion
Blockly.JavaScript['direction'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_direction;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//velocidad
Blockly.JavaScript['speed'] = function(block) {
  var dropdown_speed = block.getFieldValue('speed');
  // TODO: Assemble JavaScript into code variable.
  //var speed = parseInt(dropdown_speed);
  var code = dropdown_speed;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tone'] = function(block) {
  var dropdown_tone = block.getFieldValue('tone');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_tone;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
