var roadpaint = [];

var degreesToRadian = function (deg) {
   return deg * Math.PI / 180;
};
//funcion para que ejecute los ajustes decimales
(function() {
  function decimalAdjust(type, value, exp) {
    // Si el exp no está definido o es cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }
  //si es redondeo a 2 digitos
  if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
})();
function paintingObj(x,y,z,color){
      this.poX= x;
      this.poY = y;
      this.poZ = z;
      this.poColor = color;
}
//motion functions
//mover adelante sin pintar
function forward(nosteps){
  acabo=0;
  distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
  distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);
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
      }
    }
    //cuadrante inf izq
    if (positionObj.objZ>=90 && positionObj.objZ<180) {
      if(Xaux>limtX || Yaux<limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    //cuadrante superior izquierdo
    if (positionObj.objZ>=180 && positionObj.objZ<270) {
      if(Xaux>limtX || Yaux>limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    //cuadrante superior derecho
    if (positionObj.objZ>=270 && positionObj.objZ<360) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
    /*painroad(colorPath);*/
    rotar(positionObj.objZ, '"ahead"');
    positionObj.objX=Xaux;
    positionObj.objY=Yaux;
    i++;
    if(i==nosteps){
      stopTimer();
      acabo=1;
    }
  },300);
  /*road.push(positionObj.objX+","+positionObj.objY);*/
}
//mover hacia atras sin pintar
function backward(nosteps){
  acabo=0;
  distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
  distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);
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
      }
    }
    //cuadrante inf izq
    if (positionObj.objZ>=90 && positionObj.objZ<180) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
      }
    }
    //cuadrante superior izquierdo
    if (positionObj.objZ>=180 && positionObj.objZ<270) {
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
      }
    }
    //cuadrante superior derecho
    if (positionObj.objZ>=270 && positionObj.objZ<360) {
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
      }
    }
    /*painroad(colorPath);*/
    rotar(positionObj.objZ, '"ahead"');
    positionObj.objX=Xaux;
    positionObj.objY=Yaux;
    i++;
    if(i==nosteps){
      stopTimer();
      acabo=1;
    }
  },300);
}

