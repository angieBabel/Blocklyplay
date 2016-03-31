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
