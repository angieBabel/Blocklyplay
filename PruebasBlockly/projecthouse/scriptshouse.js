/*scripts para el primer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
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

        stepsizeX=canvas.width/15;
        stepsizeY=canvas.height/10;

        X = stepsizeX*8;
        Y = stepsizeY*4;
        initX=0;
        initY=0;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        solution.push(new solutionObj(stepsizeX*8,stepsizeY*4,0,0));//1
        solution.push(new solutionObj(stepsizeX*14,stepsizeY*4,0,0));//2
        solution.push(new solutionObj(stepsizeX*14,stepsizeY*8,0,0));//3
        solution.push(new solutionObj(stepsizeX*8,stepsizeY*8,0,0)); //4
        
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
              ctx.fillStyle = "#E3E2E2";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
          painroad();
          Avatar1();
        }
        imgback.src = "../media/casaBack.png";
      }

      //Drawing avatar
      function Avatar1(){
        var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
        var avatarheight, avatarwith;
        var positionX, positionY;

        img.id = 'imagen';
        //el img.src se cambio para asegurar que siempre haga el onload
        avatarwith=stepsizeX*.2; avatarheight=stepsizeY*.6;

        img.onload = function() {
          ctx.save();
          //se establece un nuevo punto de origen en las posición actual del cursor (donde se pintara la linea)
          ctx.translate(positionObj.objX,positionObj.objY);
          ctx.rotate(positionObj.objZ * (Math.PI/180));
          //No es necesario rotar la imagen//ctx.rotate(positionObj.objZ * (Math.PI/180));

          ctx.globalAlpha=1;
          //la imagen se dibuja enposicions negativas para que la punta del brush quede donde debe ir el cursor
          ctx.drawImage(img,-5, -40,avatarwith,avatarheight);
          ctx.restore();
        }
        img.src = '../media/brush.png';//el img.src se pone despues del onload para asegurar su carga
      }
     function check1(){
        var verific=0;
        var valido1=false;
        var valido2=false;
        var primeroCuadro1=-1;
        var primeroCuadro2=-1;
        for (var i = 0; i < roadpaint.length; i++) {
              //alert(roadpaint[i].poColor);
            if (roadpaint.length>solution.length) {
              for (var j = 0; j < solution.length; j++) {
                if(Math.round10(roadpaint[i].poX,-2) === Math.round10(solution[j].soX,-2) && Math.round10(roadpaint[i].poY,-2) === Math.round10(solution[j].soY,-2)){
                  verific=verific+1;
                  if (primeroCuadro1>-1 && Math.round10(roadpaint[i].poX,-2)==Math.round10(roadpaint[primeroCuadro1].poX,-2)) {
                    valido1=true;
                  };
                  if (primeroCuadro2>-1 && Math.round10(roadpaint[i].poX,-2)==Math.round10(roadpaint[primeroCuadro2].poX,-2)) {
                    valido2=true;
                  };
                  if (j<=3 && primeroCuadro1==-1) {
                    primeroCuadro1=i;
                  }else if (i<=7 && primeroCuadro2==-1) {
                    primeroCuadro2=i;
                  };
                }
              }
            }else{
              i=roadpaint.length
            };  
        }
        if(verific>solution.length && valido1 ){/*&& valido2*/
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;

        }else{
          var wrong =document.getElementById('Wrong').click()
        }
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
     }