//funcion para dibujar el avatar volteando a la dirección correcta
function rotar(angulo,side){
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
    //alert(positionObj.objZ);
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  //  panel();
  //path();
  /*alert("color"+color);*/
  panel();
}
//Función para ejecutar sonidos de acuerdo a la elección del usuario
function sound(sonido){
  var audio = new Audio('audios/'+sonido);
  audio.play();
}
//funcion para que se espere X segundos
function wait(secs){
  acabo=0;

  interv= setInterval(function(){
    acabo=1;
    //roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,color));


    altos.push(new solutionObj(Math.round10(positionObj.objX,-2),Math.round10(positionObj.objY,-2),0,0));
    /*roadpaint.push(positionObj.objX+","+positionObj.objY);*/
    clearInterval(interv);
  },secs*1000);
}
//Funciones para moverse hacia adelante pintando
function forwardPaint(nosteps,color){
  //colorPath=color;
  acabo=0;
  distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
  distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);

  limtX = positionObj.objX + distX;
  limtY = positionObj.objY + distY;
  i=0;
  if(roadpaint.length===0){
    roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,0));
    //roadpaint.push(positionObj.objX+","+positionObj.objY);
  }

  interval= setInterval(function(){
    /*ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";*/
    ctx.beginPath();
    //cuadrante inf derecho
    if (positionObj.objZ>=0 && positionObj.objZ<90) {
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    //cuadrante inf izq
    if (positionObj.objZ>=90 && positionObj.objZ<180) {
      if(Xaux>limtX || Yaux<limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    //cuadrante superior izquierdo
    if (positionObj.objZ>=180 && positionObj.objZ<270) {
      if(Xaux>limtX || Yaux>limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    //cuadrante superior derecho
    if (positionObj.objZ>=270 && positionObj.objZ<360) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux+(distX/nosteps);
        Yaux=Yaux+(distY/nosteps);
      }
    }
    /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
    positionObj.objX=Xaux;
    positionObj.objY=Yaux;

    rotar(positionObj.objZ,'"ahead"');
    /*panel();*/
    paint(positionObj.objX,positionObj.objY,nosteps,color);
    i++;
    if(i==nosteps){
      stopTimer();
      acabo=1;
    }
  },300);
}
function backwardPaint(nosteps,color){
  acabo=0;
  //colorPath=color;
  distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
  distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);
  limtX = positionObj.objX - distX;
  limtY = positionObj.objY - distY;
  i=0;
  if(roadpaint.length===0){
    roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,0));
    //roadpaint.push(positionObj.objX+","+positionObj.objY);
  }
  interval= setInterval(function(){
    /*ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";*/
    ctx.beginPath();
    //cuadrante inf derecho
    if (positionObj.objZ>=0 && positionObj.objZ<90) {
      if(Xaux>limtX || Yaux>limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
      }
    }
    //cuadrante inf izq
    if (positionObj.objZ>=90 && positionObj.objZ<180) {
      if(Xaux<limtX || Yaux>limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
      }
    }
    //cuadrante superior izquierdo
    if (positionObj.objZ>=180 && positionObj.objZ<270) {
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
        /*ctx.clearRect(0,0,canvas.width,canvas.height);*/
      }
    }
    //cuadrante superior derecho
    if (positionObj.objZ>=270 && positionObj.objZ<360) {
      //alert(positionObj.objZ);
      if(Xaux<limtX || Yaux<limtY){
        Xaux=Xaux-(distX/nosteps);
        Yaux=Yaux-(distY/nosteps);
      }
    }
    positionObj.objX=Xaux;
    positionObj.objY=Yaux;
    paint(positionObj.objX,positionObj.objY,nosteps,color);
    rotar(positionObj.objZ, '"ahead"');
    //panel();
    //path();
    i++;
    if(i==nosteps){
      stopTimer();
      acabo=1;
    }
  },300);
}


