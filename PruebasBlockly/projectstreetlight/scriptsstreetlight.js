exerciseLevels = 3;
/*scripts para el primer nivel*/
  //vector de posiciones donde estaban los semaforos y donde hizo un alto
  var semaforos=[],altos=[]; 
  //primer funcion donde se inicializan todo el canvas
  function begin1(){
    wimg=20
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    canvas.width= ancho;
    canvas.height = alto;
   
    stepsizeX=canvas.width/30;
    stepsizeY=canvas.height/20;

    X = stepsizeX*12;
    Y = stepsizeY*18;
    positionObj.objX=X;
    positionObj.objY=Y;
    positionObj.objZ=0;
    //roadpaint.push(X+","+Y);
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;

    semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*14,-2),0,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*3,-2),0,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*13,-2),Math.round10(stepsizeY*9,-2),0,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*3,-2),Math.round10(stepsizeY*9,-2),0,0));

    
    panel1();
  }
  //dibuja el panel
  function panel1(){
    var imgback = new Image();
          imgback.src = "../media/semaforo_dibujo.png";

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
            ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
          }
          jj++
          ctx.fillText(jj,stepsizeX,stepsizeY*jj);
          initY=0;
      }
      initX=0;
      painroad();
      var semaforo = new Image();
          semaforo.src = "../media/stop_light.png";
     semaforo.onload = function() {
      ctx.save();
      ctx.translate(stepsizeX*23,stepsizeY*14);
      ctx.rotate(90 * (Math.PI/180));
      ctx.drawImage(semaforo, 0,0,stepsizeX*.3,stepsizeY*.8);
      ctx.restore();
        
        //ctx.drawImage(semaforo, (stepsizeX*25),(stepsizeY*1.5),stepsizeX*.3,stepsizeY*.8);
        //ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        //ctx.drawImage(semaforo, (stepsizeX*4),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        
      }
      ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*12),stepsizeX,stepsizeY*1.5);
      ctx.drawImage(semaforo, (stepsizeX*25),(stepsizeY*1.5),stepsizeX,stepsizeY*1.5);
      //ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
      //ctx.drawImage(semaforo, (stepsizeX*4),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        
      Avatar1();
    }

  }
  //para saber si va a girar o no
  var angle=0;
  //Drawing avatar
  function Avatar1(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    img.id = 'imagen';

    avatarwith=40;avatarheight=20;
    img.onload = function() {
      ctx.save();
      ctx.translate(positionObj.objX,positionObj.objY);
      ctx.rotate(positionObj.objZ * (Math.PI/180));
      ctx.globalAlpha=1;

      if (angle!=positionObj.objZ) {
        angle=positionObj.objZ;
        if (luz==1) {
            luces(20,0,lightside);
          }
        if (luzTrasera==1) {
          lucesTraseras(-20,0,lightside);
        }
        ctx.drawImage(img,-20,-10,avatarwith,avatarheight);
      }else{
        if (luz==1) {
            luces(0,0,lightside);
          }
        if (luzTrasera==1) {
          lucesTraseras(-40,0,lightside);
        }
        ctx.drawImage(img,-40,-10,avatarwith,avatarheight);
      }
      ctx.restore();
    }
    img.src = '../media/car.png';//el img.src se pone despues del onload para asegurar su carga
  }
  //Compara si las paradas que hizo el niño estuvieron bien
  function check1(){
    var coincidencias=0;
    //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
    for (var i = 0; i < semaforos.length; i++) {
      for (var j = 0; j < altos.length; j++) {

        //si en algun punto coinciden incrementa las coincidencias en 1
        if (semaforos[i].soX==altos[j].soX && semaforos[i].soY==altos[j].soY ) {
          //alert(i+'sema '+semaforos[i].soX+','+semaforos[i].soY+' altos '+altos[j].soX+','+altos[j].soY);
          coincidencias+=1;
        }
      }
    }
    //si coincidio en todas las paradas, sin importar el orden lo da por bueno
    if (coincidencias==semaforos.length) {
      var correct =document.getElementById('Correct').click()
      correcto[currentpanel-1]=true;
      //alert('Felicidades haz realizado correctamente el puzzle')
    }else{
      var wrong =document.getElementById('Wrong').click()
      //alert('Te ha faltado hacer una parada')
    }
  }