/*scripts para el segundo nivel*/
    //las variables generales se pasaron a moves.js
    //inicialización de las variables propias del ejercicio 1
    var solution=[];
    //la variable de positionObj se paso a moves.js
    //el objeto de solutionObj se paso a moves.js
    function begin2(){
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
        solution.splice(0,solution.length);//inicializa los vectores
        canvas = document.getElementById('canvas2');
        ctx = canvas.getContext('2d');
        ancho = document.getElementById('divCanvas').offsetWidth;
        alto = document.getElementById('divCanvas').offsetHeight;

        canvas.width= ancho;
        canvas.height = alto;
        wimg=8;

        stepsizeX=canvas.width/15;
        stepsizeY=canvas.height/10;

        X = stepsizeX*8;
        Y = stepsizeY*4;

        initX=0;
        initY=0;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;

        solution.push(new solutionObj(stepsizeX*8,stepsizeY*4,0,0));//1
        solution.push(new solutionObj(stepsizeX*14,stepsizeY*4,0,0));//2
        solution.push(new solutionObj(stepsizeX*14,stepsizeY*8,0,0));//3
        solution.push(new solutionObj(stepsizeX*8,stepsizeY*8,0,0)); //4


        //solution.push(new solutionObj(stepsizeX*5,stepsizeY*2,0,0));//6
        //solution.push(new solutionObj(stepsizeX*5,stepsizeY*3,0,0));//7

        solution.push(new solutionObj(stepsizeX*7,stepsizeY*5,0,0));//8
        solution.push(new solutionObj(stepsizeX*7,stepsizeY*7,0,0));//9
        solution.push(new solutionObj(stepsizeX*4,stepsizeY*7,0,0));//10
        solution.push(new solutionObj(stepsizeX*4,stepsizeY*5,0,0));//11
        
        
        
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
              ctx.fillStyle = "#E3E2E2";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
          painroad();
          Avatar2();
        }
        imgback.src = "../media/casaBack.png";
      }

    //Drawing avatar
    function Avatar2(){
      var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
      var avatarheight, avatarwith;
      var positionX, positionY;

      img.id = 'imagen';
      //el img.src se cambio para asegurar que siempre haga el onload
      avatarwith=stepsizeX*.2; avatarheight=stepsizeY*.6;

      img.onload = function() {
        ctx.save();
        //se establece un nuevo punto de origen en las posición actual del cursor (donde se pintara la linea)
        ctx.translate(positionObj.objX,positionObj.objY);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        //No es necesario rotar la imagen//ctx.rotate(positionObj.objZ * (Math.PI/180));

        ctx.globalAlpha=1;
        //la imagen se dibuja enposicions negativas para que la punta del brush quede donde debe ir el cursor
        ctx.drawImage(img,-5, -40,avatarwith,avatarheight);
        ctx.restore();
      }
      img.src = '../media/brush.png';//el img.src se pone despues del onload para asegurar su carga
    }
    function check2(){
        var verific=0;
        var valido1=false;
        var valido2=false;
        var primeroCuadro1=-1;
        var primeroCuadro2=-1;
        for (var i = 0; i < roadpaint.length; i++) {
              //alert(roadpaint[i].poColor);
            if (roadpaint.length>solution.length) {
              for (var j = 0; j < solution.length; j++) {
                if(Math.round10(roadpaint[i].poX,-2) === Math.round10(solution[j].soX,-2) && Math.round10(roadpaint[i].poY,-2) === Math.round10(solution[j].soY,-2)){
                  verific=verific+1;
                  if (primeroCuadro1>-1 && Math.round10(roadpaint[i].poX,-2)==Math.round10(roadpaint[primeroCuadro1].poX,-2)) {
                    valido1=true;
                  };
                  if (primeroCuadro2>-1 && Math.round10(roadpaint[i].poX,-2)==Math.round10(roadpaint[primeroCuadro2].poX,-2)) {
                    valido2=true;
                  };
                  if (j<=3 && primeroCuadro1==-1) {
                    primeroCuadro1=i;
                  }else if (i<=7 && primeroCuadro2==-1) {
                    primeroCuadro2=i;
                  };
                }
              }
            }else{
              i=roadpaint.length
            };  
        }
        if(verific>solution.length && valido1 && valido2){/**/
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
          var wrong =document.getElementById('Wrong').click()
        }
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
     }
