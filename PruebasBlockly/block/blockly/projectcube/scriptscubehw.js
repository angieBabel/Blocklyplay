/*scripts para el primer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var pasitos=4;
      var solution=[];
      var pinled=0;
      var ledstatus=null;
      //se crean las variables de las imagenes para que sean globales

      var led1 = new Image();
      var led2 = new Image();
      var led3 = new Image();
      
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

        stepsizeX=canvas.width/9;
        stepsizeY=canvas.height/6;
        solution.push(new ledObj(2,'On'));
        panel1();
      }
      //la funcion de stopTimer se paso al archivo de controlFunctions.js
       function panel1(){
          var imgback = new Image();
          imgback.src = "../media/ledV2.png";
          imgback.onload = function() {
            ctx.drawImage(imgback, 0, 0,ancho,alto);
            ctx.beginPath();
            //como sobrescribimos la imagen del panel, aqui mandamos llamar el camino a pintar
             while(initX<canvas.width-stepsizeX){
                initX=initX+stepsizeX;
                  while(initY<canvas.height-stepsizeY){
                    initY=initY+stepsizeY;
                    ctx.beginPath();
                    ctx.fillStyle = "black";
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
                led1.src = "../media/led2.png";
          }else if (pinled==2) {
            if (ledstatus=='On') {
                led1.src = "../media/led1.png";
            }else{
                led1.src = "../media/led2.png";
            };
          };
        led1.onload = function() {
            ctx.drawImage(led1,stepsizeX*4, stepsizeY*.2 ,avatarwith,avatarheight);
          }
          ctx.drawImage(led1,stepsizeX*4, stepsizeY*.2 ,avatarwith,avatarheight);
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
        }else{
         var wrong =document.getElementById('Wrong').click()
        }
      }