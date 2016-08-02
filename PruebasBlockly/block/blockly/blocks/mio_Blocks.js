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

Blockly.Blocks['block_iniciofin'] = {
  init: function() {
    this.appendStatementInput("Inicio_fin")
        .setCheck("String")
        .appendField("Inicio");
    this.appendStatementInput("NAME")
        .setCheck(["Number", "Boolean", "String"])
        .appendField("Trayecto");
    this.appendStatementInput("NAME")
        .setCheck("String")
        .appendField("Finalizar");
    this.setInputsInline(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_avanzar'] = {
  init: function() {
    this.appendValueInput("avanzar_frente")
        .setCheck("Number")
        .appendField("Avance hacia adelante");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['block_atras'] = {
  init: function() {
    this.appendValueInput("avanzar_atras")
        .setCheck("Number")
        .appendField("Avance hacia atras");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true, "String");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

Blockly.Blocks['block_giro'] = {
  init: function() {
    this.appendValueInput("ladogiro")
        .setCheck("String")
        .appendField("Grados de giro")
        .appendField(new Blockly.FieldVariable("Izquieda"), "orientación");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["Number", "Boolean", "String"]);
    this.setNextStatement(true, ["Number", "Boolean", "String"]);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['block_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "avLineal");
    this.setOutput(true);
    this.setColour(160);
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
  }
};

Blockly.Blocks['block_grados'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Grados de giro")
        .appendField(new Blockly.FieldAngle(90), "gradogiro");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['block_inicio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicio");
    this.setPreviousStatement(true, ["Number", "Boolean", "String"]);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
