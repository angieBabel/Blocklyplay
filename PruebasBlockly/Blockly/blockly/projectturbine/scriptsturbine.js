/*scrips para el primer nivel*/
  /*var image;*/
  //las variables generales se pasaron a moves.js
    //la variable de positionObj se paso a moves.js
    //el objeto de solutionObj se paso a moves.js
  function begin1(){
    roadpaint.splice(0,roadpaint.length);//inicializa los vectores
    solucion.splice(0,solucion.length);//inicializa los vectores
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    canvas.width= ancho;
    canvas.height = alto;
    stepsizeX=canvas.width/30 ;
    stepsizeY=canvas.height/20;
    wimg=stepsizeX/2;
    X = stepsizeX*15;
    Y = stepsizeY*10;
    positionObj.objX=stepsizeX*14;
    positionObj.objY=stepsizeY*9;
    positionObj.objZ=0;
    Xaux = positionObj.objX;
    Yaux = positionObj.objY;
    solucion.push(new solutionObj(positionObj.objX,positionObj.objY,0,0));//1
    solucion.push(new solutionObj(positionObj.objX,(positionObj.objY-stepsizeY*5),0,0));//2
    solucion.push(new solutionObj((positionObj.objX+(stepsizeX*2)),(positionObj.objY-stepsizeY*5),0,0));//3
    solucion.push(new solutionObj((positionObj.objX+(stepsizeX*2)),positionObj.objY,0,0)); //4
    solucion.push(new solutionObj((positionObj.objX+(stepsizeX*7)),positionObj.objY,0,0));//5
    solucion.push(new solutionObj((positionObj.objX+(stepsizeX*7)),(positionObj.objY+stepsizeY*2),0,0));//6
    solucion.push(new solutionObj((positionObj.objX+(stepsizeX*2)),(positionObj.objY+stepsizeY*2),0,0));//7
    solucion.push(new solutionObj((positionObj.objX+(stepsizeX*2)),(positionObj.objY+stepsizeY*7),0,0));//8
    solucion.push(new solutionObj(positionObj.objX,(positionObj.objY+stepsizeY*7),0,0));//9
    solucion.push(new solutionObj(positionObj.objX,(positionObj.objY+stepsizeY*2),0,0));//10
    solucion.push(new solutionObj((positionObj.objX-(stepsizeX*5)),(positionObj.objY+stepsizeY*2),0,0));//11
    solucion.push(new solutionObj((positionObj.objX-(stepsizeX*5)),positionObj.objY,0,0));//12
    solucion.push(new solutionObj(positionObj.objX,positionObj.objY,0,0));//13
    panel1();
  }
  //la funcion de stopTimer se paso al archivo de controlFunctions.js
  function panel1(){
    var imgback = new Image();
            imgback.src = "../media/helice4.png";
          ctx.beginPath();
          ctx.clearRect(0,0,ancho,alto);
          ctx.strokeStyle = '#000';//Safari ocupa acceder al valor de la variable
          //linea vertical
          ctx.lineWidth = stepsizeX*1.5;
          ctx.moveTo(X,Y-stepsizeY*6);
          ctx.lineTo(X, Y+stepsizeY*6);
          ctx.stroke();
          //linea horizontal
          ctx.lineWidth = stepsizeY*1.5;
          ctx.moveTo(X-stepsizeX*6,Y);
          ctx.lineTo(X+stepsizeX*6, Y);
          ctx.stroke();
          ctx.closePath();
     imgback.onload = function() {
        
        while(initX<canvas.width-stepsizeX){
          initX=initX+stepsizeX;
            while(initY<canvas.height-stepsizeY){
              initY=initY+stepsizeY;
              ctx.beginPath();
              ctx.fillStyle = "gray";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
        painroad();
        Avatar1();
      }
  }
  //Drawing avatar
  function Avatar1(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
    var positionX, positionY;
    avatarwith=40;avatarheight=40;
    img.id = 'imagen';
    img.onload = function() {
      ctx.save();
      ctx.translate(positionObj.objX,positionObj.objY);
      //ctx.rotate(positionObj.objZ * (Math.PI/180));
      ctx.globalAlpha=1;
      ctx.drawImage(img,0,-stepsizeY,stepsizeX,stepsizeY); 
      ctx.restore();
    }
    img.src = '../media/pincel.png';//el img.src se pone despues del onload para asegurar su carga
  }  
  //Compara si las paradas que hizo el niño estuvieron bien
  function check1(){

    var coincidencias=0;
    //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
    for (var i = 0; i < solucion.length; i++) {
      for (var j = 0; j < roadpaint.length; j++) {
        
        //si en algun punto coinciden incrementa las coincidencias en 1
        if (Math.round10((solucion[i].soX),-2)==roadpaint[j].poX && Math.round10((solucion[i].soY),-2)==roadpaint[j].poY ) {
          //alert(i+'sema '+semaforos[i].soX+','+semaforos[i].soY+' altos '+altos[j].soX+','+altos[j].soY);
          coincidencias+=1;
        }
      }
    }
    //si coincidio en todas las paradas, sin importar el orden lo da por bueno
    if (coincidencias==solucion.length) {
      var correct =document.getElementById('Correct').click()
      //alert('Felicidades haz realizado correctamente el puzzle')
    }else{
      var wrong =document.getElementById('Wrong').click()
      //alert('Esta vez no lo conseguiste, intenta de nuevo')
      
    }
  }   

/*scripts para el segundo nivel*/
  //la variable de positionObj se paso a moves.js
  //el objeto de solutionObj se paso a moves.js
  function begin2(){
      roadpaint.splice(0,roadpaint.length);//inicializa los vectores
      solucion.splice(0,solucion.length);//inicializa los vectores
      canvas = document.getElementById('canvas2');
      ctx = canvas.getContext('2d');
      ancho = document.getElementById('divCanvas').offsetWidth;
      alto = document.getElementById('divCanvas').offsetHeight;
      canvas.width= ancho;
      canvas.height = alto;
      stepsizeX=canvas.width/30 ;
      stepsizeY=canvas.height/22;
      wimg=stepsizeX/2;
      X = stepsizeX*15;
      Y = stepsizeY*11;
      positionObj.objX=X;
      positionObj.objY=Y;
      positionObj.objZ=0;
      Xaux = positionObj.objX;
      Yaux= positionObj.objY;
      panel2();
  }
  //la funcion de stopTimer se paso al archivo de controlFunctions.js
  function panel2(){
    var imgback = new Image();
            imgback.src = "../media/helice4.png";
          ctx.beginPath();
          ctx.clearRect(0,0,ancho,alto);
          ctx.strokeStyle = '#000';
          //linea vertical
          ctx.lineWidth = stepsizeX*1.5;
          ctx.moveTo(X,Y-stepsizeY*6);
          ctx.lineTo(X, Y+stepsizeY*6);
          //linea horizontal
          ctx.lineWidth = stepsizeY*1.5;
          ctx.moveTo(X-stepsizeX*6,Y);
          ctx.lineTo(X+stepsizeX*6, Y);
          //linea diagonal izq
          ctx.lineWidth = stepsizeX*1.5;
          ctx.moveTo(X-stepsizeX*4,Y-stepsizeY*4);
          ctx.lineTo(X+stepsizeX*4,Y+stepsizeY*4);
          //linea diagonal der
          ctx.lineWidth = stepsizeX*1.5;
          ctx.moveTo(X+stepsizeX*4,Y-stepsizeY*4);
          ctx.lineTo(X-stepsizeX*4,Y+stepsizeY*4);
          ctx.stroke();
          ctx.closePath();
     imgback.onload = function() {
        
        while(initX<canvas.width-stepsizeX){
          initX=initX+stepsizeX;
            while(initY<canvas.height-stepsizeY){
              initY=initY+stepsizeY;
              ctx.beginPath();
              ctx.fillStyle = "gray";
              ctx.arc(initX,initY,1.5,0,2*Math.PI);
              ctx.fill();
            }
            initY=0;
        }
        initX=0;
        painroad();
        Avatar2();
      }
  }
  //Drawing avatar
  function Avatar2(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
    var positionX, positionY;
    avatarwith=40;avatarheight=40;
    img.id = 'imagen';
    img.onload = function() {
      ctx.save();
      ctx.translate(positionObj.objX,positionObj.objY);
      //ctx.rotate(positionObj.objZ * (Math.PI/180));
      ctx.globalAlpha=1;
      ctx.drawImage(img,0,-stepsizeY,stepsizeX,stepsizeY); 
      ctx.restore();
    }
    img.src = '../media/pincel.png';//el img.src se pone despues del onload para asegurar su carga
  }  
  //Compara si las paradas que hizo el niño estuvieron bien
  function check2(){
    var coincidencias=0;
    //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
    for (var i = 0; i < solucion.length; i++) {
      if (solucion[i].pX==respuesta[i].pX && solucion[i].pY==respuesta[i].pY && solucion[i].ns==respuesta[i].ns && solucion[i].dirr==respuesta[i].dirr && solucion[i].speed==respuesta[i].speed) {
        coincidencias+=1;
      };
    }
    //si coincidio en todas las paradas, sin importar el orden lo da por bueno
    if (coincidencias==solucion.length) {
      var correct =document.getElementById('Correct').click()
    }else{
      var wrong =document.getElementById('Wrong').click()
      location.reload();
    }
  }