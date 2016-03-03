//mio
Blockly.JavaScript['prueba_1'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var value_prueba = Blockly.JavaScript.valueToCode(block, 'prueba', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_avanzar'] = function(block) {
  var value_avanzalineal = Blockly.JavaScript.valueToCode(block, 'avanzaLineal', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var avanzaLineal =';
  return code;
};



Blockly.JavaScript['block_number'] = function(block) {
  var text_avlineal = block.getFieldValue('avLineal');
  // TODO: Assemble JavaScript into code variable.
  var code = parseFloat(block.getFieldValue('avLineal'));;
  window.alert(code);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
