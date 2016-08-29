//inicialización de las variables
var navID;
    var domToPretty;//variable para guardar el XML
    var previa;//variable para tener la previa
    var puntaje=[0,0,0,0]; //para saber cuantas veces ha hecho los ejercicios
    var correcto=[false,false,false,false];//define si el ejercicio lo hizo o no correctamente
    var program;
    
    var currentpanel=0;//para saber en que panel esta
    var img= new Image();//variable de imagen del avatar
    //coordenadas donde comienza el avatar
    var X,Y;
    //variables auxiliares para mover el avatar
    var Xaux=0,Yaux=0;
    //variables de hasta donde llegara el avatar (para hacer el conteo de pasos)
    var limtX,limtY;
    //tamaño de paso de X y Y
    var stepsizeX,stepsizeY;
    //variables para controlar donde poner los puntos del grid
    var initX=0,initY=0;
    //intervalo de tiempo de cada paso
    var interval;
    var intervalo;
    //Variable para asegurarnos que ya termino de realizar nuestras funciones personalizadas
    var acabo=1;
    //Tamaño de ancho y alto del avatar
    var avatarheight, avatarwith;
    //tamaño del ancho de la linea que dibuja el avatar
    var wimg=0;
    //variable de contador para la funcion de pintar
    var count=0;
    //vector del camino que ha pintado
    var roadpaint = [];
    //vector donde se guarda la respuesta correcta
    var solucion=[];
    //vector donde se guarda la respuesta del ninio
    var respuesta=[]; 
    //variables para saber si las luces estan encendidas, y de que lado debe prender, propias para el ejercicio 2
    var luz=0,luzTrasera=0,lightside;

    //las posiciones del objeto, en X, Y y el Z representa el angulo hacia el que está mirando
    var positionObj = {
      objX: 0,
      objY: 0,
      objZ: 0,
    };

    //objeto que nos ayudara a guardar los valores
    function solutionObj(x,y,z,color){
        this.soX= x;
        this.soY = y;
        this.soZ = z;
        this.soColor = color;
    }
    function paintingObj(x,y,z,color){
      this.poX= x;
      this.poY = y;
      this.poZ = z;
      this.poColor = color;
    }
