exerciseLevels = 3;
/*scripts para el primer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var pasitos=4;
      var solution=[];
      var respuesta=[];
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
      function begin1(){
        screentext.splice(0,screentext.length);//inicializa los vectores
        screencolor='#009900';
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

        X = stepsizeX*11;
        Y = stepsizeY*6;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        answer="Type message here"
        solution.push(answer);
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
        imgback.src = "../media/casita_hardware.png";
      }
      //Drawing avatar
      function Avatar1(){
        ctx.fillStyle = screencolor;
        ctx.fillRect(stepsizeX*3,stepsizeY*4,stepsizeX*16,stepsizeY*5);
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        //ctx.textAlign = "right";
        /*i=0;
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
        };*/
      }

      function check1(){
        if(respuesta[0]!=solution[0]){
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
          //alert('Felicidades, haz completado correctamente el puzzle');
          solution.splice(0,solution.length);
          respuesta.splice(0,respuesta.length);
        }else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
        }
      }
/*scripts para el segundo nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var pasitos=4;
      var solution=[];
      var respuesta=[];
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
      function begin2(){
        screentext.splice(0,screentext.length);//inicializa los vectores
        screencolor='#009900';
        solution.splice(0,solution.length);//inicializa los vectores
        canvas = document.getElementById('canvas2');
        ctx = canvas.getContext('2d');
        ancho = document.getElementById('divCanvas').offsetWidth;
        alto = document.getElementById('divCanvas').offsetHeight;

        canvas.width= ancho;
        canvas.height = alto;
        wimg=8;

        stepsizeX=canvas.width/21;
        stepsizeY=canvas.height/14;

        X = stepsizeX*11;
        Y = stepsizeY*6;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        answer="Type message here"
        solution.push(answer);
        panel2();

      }
      //la funcion de stopTimer se paso al archivo de controlFunctions.js
      function panel2(){
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
          Avatar2();
        }
        imgback.src = "../media/casita_hardware.png";
      }
      //Drawing avatar
      function Avatar2(){
        ctx.fillStyle = screencolor;
        ctx.fillRect(stepsizeX*3,stepsizeY*4,stepsizeX*16,stepsizeY*5);
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        //ctx.textAlign = "right";
        /*i=0;
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
        };*/
      }

      function check2(){
        //alert(respuesta.length);
        if(respuesta[0]!=solution[0] && respuesta[1] == '' && respuesta[0].toString() == respuesta[2].toString()){
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
          //alert('Felicidades, haz completado correctamente el puzzle');
          solution.splice(0,solution.length);
          respuesta.splice(0,respuesta.length);
        }else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
        }
      }
/*scripts para el tercer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var pasitos=4;
      var solution=[];
      var respuesta=[];
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
      function begin3(){
        screentext.splice(0,screentext.length);//inicializa los vectores
        screencolor='#009900';
        solution.splice(0,solution.length);//inicializa los vectores
        canvas = document.getElementById('canvas3');
        ctx = canvas.getContext('2d');
        ancho = document.getElementById('divCanvas').offsetWidth;
        alto = document.getElementById('divCanvas').offsetHeight;

        canvas.width= ancho;
        canvas.height = alto;
        wimg=8;

        stepsizeX=canvas.width/21;
        stepsizeY=canvas.height/14;

        X = stepsizeX*11;
        Y = stepsizeY*6;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        answer="Type message here"
        solution.push(answer);
        panel3();

      }
      //la funcion de stopTimer se paso al archivo de controlFunctions.js
      function panel3(){
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
          Avatar3();
        }
        imgback.src = "../media/casita_hardware.png";
      }
      //Drawing avatar
      function Avatar3(){
        ctx.fillStyle = screencolor;
        ctx.fillRect(stepsizeX*3,stepsizeY*4,stepsizeX*16,stepsizeY*5);
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        //ctx.textAlign = "right";
        /*i=0;
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
        };*/
      }

      function check3(){
        if(respuesta[0]!=solution[0] && respuesta[1] != respuesta[0]){
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
          //alert('Felicidades, haz completado correctamente el puzzle');
          solution.splice(0,solution.length);
          respuesta.splice(0,respuesta.length);

        }else{
          var wrong =document.getElementById('Wrong').click()
          //alert('Esta vez no lo conseguiste, intenta de nuevo');
        }
        
      }