/*scripts para el tercer nivel*/
      //las variables generales se pasaron a moves.js
      //inicialización de las variables propias del ejercicio 1
      var solution=[];
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
      function begin3(){
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
        solution.splice(0,solution.length);//inicializa los vectores
        canvas = document.getElementById('canvas3');
        ctx = canvas.getContext('2d');
        ancho = document.getElementById('divCanvas').offsetWidth;
        alto = document.getElementById('divCanvas').offsetHeight;

        canvas.width= ancho;
        canvas.height = alto;
        wimg=8;

        stepsizeX=canvas.width/15;
        stepsizeY=canvas.height/10;

        X = stepsizeX*5;
        Y = stepsizeY*2;
        initX=0;
        initY=0;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;

        solution.push(new solutionObj(stepsizeX*8,stepsizeY*4,0,0));//1
        solution.push(new solutionObj(stepsizeX*14,stepsizeY*4,0,0));//2
        solution.push(new solutionObj(stepsizeX*14,stepsizeY*8,0,0));//3
        solution.push(new solutionObj(stepsizeX*8,stepsizeY*8,0,0)); //4


        //solution.push(new solutionObj(stepsizeX*5,stepsizeY*2,0,0));//6
        //solution.push(new solutionObj(stepsizeX*5,stepsizeY*3,0,0));//7

        solution.push(new solutionObj(stepsizeX*7,stepsizeY*5,0,0));//8
        solution.push(new solutionObj(stepsizeX*7,stepsizeY*7,0,0));//9
        solution.push(new solutionObj(stepsizeX*4,stepsizeY*7,0,0));//10
        solution.push(new solutionObj(stepsizeX*4,stepsizeY*5,0,0));//11
        
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
              ctx.fillStyle = "#E3E2E2";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
          painroad();
          Avatar3();
        }
        imgback.src = "../media/casaBack.png";
      }

      //Drawing avatar
      function Avatar3(){
        var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
        var avatarheight, avatarwith;
        var positionX, positionY;

        img.id = 'imagen';
        //el img.src se cambio para asegurar que siempre haga el onload
        avatarwith=stepsizeX*.2; avatarheight=stepsizeY*.6;

        img.onload = function() {
          ctx.save();
          //se establece un nuevo punto de origen en las posición actual del cursor (donde se pintara la linea)
          ctx.translate(positionObj.objX,positionObj.objY);
          ctx.rotate(positionObj.objZ * (Math.PI/180));
          //No es necesario rotar la imagen//ctx.rotate(positionObj.objZ * (Math.PI/180));

          ctx.globalAlpha=1;
          //la imagen se dibuja enposicions negativas para que la punta del brush quede donde debe ir el cursor
          ctx.drawImage(img,-5, -40,avatarwith,avatarheight);
          ctx.restore();
        }
        img.src = '../media/brush.png';//el img.src se pone despues del onload para asegurar su carga
      }
     function check3(){
        var verific=0;
        var valido1=false;
        var valido2=false;
        var primeroCuadro1=-1;
        var primeroCuadro2=-1;
        for (var i = 0; i < roadpaint.length; i++) {
              //alert(roadpaint[i].poColor);
            if (roadpaint.length>solution.length) {
              for (var j = 0; j < solution.length; j++) {
                if(Math.round10(roadpaint[i].poX,-2) === Math.round10(solution[j].soX,-2) && Math.round10(roadpaint[i].poY,-2) === Math.round10(solution[j].soY,-2)){
                  verific=verific+1;
                  if (primeroCuadro1>-1 && Math.round10(roadpaint[i].poX,-2)==Math.round10(roadpaint[primeroCuadro1].poX,-2)) {
                    valido1=true;
                  };
                  if (primeroCuadro2>-1 && Math.round10(roadpaint[i].poX,-2)==Math.round10(roadpaint[primeroCuadro2].poX,-2)) {
                    valido2=true;
                  };
                  if (j<=3 && primeroCuadro1==-1) {
                    primeroCuadro1=i;
                  }else if (i<=7 && primeroCuadro2==-1) {
                    primeroCuadro2=i;
                  };
                }
              }
            }else{
              i=roadpaint.length
            };  
        }
        if(verific>solution.length && valido1 && valido2){/**/
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
          var wrong =document.getElementById('Wrong').click()
        }
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
     }