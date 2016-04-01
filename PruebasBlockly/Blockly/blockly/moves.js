var degreesToRadian = function (deg) {
   return deg * Math.PI / 180;
};
//motion functions
function forward(nosteps){
  acabo=0;
  distX=Math.round(Math.cos(degreesToRadian(positionObj.objZ)))*(nosteps*stepsize);
  distY=Math.round(Math.sin(degreesToRadian(positionObj.objZ)))*(nosteps*stepsize);
  limtX = positionObj.objX + distX;
  limtY = positionObj.objY + distY;
  i=0;
  interval= setInterval(function(){
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.beginPath();
    //cuadrante inf derecho
    if (positionObj.objZ>=0 && positionObj.objZ<90) {
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;

      }
    }
    //cuadrante inf izq
    if (positionObj.objZ>=90 && positionObj.objZ<180) {
      if(Xaux>limtX || Yaux<limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;

      }
    }
    //cuadrante superior izquierdo
    if (positionObj.objZ>=180 && positionObj.objZ<270) {
      if(Xaux>limtX || Yaux>limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;

      }
    }
    //cuadrante superior derecho
    if (positionObj.objZ>=270 && positionObj.objZ<360) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
      }
    }
    panel();
    path();
    i++;
    if(i==nosteps){
      stopTimer();
      acabo=1;
    }
  },300);
  road.push(positionObj.objX+","+positionObj.objY);
}

function backward(nosteps){
  acabo=0;
  distX=Math.round(Math.cos(degreesToRadian(positionObj.objZ)))*(nosteps*stepsize);
  distY=Math.round(Math.sin(degreesToRadian(positionObj.objZ)))*(nosteps*stepsize);
  limtX = positionObj.objX - distX;
  limtY = positionObj.objY - distY;
  i=0;
  interval= setInterval(function(){
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.beginPath();
    //cuadrante inf derecho
    if (positionObj.objZ>=0 && positionObj.objZ<90) {
      if(Xaux>limtX || Yaux>limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;

      }
    }
    //cuadrante inf izq
    if (positionObj.objZ>=90 && positionObj.objZ<180) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;

      }
    }
    //cuadrante superior izquierdo
    if (positionObj.objZ>=180 && positionObj.objZ<270) {
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;

      }
    }
    //cuadrante superior derecho
    if (positionObj.objZ>=270 && positionObj.objZ<360) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
        rotar(positionObj.objZ, '"ahead"');
        positionObj.objX=Xaux;
        positionObj.objY=Yaux;
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
      }
    }
    panel();
    path();
    i++;
    if(i==nosteps){
      stopTimer();
      acabo=1;
    }
  },300);
}

function rotar(angulo, side){
  if (side=='left') {
    angulo*= -1;
    positionObj.objZ+=angulo;
    /*alert('izq'+positionObj.objZ);*/
    /*return  code= "rotar(" + positionObj.objZ +");\n";*/
  }else if(side=='right') {
    positionObj.objZ+=angulo;
    /*alert('derecha'+positionObj.objZ);*/
    /*return  code= "rotar(" + positionObj.objZ +");\n";*/
  }else{
    /*alert('no entro '+positionObj.objZ);*/
  }

  if (positionObj.objZ<0) {
      positionObj.objZ+=360;
    }
  if (positionObj.objZ>=360) {
      positionObj.objZ-=360;
    }
  ctx.clearRect(0,0,canvas.width,canvas.height);
  panel();
  path();
  ctx.save();
  ctx.translate(positionObj.objX,positionObj.objY);
  ctx.rotate(positionObj.objZ * (Math.PI/180));
  ctx.drawImage(img, -20,-10,40,20);
  ctx.restore();
}

function sound(sonido){
  var audio = new Audio('audios/'+sonido);
  audio.play();
}

function wait(secs){
  acabo=0;
  intermitentes=setInterval(function(){
    alert('prende/apaga luces');
  },100);
  interv= setInterval(function(){
    acabo=1;
    clearInterval(intermitentes);
    clearInterval(interv);
  },secs*1000);
}

