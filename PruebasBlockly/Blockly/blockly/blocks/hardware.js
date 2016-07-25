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
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ledDisplayed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED:");
    this.appendValueInput("PIN")
            .appendField("     PIN:")
            .setCheck("pind");
    this.appendValueInput("Turn")
            .appendField("     Turn:")
            .setCheck("turn");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
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
        .appendField(new Blockly.FieldDropdown([["Right", "forward"], ["Left", "backward"]]), "direction");
    this.appendDummyInput()
        .appendField("Speed");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['motorDisplayed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MOTOR:");
    this.appendValueInput("steps")
        .appendField("         Laps:")
    this.appendValueInput("direction")
        .appendField("    Direction:")
    this.appendValueInput("speed")
        .appendField("       Speed:")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
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
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzerDisplayed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer:");
    this.appendValueInput("PIN")
            .appendField("            PIN:")
            .setCheck(null);
    this.appendValueInput("Tone")
            .appendField("          Tone:")
            .setCheck(null);
    this.appendValueInput("Secs")
            .appendField("    Seconds:")
            .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pantalla'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Display:");
    this.appendDummyInput()
        .appendField("Message")
        .appendField(new Blockly.FieldTextInput("type message here"), "text");
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pantallaDisplayed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Display:");
    this.appendValueInput("message")
            .appendField("          Message:")
            .setCheck(null);
    this.appendValueInput("color")
            .appendField("    Screen Color:")
            .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
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
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['botonDisplayed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button:");
    this.appendValueInput("PIN")
            .appendField("            PIN:")
            .setCheck(null);
    this.appendValueInput("Status")
            .appendField("     Pressed:")
            .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(354);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
//Bloques de salida
//prender o apagar
Blockly.Blocks['status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["On", "On"], ["Off", "Off"]]), "on/off");
    this.setInputsInline(true);
    this.setOutput(true, "turn");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
//pin analogico
Blockly.Blocks['pina'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "PIN")
        .appendField("analogico");
    this.setOutput(true, "pina");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
//pin digital
Blockly.Blocks['pind'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["D2", "2"],["D3", "3"],["D4", "4"],["D5", "5"],["D6", "6"],["D7", "7"],["D8", "8"]]), "PIN");
    this.setOutput(true, "pind");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//direccion
Blockly.Blocks['direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Backward", "backward"]]), "direction");
    this.setOutput(true, "direction");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
//velocidad
Blockly.Blocks['speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "speed");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//Tono
Blockly.Blocks['tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Do", "Do"], ["Re", "Re"], ["Mi", "Mi"], ["Fa", "Fa"], ["Sol", "Sol"], ["La", "La"], ["Si", "Si"]]), "tone");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};