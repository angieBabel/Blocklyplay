/*scripts para el primer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var pasitos=4;
      var solution=[];
      
      //se crean las variables de las imagenes para que sean globales
      var led1 = new Image();
      var led2 = new Image();
      var led3 = new Image();
      
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
      function begin1(){
        respuesta.splice(0,respuesta.length);//inicializa los vectores
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

        X = stepsizeX;
        Y = stepsizeY/2;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        pinled=0;

        solution.push(new ledObj(4,'On'));
        solution.push(new ledObj(4,'Off'));

        solution.push(new ledObj(3,'On'));
        solution.push(new ledObj(3,'Off'));

        solution.push(new ledObj(2,'On'));
        solution.push(new ledObj(2,'Off'));        
        panel1();
      }
      //la funcion de stopTimer se paso al archivo de controlFunctions.js
       function panel1(){
          var imgback = new Image();
                  imgback.src = "../media/semaforohw2.png";
                
           imgback.onload = function() {
            ctx.drawImage(imgback, 0, 0,ancho,alto);
              
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
              Avatar1();
            }
        }

      //Drawing avatar
      function Avatar1(){
        avatarwith=stepsizeX;avatarheight=stepsizeY;
           if (pinled==0) {
                    led1.src = "../media/ledOff.png";
                    led2.src = "../media/ledOffYellow.png";
                    led3.src = "../media/ledOffGreen.png";
              }else if (pinled==2) {
                if (ledstatus=='On') {
                    led1.src = "../media/ledOn.png";
                }else{
                    led1.src = "../media/ledOff.png";
                };
              }else if(pinled==3){
                if (ledstatus=='On') {
                    led2.src = "../media/ledOnYellow.png";
                }else{
                    led2.src = "../media/ledOffYellow.png";
                };
              }else if (pinled==4){
                if (ledstatus=='On') {
                    led3.src = "../media/ledOnGreen.png";
                }else{
                    led3.src = "../media/ledOffGreen.png";
                }
              };
        led1.onload = function() {
            ctx.drawImage(led1,stepsizeX*.5, stepsizeY*2 ,avatarwith*2,avatarheight*2);
          }
        led2.onload = function() {
            ctx.drawImage(led2,stepsizeX*3.5, stepsizeY*2,avatarwith*2,avatarheight*2);
          }
        led3.onload = function() {
            ctx.drawImage(led3,stepsizeX*6.5, stepsizeY*2,avatarwith*2,avatarheight*2);
          }
          ctx.drawImage(led1,stepsizeX*.5, stepsizeY*2 ,avatarwith*2,avatarheight*2);
          ctx.drawImage(led2,stepsizeX*3.5, stepsizeY*2,avatarwith*2,avatarheight*2);
          ctx.drawImage(led3,stepsizeX*6.5, stepsizeY*2,avatarwith*2,avatarheight*2);
          //acabo=1;
      }

      function check1(){
        var coincidencias=0;
        //ciclo anidado que recorre y compara todos los elementos del vector solution, contra todos los del vector respuesta del niño
        if (solution.length==respuesta.length) {
          for (var i = 0; i < solution.length; i++) {
            //alert(solution[i].Pin+','+respuesta[i].Pin +' turns'+ solution[i].Turn+','+respuesta[i].Turn)
            if (solution[i].Pin==respuesta[i].Pin && solution[i].Turn==respuesta[i].Turn) {
              coincidencias+=1;
            };
          }
        };
        //si coincidio en todas las paradas, sin importar el orden lo da por bueno
        if (coincidencias==solution.length) {
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
         var wrong =document.getElementById('Wrong').click()
        }
      }