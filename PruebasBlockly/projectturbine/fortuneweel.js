exerciseLevels = 3;
/*scripts para el primer nievel*/
    /*var image;*/
    //las variables generales se pasaron a moves.js
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
    function begin1(){
      canvas = document.getElementById('canvas1');
      ctx = canvas.getContext('2d');
      ancho = document.getElementById('divCanvas').offsetWidth;
      alto = document.getElementById('divCanvas').offsetHeight;
      canvas.width= ancho;
      canvas.height = alto;
      stepsizeX=canvas.width/9 ;
      stepsizeY=canvas.height/6;
      X = stepsizeX*1.05;
      Y = stepsizeY*4.8;
      positionObj.objX=X;
      positionObj.objY=Y;
      positionObj.objZ=0;
      Xaux = positionObj.objX;
      Yaux= positionObj.objY;
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),4096,'forward',null));
      panel1();
    }
    //la funcion de stopTimer se paso al archivo de controlFunctions.js
    function panel1(){
      var imgback = new Image();
              imgback.src = "../media/interactiveCard.png";
       imgback.onload = function() {
        ctx.drawImage(imgback, 0,0,canvas.width,canvas.height);
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
          Avatar1();
        }
    }
    //Drawing avatar
    function Avatar1(){
      var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
      var positionX, positionY;
      img.id = 'imagen';
      img.onload = function() {
        ctx.save();
        ctx.translate(positionObj.objX,positionObj.objY);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        ctx.globalAlpha=1;
        ctx.drawImage(img,-stepsizeX*.95,-stepsizeY*.95,stepsizeX*1.9,stepsizeY*1.9); 
        ctx.restore();
      }
      img.src = '../media/TURBINA.png';//el img.src se pone despues del onload para asegurar su carga
    }  
    //Compara si las paradas que hizo el niño estuvieron bien
      function check1(){
        var correct =document.getElementById('Correct').click();
        /*var coincidencias=0;
        //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
        for (var i = 0; i < solucion.length; i++) {
          if (solucion[i].pX==respuesta[i].pX && solucion[i].pY==respuesta[i].pY && solucion[i].ns==respuesta[i].ns && solucion[i].dirr==respuesta[i].dirr && solucion[i].speed==respuesta[i].speed) {
            coincidencias+=1;
          };
        }
        //si coincidio en todas las paradas, sin importar el orden lo da por bueno
        if (coincidencias==solucion.length) {
          var correct =document.getElementById('Correct').click()
          correcto[currentpanel-1]=true;
        }else{
         var wrong =document.getElementById('Wrong').click()
          location.reload();
        }*/
      }