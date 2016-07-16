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

        stepsizeX=canvas.width/9;
        stepsizeY=canvas.height/6;

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
              ctx.fillStyle = "yellow";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
          painroad();
          Avatar1();
        }
        imgback.src = "../media/Pantall.png";
      }

      //Drawing avatar
      function Avatar1(){
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        //ctx.textAlign = "center";
        ctx.fillText("Hello World",stepsizeX*3,stepsizeY*2);
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