function upward(nosteps){
  acabo=0;
  limtY=positionObj.objY-(nosteps*stepsize);
  i=0;
  interval= setInterval(function (){
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.beginPath();
      if(Yaux>limtY){
        Yaux=Yaux-stepsize;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        /*positionObj.objZ=270;*/
        if ((positionObj.objZ % 270)==0 || (positionObj.objZ % 90)==0 ) {
          rotar(positionObj.objZ);
        } else {
          alert('Debes de rotar el vehiculo hacía arriba');
          stopTimer();
         location.reload()
        }
        /*ctx.drawImage(img,positionObj.objX-10,Yaux-20,40,20);*/
        /*ctx.fill();
        ctx.stroke();*/
        positionObj.objY=Yaux;
      }
    panel();
    path();
    i++;
    if (i==nosteps) {
      stopTimer();
      acabo=1;
    }
  },300);
}

function downward(nosteps){
  acabo=0;
  limtY=positionObj.objY+(nosteps*stepsize);
  i=0;
  interval= setInterval(function (){
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";
    ctx.beginPath();
      if(Yaux<limtY){
        Yaux=Yaux+stepsize;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        /*positionObj.objZ=90;*/
        if ((positionObj.objZ % 270)==0 || (positionObj.objZ % 90)==0 ) {
          rotar(positionObj.objZ);
        } else {
          alert('Debes de rotar el vehiculo hacía abajo');
          stopTimer();
          location.reload()
        }
        /*ctx.drawImage(img,positionObj.objX-10,Yaux-20,40,20);*/
        /*ctx.arc(positionObj.objX,Yaux,r,0,2*Math.PI);*/
        positionObj.objY=Yaux;
      }
    panel();
    path();
    i++;
    if (i==nosteps) {
      stopTimer();
      acabo=1;
    }
  },300);
}

