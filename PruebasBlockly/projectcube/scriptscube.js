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
        Y = stepsizeY*6.5;
        //se inicializa la posicion del objeto, aqui es donde se pintara la linea
        positionObj.objX=X;//350;
        positionObj.objY=Y;//142;
        positionObj.objZ=0;
        //se inicializan los valores auxiliares para poder pintar
        Xaux = positionObj.objX;
        Yaux= positionObj.objY;
        panel1();

      }
      //la funcion de stopTimer se paso al archivo de controlFunctions.js
       function panel1(){
          var imgback = new Image();
                  imgback.src = "../media/cuboBack.png";
                
           imgback.onload = function() {
            ctx.drawImage(imgback, 0, 0,ancho,alto);
              
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
              var carro = new Image();
                  carro.src = "../media/avatarFront2.png";
              carro.onload = function() {
                ctx.drawImage(carro, (stepsizeX*10),(stepsizeY*6.5),stepsizeX*.5,stepsizeY*1.5);
              }
              ctx.drawImage(carro, (stepsizeX*10),(stepsizeY*6.5),stepsizeX*.5,stepsizeY*1.5);
              Avatar1();
            }
        }

      //Drawing avatar
      function Avatar1(){
        var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
        var avatarheight, avatarwith;
        var positionX, positionY;

        img.id = 'imagen';
        //el img.src se cambio para asegurar que siempre haga el onload
        avatarwith=stepsizeX;avatarheight=stepsizeY*1.5;

        img.onload = function() {
          ctx.save();
          //se establece un nuevo punto de origen en las posición actual del cursor (donde se pintara la linea)
          ctx.translate(positionObj.objX,positionObj.objY);
          //No es necesario rotar la imagen//ctx.rotate(positionObj.objZ * (Math.PI/180));

          ctx.globalAlpha=1;
          //la imagen se dibuja enposicions negativas para que la punta del pincel quede donde debe ir el cursor
          ctx.drawImage(img,0, 0,avatarwith,avatarheight);
          ctx.restore();
        }
        img.src = '../media/avatar_boy_scooter.png';//el img.src se pone despues del onload para asegurar su carga
      }

      function check1(){
        if (Math.round10(positionObj.objX,-2) == Math.round10(stepsizeX*9,-2)) {
            var correct =document.getElementById('Correct').click()
            correcto[currentpanel-1]=true;
            //alert('Felicidades haz completado correctamente el puzzle');
          }
          else{
            var wrong =document.getElementById('Wrong').click()
            //alert('Esta vez no lo conseguiste, intenta de nuevo');
          }
      }