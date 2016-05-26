'use strict';

goog.provide('Blockly.Blocks.hardware');

goog.require('Blockly.Blocks');

Blockly.Blocks['led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED:");
    this.appendDummyInput()
        .appendField("PIN");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "PIN");
    this.appendDummyInput()
        .appendField("turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["On", "On"], ["Off", "Off"]]), "turn");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MOTOR:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("4096"), "steps");
    this.appendDummyInput()
        .appendField("Steps");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "direction");
    this.appendDummyInput()
        .appendField("Speed");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer:");
    this.appendDummyInput()
        .appendField("PIN");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "PIN");
    this.appendDummyInput()
        .appendField("Tone");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Do", "Do"], ["Re", "Re"], ["Mi", "Mi"], ["Fa", "Fa"], ["Sol", "Sol"], ["La", "La"], ["Si", "Si"]]), "tone");
    this.appendDummyInput()
        .appendField("Secs");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "secs");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pantalla'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PrintScreen:");
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.appendDummyInput()
        .appendField("Message")
        .appendField(new Blockly.FieldTextInput("type message here"), "text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['boton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button:");
    this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "pin");
    this.appendDummyInput()
        .appendField("Pressed")
        .appendField(new Blockly.FieldDropdown([["On", "On"], ["Off", "Off"]]), "estado");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};