/*scripts para el segundo nivel*/
  //vector de posiciones donde estaban los semaforos y donde hizo un alto
  var semaforos=[],altos=[]; 
  //primer funcion donde se inicializan todo el canvas
  function begin2(){
    wimg=20
    canvas = document.getElementById('canvas2');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    canvas.width= ancho;
    canvas.height = alto;
    stepsizeX=canvas.width/30;
    stepsizeY=canvas.height/20;

    X = stepsizeX*15;
    Y = stepsizeY*14;

    positionObj.objX=X;
    positionObj.objY=Y;
    positionObj.objZ=0;
    //roadpaint.push(X+","+Y);
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;

    semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*14,-2),0,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*3,-2),0,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*13,-2),Math.round10(stepsizeY*9,-2),0,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*3,-2),Math.round10(stepsizeY*9,-2),0,0));
    
    panel2();
  }
  //dibuja el panel
   function panel2(){
    var imgback = new Image();
          imgback.src = "../media/semaforo_dibujo.png";

   imgback.onload = function() {
    ii=-1;
              jj=-1;
      ctx.drawImage(imgback, 0, 0,ancho,alto);
      while(initX<canvas.width-stepsizeX){
        initX=initX+stepsizeX;
          while(initY<canvas.height-stepsizeY){
            initY=initY+stepsizeY;
            ctx.beginPath();
            ctx.fillStyle = "#E3E2E2";
            ctx.arc(initX,initY,1.5,0,2*Math.PI);
            ctx.fill();
            ii++;
            ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
          }
          jj++
          ctx.fillText(jj,stepsizeX,stepsizeY*jj);
          initY=0;
      }
      initX=0;
      painroad();
      var semaforo = new Image();
          semaforo.src = "../media/stop_light.png";
     semaforo.onload = function() {
        ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*12),stepsizeX,stepsizeY*1.5);
        ctx.drawImage(semaforo, (stepsizeX*25),(stepsizeY*1.5),stepsizeX,stepsizeY*1.5);
        ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        ctx.drawImage(semaforo, (stepsizeX*4),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        
      }
      ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*12),stepsizeX,stepsizeY*1.5);
      ctx.drawImage(semaforo, (stepsizeX*25),(stepsizeY*1.5),stepsizeX,stepsizeY*1.5);
      ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
      ctx.drawImage(semaforo, (stepsizeX*4),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        
      Avatar2();
    }

  }
  //para saber si va a girar o no
  var angle=0;
  //Drawing avatar
  function Avatar2(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    img.id = 'imagen';

    avatarwith=40;avatarheight=20;
    img.onload = function() {
      ctx.save();
      ctx.translate(positionObj.objX,positionObj.objY);
      ctx.rotate(positionObj.objZ * (Math.PI/180));
      ctx.globalAlpha=1;

      if (angle!=positionObj.objZ) {
        angle=positionObj.objZ;
        if (luz==1) {
            luces(20,0,lightside);
          }
        if (luzTrasera==1) {
          lucesTraseras(-20,0,lightside);
        }
        ctx.drawImage(img,-20,-10,avatarwith,avatarheight);
      }else{
        if (luz==1) {
            luces(0,0,lightside);
          }
        if (luzTrasera==1) {
          lucesTraseras(-40,0,lightside);
        }
        ctx.drawImage(img,-40,-10,avatarwith,avatarheight);
      }
      ctx.restore();
    }
    img.src = '../media/car.png';//el img.src se pone despues del onload para asegurar su carga
  }
  //Compara si las paradas que hizo el niño estuvieron bien
  function check2(){
    var coincidencias=0;
    //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
    for (var i = 0; i < semaforos.length; i++) {
      for (var j = 0; j < altos.length; j++) {

        //si en algun punto coinciden incrementa las coincidencias en 1
        if (semaforos[i].soX==altos[j].soX && semaforos[i].soY==altos[j].soY ) {
          //alert(i+'sema '+semaforos[i].soX+','+semaforos[i].soY+' altos '+altos[j].soX+','+altos[j].soY);
          coincidencias+=1;
        }
      }
    }
    //si coincidio en todas las paradas, sin importar el orden lo da por bueno
    if (coincidencias==semaforos.length) {
      var correct =document.getElementById('Correct').click()
      correcto[currentpanel-1]=true;
      //alert('Felicidades haz realizado correctamente el puzzle')
    }else{
      var wrong =document.getElementById('Wrong').click()
      //alert('Te ha faltado hacer una parada')
    }
  }
