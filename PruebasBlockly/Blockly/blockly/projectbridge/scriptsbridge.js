/*scripts para el primer nivel*/
  //las variables generales se pasaron a moves.js
  //inicialización de las variables propias del ejercicio 1
  var pasitos=4;
  var solution=[];
  //la variable de positionObj se paso a moves.js
  //el objeto de solutionObj se paso a moves.js
  function begin1(){
    wimg=8;
    roadpaint.splice(0,roadpaint.length);//inicializa los vectores
    solution.splice(0,solution.length);//inicializa los vectores
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    canvas.width= ancho;
    canvas.height = alto;

    stepsizeX=canvas.width/40;
    stepsizeY=canvas.height/40;

    X = stepsizeX*2;
    Y = stepsizeY*19;
    initX=stepsizeX;
    initY=stepsizeY*9;
    //se inicializa la posicion del objeto, aqui es donde se pintara la linea
    positionObj.objX=X;//350;
    positionObj.objY=Y;//142;
    positionObj.objZ=0;
    //se inicializan los valores auxiliares para poder pintar
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;
    answer1();
    panel1();
  }
  function answer1(){
    solution.push(new solutionObj(X, Y,0,0));//1
    solution.push(new solutionObj((X+Math.round10((stepsizeX*3.6604878),-2)),Math.round10((Y-(stepsizeY*8.22156522)),-2),0,0));//2
    solution.push(new solutionObj((X+Math.round10((stepsizeX*7.32122987),-2)),Math.round10(Y,-2),0,0));//3
    solution.push(new solutionObj((X+Math.round10((stepsizeX*10.9821376),-2)),Math.round10((Y-(stepsizeY*8.22156522)),-2),0,0)); //4
    solution.push(new solutionObj((X+Math.round10((stepsizeX*14.6424597),-2)),Math.round10(Y,-2),0,0)); //5
    solution.push(new solutionObj((X+Math.round10((stepsizeX*18.3029268),-2)),Math.round10((Y-(stepsizeY*8.22156522)),-2),0,0));//6
    solution.push(new solutionObj((X+Math.round10((stepsizeX*21.9636896),-2)),Math.round10(Y,-2),0,0));//7
    solution.push(new solutionObj((X+Math.round10((stepsizeX*25.6245974),-2)),Math.round10((Y-(stepsizeY*8.22156522)),-2),0,0));//8
    solution.push(new solutionObj((X+Math.round10((stepsizeX*29.2849195),-2)),Math.round10(Y,-2),0,0));//9
    solution.push(new solutionObj((X+Math.round10((stepsizeX*32.9458272),-2)),Math.round10((Y-(stepsizeY*8.22156522)),-2),0,0));//10
  }

  //la funcion de stopTimer se paso al archivo de controlFunctions.js

  function panel1(){
    var imgback = new Image();
    imgback.src = "../media/puente.png";
    imgback.onload = function() {
      ctx.drawImage(imgback, 0, 0,ancho,alto);
      ctx.beginPath();
      //como sobrescribimos la imagen del panel, aqui mandamos llamar el camino a pintar
      while(initX<canvas.width - stepsizeX){
        initX=initX+stepsizeX;
        while(initY<canvas.height - (stepsizeY*21)){
          initY=initY+stepsizeY;
          ctx.beginPath();
          ctx.fillStyle = "#E3E2E2";
          ctx.arc(initX,initY,2,0,2*Math.PI);
          ctx.fill();
        }
        initY=stepsizeY*9;
      }
      initX=stepsizeX;
      painroad();
      Avatar1();
    }
  }

  //Drawing avatar
  function Avatar1(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
    var avatarheight, avatarwith;
    var positionX, positionY;

    img.id = 'imagen';
    avatarwith=40;avatarheight=40;

    img.onload = function() {
      ctx.save();
      //se establece un nuevo punto de origen en las posición actual del cursor (donde se pintara la linea)
      ctx.translate(positionObj.objX,positionObj.objY);
      //No es necesario rotar la imagen//ctx.rotate(positionObj.objZ * (Math.PI/180));
      ctx.globalAlpha=1;
      //la imagen se dibuja enposicions negativas para que la punta del pincel quede donde debe ir el cursor
      ctx.drawImage(img,-5, -40,avatarwith,avatarheight);
      ctx.restore();
    }
    img.src = '../media/pincel.png';//el img.src se pone despues del onload para asegurar su carga
  }

  function check1(){
    for (var i = 0; i < solution.length; i++) {

        if(roadpaint[i].poX === solution[i].soX && roadpaint[i].poY === solution[i].soY){ verific=verific+1; }
    }
    if(verific===10){
      var correct =document.getElementById('Correct').click()
      //alert('Felicidades, haz completado correctamente el puzzle');
      roadpaint.splice(0,roadpaint.length);
    }else{
      var wrong =document.getElementById('Wrong').click()
      //alert('Esta vez no lo conseguiste, intenta de nuevo');
      location.reload();
    }
  }