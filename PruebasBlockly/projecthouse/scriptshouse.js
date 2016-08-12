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

        X = stepsizeX*6;
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
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*2,0,0));//1
        solution.push(new solutionObj(stepsizeX*11,stepsizeY*2,0,0));//2
        solution.push(new solutionObj(stepsizeX*11,stepsizeY*5,0,0));//3
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*5,0,0)); //4
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*2,0,0)); //5
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
        imgback.src = "../media/mapa_casa.png";
      }

      //Drawing avatar
      function Avatar1(){
        var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
        var avatarheight, avatarwith;
        var positionX, positionY;

        img.id = 'imagen';
        //el img.src se cambio para asegurar que siempre haga el onload
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
      var verific=0;
        for (var i = 0; i < solution.length; i++) {
              //alert(roadpaint[i].poColor);
            if (roadpaint.length==solution.length) {
              if(Math.round10(roadpaint[i].poX,-2) === Math.round10(solution[i].soX,-2) && Math.round10(roadpaint[i].poY,-2) === Math.round10(solution[i].soY,-2)){
                verific=verific+1;
              }
            }else{
              i=solution.length
            };  
        }
        //alert(verific);
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
        //alert(verific);
        if(verific===solution.length){
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

        X = stepsizeX*6;
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

        solution.push(new solutionObj(stepsizeX*6,stepsizeY*2,0,0));//1
        solution.push(new solutionObj(stepsizeX*11,stepsizeY*2,0,0));//2
        solution.push(new solutionObj(stepsizeX*11,stepsizeY*5,0,0));//3
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*5,0,0)); //4
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*2,0,0)); //5


        solution.push(new solutionObj(stepsizeX*5,stepsizeY*2,0,0));//6
        solution.push(new solutionObj(stepsizeX*5,stepsizeY*3,0,0));//7

        solution.push(new solutionObj(stepsizeX*5,stepsizeY*5,0,0));//9
        solution.push(new solutionObj(stepsizeX*3,stepsizeY*5,0,0));//10
        solution.push(new solutionObj(stepsizeX*3,stepsizeY*3,0,0));//11

        solution.push(new solutionObj(stepsizeX*5,stepsizeY*3,0,0));//8
        
        
        
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
        imgback.src = "../media/mapa_casa.png";
      }

    //Drawing avatar
    function Avatar2(){
      var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
      var avatarheight, avatarwith;
      var positionX, positionY;

      img.id = 'imagen';
      //el img.src se cambio para asegurar que siempre haga el onload
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

     function check2(){
        var verific=0;
        for (var i = 0; i < solution.length; i++) {
              //alert(Math.round10(roadpaint[i].poX,-2)+' , '+ Math.round10(solution[i].soX,-2)+' SEP  '+Math.round10(roadpaint[i].poY,-2)+' , '+ Math.round10(solution[i].soY,-2));
            if (roadpaint.length==solution.length) {
              if(Math.round10(roadpaint[i].poX,-2) === Math.round10(solution[i].soX,-2) && Math.round10(roadpaint[i].poY,-2) === Math.round10(solution[i].soY,-2)){
                verific=verific+1;
              }
            }else{
              i=solution.length
            };  
        }
        //alert(verific);
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
        //alert(verific);
        if(verific===solution.length){
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

        X = stepsizeX*2;
        Y = stepsizeY;
        initX=0;
        initY=0;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;

        /*solution.push(new solutionObj(stepsizeX*2,stepsizeY,0,0));//1*/
        solution.push(new solutionObj(stepsizeX*2,stepsizeY,0,0));//1
        solution.push(new solutionObj(stepsizeX*6,stepsizeY,0,0));//2
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*2,0,0));//3
        solution.push(new solutionObj(stepsizeX*11,stepsizeY*2,0,0));//4
        solution.push(new solutionObj(stepsizeX*11,stepsizeY*5,0,0));//5
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*5,0,0));//6
        solution.push(new solutionObj(stepsizeX*6,stepsizeY*2,0,0)); //7
        solution.push(new solutionObj(stepsizeX*5,stepsizeY*2,0,0)); //8
        solution.push(new solutionObj(stepsizeX*5,stepsizeY*3,0,0));//9
        solution.push(new solutionObj(stepsizeX*5,stepsizeY*5,0,0));//10
        solution.push(new solutionObj(stepsizeX*3,stepsizeY*5,0,0));//11
        solution.push(new solutionObj(stepsizeX*3,stepsizeY*3,0,0));//12
        solution.push(new solutionObj(stepsizeX*5,stepsizeY*3,0,0));//13
        
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
        imgback.src = "../media/mapa_casa.png";
      }

      //Drawing avatar
      function Avatar3(){
        var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
        var avatarheight, avatarwith;
        var positionX, positionY;

        img.id = 'imagen';
        //el img.src se cambio para asegurar que siempre haga el onload
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

     function check3(){
        var verific=0;
        alert(roadpaint.length+' , '+solution.length)
        for (var i = 0; i < solution.length; i++) {
              alert('punto '+i+':  '+Math.round10(roadpaint[i].poX,-2)+' , '+ Math.round10(solution[i].soX,-2)+' SEP  '+Math.round10(roadpaint[i].poY,-2)+' , '+ Math.round10(solution[i].soY,-2));
            if (roadpaint.length==solution.length) {
              if(Math.round10(roadpaint[i].poX,-2) === Math.round10(solution[i].soX,-2) && Math.round10(roadpaint[i].poY,-2) === Math.round10(solution[i].soY,-2)){
                verific=verific+1;
              }
            }else{
              i=solution.length
            };  
        }
        //alert(verific);
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
        //alert(verific);
        if(verific===solution.length){
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;

        }else{
          var wrong =document.getElementById('Wrong').click()
        }
        roadpaint.splice(0,roadpaint.length);//inicializa los vectores
     }