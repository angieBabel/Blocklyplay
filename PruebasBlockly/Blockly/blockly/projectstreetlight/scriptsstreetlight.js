  /*var image;*/
  //las variables generales se pasaron a moves.js
  //inicialización de las variables propias del ejercicio 2
    //vector de posiciones donde estaban los semaforos y donde hizo un alto
    var semaforos=[],altos=[];
    
  //primer funcion donde se inicializan todo el canvas
    function begin1(){
      wimg=20
      canvas = document.getElementById('canvas1');
      ctx = canvas.getContext('2d');
      ancho = document.getElementById('divCanvas').offsetWidth;
      alto = document.getElementById('divCanvas').offsetHeight;
      canvas.width= ancho;
      canvas.height = alto;

      stepsizeX=canvas.width/30;
      stepsizeY=canvas.height/30;

      X = stepsizeX*15;
      Y = stepsizeY*21;
      positionObj.objX=X;
      positionObj.objY=Y;
      positionObj.objZ=0;
      //roadpaint.push(X+","+Y);
      Xaux = positionObj.objX;
      Yaux= positionObj.objY;

      semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*21,-2),0,0));
      semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*4,-2),0,0));
      semaforos.push(new solutionObj(Math.round10(stepsizeX*12,-2),Math.round10(stepsizeY*4,-2),0,0));
      semaforos.push(new solutionObj(Math.round10(stepsizeX*12,-2),Math.round10(stepsizeY*14,-2),0,0));
      semaforos.push(new solutionObj(Math.round10(stepsizeX*3,-2),Math.round10(stepsizeY*14,-2),0,0));
      semaforos.push(new solutionObj(Math.round10(stepsizeX*3,-2),Math.round10(stepsizeY*21,-2),0,0));
      semaforos.push(new solutionObj(Math.round10(stepsizeX*1,-2),Math.round10(stepsizeY*21,-2),0,0));
      panel1();
    }
  //la funcion de stopTimer se paso al archivo de controlFunctions.js

  //dibuja el panel
    function panel1(){
      var imgback = new Image();
            imgback.src = "../media/mapa_semaforo.png";

     imgback.onload = function() {
        ctx.drawImage(imgback, 0, 0,ancho,alto);
        while(initX<canvas.width-stepsizeX){
          initX=initX+stepsizeX;
            while(initY<canvas.height-stepsizeY){
              initY=initY+stepsizeY;
              ctx.beginPath();
              ctx.fillStyle = "#E3E2E2";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
        painroad();
        var semaforo = new Image();
            semaforo.src = "../media/semaforo.png";
       semaforo.onload = function() {
          ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*21),stepsizeX,stepsizeY*2);
          ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*2),stepsizeX,stepsizeY*2);
          ctx.drawImage(semaforo, (stepsizeX*12),(stepsizeY*2),stepsizeX,stepsizeY*2);
          ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*12),stepsizeX,stepsizeY*2);
          ctx.drawImage(semaforo, (stepsizeX*2),(stepsizeY*12),stepsizeX,stepsizeY*2);
          ctx.drawImage(semaforo, (stepsizeX*3.5),(stepsizeY*19),stepsizeX,stepsizeY*2);
          ctx.drawImage(semaforo, (stepsizeX*0),(stepsizeY*19),stepsizeX,stepsizeY*2);
        }
        Avatar1();
      }

    }
    //para saber si va a girar o no
    var angle=0;
  //Drawing avatar
    function Avatar1(){
      var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

      img.id = 'imagen';

      avatarwith=40;avatarheight=20;
      img.onload = function() {
        ctx.save();
        ctx.translate(positionObj.objX,positionObj.objY);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        ctx.globalAlpha=1;

        if (angle!=positionObj.objZ) {
          angle=positionObj.objZ;
          if (luz==1) {
              luces(20,0,lightside);
            }
          if (luzTrasera==1) {
            lucesTraseras(-20,0,lightside);
          }
          ctx.drawImage(img,-20,-10,avatarwith,avatarheight);
        }else{
          if (luz==1) {
              luces(0,0,lightside);
            }
          if (luzTrasera==1) {
            lucesTraseras(-40,0,lightside);
          }
          ctx.drawImage(img,-40,-10,avatarwith,avatarheight);
        }
        ctx.restore();
      }
      img.src = '../media/carro.png';//el img.src se pone despues del onload para asegurar su carga
    }
  //Compara si las paradas que hizo el niño estuvieron bien
    function check1(){
      var coincidencias=0;
      //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
      for (var i = 0; i < semaforos.length; i++) {
        for (var j = 0; j < altos.length; j++) {

          //si en algun punto coinciden incrementa las coincidencias en 1
          if (semaforos[i].soX==altos[j].soX && semaforos[i].soY==altos[j].soY ) {
            //alert(i+'sema '+semaforos[i].soX+','+semaforos[i].soY+' altos '+altos[j].soX+','+altos[j].soY);
            coincidencias+=1;
          }
        }
      }
      //si coincidio en todas las paradas, sin importar el orden lo da por bueno
      if (coincidencias==semaforos.length) {
        var correct =document.getElementById('Correct').click()
        //alert('Felicidades haz realizado correctamente el puzzle')
      }else{
        var wrong =document.getElementById('Wrong').click()
        //alert('Te ha faltado hacer una parada')
      }
    }