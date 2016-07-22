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

        stepsizeX=canvas.width/12;
        stepsizeY=canvas.height/8;

        X = stepsizeX*3;
        Y = stepsizeY*2;
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
                imgback.src = "../media/whiteblank.jpg";

          imgback.onload = function() {
            ctx.drawImage(imgback, 0, 0,ancho,alto);
              ii=-1;
              jj=-1;
              ctx.clearRect(0,0,ancho,alto);
               while(initX<canvas.width-stepsizeX){
                  initX=initX+stepsizeX;
                    while(initY<canvas.height-stepsizeY){
                      initY=initY+stepsizeY;
                      ctx.beginPath();
                      ctx.fillStyle = "black";
                      ctx.arc(initX,initY,1.5,0,2*Math.PI);
                      ctx.fill();
                      ctx.font = "20px Arial";
                      ctx.fillStyle = "black";
                      ctx.textAlign = "right";
                      ii++;
                      ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
                    }
                    initY=0;
                    jj++
                    ctx.font = "20px Arial";
                    ctx.fillStyle = "red";
                    ctx.fillText(jj,stepsizeX,stepsizeY*jj);
                }
                initX=0;
                Avatar1()
            }
      }

       var angle=0;
      //Drawing avatar
      function Avatar1(){
        var led1 = new Image();
        avatarwith=stepsizeX;avatarheight=stepsizeY;
           if (pinled==0) {
                    led1.src = "../media/ledOff.png";
              }else if (pinled==1) {
                if (ledstatus=='On') {
                    led1.src = "../media/ledOn.png";
                }else{
                    led1.src = "../media/ledOff.png";
                };
              };
        led1.onload = function() {
            ctx.drawImage(led1,stepsizeX*5.5, stepsizeY*3.5 ,avatarwith,avatarheight);
          }
          ctx.drawImage(led1,stepsizeX*5.5, stepsizeY*3.5,avatarwith,avatarheight);
          acabo=1;
      }

      function check1(){
        //var correct =document.getElementById('Correct').click()
      }