function forward(nosteps){
      //alert(positionObj.objX+","+positionObj.objY);
      //alert(roadpaint.length);
      limtX = positionObj.objX + (nosteps*stepsize);

      i=0;
      interval= setInterval(function(){
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.beginPath();
          if(Xaux<limtX){
            Xaux=Xaux+stepsize;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            paint(Xaux,positionObj.objY,nosteps);
            path();
            ctx.drawImage(img, Xaux-20, positionObj.objY-10,40,20);

            /*ctx.arc(Xaux,positionObj.objY,r,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();*/
            positionObj.objX=Xaux;
          }
        panel();

        i++;
        if(i==nosteps){
          stopTimer();
          upward(5);
          //giro(90);
        }
      },200);
    }

    function backward(nosteps){
      limtX= positionObj.objX - (nosteps*stepsize);
      i=0;
      interval= setInterval(function(){
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.beginPath();
          if(Xaux>limtX){
            Xaux=Xaux -stepsize;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            paint(Xaux,positionObj.objY,nosteps);
            path();
            ctx.drawImage(img, Xaux-20, positionObj.objY-10,40,20);
            /*ctx.arc(Xaux,positionObj.objY,r,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();*/
            positionObj.objX=Xaux;
          }
        panel();

        i++;
        if (i==nosteps) {
          stopTimer();
          downward(5);
        }
      },200);
    }

    function upward(nosteps){
      limtY=positionObj.objY-(nosteps*stepsize);
      i=0;
      interval= setInterval(function (){
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.beginPath();
          if(Yaux>limtY){
            Yaux=Yaux-stepsize;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            paint(positionObj.objX,Yaux,nosteps);
            path();
            ctx.drawImage(img, positionObj.objX-20, Yaux-10,40,20);
            giro(270);
            /*ctx.arc(positionObj.objX,Yaux,r,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();*/
            positionObj.objY=Yaux;
          }
        panel();

        i++;
        if (i==nosteps) {
          stopTimer();
          backward(5);
        }
      },200);
    }

    function downward(nosteps){
      limtY=positionObj.objY+(nosteps*stepsize);
      i=0;
      interval= setInterval(function (){
        ctx.strokeStyle = "#006400";
        ctx.fillStyle = "#6ab150";
        ctx.beginPath();
          if(Yaux<limtY){
            Yaux=Yaux+stepsize;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            paint(positionObj.objX,Yaux,nosteps);
            path();
            ctx.drawImage(img, Xaux-20, positionObj.objY-10,40,20);
            /*ctx.arc(positionObj.objX,Yaux,r,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();*/
            positionObj.objY=Yaux;
          }
        panel();

        i++;
        if (i==nosteps) {
          stopTimer();
        }
      },200);
    }
    //Drawing avatar
    function Avatar(){

      img.src = '../../media/carro.png';
      img.id = 'imagen';
      img.onload = function() {
          ctx.drawImage(img,X-20,Y-10,himg,wimg);
          //giro();
          //giro(270);
      }
    }
    function paint(Xend,Yend, no_steps){
      //roadpaint.push(positionObj.objX + ','+ positionObj.objY);
      var srt;
      var res;
      var yinit, xinit;
      //alert(no_steps);

      //alert(roadpaint.length);
      ctx.beginPath();
      ctx.strokeStyle = "#63FFB2";
      ctx.lineWidth = wimg;
      var exe=wimg/2;

      if (roadpaint.length==1) {
        srt= roadpaint[0];
      }else{

        painroad();
        srt=roadpaint[roadpaint.length-1];

      }
      res = srt.split(",");


      ctx.moveTo(parseFloat(res[0]), res[1]);//(x,y)
      ctx.lineTo(Xend, Yend);
      count++;

      if (count===no_steps) {
        roadpaint.push(Xend+","+Yend);
        count=0;
      }


        ctx.stroke();

    }
    function painroad(){

      var yinit, xinit;
      ctx.beginPath();
      ctx.strokeStyle = "#63FFB2";
      ctx.lineWidth = wimg;
      var exe=wimg/2;

      for (var i = 0; i < roadpaint.length-1; i++) {
          //alert(roadpaint.length);
          //alert(i);
          MT=roadpaint[i];
          resMT=MT.split(",");
          ctx.moveTo(parseFloat(resMT[0]),resMT[1]);

          LT=roadpaint[i+1];
          resLT=LT.split(",");
          //alert(parseFloat(resMT[0]) + " a "+ parseFloat(resLT[0]));
          //alert(parseFloat(resMT[1]) + " a "+ parseFloat(resLT[1]));

          if (parseFloat(resMT[0]) > parseFloat(resLT[0])) {
            xinit= parseFloat(resLT[0]) - exe;
            yinit= parseFloat(resLT[1]);
          }
          if (parseFloat(resMT[0]) < parseFloat(resLT[0])){
            xinit= parseFloat(resLT[0]) + exe;
            yinit= parseFloat(resLT[1]);
          }

          if (parseFloat(resMT[1]) > parseFloat(resLT[1])) {
           xinit= parseFloat(resLT[0]) ;
            yinit= parseFloat(resLT[1])- exe;
          }
          if (parseFloat(resMT[1]) < parseFloat(resLT[1])){
            xinit= parseFloat(resLT[0]) ;
            yinit= parseFloat(resLT[1]) + exe;
          }

          //alert(xinit);
          //alert(i);
          ctx.lineTo(xinit,yinit);
          ctx.stroke();


      }
    }
    //path forward
    function path(){
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "gray";
      ctx.rect(X, Y-100, 100, 100);
      ctx.stroke();
    }

    //function sipin
    function giro(angulo) {
      if (positionObj.objZ=!angulo) {
        positionObj,objZ= angulo;
      }
      ctx.clearRect(0,0,canvas.width,canvas.height);
      panel();

      path();
      painroad();
      ctx.save();
      var w=40,h=20;
      ctx.translate(positionObj.objX,positionObj.objY);
      ctx.rotate(angulo * (Math.PI/180));
      ctx.drawImage(img,-w/2, -h/2,40,20);

      ctx.restore();
    }