/*scripts para el segundo nivel*/
  //vector de posiciones donde estaban los semaforos y donde hizo un alto
  var semaforos=[],altos=[]; 
  //primer funcion donde se inicializan todo el canvas
  function begin3(){
    wimg=20
    canvas = document.getElementById('canvas3');
    ctx = canvas.getContext('2d');
    ancho = document.getElementById('divCanvas').offsetWidth;
    alto = document.getElementById('divCanvas').offsetHeight;
    canvas.width= ancho;
    canvas.height = alto;
   
    stepsizeX=canvas.width/30;
    stepsizeY=canvas.height/20;

    X = stepsizeX*15;
    Y = stepsizeY*14;
    positionObj.objX=X;
    positionObj.objY=Y;
    positionObj.objZ=0;
    //roadpaint.push(X+","+Y);
    Xaux = positionObj.objX;
    Yaux= positionObj.objY;

    semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*14,-2),2,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*24,-2),Math.round10(stepsizeY*3,-2),4,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*13,-2),Math.round10(stepsizeY*9,-2),3,0));
    semaforos.push(new solutionObj(Math.round10(stepsizeX*3,-2),Math.round10(stepsizeY*9,-2),5,0));
    
    panel3();
  }
  //dibuja el panel
   function panel3(){
    var imgback = new Image();
          imgback.src = "../media/semaforo_dibujo.png";

   imgback.onload = function() {
    ii=-1;
              jj=-1;
      ctx.drawImage(imgback, 0, 0,ancho,alto);
      while(initX<canvas.width-stepsizeX){
        initX=initX+stepsizeX;
          while(initY<canvas.height-stepsizeY){
            initY=initY+stepsizeY;
            ctx.beginPath();
            ctx.fillStyle = "#E3E2E2";
            ctx.arc(initX,initY,1.5,0,2*Math.PI);
            ctx.fill();
            ii++;
            ctx.fillText(ii+1,stepsizeX*(ii+1),stepsizeY);
          }
          jj++
          ctx.fillText(jj,stepsizeX,stepsizeY*jj);
          initY=0;
      }
      initX=0;
      painroad();
      var semaforo = new Image();
          semaforo.src = "../media/stop_light.png";
      semaforo.onload = function() {
        ctx.fillStyle = "red";
        ctx.font = "20px Arial";
        ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*12),stepsizeX,stepsizeY*1.5);
        ctx.fillText(2,stepsizeX*23,stepsizeY*12);
        ctx.drawImage(semaforo, (stepsizeX*25),(stepsizeY*1.5),stepsizeX,stepsizeY*1.5);
        ctx.fillText(4,stepsizeX*25,stepsizeY*1.5);
        ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        ctx.fillText(3,stepsizeX*13,stepsizeY*7);
        ctx.drawImage(semaforo, (stepsizeX*4),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
        ctx.fillText(5,stepsizeX*4,stepsizeY*7);
        
      }
      ctx.fillStyle = "red";
      ctx.font = "20px Arial";
      ctx.drawImage(semaforo, (stepsizeX*23),(stepsizeY*12),stepsizeX,stepsizeY*1.5);
      ctx.fillText(2,stepsizeX*23,stepsizeY*12);
      ctx.drawImage(semaforo, (stepsizeX*25),(stepsizeY*1.5),stepsizeX,stepsizeY*1.5);
      ctx.fillText(4,stepsizeX*25,stepsizeY*1.5);
      ctx.drawImage(semaforo, (stepsizeX*13),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
      ctx.fillText(3,stepsizeX*13,stepsizeY*7);
      ctx.drawImage(semaforo, (stepsizeX*4),(stepsizeY*7),stepsizeX,stepsizeY*1.5);
      ctx.fillText(5,stepsizeX*4,stepsizeY*7);
        
      Avatar3();
    }

  }
  //para saber si va a girar o no
  var angle=0;
  //Drawing avatar
  function Avatar3(){
    var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari

    img.id = 'imagen';

    avatarwith=40;avatarheight=20;
    img.onload = function() {
      ctx.save();
      ctx.translate(positionObj.objX,positionObj.objY);
      ctx.rotate(positionObj.objZ * (Math.PI/180));
      ctx.globalAlpha=1;

      if (angle!=positionObj.objZ) {
        angle=positionObj.objZ;
        if (luz==1) {
            luces(20,0,lightside);
          }
        if (luzTrasera==1) {
          lucesTraseras(-20,0,lightside);
        }
        ctx.drawImage(img,-20,-10,avatarwith,avatarheight);
      }else{
        if (luz==1) {
            luces(0,0,lightside);
          }
        if (luzTrasera==1) {
          lucesTraseras(-40,0,lightside);
        }
        ctx.drawImage(img,-40,-10,avatarwith,avatarheight);
      }
      ctx.restore();
    }
    img.src = '../media/car.png';//el img.src se pone despues del onload para asegurar su carga
  }
  //Compara si las paradas que hizo el niño estuvieron bien
  function check3(){
    var coincidencias=0;
    //ciclo anidado que recorre y compara todos los elementos del vector solucion, contra todos los del vector respuesta del niño
    for (var i = 0; i < semaforos.length; i++) {
      for (var j = 0; j < altos.length; j++) {

        //si en algun punto coinciden incrementa las coincidencias en 1
        if (semaforos[i].soX==altos[j].soX && semaforos[i].soY==altos[j].soY && semaforos[i].soZ==altos[j].soZ ) {
          //alert(i+'sema '+semaforos[i].soX+','+semaforos[i].soY+' altos '+altos[j].soX+','+altos[j].soY);
          coincidencias+=1;
        }
      }
    }
    alert(coincidencias+' coincidencias');
    //si coincidio en todas las paradas, sin importar el orden lo da por bueno
    if (coincidencias==semaforos.length) {
      var correct =document.getElementById('Correct').click()
      correcto[currentpanel-1]=true;
      //alert('Felicidades haz realizado correctamente el puzzle')
    }else{
      var wrong =document.getElementById('Wrong').click()
      //alert('Te ha faltado hacer una parada')
    }
  }