//Funciones para dibujar
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
  
  //motion functions
  //mover adelante sin pintar
  function forward(nosteps){
    acabo=0;
    distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
    distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);

    limtX = positionObj.objX + distX;
    limtY = positionObj.objY + distY;
    i=0;
    if(roadpaint.length===0){
      roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,0));
    }
   
    interval= setInterval(function(){
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
      positionObj.objX=Xaux;
      positionObj.objY=Yaux;
      rotar(positionObj.objZ,'"ahead"');
      paint(positionObj.objX,positionObj.objY,nosteps,0);
      i++;
      if(i==nosteps){
        
        stopTimer();
        acabo=1;
      }
    },300);
  }
  //mover hacia atras sin pintar
  function backward(nosteps){
    acabo=0;
    distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
    distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);
    limtX = positionObj.objX - distX;
    limtY = positionObj.objY - distY;
    i=0;
    if(roadpaint.length===0){
      roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,0));
     
    }
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
      rotar(positionObj.objZ, '"ahead"');
      positionObj.objX=Xaux;
      positionObj.objY=Yaux;
      paint(positionObj.objX,positionObj.objY,nosteps,0);
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
    }else if(side=='right') {
      positionObj.objZ+=angulo;
    }else{
    }

    if (positionObj.objZ<0) {
        positionObj.objZ+=360;
      }
    if (positionObj.objZ>=360) {
        positionObj.objZ-=360;
      }
    switch(currentpanel) {
      case 1:
          panel1();
          break;
      case 2:
          panel2();
          break;
      case 3:
          panel3();
          break;
      case 4:
          panel4();
          break;
      default:
          panel1();
    }
  }
  //Función para ejecutar sonidos de acuerdo a la elección del usuario
  function sound(sonido){
    var audio = new Audio('../audios/'+sonido);
    audio.play();
  }
  //funcion para que se espere X segundos
  function wait(secs){
    acabo=0;
    blinker('both',secs);
    var waitCount=0;
    //se guarda el estado de las luces antes de hacer las intermitentes
    var bluz=luz;
    var bluzT=luzTrasera;
    //se ponen en 1 para que ambas prendan
    luzTrasera=1;
    luz=1;
    interval= setInterval(function(){
      waitCount+=1;
      if (waitCount==(secs*10)) {
        acabo=1;
        //se restaura el estado de las luces
        luz=bluz;
        luzTrasera=bluzT;
        altos.push(new solutionObj(Math.round10(positionObj.objX,-2),Math.round10(positionObj.objY,-2),secs,0));
        stopTimer();
      };
    },100);
  }
  //Funciones para moverse hacia adelante pintando
  function forwardPaint(nosteps,color){
    acabo=0;
    distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
    distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);

    limtX = positionObj.objX + distX;
    limtY = positionObj.objY + distY;
    i=0;
    if(roadpaint.length===0){
      roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,0));
      /*alert(roadpaint[roadpaint.length-1].poX+' , '+roadpaint[roadpaint.length-1].poY)
      alert(solucion[roadpaint.length-1].soX+' , '+solucion[roadpaint.length-1].soY)*/
    }
    interval= setInterval(function(){
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
      positionObj.objX=Xaux;
      positionObj.objY=Yaux;
      rotar(positionObj.objZ,'"ahead"');
      paint(positionObj.objX,positionObj.objY,nosteps,color);
      i++;
      if(i==nosteps){
        stopTimer();
        acabo=1;
      }
    },300);
  }
  //Funciones para moverse hacia atrás pintando
  function backwardPaint(nosteps,color){
    acabo=0;
    distX=Math.cos(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeX);
    distY=Math.sin(degreesToRadian(positionObj.objZ))*(nosteps*stepsizeY);
    limtX = positionObj.objX - distX;
    limtY = positionObj.objY - distY;
    i=0;
    if(roadpaint.length===0){
      roadpaint.push(new paintingObj(positionObj.objX,positionObj.objY,0,0));
      /*alert(roadpaint[roadpaint.length-1].poX+' , '+roadpaint[roadpaint.length-1].poY)
      alert(solucion[roadpaint.length-1].soX+' , '+solucion[roadpaint.length-1].soY)*/
    }
    interval= setInterval(function(){
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
        }
      }
      //cuadrante superior derecho
      if (positionObj.objZ>=270 && positionObj.objZ<360) {
        if(Xaux<limtX || Yaux<limtY){
          Xaux=Xaux-(distX/nosteps);
          Yaux=Yaux-(distY/nosteps);
        }
      }
      positionObj.objX=Xaux;
      positionObj.objY=Yaux;
      paint(positionObj.objX,positionObj.objY,nosteps,color);
      rotar(positionObj.objZ, '"ahead"');
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
    ctx.strokeStyle = color.valueOf();//Safari ocupa acceder al valor de la variable
    ctx.lineWidth = wimg;
    var exe=wimg/2;

    if (roadpaint.length==1) {
      srt= roadpaint[0];
    }else{
      painroad();
      srt=roadpaint[roadpaint.length-1];
    }
    if(count===0){
      roadpaint.push(new paintingObj(Math.round10(Xend,-2),Math.round10(Yend,-2),0,color));
      /*alert(roadpaint[roadpaint.length-1].poX+' , '+roadpaint[roadpaint.length-1].poY)
      alert(solucion[roadpaint.length-1].soX+' , '+solucion[roadpaint.length-1].soY)*/
    }
    if(count<no_steps){
      roadpaint[roadpaint.length-1]=(new paintingObj(Math.round10(Xend,-2),Math.round10(Yend,-2),0,color));

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
    
    ctx.lineWidth = wimg;
    var exe=wimg/2;

    for (var i = 0; i < roadpaint.length-1; i++) {
      if(i!=0){
        ctx.restore();
      }
      //alert('step')
      

      ctx.beginPath();
        MT=roadpaint[i];
        ctx.moveTo(MT.poX,MT.poY);

        LT=roadpaint[i+1];
        ctx.strokeStyle = LT.poColor.valueOf();//Safari ocupa acceder al valor de la variable
        

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
        ctx.lineTo(xinit,yinit);
        if (LT.poColor.valueOf()!=0) {
          ctx.stroke();
        }
        ctx.save();
        ctx.closePath();
    }
  }
  //Funciones de luces,
    function luces(Xx,Yy,side){
      var R = 13;
      // El ángulo de partida ap y el ángulo final af
      var ap = (Math.PI / 180) * -30;
      var af = (Math.PI / 180) * 30;
      //Luz izquierda
      // Las coordenadas del punto de partida en la circunferencia
      var Xap = Xx+R * Math.cos(ap);
      var Yap = Yy-5+R * Math.sin(ap);
      // estilos
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 0, 0.5)";
      ctx.lineWidth = 10;
      // empezamos a dibujar
      //Luz izquierda
      //si el lado de la luz es izquierda o ambas lo prende
      if (side=="left" || side=="both") {
        ctx.beginPath();
        ctx.moveTo(Xx,Yy-5);
        ctx.lineTo(Xap,Yap);
        ctx.arc(Xx,Yy-5,R,ap,af);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      // Luz derecha
      // Las coordenadas del punto de partida en la circunferencia
     /*nueva coordenada de punto de partida de circunferencia para faro izquierdo*/
      Yap = Yy+5+R * Math.sin(ap);
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 0, 0.5)";
      //si el lado de la luz es derecha o ambas lo prende
      if (side=="right" || side=="both") {
        ctx.beginPath();
        ctx.moveTo(Xx,Yy+5);
        ctx.lineTo(Xap,Yap);
        ctx.arc(Xx,Yy+5,R,ap,af);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    function lucesTraseras(Xx,Yy,side){
      var R = 5;
      // El ángulo de partida ap y el ángulo final af
      var ap = (Math.PI / 180) * 150;
      var af = (Math.PI / 180) * 210;
      //Luz izquierda
      // Las coordenadas del punto de partida en la circunferencia
      var Xap = Xx+R * Math.cos(ap);
      var Yap = Yy-5+R * Math.sin(ap);
      // estilos
      //si debe pintarlo
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 0, 0.5)";
      ctx.lineWidth = 10;
      // empezamos a dibujar
      //Luz izquierda
      //si el lado de la luz es izquierda o ambas lo prende
      if (side=="left" || side=="both") {
        ctx.beginPath();
        ctx.moveTo(Xx,Yy-5);
        ctx.lineTo(Xap,Yap);
        ctx.arc(Xx,Yy-5,R,ap,af);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      // Luz derecha
      // Las coordenadas del punto de partida en la circunferencia
     /*nueva coordenada de punto de partida de circunferencia para faro izquierdo*/
      Yap = Yy+5+R * Math.sin(ap);
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 0, 0.5)";
      //si el lado de la luz es derecha o ambas lo prende
      if (side=="right" || side=="both") {
        ctx.beginPath();
        ctx.moveTo(Xx,Yy+5);
        ctx.lineTo(Xap,Yap);
        ctx.arc(Xx,Yy+5,R,ap,af);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    function blinker(side,secs){
      //acabo=0;
      //se inicializa el valor de las intermitentes en 0
      var blinks=0;
      //se guarda el estado de las luces anterior a las intermitentes
      var bluz=luz;
      var bluzT=luzTrasera;
      if (pinled==0) {
          blink=setInterval(function(){

          //cada ves que entra se pinta el panel
          switch(currentpanel) {
            case 1:
                panel1();
                break;
            case 2:
                panel2();
                break;
            case 3:
                panel3();
                break;
            case 4:
                panel4();
                break;
            default:
                panel1();
          }
          //tambien se ejecuta el avatar, para que no se note el retraso cuando el panel lo pinte
          switch(currentpanel) {
            case 1:
                Avatar1();
                break;
            case 2:
                Avatar2();
                break;
            case 3:
                Avatar3();
                break;
            case 4:
                Avatar4();
                break;
            default:
                Avatar1();
          }
          lightside=side;
          if (luz==1) {
             luz=0;
            }else{
              luz=1;
            }
          if (luzTrasera==1) {
            luzTrasera=0;
          }else{
            luzTrasera=1;
          }
           blinks+=1;
           //Avatar();
          if (blinks==secs*5) {
              clearInterval(blink);
              //se restaura el valor de las intermitentes asi como de los lados
              luz=bluz;
              luzTrasera=bluzT;
              lightside='both';
              /*acabo=1;*/
            }
          },200);
      };

      
    }
    //funcon que cambia el estado de las luces dependiendo del bloque del niño
    function lights(lu,luzTraser,lightsid){
      if (lu!=2) {
        luz=lu;
      }
      if (luzTrasera!=2) {
        luzTrasera=luzTraser;
      }
      lightside=lightsid;
    }
  //funciones para mover hacia arriba y hacia abajo
  function upward(nosteps){
    acabo=0;
    limtY=positionObj.objY-(nosteps*stepsizeY);
    i=0;
    interval= setInterval(function (){

      ctx.beginPath();
        if(Yaux>limtY){
          Yaux=Yaux-stepsizeY;
          positionObj.objY=Yaux;
        }
      switch(currentpanel) {
          case 1:
              panel1();
              break;
          case 2:
              panel2();
              break;
          case 3:
              panel3();
          case 4:
              panel4();
          default:
              panel1();
        }
      i++;
      if (i==nosteps) {
        stopTimer();
        acabo=1;
      }
    },300);
  }
  function downward(nosteps){
    acabo=0;
    limtY=positionObj.objY+(nosteps*stepsizeY);
    i=0;
    interval= setInterval(function (){

      ctx.beginPath();
        if(Yaux<limtY){
          Yaux=Yaux+stepsizeY;
          positionObj.objY=Yaux;
        }
      switch(currentpanel) {
          case 1:
              panel1();
              break;
          case 2:
              panel2();
              break;
          case 3:
              panel3();
          case 4:
              panel4();
          default:
              panel1();
        }
      i++;
      if (i==nosteps) {
        stopTimer();
        acabo=1;
      }
    },300);
  }
//Funciones de Hardware
//iniciacion de variables de hardware
  //variables para el de led
    var pinled=0;
    var ledstatus=null;
    //variables para el texto de la pantalla
    var screentext= [];
    var screencolor;
    //objetos para las soluciones de los bloques de hardware
    //objeto para el led
    function ledObj(pin,turn){
      this.Pin=pin;
      this.Turn=turn;
    }
    //objeto para el motor
    function motorObj(px,py,ns,dir,speed){
        this.pX= px;
        this.pY= py;
        this.ns= ns;
        this.dirr= dir;
        this.speed= speed;
      }
  //funcion para encender el led (verifica si el pin es correcto)
  function led(pin,turn){
    acabo=0;
    respuesta.push(new ledObj(pin,turn));
    pinled=pin;
    ledstatus=turn;
    switch(currentpanel) {
      case 1:
          Avatar1();
          acabo=1;
          break;
      case 2:
          Avatar2();
          acabo=1;
          break;
      case 3:
          Avatar3();
          acabo=1;
      case 4:
          Avatar4();
      default:
          Avatar1();
    }
  }

  //funcion para escribir texto
  function pantalla(text,color){
    acabo=0;
    screentext=text.toString().split("")
    screencolor=color.toString();
    
    if (screentext.length<=32) {
      switch(currentpanel) {
        case 1:
            Avatar1();
            /*acabo=1;*/
            break;
        case 2:
            Avatar2();
            /*acabo=1;*/
            break;
        case 3:
            Avatar3();
            /*acabo=1;*/
        case 4:
            Avatar4();
        default:
            Avatar1();
      }
      for (var i = 0; i < screentext.length; i++) {
        if (i<16) {
          ctx.fillText(screentext[i],stepsizeX*(3+i),stepsizeY*5);
        }else{
          ctx.fillText(screentext[i],stepsizeX*(3-16+i),stepsizeY*7);
        }
      };
      acabo=1;
    }else{
      var wrongString =document.getElementById('StrError').click()
      /*var myInterpreter=null;*/
    } 
  }
  //funcion para rotar el motor (hacer girar una imagen)
  function motor(nosteps,side,speed){

    respuesta.push(new motorObj(Math.round10((positionObj.objX),2),Math.round10((positionObj.objY),2),nosteps,side,speed));
    acabo=0;
    var vel = 7/speed;
    i=0;
    interval= setInterval(function(){
      //rotar(0.087890625, lado);
      if (side=='forward') {
        positionObj.objZ+=0.087890625;
      }else{
        positionObj.objZ-=0.087890625;
      }
      if (positionObj.objZ<0) {
          positionObj.objZ+=360;
        }
      if (positionObj.objZ>=360) {
          positionObj.objZ-=360;
        }
      //rotar(positionObj.objZ,side)
      switch(currentpanel) {
      case 1:
          Avatar1();
          break;
      case 2:
          Avatar2();
          break;
      case 3:
          Avatar3();
          break;
      case 4:
          Avatar4();
          break;
      default:
          Avatar1();
          break;
    }
      i++;
      if(i==nosteps){
        stopTimer();
        acabo=1;
      }
    },vel);
  }
  //funcion del buzzer
  function buzzer(nopin,tone,secs){

  }


