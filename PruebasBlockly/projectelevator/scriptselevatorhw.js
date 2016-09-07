/*scripts para el primer nivel 1*/
  /*var image;*/
  //las variables generales se pasaron a moves.js
  //inicialización de las variables propias del ejercicio 3
    //Posisiones recolectadas por el click
    var clickX,clickY
    var canvas;
    //Variables para saber que piso presiono
    var piso=0;
    //la variable de positionObj se paso a moves.js
    //el objeto de solutionObj se paso a moves.js
  function begin1(){
    solucion.splice(0,solucion.length);//inicializa los vectores
    respuesta.splice(0,respuesta.length);//inicializa los vectores
        screencolor='#009900';
        //solution.splice(0,solution.length);//inicializa los vectores
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    //canvas.addEventListener("mousedown", getPosition, false);
    
    canvas.width= ancho;
    canvas.height = alto;
    stepsizeX=canvas.width/60;
    stepsizeY=canvas.height/40;

    X = stepsizeX*4;
    Y = stepsizeY*4;
    positionObj.objX=X;
    positionObj.objY=Y;
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;
    solucion.push(new motorObj(null,null,4096,'forward',null));
    solucion.push("Piso 1");
    panel1();
  }

  //la funcion de stopTimer se paso al archivo de controlFunctions.js

  function panel1(){
    var imgback = new Image();
            imgback.src = "../media/mesa.png";

     imgback.onload = function() {
      ii=-1;
      jj=-1;
      ctx.drawImage(imgback, 0, 0,ancho,alto);
      while(initX<canvas.width-stepsizeX){
        initX=initX+stepsizeX;
          while(initY<canvas.height-stepsizeY){
            initY=initY+stepsizeY;
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(initX,initY,1.5,0,2*Math.PI);
            ctx.fill();
            ii++;
            //ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
          }
          jj++
          //ctx.fillText(jj,stepsizeX,stepsizeY*jj);
          initY=0;
      }
      initX=0;

        var pantalla = new Image();
            pantalla.src = "../media/screen.png";
        pantalla.onload = function() {
          ctx.drawImage(pantalla, 0,0,stepsizeX*21,stepsizeY*14);
        }
        ctx.drawImage(pantalla, 0,0,stepsizeX*21,stepsizeY*14);
        var motor = new Image();
            motor.src = "../media/motor.png";
        motor.onload = function() {
          ctx.drawImage(motor,stepsizeX*21,stepsizeY*5,stepsizeX*39,stepsizeY*40);
        }
        ctx.drawImage(motor,stepsizeX*21,stepsizeY*5,stepsizeX*39,stepsizeY*40);
        Avatar1();
      }
     // Avatar1();
  }
  //Drawing avatar

  function Avatar1(){
    ctx.fillStyle = screencolor;
    ctx.fillRect(stepsizeX*3,stepsizeY*4,stepsizeX*16,stepsizeY*5);
    ctx.font = stepsizeX+"px Arial";
    ctx.fillStyle = "black";
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    var positionX, positionY;

    img.id = 'imagen';
    img.onload = function() {
        ctx.save();
        ctx.translate(stepsizeX*25.5,stepsizeY*26.5);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        ctx.globalAlpha=1;
        ctx.drawImage(img,-stepsizeX*5,-stepsizeY*5,stepsizeX*10,stepsizeY*10); 
        ctx.restore();
      }
    img.src = '../media/engrane.png';//el img.src se pone despues del onload para asegurar su carga
  }

  function check1(){
        var coincidencias=0;
        //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
        for (var i = 0; i < solucion.length; i++) {
          if (i % 2 == 0) {
            alert(solucion[i].ns+", "+respuesta[i].ns +", "+ solucion[i].dirr+", "+respuesta[i].dirr);
            if (solucion[i].ns==respuesta[i].ns && solucion[i].dirr==respuesta[i].dirr) {
              coincidencias+=1;
            };
          };
        }
        if (respuesta[1].toString().indexOf('1') != -1) {
            coincidencias+=1;
          };
        alert(coincidencias);
        //si coincidio en todas las paradas, sin importar el orden lo da por bueno
        if (coincidencias==solucion.length) {
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
         var wrong =document.getElementById('Wrong').click()
          //location.reload();
        }
      }
