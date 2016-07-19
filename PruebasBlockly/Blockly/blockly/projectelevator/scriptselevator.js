/*scripts para el primer nivel 1*/
  /*var image;*/
  //las variables generales se pasaron a moves.js
  //inicialización de las variables propias del ejercicio 3
    //Posisiones recolectadas por el click
    var clickX,clickY
    var canvas;
    //Variables para saber que piso presiono
    var piso=0;
    //la variable de positionObj se paso a moves.js
    //el objeto de solutionObj se paso a moves.js
  function begin1(){
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    //canvas.addEventListener("mousedown", getPosition, false);
    
    canvas.width= ancho;
    canvas.height = alto;
    stepsizeX=canvas.width/9;
    stepsizeY=canvas.height/5;

    X = stepsizeX*4;
    Y = stepsizeY*4;
    positionObj.objX=X;
    positionObj.objY=Y;
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;
    panel1();
  }

  //la funcion de stopTimer se paso al archivo de controlFunctions.js

  function panel1(){
    var imgback = new Image();
            imgback.src = "../media/edificio1.png";

     imgback.onload = function() {
      ctx.drawImage(imgback, 0,0,canvas.width,canvas.height);

        while(initX<canvas.width-stepsizeX){
          initX=initX+stepsizeX;
            while(initY<canvas.height-stepsizeY){
              initY=initY+stepsizeY;
              ctx.beginPath();
              ctx.fillStyle = "yellow";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;


        /*var building = new Image();
          building.src = "../media/edificio1.png";

        building.onload= function(){
          ctx.drawImage(building, stepsizeX*1.5,stepsizeY*3,stepsizeX*6,stepsizeY*5);
        }*/

        var piso1 = new Image();
            piso1.src = "../media/piso1.png";
        piso1.onload = function() {
          ctx.drawImage(piso1, (stepsizeX*7),(stepsizeY*4),stepsizeY,stepsizeY);
        }
        ctx.drawImage(piso1, (stepsizeX*7),(stepsizeY*4),stepsizeY,stepsizeY);
        var piso2 = new Image();
            piso2.src = "../media/piso2.png";
        piso2.onload = function() {
          ctx.drawImage(piso2, (stepsizeX*7),(stepsizeY*3),stepsizeY,stepsizeY);
        }
        ctx.drawImage(piso2, (stepsizeX*7),(stepsizeY*3),stepsizeY,stepsizeY);
        var piso3 = new Image();
            piso3.src = "../media/piso3.png";
        piso3.onload = function() {
          ctx.drawImage(piso3, (stepsizeX*7),(stepsizeY*2),stepsizeY,stepsizeY);
        }
        ctx.drawImage(piso3, (stepsizeX*7),(stepsizeY*2),stepsizeY,stepsizeY);
        var piso4 = new Image();
            piso4.src = "../media/piso4.png";
        piso4.onload = function() {
          ctx.drawImage(piso4, (stepsizeX*7),(stepsizeY*1),stepsizeY,stepsizeY);
        }
        ctx.drawImage(piso4, (stepsizeX*7),(stepsizeY*1),stepsizeY,stepsizeY);
        Avatar1();
      }

  }
  //Drawing avatar

  function Avatar1(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    var positionX, positionY;

    img.id = 'imagen';
    img.onload = function() {
      ctx.drawImage(img,positionObj.objX,positionObj.objY+stepsizeY*.2,stepsizeX*.8,stepsizeY*.6);
    }
    img.src = '../media/persona.png';//el img.src se pone despues del onload para asegurar su carga
  }

  //Funcion que agrega el EventListener para el canvas
  function listener() {
    //se agrega el eventlistener
    canvas.addEventListener("mousedown", getPosition, false);
    //se pone la variable acabo en 0 para que espere hasta que un boton sea presionado
    acabo=0;
  }
  //funcion que obtiene las coordenadas del click del usuario
  function getPosition(event){
    //si es para chorme
    if(event.offsetX){
     clickX= event.clientX;
     clickY= event.clientY;
     clickX -= canvas.offsetLeft;
     clickY -= canvas.offsetTop;
    }
    //si es para firefox
    if(event.clientX){
     clickX= event.clientX;
     clickY= event.clientY;
     clickX -= canvas.offsetLeft;
     clickY -= canvas.offsetTop;
    }
    //se divide la coordenada entre el número de pasos para obtener la ubicación en el grid generado
    clickX=clickX/stepsizeX;
    clickY=clickY/stepsizeY;
    /*piso=0;*/
    //Validar los click para saber donde presiono
    if (clickX>13 && clickX<14 && clickY>=5 && clickY<6){//Validar boton piso 1
      piso=1;
      acabo=1;
    } else if (clickX>13 && clickX<14 && clickY>=4 && clickY<5){//Validar boton piso 2
      piso=2;
      acabo=1;
    } else if (clickX>13 && clickX<14 && clickY>=3 && clickY<4){ //Validar boton piso 3
      piso=3;
      acabo=1;
    }else if (clickX>13 && clickX<14 && clickY>=2 && clickY<3){ //Validar boton piso 3
      piso=4;
      acabo=1;
    }else {
      alert('debes presionar un boton')
    }
  }

  function getFloor() {
    return piso;
  }

  function check1(){
    //Validar los click para saber donde presiono
    if (clickX>13 && clickX<14 && clickY>=5 && clickY<6){//Validar boton piso 1
      if (Math.round10(positionObj.objY,-2)==Math.round10(stepsizeY*3,-2)) {
        var correct =document.getElementById('Correct').click()
        //alert('Felicidades haz completado correctamente el puzzle');
      }
      else{
        var wrong =document.getElementById('Wrong').click()
        //alert('Esta vez no lo conseguiste, intenta de nuevo');
      }
    } else if (clickX>13 && clickX<14 && clickY>=4 && clickY<5){//Validar boton piso 2
      //alert(Math.round10(positionObj.objY,-2)+' '+stepsizeY*2)
        if (Math.round10(positionObj.objY,-2)==stepsizeY*2) {
          var correct =document.getElementById('Correct').click()
          //alert('Felicidades haz completado correctamente el puzzle');
        }
        else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
        }
    } else if (clickX>13 && clickX<14 && clickY>=3 && clickY<4){ //Validar boton piso 3
      //alert(Math.round10(positionObj.objY,-2)+' '+stepsizeY)

        if (Math.round10(positionObj.objY,-2)==stepsizeY) {
          var correct =document.getElementById('Correct').click()
          //alert('Felicidades haz completado correctamente el puzzle');
        }
        else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
        }
    } else /*if (clickX>7 && clickX<8 && clickY>=1 && clickY<2)*/{ //Validar boton piso 4
      //alert(Math.round10(positionObj.objY,-2))
        if (Math.round10(positionObj.objY,-2)==0){
          var correct =document.getElementById('Correct').click()
          //alert('Felicidades haz completado correctamente el puzzle');
        }
        else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
        }
    }
  }