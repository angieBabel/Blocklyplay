/*'use strict';

goog.provide('Blockly.Blocks.mio');

goog.require('Blockly.Blocks');*/

Blockly.Blocks['prueba_1'] = {
  init: function() {
    this.appendValueInput("prueba")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("hola")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_avanzar'] = {
  init: function() {
    this.appendValueInput("avanzaLineal")
        .setCheck("Number")
        .appendField("Avanzar lineal");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['block_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "avLineal");
    this.setOutput(true);
    this.setColour(300);
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
  }
};

Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};
