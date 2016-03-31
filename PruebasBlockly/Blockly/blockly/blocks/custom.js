'use strict';

goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');


Blockly.Blocks['mover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldTextInput("0"), "nosteps")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["Upward", "up"], ["Downward", "down"], ["Forward", "front"], ["Backward", "back"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['girar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldAngle(90), "grades")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "side");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for")
        .appendField(new Blockly.FieldTextInput("0"), "secs")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blinker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "directional")
        .appendField("Blinker");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lights:")
        .appendField("Front")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "frontlight")
        .appendField("Back")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "backtlight");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sonido'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play")
        .appendField(new Blockly.FieldDropdown([["Cat", "gato.mp3"], ["Dog", "perro.mp3"], ["Lion", "leon.mp3"], ["Chicken", "pollo.mp3"]]), "sonido");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