/*scripts para el segundo nivel*/
  function begin2(){
    solucion.splice(0,solucion.length);//inicializa los vectores
    respuesta.splice(0,respuesta.length);//inicializa los vectore
        screencolor='#009900';
        //solution.splice(0,solution.length);//inicializa los vectores
    canvas = document.getElementById('canvas2');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    //canvas.addEventListener("mousedown", getPosition, false);
    
    canvas.width= ancho;
    canvas.height = alto;
    stepsizeX=canvas.width/60;
    stepsizeY=canvas.height/40;

    X = stepsizeX*4;
    Y = stepsizeY*4;
    positionObj.objX=X;
    positionObj.objY=Y;
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;
    solucion.push(new motorObj(null,null,8192,'backward',null));
    solucion.push("Piso 2");
    panel2();
  }

  //la funcion de stopTimer se paso al archivo de controlFunctions.js

  function panel2(){
    var imgback = new Image();
            imgback.src = "../media/mesa.png";

     imgback.onload = function() {
      ii=-1;
      jj=-1;
      ctx.drawImage(imgback, 0, 0,ancho,alto);
      while(initX<canvas.width-stepsizeX){
        initX=initX+stepsizeX;
          while(initY<canvas.height-stepsizeY){
            initY=initY+stepsizeY;
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(initX,initY,1.5,0,2*Math.PI);
            ctx.fill();
            ii++;
            //ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
          }
          jj++
          //ctx.fillText(jj,stepsizeX,stepsizeY*jj);
          initY=0;
      }
      initX=0;

        var pantalla = new Image();
            pantalla.src = "../media/screen.png";
        pantalla.onload = function() {
          ctx.drawImage(pantalla, 0,0,stepsizeX*21,stepsizeY*14);
        }
        ctx.drawImage(pantalla, 0,0,stepsizeX*21,stepsizeY*14);
        var motor = new Image();
            motor.src = "../media/motor.png";
        motor.onload = function() {
          ctx.drawImage(motor,stepsizeX*21,stepsizeY*5,stepsizeX*39,stepsizeY*40);
        }
        ctx.drawImage(motor,stepsizeX*21,stepsizeY*5,stepsizeX*39,stepsizeY*40);
        Avatar2();
      }
     // Avatar1();
  }
  //Drawing avatar

  function Avatar2(){
    ctx.fillStyle = screencolor;
    ctx.fillRect(stepsizeX*3,stepsizeY*4,stepsizeX*16,stepsizeY*5);
    ctx.font = stepsizeX+"px Arial";
    ctx.fillStyle = "black";
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    var positionX, positionY;

    img.id = 'imagen';
    img.onload = function() {
        ctx.save();
        ctx.translate(stepsizeX*25.5,stepsizeY*26.5);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        ctx.globalAlpha=1;
        ctx.drawImage(img,-stepsizeX*5,-stepsizeY*5,stepsizeX*10,stepsizeY*10); 
        ctx.restore();
      }
    img.src = '../media/engrane.png';//el img.src se pone despues del onload para asegurar su carga
  }

  function check2(){
        var coincidencias=0;
        //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño


        for (var i = 0; i < solucion.length; i++) {

          if (i % 2 == 0) {
            
            if (solucion[i].ns==respuesta[i].ns && solucion[i].dirr==respuesta[i].dirr) {
              coincidencias+=1;
            };
          };
        }
        if (respuesta[1].toString().indexOf('2') != -1) {
            coincidencias+=1;
          };
        //si coincidio en todas las paradas, sin importar el orden lo da por bueno
        
        if (coincidencias==solucion.length) {
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
         var wrong =document.getElementById('Wrong').click()
          //location.reload();
        }
      }
