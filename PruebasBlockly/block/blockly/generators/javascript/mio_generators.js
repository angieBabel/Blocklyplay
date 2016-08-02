//mio
Blockly.JavaScript['prueba_1'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var value_prueba = Blockly.JavaScript.valueToCode(block, 'prueba', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_iniciofin'] = function(block) {
  var statements_inicio_fin = Blockly.JavaScript.statementToCode(block, 'Inicio_fin');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.\
//  var coode[]=[statements_inicio_fin,statements_name]
  //var code = (statements_name);
  return [statements_inicio_fin,statements_name];
};

Blockly.JavaScript['block_avanzar'] = function(block) {
  var value_avanzar_frente = Blockly.JavaScript.valueToCode(block, 'avanzar_frente', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['block_atras'] = function(block) {
  var value_avanzar_atras = Blockly.JavaScript.valueToCode(block, 'avanzar_atras', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['block_giro'] = function(block) {
  var variable_orientaci_n = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orientación'), Blockly.Variables.NAME_TYPE);
  var value_ladogiro = Blockly.JavaScript.valueToCode(block, 'ladogiro', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};



Blockly.JavaScript['block_number'] = function(block) {
  var text_avlineal = block.getFieldValue('avLineal');
  // TODO: Assemble JavaScript into code variable.
  var code = parseFloat(block.getFieldValue('avLineal'));;
//  alert(code);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_grados'] = function(block) {
  var angle_gradogiro = block.getFieldValue('gradogiro');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_inicio'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