//Funciones para pintar paso a paso
function paint(Xend,Yend,no_steps,color){
  var srt;
  var res;
  var yinit, xinit;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = wimg;
  var exe=wimg/2;

  if (roadpaint.length==1) {
    srt= roadpaint[0];
  }else{

    painroad();
    srt=roadpaint[roadpaint.length-1];

  }

  //res = srt.split(",");

  if(count===0){
    //roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,color));
    roadpaint.push(new paintingObj(Math.round10(Xend,-2),Math.round10(Yend,-2),0,color));
    //count++;
    //alert(roadpaint.length);
  }
  if(count<no_steps){
    //alert(roadpaint.length-1);
    roadpaint[roadpaint.length-1]=(new paintingObj(Math.round10(Xend,-2),Math.round10(Yend,-2),0,color));
    //count++;

  }
  ctx.moveTo(srt.poX,srt.poY);//(x,y)
  ctx.lineTo(Xend, Yend);
  count++;
  if(count==no_steps){
    count=0;
  }
  ctx.stroke();

}
//Función para pintar el camino que ha dejado
function painroad(){
  var yinit, xinit;
  ctx.beginPath();
  //ctx.strokeStyle = color;
  ctx.lineWidth = wimg;
  var exe=wimg/2;

  for (var i = 0; i < roadpaint.length-1; i++) {
    if(i!=0){
      ctx.restore();
    }
      //alert(roadpaint.length);
      //alert(i);
      MT=roadpaint[i];
      //resMT=MT.split(",");
      ctx.moveTo(MT.poX,MT.poY);
      //alert(MT.poX + ", "+ MT.poY);

      LT=roadpaint[i+1];
      //resLT=LT.split(",");
      ctx.strokeStyle = LT.poColor;
      //alert(LT.poColor);
      //alert(parseFloat(resMT[1]) + " a "+ parseFloat(resLT[1]));

      if (MT.poX > LT.poX) {
        xinit= LT.poX - exe;
        yinit= LT.poY;
      }
      if (MT.poX < LT.poX){
        xinit= LT.poX + exe;
        yinit= LT.poY;
      }

      if (MT.poY > LT.poY) {
       xinit= LT.poX ;
        yinit= LT.poY- exe;
      }
      if (MT.poY < LT.poY){
        xinit= LT.poX;
        yinit= LT.poY + exe;
      }

      //alert(xinit);
      //alert(i);
      ctx.lineTo(xinit,yinit);
      ctx.stroke();
      ctx.save();
  }

  //ctx.strokeStyle = color;
}
//Funciones de luces,
function luces(Xx,Yy){
  var R = 13;
  // El ángulo de partida ap y el ángulo final af
  var ap = (Math.PI / 180) * -30;
  var af = (Math.PI / 180) * 30;

  //Luz izquierda
  // Las coordenadas del punto de partida en la circunferencia
  var Xap = Xx+R * Math.cos(ap);
  var Yap = Yy-5+R * Math.sin(ap);
  // estilos
  ctx.globalAlpha=0.75;
  ctx.fillStyle = "#abcdef";
  ctx.strokeStyle = "#1E90FF";
  ctx.lineWidth = 10;

  // empezamos a dibujar
  //Luz izquierda
  ctx.beginPath();
  ctx.moveTo(Xx,Yy-5);
  ctx.lineTo(Xap,Yap);
  ctx.arc(Xx,Yy-5,R,ap,af);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Luz derecha
  // Las coordenadas del punto de partida en la circunferencia
 /*nueva coordenada de punto de partida de circunferencia para faro izquierdo*/
  Yap = Yy+5+R * Math.sin(ap);
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(Xx,Yy+5);
  ctx.lineTo(Xap,Yap);
  ctx.arc(Xx,Yy+5,R,ap,af);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
function lucesTraceras(Xx,Yy){
  var R = 5;
  // El ángulo de partida ap y el ángulo final af
  var ap = (Math.PI / 180) * 150;
  var af = (Math.PI / 180) * 210;

  //Luz izquierda
  // Las coordenadas del punto de partida en la circunferencia
  var Xap = Xx+R * Math.cos(ap);
  var Yap = Yy-5+R * Math.sin(ap);
  // estilos
  ctx.globalAlpha=0.75;
  ctx.fillStyle = "#abcdef";
  ctx.strokeStyle = "#1E90FF";
  ctx.lineWidth = 10;

  // empezamos a dibujar
  //Luz izquierda
  ctx.beginPath();
  ctx.moveTo(Xx,Yy-5);
  ctx.lineTo(Xap,Yap);
  ctx.arc(Xx,Yy-5,R,ap,af);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Luz derecha
  // Las coordenadas del punto de partida en la circunferencia
 /*nueva coordenada de punto de partida de circunferencia para faro izquierdo*/
  Yap = Yy+5+R * Math.sin(ap);
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(Xx,Yy+5);
  ctx.lineTo(Xap,Yap);
  ctx.arc(Xx,Yy+5,R,ap,af);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
//funciones para mover hacia arriba y hacia abajo
function upward(nosteps){
  acabo=0;
  limtY=positionObj.objY-(nosteps*stepsizeY);
  i=0;
  interval= setInterval(function (){
    /*ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab150";*/
    ctx.beginPath();
      if(Yaux>limtY){
        Yaux=Yaux-stepsizeY;
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        /*positionObj.objZ=270;*/
       /* if ((positionObj.objZ % 270)==0 || (positionObj.objZ % 90)==0 ) {
          rotar(positionObj.objZ);
        } else {
          alert('Debes de rotar el vehiculo hacía arriba');
          stopTimer();
         location.reload()
        }
        ctx.drawImage(img,positionObj.objX-10,Yaux-20,40,20);*/
        /*ctx.fill();
        ctx.stroke();*/
        positionObj.objY=Yaux;
      }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    panel();
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
        //ctx.clearRect(0,0,canvas.width,canvas.height);
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