/*scripts para el tercer nivel*/
  function begin3(){
    solucion.splice(0,solucion.length);//inicializa los vectores
    respuesta.splice(0,respuesta.length);//inicializa los vectore
        screencolor='#009900';
        //solution.splice(0,solution.length);//inicializa los vectores
    canvas = document.getElementById('canvas3');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    //canvas.addEventListener("mousedown", getPosition, false);
    
    canvas.width= ancho;
    canvas.height = alto;
    stepsizeX=canvas.width/60;
    stepsizeY=canvas.height/40;

    X = stepsizeX*4;
    Y = stepsizeY*4;
    positionObj.objX=X;
    positionObj.objY=Y;
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;
    solucion.push(new motorObj(null,null,16384,'forward',null));
    solucion.push("Piso 4");
    solucion.push(new motorObj(null,null,8192,'backward',null));
    solucion.push("Piso 2");
    solucion.push(new motorObj(null,null,4096,'forward',null));
    solucion.push("Piso 3");
    solucion.push(new motorObj(null,null,8192,'backward',null));
    solucion.push("Piso 1");
    panel3();
  }

  //la funcion de stopTimer se paso al archivo de controlFunctions.js

  function panel3(){
    var imgback = new Image();
            imgback.src = "../media/mesa.png";

     imgback.onload = function() {
      ii=-1;
      jj=-1;
      ctx.drawImage(imgback, 0, 0,ancho,alto);
      while(initX<canvas.width-stepsizeX){
        initX=initX+stepsizeX;
          while(initY<canvas.height-stepsizeY){
            initY=initY+stepsizeY;
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(initX,initY,1.5,0,2*Math.PI);
            ctx.fill();
            ii++;
            //ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
          }
          jj++
          //ctx.fillText(jj,stepsizeX,stepsizeY*jj);
          initY=0;
      }
      initX=0;

        var pantalla = new Image();
            pantalla.src = "../media/screen.png";
        pantalla.onload = function() {
          ctx.drawImage(pantalla, 0,0,stepsizeX*21,stepsizeY*14);
        }
        ctx.drawImage(pantalla, 0,0,stepsizeX*21,stepsizeY*14);
        var motor = new Image();
            motor.src = "../media/motor.png";
        motor.onload = function() {
          ctx.drawImage(motor,stepsizeX*21,stepsizeY*5,stepsizeX*39,stepsizeY*40);
        }
        ctx.drawImage(motor,stepsizeX*21,stepsizeY*5,stepsizeX*39,stepsizeY*40);
        Avatar3();
      }
     // Avatar1();
  }
  //Drawing avatar

  function Avatar3(){
    ctx.fillStyle = screencolor;
    ctx.fillRect(stepsizeX*3,stepsizeY*4,stepsizeX*16,stepsizeY*5);
    ctx.font = stepsizeX+"px Arial";
    ctx.fillStyle = "black";
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    var positionX, positionY;

    img.id = 'imagen';
    img.onload = function() {
        ctx.save();
        ctx.translate(stepsizeX*25.5,stepsizeY*26.5);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        ctx.globalAlpha=1;
        ctx.drawImage(img,-stepsizeX*5,-stepsizeY*5,stepsizeX*10,stepsizeY*10); 
        ctx.restore();
      }
    img.src = '../media/engrane.png';//el img.src se pone despues del onload para asegurar su carga
  }

  function check3(){
        var coincidencias=0;
        //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño

        for (var i = 0; i < solucion.length; i++) {
          if (i % 2 == 0) {
            if (solucion[i].ns==respuesta[i].ns && solucion[i].dirr==respuesta[i].dirr) {
              coincidencias+=1;
            };
          };   
        }
        if (respuesta[1].toString().indexOf('4') != -1 && respuesta[3].toString().indexOf('2') != -1 && respuesta[5].toString().indexOf('3') != -1 && respuesta[7].toString().indexOf('1') != -1 ) {
            coincidencias+=4;
          };
        //si coincidio en todas las paradas, sin importar el orden lo da por bueno
        if (coincidencias==solucion.length) {
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
         var wrong =document.getElementById('Wrong').click()
          //location.reload();
        }
      }