/*scripts para el primer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var pasitos=4;
      var solution=[];
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
      function begin1(){
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
        solution.splice(0,solution.length);//inicializa los vectores
        canvas = document.getElementById('canvas1');
        ctx = canvas.getContext('2d');
        ancho = document.getElementById('divCanvas').offsetWidth;
        alto = document.getElementById('divCanvas').offsetHeight;

        canvas.width= ancho;
        canvas.height = alto;
        wimg=8;

        stepsizeX=canvas.width/21;
        stepsizeY=canvas.height/14;

        X = stepsizeX*10;
        Y = stepsizeY*5;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        solution.push(new solutionObj(X,Y,0,0));//1
        solution.push(new solutionObj((X+(stepsizeX*4)),Y,0,0));//2
        solution.push(new solutionObj((X+(stepsizeX*4)),(Y+(stepsizeY*5)),0,0));//3
        solution.push(new solutionObj((X-(stepsizeX*2)),(Y+(stepsizeY*5)),0,0)); //4
        solution.push(new solutionObj((X-(stepsizeX*2)),Y,0,0)); //5
        solution.push(new solutionObj(X,Y,0,0)); //6

        panel1();

      }
      //la funcion de stopTimer se paso al archivo de controlFunctions.js
      function panel1(){
        var imgback = new Image();
        
        imgback.onload = function() {
          ctx.drawImage(imgback, 0, 0,ancho,alto);
          //como sobrescribimos la imagen del panel, aqui mandamos llamar el camino a pintar
          while(initX<canvas.width-stepsizeX){
          initX=initX+stepsizeX;
            while(initY<canvas.height-stepsizeY){
              initY=initY+stepsizeY;
              ctx.beginPath();
              ctx.fillStyle = "cyan";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
          painroad();
          Avatar1();
        }
        imgback.src = "../media/PantallaV2.png";
      }
      //Drawing avatar
      screencolor='green';
      function Avatar1(){
        ctx.fillStyle = screencolor;
        ctx.fillRect(stepsizeX*2,stepsizeY*3,stepsizeX*16,stepsizeY*5);
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        //ctx.textAlign = "right";
        i=0;
        if (screentext.length!=0) {
          interval = setInterval(function(){
            if (i<16) {
              ctx.fillText(screentext[i],stepsizeX*(2+i),stepsizeY*5);
            }else{
              ctx.fillText(screentext[i],stepsizeX*(2-16+i),stepsizeY*7);
            }
            i++;
            if(i==screentext.length){
              stopTimer();
              acabo=1;
            }
          },200);
        };
      }

      function check1(){
        var verific=0;
        for (var i = 0; i < solution.length; i++) {
              //alert(roadpaint[i].poColor);
            if(roadpaint[i].poX === solution[i].soX && roadpaint[i].poY === solution[i].soY){
              verific=verific+1;
            }
          }
        if(verific==2) {
          verific=0;
          //alert(solution.length);
          for (var i = solution.length-1; i >= 0; i--) {
            //alert(i);
            //alert(solution[i]+'='+roadpaint[solution.length-1-i]);
            if(roadpaint[solution.length-1-i].poX === solution[i].soX && roadpaint[solution.length-1-i].poY === solution[i].soY ){
              verific=verific+1;
            }
          }
        }
        if(verific===6){
          var correct =document.getElementById('Correct').click()
          //alert('Felicidades, haz completado correctamente el puzzle');
          roadpaint.splice(0,roadpaint.length);
        }else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
          location.reload();
        }
      }